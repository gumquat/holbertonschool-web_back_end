export default function getStudentsByLocation(students, city) {
  const studentLocationFilter = students.filter((students) => students.location === city);
  return studentLocationFilter;
}
