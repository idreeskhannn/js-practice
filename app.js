                          //////          ALERT                ///////////////
// alert("HELLO CLASS")

// var name = "muhammad idrees";

// var age = 21;

// alert("My Name is" + " " + name);
//alert("i'm" + " "  +age + " "  +"year old" )



                        ///////                   Math operators                  ////////////


                                     //     addition    //
// var num1 = 450;
// var num2 = 50; 

// var add = num1 + num2;

// alert(add);


                                       //    SUBTRACT      //

// var num1 = 150; 
// var num2 = 50;

// var sub = num1 - num2;
//150 - 50

// alert(sub);

                                     //     MULtiplication  //

// var num1 = 50;
// var num2 = 6;
// var mul = num1 * num2;

// alert(mul);

                                     //        DIVIDE         //

// var num1 = 142;
// var num2 = 4;
// var divide =  num1 / num2;
 //alert(divide)//

// var num1 = 15;
// var num2 = 150;
// var per = num1 % num2;

// alert(per)


                                  //   marksheet calculation     //




var firstname = prompt("Required " , " First Name")
var lastname = prompt("Required " , " last Name ")
var rollnum = prompt("Required " ,"Enter Your Roll Number")
var schoolname = prompt("Required " ,"Enter Your School Name")
var num = +prompt("Required " ,"Enter Your Islamiat Numbers")
var score1 = num;
var num1 = +prompt("Required " ,"Enter Your English Numbers")
var score2 = num1;
var num2 = +prompt("Required " ,"Enter Your Urdu Numbers")
var score3 = num2;
var num3 = +prompt("Required " ,"Enter Your REACT Numbers")
var score4 = num3;
var num4 = +prompt("Required " ,"Enter Your Html Numbers")
var score5 = num4;

document.write("First Name : " + firstname + "<br>" + "<br>" + "last Name : " + lastname +
 "<br>" + "<br>" + "Roll Number : " + rollnum + "<br>" + "<br>" + "School Name = " + schoolname + 
    "<br>" + "<br>" + "Islamiat = " + score1 + "<br>" + "<br>" + "English = " + score2 + "<br>" + "<br>" + 
    "Urdu = " + score3 + "<br>" + "<br>" + "REACT =" + score4 + "<br>" + "<br>"  + "Html  = " + score5 + "<br>" + "<br>")


var obtained = score1 + score2 + score3 + score4 + score5
document.write("Obtain Marks =" + obtained + "<br>" + "<br>")

var total = 500;
document.write("Total Marks = " + total + "<br>" + "<br>" )

var bmj = obtained;

var perc = bmj / total * 100
document.write("Your Percentage is = " + perc + "%")

