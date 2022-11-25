import { UserGetDto } from './../interfaces/UserGetDto';
import { UserUpdateDto } from './../interfaces/UserUpdateDto';
import { UserDeleteDto } from './../interfaces/UserDeleteDto';
import { UserCreateDto } from './../interfaces/UserCreateDto';
import bcrypt from 'bcryptjs';
import { UserSignInDto } from '../interfaces/UserSignInDto';
import { sc } from '../constants';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//* 유저 생성
const createUser = async (userCreateDto: UserCreateDto) => {
  //? 넘겨받은 password를 bcrypt의 도움을 받아 암호화
  const salt = await bcrypt.genSalt(10); //^ 매우 작은 임의의 랜덤 텍스트 salt
  const password = await bcrypt.hash(userCreateDto.password, salt); //^ 위에서 랜덤을 생성한 salt를 이용해 암호화

  const data = await prisma.user.create({
    data: {
      userName: userCreateDto?.name,
      age: userCreateDto?.age,
      email: userCreateDto.email,
      password,
    },
  });

  return data;
};

//* user 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany();

  return data;
};


//* userId로 유저 조회
const getUserById = async (userGetDto: UserGetDto) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userGetDto.userId,
    },
  });

  return user;
};

// * 유저 정보 업데이트
const updateUser = async (userUpdateDto:UserUpdateDto) => {
  const user = await prisma.user.update({
    where: {
      id: userUpdateDto.userId
    },
    data: {
      userName: userUpdateDto.username
    },
    select:{
       id: true,
       userName: true,
       age: true,
       email: true,
       password:false
    }
  })

  return user;
}
// * 유저 삭제
const deleteUser = async (UserDeleteDto:UserDeleteDto) => {
  const user = await prisma.user.delete({
    where: {
      id: UserDeleteDto.userId
    }
  })
  return user;
}

const signIn = async (userSignInDto: UserSignInDto) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: userSignInDto.email,
      },
    });
    if (!user) return null;

    //? bcrypt가 DB에 저장된 기존 password와 넘겨 받은 password를 대조하고,
    //? match false시 401을 리턴
    const isMatch = await bcrypt.compare(userSignInDto.password, user.password);
    if (!isMatch) return sc.UNAUTHORIZED;

    return user.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const userService = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllUser,
  signIn
};

export default userService;
