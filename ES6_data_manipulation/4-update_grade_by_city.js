export default function updateStudentGradeByCity(students, city, newGrades) {
  const theList = students.filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades
        .find((item) => item.studentId === student.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';
      return theList;
    });
}
