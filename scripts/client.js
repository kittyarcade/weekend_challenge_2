var people = [];

var i = 0;

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
showButtons();
showPeople(data.tau);
    }
});//end ajax call


//hard-coded buttons
$(document).on('click', '#next', function(){
  i = i + 1;
  i = i % people.length;
  showPeople();

});

$(document).on('click', '#prev', function(){
if (i === 0) {
          i = people.length;
      }
      i = i - 1;
  showPeople();
});


//dynamic buttons
$( document ).on( 'click', '.DyButton', function(){
  console.log('clicked');
  var clickedName = $( this ).attr( 'name' );
  for(var j = 0; j < people.length; j++){
    if(people[j].first_name === clickedName){
      i = j;
    }
  }
  showPeople();
console.log(clickedName);
 });

function showButtons(){
  console.log('in showbuttons');
  var outputText = '';
   for(var i = 0 ; i<people.length; i++){
   outputText += '<button class="DyButton btn btn-default" name="' + people[i].first_name + '">' + people[i].first_name + '</button>';
 }
  $('#studentButtons').html(outputText);
 }

//display to DOM
var showPeople = function (){
    var outputText = '<img class=picture src="' + people[i].picUrl + '">';
    outputText += '<p>' + '<strong>' + people[i].first_name + ' ' + people[i].last_name + '</strong>' + '</p>';
    outputText += '<p>' + people[i].info + '</p>';
    outputText += '<p>' + (i + 1) + '/' + people.length + '</p>';
    $('#outputDiv').html(outputText);
    $('#outputDiv').hide();
    $('#outputDiv').fadeIn('slow');

};//end showPeople function


});//end doc ready
