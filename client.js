const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

function employeeBonuses(volunteers) {
  const employee = {
    // name: 'Jane Smith',
    // bonusPercentage: 0,
    // totalCompensation: 0,
    // totalBonus: 0,
  };
  employee.name = volunteers.name;

  // employee.bonusPercentage = volunteers.rating;

  if (volunteers.reviewRating <= 2) {
    employee.bonusPercentage = 0;
    // console.log((bonusPercentage = 0));
  } else if (volunteers.reviewRating === 3) {
    employee.bonusPercentage = 0.04;
    // console.log((bonusPercentage = 0.04));
  } else if (volunteers.reviewRating === 4) {
    employee.bonusPercentage = 0.06;
    // console.log((bonusPercentage = 0.06));
  } else if (volunteers.reviewRating === 5) {
    employee.bonusPercentage = 0.1;
    // console.log((bonusPercentage = 0.1));
  }

  if (volunteers.employeeNumber.length === 4 && volunteers.reviewRating > 2) {
    employee.bonusPercentage += 0.05;
  }

  if (volunteers.annualSalary > 65000) {
    employee.bonusPercentage -= 0.01;
  }

  if (employee.bonusPercentage > 0.13) {
    employee.bonusPercentage = 0.13;
  } else if (employee.bonusPercentage < 0) {
    employee.bonusPercentage = 0;
  }

  return employee;
}

console.log(employeeBonuses(employees[0]));
