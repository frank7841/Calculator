//Business logic or backend
var add = function(number1, number2) {
  return number1 + number2;
 };
 var subtract = function(number1, number2) {
  return number1 - number2;
 };
 var multiply = function(number1, number2) {
  return number1 * number2;
 };
 var divide = function(number1, number2) {
  return number1 / number2;
 };
 
 
//Everytrhing bellow the line is user interface
$(document).ready(function() {
  $("form#add").submit(function(event){
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var results=add(number1, number2);
  event.preventDefault();
  $("#output").text(results)
  });
});