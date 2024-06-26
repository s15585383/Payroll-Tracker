
// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesRoster = [];
// Collect employee data
const collectEmployees = function() {
// prompt for inormation to be stored into array

let addEmployees = true;

while (addEmployees) {

  // prompt for employee roster addition
  const firstName = prompt("Employee first name");
  const lastName = prompt("Employee last name");
  let salary = Number(prompt("Employee salary"));

  if (isNaN(salary)) {
    alert("Value entered is not a number");
    salary = Number(prompt("Employee salary"));
  };

// generate employee variable based on prompts
let employee = {
  firstName: firstName,
  lastName: lastName,
  salary: salary
};

// push employee info into predefined array
employeesRoster.push(employee)

// add conditional statement for prompt for new employee
const continueAdding = confirm("Add new Employee");
addEmployees = continueAdding
}
// return roster data
return employeesRoster;


}
  // TODO: Get user input to create and return an array of employee objects


// Display the average salary
const displayAverageSalary = function(employeesRoster) {
  // TODO: Calculate and display the average salary
  let totalSalarySum = 0;
  for (let i = 0; i < employeesRoster.length; i++) {
    totalSalarySum += employeesRoster[i].salary;
  }

const salaryAvg = totalSalarySum / employeesRoster.length;
console.log(`Average of employee salary: ${salaryAvg}`);
return salaryAvg;


}


// Select a random employee
const getRandomEmployee = function(employeesRoster) {
// TODO: Select and display a random employee
const randomIndex = Math.floor(Math.random() * employeesRoster.length)
const randomEmployee = employeesRoster[randomIndex];
console.log(randomEmployee);

}


/*
  ====================
  STARTER CODE 
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
