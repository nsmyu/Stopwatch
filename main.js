let a = 0 ;
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
   timerC = setInterval(countUpC, 60000); //修正：１分ごとに実行
   timerD = setInterval(countUpD, 600000); //修正：１時間ごとに実行
  
  function countUpA(){
    a++;
    let numA = ("00" + a).slice(-2); //追加：常に二桁表示
    digitA.innerHTML = numA;
    if(a>99) {　
    a=0;
    let numA = ("00" + a).slice(-2);
    digitA.innerHTML = numA;
    }
  }

  function countUpB(){
    b++;
    let numB = ("00" + b).slice(-2); //追加：常に二桁表示
    digitB.innerHTML = numB;
    if(b>59) {  //修正：1分経過で0に戻る
    b=0;
    let numB = ("00" + b).slice(-2);
    digitB.innerHTML = numB;
    }
  }

  function countUpC(){
    c++;
    let numC = ("00" + c).slice(-2); //追加：常に二桁表示
    digitC.innerHTML = numC;
    if(c>59) {　//修正：1時間経過で0に戻る
    c=0;
    let numC = ("00" + c).slice(-2);
    digitC.innerHTML = numC;
    }
  }
   
  function countUpD(){
    d++;
    let numD = ("00" + d).slice(-2); //追加：常に二桁表示
    digitD.innerHTML = numD;
    if(d>23) {　//24時間経過で0に戻る
    d=0;
    let numD = ("00" + d).slice(-2); 
    digitD.innerHTML = numD;
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
  digitA.innerHTML = "00";　//修正：リセット時も二桁表示
  digitB.innerHTML = "00";
  digitC.innerHTML = "00";
  digitD.innerHTML = "00";
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

