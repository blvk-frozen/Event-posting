$(document).ready(function() {
    $(".art").click(function() {
      $(".columnart").toggle();
      $(".columnshowingart").toggle();
    });
    $(".music").click(function() {
        $(".columnmusic").toggle();
        $(".columnshowingmusic").toggle();
      });
    $(".sports").click(function() {
        $(".columnsports").toggle();
        $(".columnshowingsports").toggle();
      });
  });

function Contact(name, email, comment2) {
    this.userName= name;
    this.userEmail = email;
    this.userComment = comment2;
  }
  
  
  $(document).ready(function() {
    $("form#comment").submit(function(event) {
      event.preventDefault();
  
      var inputtedName = $("input#name").val();
      var inputtedEmail = $("input#email").val();
      var inputtedComment = $("#comment2").val();
  
      var newContact = new Contact(inputtedName, inputtedEmail, inputtedComment);

      Contact.prototype.comment=function(){
          return inputtedName + "<br>" +inputtedComment ;
      }
  
      $("ul#actualComments").append("<li>" + newContact.comment() + "</li><br>");
  
      $("input#name").val("");
      $("input#email").val("");
      $("#comment2").val("");

      alert("Thank you for commenting");

    });
  }); 