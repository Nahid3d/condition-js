function checkGrade(marks){

    if(marks > 100 || marks < 0) return 'invalid marks';
    if(marks >= 80) return ' A+';
    if(marks >=70) return 'A';
    if(marks >= 50) return 'B';
    if(marks ) return 'Fail';

}
console.log(checkGrade(50));