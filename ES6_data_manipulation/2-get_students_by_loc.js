export default function getStudentsByLocation(students, city) {
  let studentLocation = students.filter((students) => students.location === city);
  return studentLocation;
}
