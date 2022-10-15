const arr = [];

// push는 array에 값을 집어넣어준다.
let i;
for (i=0; i <= 9; i ++) {
    arr.push(i);
}

console.log(`arr: ${arr}`);

// length는 array의 길이를 return 해주는 method
console.log(`arr.length : ${arr.length}`);

// find는 array에서  조건을 만족하는 원소 중 첫번째 원소를 return하는 method
console.log(arr.find(element => element > 5));

// array 정렬
console.log(arr.sort((a,b) => (b-a)));
console.log(arr.sort((a,b) => (a-b)));

// delete는 element를 빈 값으로 남겨 준다.
delete arr[0];
console.log(arr);
// [ <1 empty item>, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]