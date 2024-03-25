const employee = {
    Name: "sam",
    streetAddress: "12 Broadway",
}
 
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
   newEmployee[key] = (value)
  return newEmployee
}
const newEmployee = {...employee, Name: "sam", streetAddress: "11 Broadway"}
console.log("newEmployee")
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = (value)
  return employee
}
const newEmp = {...employee, Name: "sam", streetAddress: '12 Broadway'}
console.log(newEmp)
function deleteFromEmployeeByKey(employee, key){
  const newEmployee = {...employee}
  if([key] in newEmployee){
    delete newEmployee[key]
  }
  return newEmployee
  
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key]
  return employee
}