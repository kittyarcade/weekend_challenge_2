

$(document).ready(function(){
console.log('jQuery');

  //call to AJAX
  $.ajax({
    url:'http://devjana.net/support/tau_students.json',
    dataType: 'JSON',
    success: function(data){
      console.log('success, received:', data);
      console.log('data.tau', data.tau);
      console.log(data.tau[0]);

      showResults(data.tau);

}
});

var showResults = function( data ){
    console.log( 'in showResults:', data );
    // loop through results and display on DOM
    var outputText = '';
    for (var i = 0; i < data.length; i++) {

    outputText += data[0].first_name + ' ' + data[0].last_name;
  }
    $( '#outputDiv' ).append( outputText );
  };

console.log(showResults());

});//end doc ready
