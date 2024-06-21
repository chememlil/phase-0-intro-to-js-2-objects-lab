let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
  };
  // Update employee object with a new key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Update employee object with a new key-value pair (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Delete key-value pair from a clone of employee object (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Delete key-value pair from the employee object (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  