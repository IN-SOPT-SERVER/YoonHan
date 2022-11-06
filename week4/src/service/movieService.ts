import { Movie, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addMovie = async (title:string, summary:string) => {
    const data = prisma.movie.create({
    data:{
        title: title != null ? title: "제목 없음",
        summary
        }
    })
    return data;
}

const getMovieDetail = async (movieId:number) => {
    const data = await prisma.movie.findUnique({
        where: {
            id: movieId
        }
    })
    return data;
};


const likeUp = async (movieId:number) => {
    const data = await prisma.movie.update({
        where: {
            id:movieId
        },
        data: {
            is_liked: true
        }
    })
    return data;
}
const deleteMovie = async (movieId:number) => {
    const data = await prisma.movie.delete({
        where: {
            id: movieId
        }
    })
}

const movieService = {
    addMovie,
    getMovieDetail,
    likeUp,
    deleteMovie
};

export default movieService;