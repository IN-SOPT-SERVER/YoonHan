import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

const commentData = {
    writer : "unan",
    content : "안녕하세요"
}

router.get("/", (req:Request, res:Response) => {

    return res.status(200).json({
        status: 200,
        message: "멤버 조회 성공",
        data: commentData
    });
});

module.exports = router; // 모듈로 반환