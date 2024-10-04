// Task 1 : Create an Employee Class
class Employee { // initiate class
    constructor(name, salary, position, department) { //constructor: initiate objects created from class
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    };// using this to assign value to parameter
    getDetails() {
        return `Employee Name: ${this.name}, Salary: $${this.salary}, Position: ${this.position}`;
    }; // return string with employees name, salary, position
};
