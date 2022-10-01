interface Server {
    name: string;
    age: number;
    place: string;
    bottleCapacity: number;
}

const members: Server[] = [
    {
        name: "김예린",
        age:25,
        place: "강남구청",
        bottleCapacity: 1
    },
    {
        name: "김도연",
        age:23,
        place: "경복궁", 
        bottleCapacity: 1
    },
    {
        name: "소예원",
        age: 24,
        place: "야탑역",
        bottleCapacity: 1
    },
    {
        name: "김소현",
        age: 23,
        place: "상도역",
        bottleCapacity: 1
    },
    {
        name: "최윤한",
        age: 26,
        place: "신림역",
        bottleCapacity: 2
    }
]

const introduceFunc = (info: Server): string => {
    const basicInfo: string  = `저희 파트원의 이름은 ${info.name}이고, 나이는 ${info.age}, 사는 곳은 ${info.place} 입니다.`
    if (info.bottleCapacity > 1) {
        const bottleCapacityInfo: string =  `저의 주량은 ${info.bottleCapacity}이에요. ~ ㅋㅋ`
        const infoSum: string = basicInfo + bottleCapacityInfo;
        return infoSum;
    }
    else {
        const bottleCapacityInfo: string =  `저의 주량은 ${info.bottleCapacity}이에요. 알쓰입니다 ㅠㅠ`
        const infoSum: string = basicInfo + bottleCapacityInfo;
        return infoSum;
    } 
}
members.map((info) => console.log(introduceFunc(info)));
