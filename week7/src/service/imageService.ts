import { ImageCreateResponseDto } from '../interfaces/image/ImageCreateResponseDto';
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


const uploadImage = async (location:string) : Promise<ImageCreateResponseDto> => {
    const data = await prisma.image.create({
        data: {
            image: location
        }
    })

    const responseDto: ImageCreateResponseDto = {
        id: data.id,
        image: data.image as string
    };

    return responseDto;
}

const imageService = {
    uploadImage
}


export default imageService;
