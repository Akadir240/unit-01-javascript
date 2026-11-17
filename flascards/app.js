"use strict";

const EXAM_DATE = new Date("2026, 10, 25");

let msg = document.getElementById("screenMsg");

function checkScreen() {
  if (window.innerWidth < 600) {
    msg.innerHTML = "This app is best viewed on a larger screen.";
  } else {
    msg.textContent = "window width: " + window.innerWidth + "px";
  }
}

function startApp() {
  checkScreen();
 }
function getDomain(objective) {
 switch(objective.charAt(0)) {
   case "1" : return "Operators, Methods, and Keywords";
   case "2" : return "Variables, Data Types, and Functions";
   case "3" : return "Decisions and Loops";
   case "4" : return "Document Object Model";
   case "5" : return "HTML Forms";
   default : return "Unknown Domain";   
 }
}



function Card(question, answer, objective) {
    this.question = question;
    this.answer = answer;
    this.objective = objective;
    this.getLabel = function() { 
    return "Objective " + this.objective + " | " + getDomain(objective);
}
}


let deck = [
new Card("1","5" + 3, "1.1"),
new Card("2","let a = 5; let b = a++; what is the value of b?", "1.1"),
new Card("3","typeof null", "2.1"),
new Card("4","typeof NaN", "2.1"),
new Card("5",'"5" == 5', "3.1"),
new Card("6",'"5" === 5', "3.1"),
new Card("7","NaN === NaN", "3.1"),
new Card("8",'(parseInt("3.9"))', "2.1"),
new Card("9","(2.5).toFixed(1) returns what type?", "2.1"),
new Card("10","Math.round(-2.5)", "2.1"),
]


let answer = [
    new Answer("1","8", "1.1"),
    new Answer("2","5", "1.1"),
    new Answer("3","object", "2.1"),
    new Answer("4","number", "2.1"),
    new Answer("5","true", "3.1"),
    new Answer("6","false", "3.1"),
    new Answer("7","false", "3.1"),
    new Answer("8","3", "2.1"),
    new Answer("9","string", "2.1"),
    new Answer("10","-2", "2.1"),
]


