// var a = 10;
// var b = '20';
// console.log(a+b);

// let students = {
//   name: "Rahul",
//   class: 8,
//   rollNo: 12253,
//   parent: {
//     father: {
//       name: "Vikash",
//       age: 70,
//       occupation: "Bussinessman",
//     },
//     moter: {
//         name: "Shanti",
//         age: 65,
//         occupation: "Housewife"
//     }
//   },
// };

const obj = {
  name: "Divy",

  class: "Fullstack",

  roll: 0,

  parent: {
    father: {
      name: "Shikher",

      age: 62,
    },

    mother: {
      name: "Sapna",

      age: 61,
    },
  },
};

if (obj.parent.father.age > 60) {
  console.log("father is a senior citizen");
}
if (obj.parent.mother.age > 60) {
  console.log("mother is a senior citizen");
}
