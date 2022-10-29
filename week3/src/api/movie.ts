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

export default getMovieDetail;