import { Router } from 'express';
import getMovieDetail from "../api/movie";

const router:Router = Router();

router.get("/", getMovieDetail);

export default router;