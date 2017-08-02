$(document).ready(function() {

 $('#search').click(function() {
  
    var searchTerm = $('#searchTerm').val();

    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&callback=?"

        
    //Ajax call for JSON data.
    $.ajax({ 
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        console.log(url);
       
      //Clears all data before running/re-running the for loop
        $('#output').html(''); 
         for (var i = 0; i < data[1].length; i++) {
          $('#output').append("<a href=" + data[3][i] + " target='blank'><h1 id='subject'>" + data[1][i] + "</h1></a>" + "<h3 class= 'description'>" + data[2][i] + "</h3><br>");
        }

      },
      error: function(errorMessage) {
        alert("Error");

      },

    });

  });

   //Stack overflow answer to keybinding search to enter key. Keycode 13
  $('#searchTerm').bind('keypress', function(e) {
    if (e.keyCode == 13) {
      
      //if enter is pressed, run #search.click function above, this is outside of that function
      $("#search").click(); 
    }
  });
});