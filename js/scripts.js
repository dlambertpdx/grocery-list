$(document).ready(function() {
  $("form#list").submit(function(event) {
    var groceries = ['item1', 'item2', 'item3', 'item4', 'item5'];
    groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      $("." + grocery).text(userInput).toUpperCase();
    });

        $('#output').show();
        event.preventDefault();
  });
});
