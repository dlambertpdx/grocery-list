$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

    var groceries = ['item1', 'item2', 'item3', 'item4', 'item5'];
    var newArray = [];

    groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      newArray.push(userInput.toUpperCase());
    });

    var newArray =newArray.sort();

    newArray.forEach(function(item) {
      $(".items").append("<li>" + item + "</li>");
    });

    $("#output").show();
    $("#list").hide();

  });
});
