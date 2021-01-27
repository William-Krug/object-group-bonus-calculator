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

for (let employee of employees) {
  const employeeBonus = processEmployeeBonus(employee);
  console.log(employeeBonus);
}

function processEmployeeBonus(individual) {
  const individualBonus = {};
  individualBonus.name = individual.name;
  individualBonus.bonusPercentage = processBonus(individual);
  individualBonus.totalBonus = calculateBonusDollar(
    individual.annualSalary,
    individualBonus.bonusPercentage
  );
  individualBonus.totalCompensation = 
  return individualBonus;
}

function processBonus(emp) {
  let bonusPct = 0;

  switch (emp.reviewRating) {
    case 1:
    case 2:
      break;
    case 3:
      bonusPct = 4;
      break;
    case 4:
      bonusPct = 6;
      break;
    case 5:
      bonusPct = 10;
      break;
  }

  if (seniorityBump(emp.employeeNumber)) {
    bonusPct += 5;
  }

  if (salaryAdjustment(emp.annualSalary)) {
    bonusPct -= 1;
  }

  bonusPct = checkBonusLimits(bonusPct);

  return bonusPct;
}

function seniorityBump(employeeID) {
  if (employeeID.length === 4) {
    return true;
  }
  return false;
}

function salaryAdjustment(salary) {
  const salaryNumber = Number(salary);
  if (salaryNumber > 65000) {
    return true;
  }
  return false;
}

function checkBonusLimits(bonusPercent) {
  if (bonusPercent > 13) {
    bonusPercent = 13;
  } else if (bonusPercent < 0) {
    bonusPercent = 0;
  }
  return bonusPercent;
}

function calculateBonusDollar(annSal, pct) {
  const annSalNumber = Number(annSal);
  const pctDecimal = pct / 100;
  return Math.round(annSalNumber * pctDecimal);
}
