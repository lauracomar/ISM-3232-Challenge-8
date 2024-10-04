// Task 1 : Create an Employee Class
class Employee { // initiate class
    constructor(name, salary, position, department) { //constructor: initiate objects created from class
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    };// using "this" to assign value to parameter
    getDetails() {
        return `Employee Name: ${this.name}, Salary: $${this.salary}, Position: ${this.position}`;
    }; // return string with employees name, salary, position
};

// Task 2: Create a Department Class
class Departments { // creating class
    constructor(name) { // initiate department
        this.name = name;
        this.employees = []; // empty array for employees in departments
    }; // use "this" to assign value to parameter (department details)
    addEmployee(employee) {
        this.employees.push(employee); // use push to add given employee to the empty employees array
    };
    getDepartmentSalary() { // calculate total salary of employees in department
        return this.employees.reduce((total, employee) => total + employee.salary, 0); // use "reduce" to go over each employee and get salary
    };
};

