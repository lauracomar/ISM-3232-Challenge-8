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
    // Task 4: Handle Bonuses for Managers (builds on task 2)
    calculateTotalSalaryWithBonus() { // add new method into Department class
        return this.employees.reduce((total, employee) => { // use reduce to go ogver employees array and get total salary
            if (employee instanceof Manager) { // check if employee is manager 
                return total + employee.salary + employee.bonus; // if employee is manager add bonus to salary
            }
            else { return total + employee.salary }; // instructions if employee is not manager 
        }, 0);
    };
};

// Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee { // new manager class that extends within employee class
    constructor(name, salary, position, department, bonus) { // add bonus parameter specific to managers
        super(name, salary, position, department); // call parent class => initiate inherited parameters from Employee class
        this.bonus = bonus; // initiate bonus by putting value into parameters 
    };
    getDetails() {
        return `Employee Name: ${this.name}, Salary: $${this.salary}, Position: ${this.position}, Bonus: $${this.bonus}`;
    }; // add bonus to getDetails string
};

//Task 5: Create and Manage Departments and Employees
// creating depaterments
const finance = new Departments(`Finance`);
const sales = new Departments(`Sales`);
// creating employees/ managers
const laura = new Employee(`Laura`, 50000, `Analyst`, `Finance`);
const bruna = new Manager(`Bruna`, 100000, `Manager`, `Finance`, 30000);
const beatriz = new Employee(`Beatriz`, 60000, `Sales Rep`, `Sales`);
const eduardo = new Manager(`Eduardo`, 110000, `Manager`, `Sales`, 45000);
// console log employee details
console.log(laura.getDetails()); // should display details above
console.log(bruna.getDetails());
console.log(beatriz.getDetails());
console.log(eduardo.getDetails());
// add new employees to respective departments
finance.addEmployee(laura);
finance.addEmployee(bruna);
sales.addEmployee(beatriz);
sales.addEmployee(eduardo);
// console log to create output
console.log(`Finance Department Salary:$${finance.getDepartmentSalary()}`);
console.log(`Sales Department Salary: $${sales.getDepartmentSalary()}`);
console.log(`Finance Salary with bonus: $${finance.calculateTotalSalaryWithBonus()}`);
console.log(`Sales Salary with bonus: $${sales.calculateTotalSalaryWithBonus()}`);