// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let addMore = true;

  const employees = []

  while (addMore) {

    const firstName = prompt(`First Name`);
    const lastName = prompt(`Last Name`);
    let salaryInput = prompt(`Salary`);
    let salary = parseFloat(salaryInput);
    if (isNaN(salary)) {
    }


    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary, 
    });

    addMore = confirm("Would you like to add more employees?");

  }

  return employees;
  
}

// Display the average salary
const displayAverageSalary = function (employees) {
  // TODO: Calculate and display the average salary
  function calculateAverageSalary(employees) {
    const totalSalaries = employees.reduce((acc, employees) => acc + employees.salary, 0);
    const averageSalary = totalSalaries / employees.length;
    return averageSalary;
  }

  const averageSalary =calculateAverageSalary(employees);
  console.log("The average salary is :", averageSalary);
}

// Select a random employee
const getRandomEmployee = function (employees) {
  // TODO: Select and display a random employee
  const random = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[random];

  console.log (`Congrats to our random winner: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}
//Apabetical last//
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
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
