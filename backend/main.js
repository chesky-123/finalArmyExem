import express from 'express'
import 'dotenv/config'
import { router } from './src/routes/router.js';
import cors from 'cors'


const PORT = process.env.PORT;

const app = express();

app.use(express.json());


app.use(cors());

app.use('/api/alerts', router);


app.listen(PORT, (e) => {
    if (e) return console.log('ERROR', e.message);
    console.log(`server running on http://localhost:${PORT}`);

})

