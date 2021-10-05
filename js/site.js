//get our user input
function getValue(){

   //make sure the alert is invisible
   document.getElementById("alert").classList.add("invisible");   

   //get user string from the page
   let userString = document.getElementById("userString").value;

   //check for a palindrome
   let returnObj = checkForPalindrome(userString);

   //display our message to the screen
   displayMessage(returnObj);
}

//check if string is a palindrome
//logic function
function checkForPalindrome(userString){
   
    userString = userString.toLowerCase();

   //remove spaces and special characters
   let regex = /[^a-z0-9]/gi;
   userString = userString.replace(regex, "");

   let revString = [];
   let returnObj = {};

   //reverse a string using a for loop
   for (let index = userString.length - 1 ; index >= 0; index--) {
      revString += userString[index];
      }
   if (revString == userString){
      returnObj.msg = "Well done! You entered a palindrome"
   }
   else {
      returnObj.msg = "Sorry! You did not enter a palindrome"
   }

   returnObj.reversed = revString;

   return returnObj;

}

//display the reversed string to the user
//view function
function displayMessage(returnObj){
   
   //write to the page
   document.getElementById("alertHeader").innerHTML = returnObj.msg;
   document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
   //show the alert box
   document.getElementById("alert").classList.remove("invisible");
}