import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req:Request, res:Response) => {
    return res.status(200).json({
        status: 200,
        message: "영화 조회 성공",
        data: {
            "name" : "라라랜드",
        }
    });
});

module.exports = router; // 모듈로 반환