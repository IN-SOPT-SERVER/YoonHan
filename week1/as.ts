const test1: any = "이종현";
const nameLength3 = (test1 as string).length;
console.log(nameLength3);

const test12: any = "unan";
const nameLength2 = (<string>test12).length;
console.log(nameLength2);