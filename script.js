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
