/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 10/14/13
 * Time: 5:32 PM
 * To change this template use File | Settings | File Templates.
 */
//topics for today
//If, else, else if
// conditional operators < > <= >= !=
// ternary

//Given Dogs age at a rate of 7 times that of a human.

//basic conditionals  the IF

//if( THIS IS EVALUATED) {IF THE EVALUTATED PORTION IS TRUE THEN THIS WILL EXECUTE}
//
//var testValue = 1;
//var resultValue='Initial value';
//
//
//if(testValue == 10)
//    { resultValue = 'If is true'; }
//else if(testValue==1){
//    resultValue = 'ElseIf is true';
//}
//
//else {
//    resultValue = 'If and elseIf is False';
//}
//
////ternary
//// (condition to be checked) ? (stuff to be done) : (else stuff to be done);
//
//(testValue==1)?(console.log('ternary true')):(console.log('ternary false'));
//console.log(resultValue);


//

//var testValue = 1;
//var resultValue='Initial value';
//
//
//if(testValue >= 10)
//{ resultValue = 'If is true'; }
//else if(testValue==1){
//    resultValue = 'ElseIf is true';
//}
//
//else {
//    resultValue = 'If and elseIf is False';
//}
//
////ternary
//// (condition to be checked) ? (stuff to be done) : (else stuff to be done);
//
//console.log(resultValue);

//
//var testValue = 1;
//var testValue2= 100;
//
////check to see if our testValue is <=10 and testValue2 <=50
//
////And &&
////Or ||
//
//if(testValue <= 10 && testValue2<=50){console.log('The Test is equal to true for AND'); }
//
//if(testValue <= 10 || testValue2<=50){console.log('The Test is equal to true for OR'); }
//
//
////ternary
//// (condition to be checked) ? (stuff to be done) : (else stuff to be done);

//32F is 0C 100C is 212F 90F is 32.22C

//General Assumption that the ratio of degrees is equal between F and C
//100c = 212f
//c = 2.12f

var cOrF =prompt('C or F?'); //degree type selection
var temp=prompt('Temp to get from user') ;

   if(
   cOrF.toUpperCase()=='C'   //cel to fah
       ) {
            console.log( temp*9/5 + 32);
   }
else {

       console.log( (temp-32)*5/9);
 }




//console.log(cOrF.toUpperCase());






