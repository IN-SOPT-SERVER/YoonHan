Promise.resolve(true)
    .then((res) => {
        throw new Error("비동기 처리 중 에러 발생");
    })
    .then((res) => {
        console.log("response");
        return Promise.resolve(true);
    })
    .catch((e) => {
        console.log(e.message);
    })
    // 중간에 에러가 났을 경우, resolve가 true여도 catch로 간다.