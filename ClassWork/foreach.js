let employees = [
  { name: "Aysha", salary: 35000 },
  { name: "Salman", salary: 40000 },
  { name: "Sultan", salary: 32000 },
];

employees.forEach( (emp) => {
    console.log(`${emp.name} earns INR ${emp.salary} per month`);
})

let employeesUpdated = employees.map( emp => ({
    name: emp.name,
    salary: emp.salary + 3000
}))

console.log(employeesUpdated);