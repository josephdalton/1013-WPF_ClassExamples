/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 10/7/13
 * Time: 6:37 PM
 * To change this template use File | Settings | File Templates.
 */


//prompt('What color is your cat?');
//console.log('a');

// comments are
/* Stuff not to be run*/

// Variables
//var shoeBoxVariable;      //Declares a variable named shoeBoxVariable
//shoeBoxVariable='Five';   //sets the variable shoeBoxVariable  equal to 5 (Uses 1 '=')
//console.log(shoeBoxVariable);



//combining prompts and console.log

var userData= prompt('How old are you?');                //return a number value
//console.log(userData);
//
var userNumberOfSiblings=prompt('Number of siblings?');  //return number value
//
//
//var productUserData = userData*userNumberOfSiblings;
//console.log(userData*userNumberOfSiblings);
//console.log(productUserData);

var userFirstName = prompt('What is your first name?');
var userLastName  =prompt('What is your last name?');
console.log(userFirstName+'\t'+userLastName+' '+userData);
console.log(userData+userNumberOfSiblings);

userData=userData*1;
userData=Number(userData);









