import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

const memberData:Object[] = [
        {
            id: 1,
          name: "권세훈",
          group: "ob",
        },
        {
            id: 2,
          name: "최윤한",
          group: "yb",
        },
        {
            id: 3,
          name: "임승하",
          group:"ob",
        },
        {
            id: 4,
          name: "한유진",
          group:"yb"
        },
        {
            id: 5,
          name: "김예린",
          group:"yb",
        },
        {
            id: 6,
          name: "소예원",
          group:"yb",
        }
]

// URL Parameter
router.get("/:memberId", (req:Request, res:Response) => {
    const memberId:string = req.params.memberId;

    const member = memberData.at(Number(memberId)-1);

    if (!Boolean(member)){
        return res.status(404).json({
            status:400,
            message: "Pages Not Found"
        })
    }
    return res.status(200).json({
            status: 200,
            message: "멤버 조회 성공",
            data : member
        })
    });


// query string 받아오기
router.get("/", (req: Request, res: Response) => {
  console.log(`query string : ${req.query.name}`)
})


module.exports = router; 
// 모듈로 반환 -> 생성한 Route 객체를 어디서든 사용하도록 함