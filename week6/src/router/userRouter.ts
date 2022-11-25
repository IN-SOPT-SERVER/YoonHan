import { Router } from "express";
import { userController } from "../controller";
import { auth } from "../middlewares";
const { body, validationResult } = require('express-validator');

const router: Router = Router();

//* 유저 생성 - POST api/user
router.post("/",
[body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
userController.createUser);

//* 특정 유저 조회
router.get("/:userId", userController.getUserById);

//* 전체 유저 조회 - GET api/user
router.get("/", auth, userController.getAllUser);

// * 유저 정보 업데이트 - PATCH api/user/:userId
router.patch("/:userId", auth, userController.updateUser);

// * 유저 삭제 - DELETE api/user/:userId
router.delete("/:userId", auth, userController.deleteUser);

//* 로그인 - POST api/user/signin
router.post(
  "/signin",
  [
    body("email").notEmpty(),
    body("email").isEmail(),
    body("password").notEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  userController.signInUser
);

export default router;
