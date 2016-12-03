var people = [];

var searchURL = 'http://devjana.net/support/tau_students.json';

$(document).ready(function(){
console.log('jQuery');



//var getPeople = function(){
  //call to AJAX
  $.ajax({
    url: searchURL,
    dataType: 'JSON',
    success: function(data){
      console.log('success, received:', data);
      console.log('data.tau', data.tau);
      console.log(data.tau[0]);
      //for(var i = 0; i < data.tau.length; i++){
        //  people.push(data.people[i]);
      //}
}
});
//};




});//end doc ready
