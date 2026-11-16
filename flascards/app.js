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

function getDomain(objective) {
 switch(objective) {
   case "1" : return "Operators, Methods, and Keywords";
   case "2" : return "Variables, Data Types, and Functions";
   case "3" : return "Decisions and Loops";
   case "4" : return "Document Object Model";
   case "5" : return "HTML Forms";
   default : return "Unknown Domain";   
 }
}

function Card(objective, question, answer) {
  this.objective = objective;
  this.question = question;
  this.answer = answer;
}


  function card(objective, question, answer) {
this.getLabel = function() { 
    return "Objective " + objective + " | " + getDomain(objective);
}
}

let deck = new Array();

let card1 = new Card("1","5" + 3, "1.1");
deck.push(card1);

let card2 = new Card("2","let a = 5; let b = a++; what is the value of b?", "1.1");
deck.push(card2);

let card3 = new Card("3","typeof null", "2.1");
deck.push(card3);

let card4 = new Card("4","typeof NaN", "2.1");
deck.push(card4);

let card5 = new Card("5","5" == 5, "3.1");
deck.push(card5);

let card6 = new Card("6","5" === 5, "3.1");
deck.push(card6);

let card7 = new Card("7","NaN === NaN", "3.1");
deck.push(card7);

let card8 = new Card("8",'(parseInt("3.9"))', "2.1");
deck.push(card8);

let card9 = new Card("9","(2.5).toFixed(1) returns what type?", "2.1");
deck.push(card9);

let card10 = new Card("10","Math.round(-2.5)", "2.1");
deck.push(card10);



