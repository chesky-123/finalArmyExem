import express from 'express'
import 'dotenv/config'
import { router as alertRout} from './src/routes/alertRouter.js';
import { router as authRout} from './src/routes/authRouter.js';
import cors from 'cors'


const PORT = process.env.PORT;

const app = express();

app.use(express.json());


app.use(cors());

app.use('/api/alerts', alertRout);

app.use('/api/auth', authRout);


app.listen(PORT, (e) => {
    if (e) return console.log('ERROR', e.message);
    console.log(`server running on http://localhost:${PORT}`);

})

