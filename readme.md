#Weekend 2 Challenge

##Technologies Used:
* html
* jQuery
* JavaScript
* JSON
* AJAX
* CSS

##To-DO:

[X] create html, css , js files

[X] link everything!

[] Prev button

[] next button

[x] use AJAX to access JSON data

[] get JSON data to display on DOM



##On-DOM:
* One person at a time
* Info for person
  * First name
  * Last name
  * Picture
  * info
* Previous button
* Next button
* Currently viewing counter (i.e. 2/20)
* button for each person





#The Assignment
Welcome to your second weekend challenge!

I created a new JSON data file, inside it, you will find an array of objects. Each object, is each one of you!

http://devjana.net/support/tau_students.json

You first task is to make an AJAX call from the client side app.js, using an .ajax method and access the json data through the url above. When successful, it should bring the data back down for use. You will then need to combine that with what you have learned about parsing objects and arrays to complete the challenge.

JSON/Ajax reference: https://github.com/devjanaprime/tauAjaxJsonInClass

What I would like to see on the DOM, is one person at a time represented - the info for the first person in the json data. One the screen should also be Prev and Next buttons, that when pressed, show the information for the appropriate person. These should wrap - prev when on the first person should wrap around to show the last person and vice versa.

Also on the DOM should be a display showing the number of people and which is being currently viewed (eg. 2/20)

When a person is displayed, show their name (first & last) and their info. Only one person should be shown at any given time.
