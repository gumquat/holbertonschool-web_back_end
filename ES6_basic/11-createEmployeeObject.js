export default function createEmployeesObject(departmentName, employees) {
  const departmentEmployees = {
    [departmentName]: employees,
  };

  return departmentEmployees;
}
