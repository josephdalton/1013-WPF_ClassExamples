/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 10/21/13
 * Time: 5:54 PM
 * To change this template use File | Settings | File Templates.
 */




//Gas mileage problem
//var percentageOfTank=1; //  represents the gas gauge
//var sizeOfTank=100;
//var milesPerGallon=12;
//var targetDistance =200;   //one piece of the puzzle
//
//

//encapsulate the effectiveDistance code for our vehicle


//var gallonsOfGas = sizeOfTank*percentageOfTank;
//var effectiveTravelDistance = gallonsOfGas*(milesPerGallon);
////
//if(targetDistance<=effectiveTravelDistance){console.log('you can get there');}
//else {console.log('You can\'t get there');}
//

//
//function distanceCalculator(tankSize, mpg, percentTank)
//    {
//         return  tankSize* mpg *percentTank;
//
//    }
//
//function effectiveDistance(target, etd)   //return string of whether or not a set distance can be traveled
//    {
//       var returnString = '';
//        if(target<=etd){returnString='You can make it'}
//        else {returnString = 'You can\'t make it.'}
//
//        return returnString;
//
//
//    }
//
//
//
////console.log(distanceCalculator(20,10,1/2));
////console.log(distanceCalculator(sizeOfTank,milesPerGallon,percentageOfTank));
////
//
//console.log(effectiveDistance(targetDistance,distanceCalculator(sizeOfTank,milesPerGallon,percentageOfTank)));
//


//The goal of the class is to cover the concepts behind loops and functions. Then to demonstrate the syntax in JavaScript.
//var cOrF =prompt('C or F?'); //degree type selection
//var temp=prompt('Temp to get from user') ;
//
//function tempConvert(CF, t)  {
//
//
//if(
//    CF.toUpperCase()=='C'   //cel to fah
//    ) {
//    return t*9/5 + 32;
//}
//else {
//
//    return (t-32)*5/9;
//}
//}
//
//
//console.log(tempConvert(cOrF, temp));
//console.log(prompt('C or F?'), prompt('Temp to get from user') );

  //LOOPS

//for
//arrays
var testArray= ['banana', 'pear', 'peach', 'carrot'];
console.log(testArray.length);
testArray.push('apple');
testArray.push('toast');

for(i=0;i<testArray.length;i++)
{
    console.log(testArray[i]);
}


for(i=0;i<3;i++){
    for(j=0;j<3;j++)
    {
        for(k=0;k<3;k++){

            console.log('i:'+i+' j:'+j+' k:'+k);


        }

    }

}
//while

var whileCondition=true;
while (whileCondition==false){
    var whileTest = prompt('is this not true?') ;
    if(whileTest!=true) {whileCondition= true;}


}

   var z = false;

do {
       if(prompt('it is true')=='true')
       {
           z=true
       }
       else
       {
           z=false
       }

}   while (z ==true);






//do while















