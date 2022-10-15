import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req:Request, res:Response) => {
    return res.status(200).json({
        status: 200,
        message: "멤버 조회 성공",
        data: {
            "name" : "유난",
            "age" : "23"
        }
    });
});

router.post("/", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;
    
    console.log(req.body)

    if (content) {
        return res.status(200).json({
            status: 200,
            message: "새 글 등록",
            data: {
                "id" : id,
                "title" : title,
                "content" : content
            }
        })
    } else {
        return res.status(400).json({
            status: 400,
            message: "내용을 작성해주세요."
        })
    }

    
})



module.exports = router; // 모듈로 반환