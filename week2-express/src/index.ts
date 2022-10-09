import express, { NextFunction, Request, Response } from "express";

const app = express(); // express 객체를 받아온다.
const PORT = 3000; // port를 설정

app.use(express.json()); // express에서 request body를 json으로 받아온다.
app.use("/api", require("./api")); // use -> 모든 요청
// localhost:8000/api -> api 폴더
// localhost:8000/api/user -> user.ts

app.get("/", (req:Request, res:Response, next:NextFunction) => {
    const message = "안녕하세요 This is Server"

    res.send(`${message}`);
})


app.listen(PORT, () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: ${PORT} 🛡️
        #############################################
    `);
}) // 3000번 포트에서 서버 실행