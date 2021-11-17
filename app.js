// alert("PAKISTAN ZINDABAD")

// Chapter no 31-34

// Q1
// var now = new Date();
// document.write(now)

// Q2
// var monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var d = new Date();
// var currentMonth = monthArr[d.getMonth()];
// for(var i = 0; i < monthArr.length; i++){
//     if(monthArr[i] == currentMonth){
//         alert("Current Month: " + monthArr[i])
//     }
// }

// Q3
// var date = new Date();
// var weekday = new Array();
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var day = weekday[date.getDay()];
// alert("Today is " + day)

// Q4
// var date = new Date().toString();
// var day = date.slice(0,3);
// if (day === "Sat"){
//     document.write("It's Fun Day" + " Because Today is " + day)
// }
// else if(day === "Sun"){
//     document.write("It's Fun Day" + " Because Today is " + day)
// }
// else{
//     document.write("Today is " + day)
// }

// Q5
// var d = new Date();
// var date = d.getDate();
// console.log(date)
// if ( date < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// Q6
// var date = new Date();
// var mlsec = date.getTime();
// var min = date.getMinutes();
// var difTime = mlsec - min;
// var newMin = difTime/(1000*60*60);
// var newTime = Math.floor(newMin);
// document.write("Current Date: " + date);
// document.write("<br> Elapsed milliseconds since Jan 1, 1970: " + mlsec);
// document.write("<br> Elapsed minutes since Jan 1, 1970: " + newTime.toFixed(11))

// Q7
// var d = new Date().toString();
// console.log(d)
// var t = d.slice(16,24)
// if(t >= "12" || t <= "23" ){
//     alert(" PM: " + t)
// }
// else if(t >= "24" || t <= "11" ){
//    alert("AM: " + t)
// }

// Q8
// var d = new Date();
// d.setDate(6)
// d.setMonth(11)
// d.setDate(31);
// d.setFullYear(2020)
// d.setHours(00)
// d.setMinutes(00)
// d.setMilliseconds(00)
// document.write("<b>Later date:</b> " + d)

// Q9
// var now = new Date();
// var lastDate = new Date("june 18 , 2015");
// msNow = now.getTime();
// msLastDate = lastDate.getTime();
// msDiff = msNow - msLastDate;
// var days = Math.floor(msDiff / (1000 * 60 * 60 * 24));
// document.write(days + " days have passed since 1st Ramadan,2015");

// Q10
// var now = new Date();
// var lastDate = new Date("Dec 05,2015,22:50:16");
// document.write(lastDate);
// msNow = now.getTime();
// msLastSec = lastDate.getTime();
// secDiff = msNow - msLastSec;
// var sec =Math.floor(secDiff /( 1000 * 60 ));
// document.write("<br>" +sec + " Second had passed since beginning of 2015");

// Q11
//  var date = new Date();
//   document.write("<b>Current date:</b> " + date)
//    date.setHours( date.getHours() - 1 );
//    document.write("<br><b> 1 hour ago, it was</b> " + date );

// 12
//  var date = new Date("Dec 05,2015,23:08:16");
//   document.write("<b>Current date:</b> " + date)
//    date.setFullYear( date.getFullYear() - 100 );
//    document.write("<br><b> 100 years back, it was</b> " + date );

// Q13
// var user = prompt("Enter Your Date of Birth")
// document.write("<b>Your age is</b> " + user)
// var d = new Date();
// var t = d.getFullYear();
// var newDate = t - user;
// document.write("<b><br>Your birth year is</b> " + newDate)

// Q14
// document.write("<h1>K-Electric Bill</h1>")
// var names = "ABC Customer";
// document.write("Customer Name: " +"<b>"+ names + "</b>")
// var month = "February"
// document.write("<br> Month: " +"<b>"+ month + "</b>")
// var unit = 410;
// document.write("<br> Number of Units: " +"<b>"+ unit + "</b>")
// var perUnit = 16;
// document.write("<br> Charges of unit: " +"<b>"+ perUnit + "</b><br>")
// var totalUnit = unit * perUnit;
// document.write("<br> Net Amount Payable (within Due Date): " +"<b>"+ totalUnit + "</b>")
// var ltc = 350;
// document.write("<br> Late Payment Surcharge: " +"<b>"+ ltc + "</b>")
// document.write("<br> Gross Amount Payable (after Due Date): " +"<b>"+ (totalUnit + ltc) + "</b>")

