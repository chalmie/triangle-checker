var checker = function(side1,side2,side3) {
  if ((side1 === side2) && (side2 === side3)) {
    return "equilateral";
  } else if ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1))
  {
    return "not a triangle";
  }
  else if (((side1 === side2) && (side1 !== side3)) || ((side2 === side3) && (side1 !== side3)) || ((side1 === side3) && (side2 !== side3)))
  {
    return "isosceles";
  }
  else {
    return "scalene";
  }
};



$(document).ready(function () {
  $("form#checking").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = checker(side1, side2, side3);

    $(".checker").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
