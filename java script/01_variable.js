const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"//this is also a var we can use like this because accountcity is a safe language
let accountstate;

//1) const means isko change nhi kia jaa sakta

// trying to change the details of const
//accountId = 2 it will give error after once value is fixed

console.log(accountId);

//2) now trying to change all the details except const variable
 accountEmail = "hc@hc.com"
 accountPassword = "4565"
 accountCity = "bengaluru"
 console.log(accountEmail,accountPassword,accountCity)
 //in the form of table
 console.table([accountEmail,accountPassword,accountCity])

 // curly braces is known as scope
 //let and var both are variables but in var there were some problems so we introduced let hwich doesnot have any problem.
 // *prefer not use var for issue in block scope and functional scope.*

 console.log(accountstate)//it will show undefined because no value is given to this variable

