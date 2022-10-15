/* 
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/

interface Dinner {
  name: string;
  price: number;
}

interface Member {
  name: string;
  group: string;
}

const dinner = {
    member : [
      {
        name: "권세훈",
        group: "ob",
      },
      {
        name: "최윤한",
        group: "yb",
      },
      {
        name: "임승하",
        group:"ob",
      },
      {
        name: "한유진",
        group:"yb"
      },
      {
        name: "김예린",
        group:"yb",
      },
      {
        name: "소예원",
        group:"yb",
      }
    ],

    dinnerList : [
      {
        name:"밥",
        price:10000,
    },
    {
      name: "치킨",
      price: 30000,
    },
    {
      name: "pizza",
      price: 21000,
    }
  ],

    shuffle(array:Object[]):Object[] {
      array.sort(() => Math.random() - 0.5);
      return array;
    },
    organize(arr1:Member[], arr2:Dinner[]):void {
      this.shuffle(arr1);
      this.shuffle(arr2);

      const dinnerMember = dinner.member;
      const dinnerMenu = dinner.dinnerList;

      console.log(dinnerMember);
      console.log(dinnerMenu);

      let j:number;
      for (let j=0; j <= dinnerMenu.length+1; j++) {
        console.log("----------------");   
        console.log(`결과 ${dinnerMember[0].name}, ${dinnerMember[1].name}`);
        dinnerMember.splice(0,2);

        console.log(`저녁 메뉴는 ${dinnerMenu[0].name}`);
        dinnerMenu.splice(0,1);
      }
    },
  };
  
  dinner.organize(dinner.member, dinner.dinnerList);