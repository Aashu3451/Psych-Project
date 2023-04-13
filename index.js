
let nameEntered = document.getElementById('nameEntered');
nameEntered.addEventListener('click',nameEnterFunction);
function nameEnterFunction()
{
  let oneAlert = document.getElementById('oneAlert');
  oneAlert.innerHTML = `<div class="alert alert-info alert-dismissible fade show" role="alert">
                        <strong>Hello ${document.getElementById('name').value} !</strong> 
                        This site works on the principle of Big Five traits of Personality!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>`;
}

let submit = document.getElementById("submit");
let scores = document.getElementById("scores");
scores.style.display = "none";
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const q1 = document.querySelector('input[name=q1]:checked').value;
  const q2 = document.querySelector('input[name=q2]:checked').value;
  const q3 = document.querySelector('input[name=q3]:checked').value;
  const q4 = document.querySelector('input[name=q4]:checked').value;
  const q5 = document.querySelector('input[name=q5]:checked').value;
  const q6 = document.querySelector('input[name=q6]:checked').value;
  const q7 = document.querySelector('input[name=q7]:checked').value;
  const q8 = document.querySelector('input[name=q8]:checked').value;
  const q9 = document.querySelector('input[name=q9]:checked').value;
  const q10 = document.querySelector('input[name=q10]:checked').value;
  let total = 0;
  let openness=0, conscientiousness=0, extraversion=0, agreeableness=0, neuroticism=0;
  if (q1 === "A") {
    total += 1;
  }
  else if(q1 === "B")
  {

  }
  else if (q1 === "C")
  {

  }
  else
  {

  }
  if (q2 === "A") {
    total += 1;
  }
  else if(q2 === "B")
  {

  }
  else if (q2 === "C")
  {

  }
  else
  {
    
  }
  if (q3 === "A") {
    total += 1;
  }
  else if(q3 === "B")
  {

  }
  else if (q3 === "C")
  {

  }
  else
  {
    
  }
  if (q4 === "A") {
    total += 1;
  }
  else if(q4 === "B")
  {

  }
  else if (q4 === "C")
  {

  }
  else
  {
    
  }
  if (q5 === "A") {
    total += 1;
  }
  else if(q5 === "B")
  {

  }
  else if (q5 === "C")
  {

  }
  else
  {
    
  }
  if (q6 === "A") {
    total += 1;
  }
  else if(q6 === "B")
  {

  }
  else if (q6 === "C")
  {

  }
  else
  {
    
  }
  if (q7 === "A") {
    total += 1;
  }
  else if(q7 === "B")
  {

  }
  else if (q7 === "C")
  {

  }
  else
  {
    
  }
  if (q8 === "A") {
    total += 1;
  }
  else if(q8 === "B")
  {

  }
  else if (q8 === "C")
  {

  }
  else
  {
    
  }
  if (q9 === "A") {
    total += 1;
  }
  else if(q9 === "B")
  {

  }
  else if (q9 === "C")
  {

  }
  else
  {
    
  }
  if (q10 === "A") {
    total += 1;
  }
  else if(q10 === "B")
  {

  }
  else if (q10 === "C")
  {

  }
  else
  {
    
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
  scores.style.display = "";
  document.getElementById('scoreOfTest').innerHTML = `<h3 class="p-3 m-3 text-dark">
    The Personality you are having right now is 
    <small class="text-primary">${result}</small>
  </h3>`;
});
