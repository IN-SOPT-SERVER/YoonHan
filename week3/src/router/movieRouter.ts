import express, { Router } from 'express';
import getMovieDetail from "../api/movie";

const movieRouter:Router = express.Router();

movieRouter.get("/", getMovieDetail);

export default movieRouter;