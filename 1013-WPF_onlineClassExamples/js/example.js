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



////combining prompts and console.log
//
//var userData= Number(prompt('How old are you?'));                //return a number value
////console.log(userData);
////
//var userNumberOfSiblings=prompt('Number of siblings?');  //return number value
////
////
////var productUserData = userData*userNumberOfSiblings;
////console.log(userData*userNumberOfSiblings);
////console.log(productUserData);
//
//var userFirstName = prompt('What is your first name?');
//var userLastName  =prompt('What is your last name?');
//console.log(userFirstName+'\t'+userLastName+' '+userData);
//console.log(userData+userNumberOfSiblings);
//
//userData=userData*1;
//userData=Number(userData);
//
//

  /*Calculate the discounted price for an item. Create an expression that will calculate the
  discounted price with and without sales tax. (It is acceptable for the result to have more
  than two digits after the decimal. $345.896 for example.)
  Givens: Original price Discount percentage (20% would be 20, for example)
  Description of item
  Sales tax percentage Result
  Variables: Price of the item with tax Price of the item without tax Result to Print:
  “Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.”
   ClassExample_Discount
*/

    var OriginalPrice =100;  //initialize original price-- set to 100 for easy math
    var nameOfProduct ='ABC';  //Initialize product name
    var percentDiscount=20;    //Initialize discount rate
    var taxRate=10;            //Initialize tax rate



    var total =OriginalPrice* (1-percentDiscount/100);   //calculate the total with a set percentage discount
//  var total = OriginalPrice - OriginalPrice*percentDiscount/100
    var totalWithTax=taxRate/100*total;                   //calculate the total with tax from the total calculated above


    console.log( 'Your '+nameOfProduct+' was originally $'+OriginalPrice+', but after a '+percentDiscount+'% discount, it is now $'+total+' without tax, and $X with tax.')     //console.log the values of the variables


