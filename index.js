const employee = {
  name: "Alice Johnson",
  streetAddress: "123 Maple Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

console.log("Original employee:", employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Bob Smith");
console.log("Updated (non-destructive):", updatedEmployee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak Avenue");
console.log("Updated (destructive):", employee);

const deletedEmployee = deleteFromEmployeeByKey(employee, "name");
console.log("Deleted key (non-destructive):", deletedEmployee);

destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log("Deleted key (destructive):", employee);

