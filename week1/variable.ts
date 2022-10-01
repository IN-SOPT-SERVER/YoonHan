const aaa: number[] = [1,2,3];

const foo = (o: Object) => {
    console.log(o);
}

const foo2 = (o: object) => {
    console.log(o)
}

foo("hello");
foo2("hello");

const helloFunc = (name: string): void => {
    console.log(`${name}아 안녕`);
}

const 합을리턴해주는함수 =  (a:number, b:number): number => {
    return a+b;
}

