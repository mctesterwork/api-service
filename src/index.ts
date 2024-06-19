import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getAllUsers } from 'handlers/users';

const port = 9595;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', async (req, res, next) => {
    await getAllUsers(req, res, next);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

export default app;