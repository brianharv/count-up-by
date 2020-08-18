//Business Logic


//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let userCountTo = parseInt($("input#input1").val());
    let userCountBy = parseInt($("input#input2").val());

    for (let index = userCountBy; index <=userCountTo; index += userCountBy) {
      console.log(index);
      $("#output").append("<li>" + index + "</li>");
    }
  });
});