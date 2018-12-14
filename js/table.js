// definition
// The prepend() method inserts specified content at the beginning of the selected elements.
// Tip: To insert content at the end of the selected elements, use the append() method.  

///////////////////prepend/////////////////////
$(document).ready(function(){
    // $("li").add("");

    $("#btn1").click(function(){
      $(".prep").prepend("<b>Prepended text</b>. ");
    $("li").remove();

    });
    $("#btn2").click(function(){
      $("ol").prepend("<li>Prepended item</li>");
    });
  });


  // ////////////////////////append/////////////////
  $(document).ready(function(){
    $("#btn3").click(function(){
      $(".prep").remove("");
    });
    $("#btn4").click(function(){
    var name = prompt("Please enter your name", "Harry");
      $(".column1").append(name);

    var surname = prompt("Please enter your surname", "Potter");
    $(".column2").append(surname);

    var birth = prompt("Please enter your date of birth", " 13 Jan 1999");
    $(".column3").append(birth);

    

    });

    // if (person != null) {
    //     document.getElementById("demo").innerHTML =
    //     "Hello " + person + "! How are you today?";
    // }
  });

// ===============================user input=============================

 var counter = 0;
function myFunction() {
 
}


var myArray = new Array(); //name
var myArray = new Array(); //surname
var myArray = new Array(); //date of birth


