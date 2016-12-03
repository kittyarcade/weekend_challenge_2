var people = [];

var searchURL = 'http://devjana.net/support/tau_students.json';

$(document).ready(function(){
  console.log('jQuery');

  //call to AJAX
  $.ajax({
    url: searchURL,
    dataType: 'JSON',
    success: function(data){
      for(var i = 0; i < data.tau.length; i++){
         people.push(data.tau[i]);

    }
showPeople(data.tau);
    }

});//end ajax call

var showPeople = function (){
  var outputText = '';
  for(var i = 0; i < people.length; i++){
    outputText += '<p>' + people[i].first_name + ' ' + people[i].last_name + ' ' + '</p>';
    outputText += '<p>' + people[i].info + '</p>';
  }
$('#outputDiv').html(outputText);

};//end showPeople function
});//end doc ready
