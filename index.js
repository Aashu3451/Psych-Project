let submit = document.getElementById("submit");
let ScoreOfTest = document.getElementById("ScoreOfTest");
ScoreOfTest.style.display = "none";
let q1 = document.getElementById('q1').value;
let q2 = document.getElementById('q2').value;
let q3 = document.getElementById('q3').value;
let q4 = document.getElementById('q4').value;
q1='null';
q2='null';
q3='null';
q4='null';

submit.addEventListener("click", clickOnSubmit);
function clickOnSubmit(e){
  e.preventDefault();
  let total = 0;
  if (q1 === "A") {
    total += 1;
  }
  if (q2 === "A") {
    total += 1;
  }
  if (q3 === "A") {
    total += 1;
  }
  if (q4 === "A") {
    total += 1;
  }
  let result;
  if (total === 0) {
    result = "Type C Personality";
  } else if (total === 1) {
    result = "Type B Personality";
  } else if (total === 2) {
    result = "Type A Personality";
  } else {
    result = "Type D Personality";
  }
  ScoreOfTest.style.display = "";
  ScoreOfTest.innerHTML = `<h3 class="p-3 m-3 text-dark">
    The Personality you are having right now is 
    <small class="text-primary">${result}</small>
  </h3>`;
};


