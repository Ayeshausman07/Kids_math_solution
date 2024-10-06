
var main = ("WHAT WOULD YOU LIKE TO ATTEMPT? \n✨✨✨✨✨✨✨✨✨✨ \n1. TABLES \n2. FORWARD COUNTING \n3. BACKWARD COUNTING");
var pro = prompt(main);

pro = pro.toLowerCase();

if (pro == "1" || pro == "tables") {
  
    var startFrom = +prompt("Enter Start Number");
    var endFrom = +prompt("Enter Ending Number");
    var tableOf = +prompt("Enter Table Number ");

    document.write("<h2>Table of " + tableOf + "</h2>");
    for (var i = startFrom; i <= endFrom; i++) {
        document.write(tableOf + " X " + i + " = " + (tableOf * i) + "<br/>");
    }

} else if (pro == "2" || pro == "forward counting") {
 
    var fstartcount = +prompt("Enter Start Number:");
    var fendcounting = +prompt("Enter Ending Number:");

 
    if (fstartcount <= fendcounting) {
        document.write("<h2>Forward Counting from " + fstartcount + " to " + fendcounting + "</h2>");
        for (var i = fstartcount; i <= fendcounting; i += 10) {
            for (var j = i; j < i + 10 && j <= fendcounting; j++) {
                document.write(" " + j + " ");
            }
            document.write("<br/>");
        }
    } else {
        document.write("<h2>Start number should be less than or equal to the end number.</h2>");
    }

} else if (pro == "3" || pro == "backward counting") {
    
    var startcounting = +prompt("Enter Start Number:");
    var endcounting = +prompt("Enter Ending Number:");

   
    if (startcounting >= endcounting) {
        document.write("<h2>Backward Counting from " + startcounting + " to " + endcounting + "</h2>");
        for (var i = startcounting; i >= endcounting; i -= 10) {
            for (var j = i; j > i - 10 && j >= endcounting; j--) {
                document.write(" " + j + " ");
            }
            document.write("<br/>");
        }
    } else {
        document.write("<h2>Start number should be greater than or equal to the end number.</h2>");
    }

} else {
 
    document.write("<h2>Invalid choice. Please select 1, 2, or 3.</h2>");
}
