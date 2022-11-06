import { Router } from "express";
import { movieController } from "../controller";

const router:Router = Router();

router.get("/:movieId", movieController.getMovieDetail);
router.post("/", movieController.addMovie);
router.put("/:movieId", movieController.likeUp);
router.delete("/:movieId", movieController.deleteMovie);


export default router;