import { Request, Response, NextFunction} from "express";
import movieData from "../data/movieData";

const getMovieDetail = (req:Request, res:Response) => {
    return res.status(200).json({
        status:200,
        message:"영상 조회 성공",
        data: movieData
    })
}

export default getMovieDetail;