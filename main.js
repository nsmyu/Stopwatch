let a = 0;
let digitA = document.getElementById("digitA");
let b = 0;
let digitB = document.getElementById("digitB");
let c = 0;
let digitC = document.getElementById("digitC");
let d = 0;
let digitD = document.getElementById("digitD");
let timerA;
let timerB;
let timerC;
let timerD;

function start() {
   timerA = setInterval(countUpA, 100);
   timerB = setInterval(countUpB, 1000);
   timerC = setInterval(countUpC, 10000);
   timerD = setInterval(countUpD, 100000);
  
  function countUpA(){
    a++;
    digitA.innerHTML = a;
    if(a>9) {
    a=0
    digitA.innerHTML = a;
    }
  }

  function countUpB(){
    b++;
    digitB.innerHTML = b;
    if(b>9) {
    b=0
    digitB.innerHTML = b;
    }
  }

  function countUpC(){
    c++;
    digitC.innerHTML = c;
    if(c>9) {
    c=0
    digitC.innerHTML = c;
    }
  }
   
  function countUpD(){
    d++;
    digitD.innerHTML = d;
    if(d>9) {
    d=0
    digitC.innerHTML = d;
    }
  }
}

function stop() {
  clearInterval(timerA);
  clearInterval(timerB);
  clearInterval(timerC);
  clearInterval(timerD);
}

function reset() { 
  clearInterval(timerA);
  clearInterval(timerB);
  clearInterval(timerC);
  clearInterval(timerD);
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  digitA.innerHTML = 0;
  digitB.innerHTML = 0;
  digitC.innerHTML = 0;
  digitD.innerHTML = 0;
}

$(document).ready(function(){
  $(".start").click(function(){
   $(this).css({"color":"#bbb", "border-color":"#bbb"});
   $(this).prop("disabled", true);
   $(".stop,.reset").css({"color":"#000", "border-color":"#777"});
 });

  $(".stop").click(function(){
   $(".start").css({"color":"#000", "border-color":"#777"});
   $(".start").prop("disabled", false);
   $(this).css({"color":"#bbb", "border-color":"#bbb"});
 });
 
  $(".reset").click(function(){
   $(".start").css({"color":"#000", "border-color":"#777"});
   $(".start").prop("disabled", false);
   $(".stop").css({"color":"#bbb", "border-color":"#bbb"});
   $(this).css({"color":"#bbb", "border-color":"#bbb"});
 });
});

