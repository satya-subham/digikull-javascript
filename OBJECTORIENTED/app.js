class Employee {
    #name;
    #designation;
    #id;
    constructor(name, designation){
        this.#name = name;
        this.#designation = designation;
        this.#id = Date.now();
    }
    get EmployeeDetails() {
        return {
            name: this.#name,
            designation: this.#designation
        }
    }
    set EmployeeDetails({name,designation}) {
        this.#name = name;
        this.#designation = designation;
    }

}
const employee = new Employee("satya", "SE");
employee.EmployeeDetails = {name: "subham", designation: "SSE"}
console.log(employee.EmployeeDetails);








// class Student {
//     #name;
//     #standard;
//     #id;
//     constructor(name, standard){
//         this.#name = name;
//         this.#standard = standard;
//         this.#id = Date.now();
//     }
//      #studentDetails() {
//         return {
//             name: this.#name,
//             standard: this.#standard
//         }
//     }
//     getStudentDetails() {
//         return this.#studentDetails();
//     }
//     #setStudentDetails(){
        
//     }

// }
// const employee = new Student("satya", "7th");
// console.log(employee.getStudentDetails());