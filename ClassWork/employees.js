

let employees = [
  { name: "Aysha", salary: 20000 },
  { name: "Yusuf", salary: 30000 },
  { name: "Abdullah", salary: 40000 },
];

let employeesUpdated = employees.map((emp) => ({
  name: emp.name,
  salary: emp.salary + 2000,
}));

console.log("Updated Salaries : ", employeesUpdated);