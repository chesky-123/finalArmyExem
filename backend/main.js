import express from 'express'
import { router } from './src/routes/router.js';
import cors from 'cors'
import 'dotenv/config'
import { collection } from './src/db/db.js';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/api/alerts', router);

app.use(cors({
    origin:process.env.CLIENT_ORIGIN
}));



app.listen(PORT, (e) => {
    if(e) return console.log('ERROR', e.message);
    console.log(`server running on http://localhost:${PORT}`);
    
})

