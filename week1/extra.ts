interface SOPT {
    name:string
}

interface SOPTFront extends SOPT{
    skills:string
}

interface SOPT {
    age:number
}

const unan:SOPT = {
    name:"unan",
    age:100
}

type Game = {
    title:string
}

type ComputerGame  = Game & {
    price:number
}