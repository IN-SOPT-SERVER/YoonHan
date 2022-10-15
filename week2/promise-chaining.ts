
// 나
const me = (callback: () => void, time:number) => {
    setTimeout(callback, time);
};

// 기상
const wakeUp = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("[현재] 일어남");
            resolve("일어남");
        }, 1000)
    });
};

// 화장실 감
const goBathRoom = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(()=> {
            console.log("[현재] 화장실로 이동함.");
            resolve(`${now} -> 화장실로 이동함`);
        }, 1000);
    });
};

const ready = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("[현재] 칫솔과 치약을 준비함");
            resolve(`${now} -> 칫솔과 치약을 준비함.`);
        }, 1000);
    });
};

const startChikaChika = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("[현재] 양치함");
            resolve(`${now} -> 양치함.`);
        }, 1000);
    });
};


const goodJob = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("[현재] 나 자신에게 칭찬중");
            resolve(`${now} -> 칭찬중.`);
        }, 1000);
    });
};


wakeUp()
    .then((now) => goBathRoom(now))
    .then((now) => ready(now))
    .then((now) => startChikaChika(now))
    .then((now) => goodJob(now))
    .then((now) => console.log(`\n${now}`));
