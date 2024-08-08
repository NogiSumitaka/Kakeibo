import express, { Request, Response } from "express";
import dotenv from "dotenv";

// アプリケーションで動作するようにdotenvを設定する
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World TS!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});