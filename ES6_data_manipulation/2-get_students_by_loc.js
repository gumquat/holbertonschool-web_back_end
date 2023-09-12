export default function getStudentsByLocation(students, city) {
  let studentLocationFilter = students.filter((students) => students.location === city);
  return studentLocationFilter;
}
