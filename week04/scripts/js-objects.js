// const courseName = document.querySelector("#courseName");
// const courseCode = document.querySelector("#courseCode");
// const sections = document.querySelector("#sections");

// const aCourse = {
//   code: "CSE121b",
//   name: "Javascript Language",
//   sections: [
//     {sectionNum: 1,
//     roomNum: 'STC 353', 
//     enrolled: 26,
//     days: 'TTh',
//     instructor: 'Bro T'},
    
//     {sectionNum: 2, 
//     roomNum: 'STC 347',
//     enrolled: 28, 
//     days: 'TTh', 
//     instructor: 'Sis A'},
//   ],
//   enrollStudent: function (sectionNum) {
//     const sectionIndex = this.sections.findIndex(
//       (section) => section.sectionNum == sectionNum
//     );
//     if (sectionIndex >= 0) {
//       this.sections[sectionIndex].enrolled++;
//       renderSections(this.sections);
//     }
//   },
//   dropStudent: function (sectionNum) {
//     const sectionIndex = this.sections.findIndex(
//       (section) => section.sectionNum == sectionNum
//     );
//     if (sectionIndex >= 0) {
//       this.sections[sectionIndex].enrolled--;
//       renderSections(this.sections);
//     }
//   }
// };

// function setNameNumber(course) {
//     courseName.textContent = course.name;
//     courseCode.textContent = course.code;
// }

// function sectionTemplate(section) {
//   return `<tr>
//   <td>${section.sectionNum}</td>
//   <td>${section.roomNum}</td>
//   <td>${section.enrolled}</td>
//   <td>${section.days}</td>
//   <td>${section.instructor}</td>
//   </tr>`
// }

// function outputSection(section) {
//   const html = section.map(sectionTemplate).join('');
//   sections.innerHTML = html;
// }

// document.querySelector("#enrollStudent").addEventListener("click", function () {
//   const sectionNum = document.querySelector("#sectionNumber").value;
//   aCourse.enrollStudent(sectionNum);
// });
// document.querySelector("#dropStudent").addEventListener("click", function () {
//   const sectionNum = document.querySelector("#sectionNumber").value;
//   aCourse.dropStudent(sectionNum);
// });

// setNameNumber(aCourse);
// outputSection(aCourse.sections);

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let name1 = names.filter(name => name[0] == 'B');
let name2 = names.map(name => name.length);
let avglength = names.reduce((acc, name) => acc + name.length, 0) / names.length;
console.log(name2);