/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 10/21/13
 * Time: 5:54 PM
 * To change this template use File | Settings | File Templates.
 */

// The goal of the class is to cover the concepts behind loops and functions. Then to demonstrate the syntax in JavaScript.
//var cOrF =prompt('C or F?'); //degree type selection
//var temp=prompt('Temp to get from user') ;
//
//if(
//    cOrF.toUpperCase()=='C'   //cel to fah
//    ) {
//    console.log( temp*9/5 + 32);
//}
//else {
//
//    console.log( (temp-32)*5/9);
//}


//Gas mileage problem
var percentageOfTank=1; //  represents the gas gauge
var sizeOfTank=100;
var milesPerGallon=12;
var targetDistance =200;   //one piece of the puzzle



//encapsulate the effectiveDistance code for our vehicle


//var gallonsOfGas = sizeOfTank*percentageOfTank;
//var effectiveTravelDistance = gallonsOfGas*(milesPerGallon);
////
//if(targetDistance<=effectiveTravelDistance){console.log('you can get there');}
//else {console.log('You can\'t get there');}
//


function distanceCalculator(tankSize, mpg, percentTank)
    {
         return  tankSize* mpg *percentTank;

    }

function effectiveDistance(target, etd)   //return string of whether or not a set distance can be traveled
    {
       var returnString = '';
        if(target<=etd){returnString='You can make it'}
        else {returnString = 'You can\'t make it.'}

        return returnString;


    }



//console.log(distanceCalculator(20,10,1/2));
//console.log(distanceCalculator(sizeOfTank,milesPerGallon,percentageOfTank));
//

console.log(effectiveDistance(targetDistance,distanceCalculator(sizeOfTank,milesPerGallon,percentageOfTank)));




