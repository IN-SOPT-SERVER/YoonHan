import express, { Request, Response, Router } from "express";

const router: Router = express.Router();
const movieData = require("../data/movieData.json");

const getMovieDetail = (req:Request, res:Response) => {
    return res.status(200).json({
        status: 200,
        message: "영화 조회 성공",
        data: movieData
    });
};

const createMovie = (req, res) => {
    // 생성로직
    return res.status(200).json(
    )
}

export default getMovieDetail;