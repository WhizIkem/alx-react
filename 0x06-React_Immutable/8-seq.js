import { Seq } from 'immutable';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function printBestStudents(grades) {
  const bestStudents = Seq(grades)
  .filter(student => student.score >= 70)
  .map(student => ({
    score: student.score,
    firstName: capitalizeFirstLetter(student.firstName),
    lastname: capitalizeFirstLetter(student.lastName)
  }))
  .toObject();

  console.log(bestStudents);
}