import { Request, Response } from "express";
import { movieService } from "../service";

const getMovieDetail = async (req: Request, res: Response) => {
    const { movieId } = req.params;
    const data = await movieService.getMovieDetail(+movieId);

    return res.status(200).json({ status: 200, message: "조회 성공", data})
}

const addMovie = async (req:Request, res:Response) => {
    const { title, summary } = req.body;
    if (!title) {
        return res.status(400).json({status:400, message:"BAD REQUEST"});
    }
    const data = await movieService.addMovie(title, summary);

    if (!data){
        return res.status(400).json({status:400, message:"BAD REQUEST"});
    }
    
    return res.status(200).json({status:200, message: "SUCCESS", data});

};

const likeUp = async (req:Request, res:Response) => {
    const { movieId } = req.params;

    const data = movieService.likeUp(+movieId);

    return res.status(200).json({status:200, message: "SUCCESS", data});
};
const deleteMovie = async (req:Request, res:Response) => {
    const { movieId } = req.params;

    const data = movieService.deleteMovie(+movieId);

    return res.status(200).json({status:200, message: "SUCCESS", data});
};

const movieController = {
    getMovieDetail,
    likeUp,
    addMovie,
    deleteMovie
}

export default movieController;