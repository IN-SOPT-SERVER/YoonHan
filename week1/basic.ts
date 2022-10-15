// * 숫자 리스트
const aaa: number[] = [1,2,3];

// * Object와 object의 차이
const foo = (o: Object) => {
    console.log(o);
}

const foo2 = (o: object) => {
    console.log(o)
}

foo("hello");
foo2("hello");

// * 화살표 함수 (ES6)
const helloFunc = (name: string): void => {
    console.log(`${name}아 안녕`);
}

const 합을리턴해주는함수 =  (a:number, b:number): number => {
    return a+b;
}

// 한 줄로도 화살표 함수를 표현가능
const sum을return = (a:number,b:number) => a+b;


// 함수 선언식
function hello(name) {
    return `hello ${name}`;
}

console.log(hello("unan"));


// 함수 표현식
const sum = (x,y) => x + y;
const subtract = (a,b) => {
    return a - b;
}

const isLiked: boolean = true;

// type을 출력해주는 함수 typeof
console.log(`${typeof isLiked}, ${isLiked}`);

// 문자열 : string 자료형
const str: string = 'Hello World!';

console.log(`${typeof str}, ${str}`);

// 숫자 : number 자료형
let num: number = 31;
console.log(`${typeof num}, ${num}`);

let numList: number[] = [1,2,3];

// Array의 경우 Array<type> 또는 Object[]로 표현할수 있다.
const strings: Array<string> = ['hi', 'hello'];

const objArray1: Object[] = [
    { item1 : "unan"},
    { item2 : "unan2"}
]

// 단언적 type. any를 많이 쓰는 경우 typescript의 본질 훼손
const test1: any = "이종현";
const nameLength3 = (test1 as string).length;
console.log(nameLength3);

const test12: any = "unan";
const nameLength2 = (<string>test12).length;
console.log(nameLength2)


// * 수업시간 실습
// 팀원 소개
interface SOPTServer {
    name: string;
    age: number;
    place: string;
    alcoholCapacity: number;
}

const members: SOPTServer[] = [
    {
        name: "김예린",
        age:25,
        place: "강남구청",
        alcoholCapacity: 1
    },
    {
        name: "김도연",
        age:23,
        place: "경복궁", 
        alcoholCapacity: 1
    },
    {
        name: "소예원",
        age: 24,
        place: "야탑역",
        alcoholCapacity: 1
    },
    {
        name: "김소현",
        age: 23,
        place: "상도역",
        alcoholCapacity: 1
    },
    {
        name: "최윤한",
        age: 26,
        place: "신림역",
        alcoholCapacity: 2
    }
]

const introduceFunc = (info: SOPTServer): string => {
    const basicInfo: string  = `저희 파트원의 이름은 ${info.name}이고, 나이는 ${info.age}, 사는 곳은 ${info.place} 입니다.`
    if (info.alcoholCapacity > 1) {
        const bottleCapacityInfo: string =  `저의 주량은 ${info.alcoholCapacity}이에요. ~ ㅋㅋ`
        const infoSum: string = basicInfo + bottleCapacityInfo;
        return infoSum;
    }
    else {
        const bottleCapacityInfo: string =  `저의 주량은 ${info.alcoholCapacity}이에요. 알쓰입니다 ㅠㅠ`
        const infoSum: string = basicInfo + bottleCapacityInfo;
        return infoSum;
    } 
}
members.map((info) => console.log(introduceFunc(info)));

