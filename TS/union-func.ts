function printEmpId(empId: number | string) {

  if (typeof empId === "number") {
    console.log("Numeric ID:", empId);
  } else {
    console.log("String ID:", empId);
  }

}

printEmpId(200);
printEmpId("A00100");