export default function getStudentIdsSum(students) {
  const studentIdSum = students.reduce((getSum, student) => getSum + student.id, 0);
  return studentIdSum;
}
