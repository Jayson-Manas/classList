// definition
// The prepend() method inserts specified content at the beginning of the selected elements.
// Tip: To insert content at the end of the selected elements, use the append() method.  

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

  $(document).ready(function(){
    $("#btn3").click(function(){
      $(".prep").append(" <b>Appended text</b>.");
    });
    $("#btn4").click(function(){
      $("ol").append("<li>Appended item</li>");
    });
  });

// ===============================user input=============================
function myFunction() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
  }
}