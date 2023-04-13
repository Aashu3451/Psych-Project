let nameEntered = document.getElementById("nameEntered");
nameEntered.addEventListener("click", nameEnterFunction);
function nameEnterFunction() {
  let oneAlert = document.getElementById("oneAlert");
  oneAlert.innerHTML = `<div class="alert alert-info alert-dismissible fade show" role="alert">
                        <strong>Hello ${
                          document.getElementById("name").value
                        } !</strong> 
                        This site works on the principle of Big Five traits of Personality!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>`;
}

let submit = document.getElementById("submit");
let scores = document.getElementById("scores");
scores.style.display = "none";
let openness = 0,
  conscientiousness = 0,
  extraversion = 0,
  agreeableness = 0,
  neuroticism = 0;
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const q1 = document.querySelector("input[name=q1]:checked").value;
  const q2 = document.querySelector("input[name=q2]:checked").value;
  const q3 = document.querySelector("input[name=q3]:checked").value;
  const q4 = document.querySelector("input[name=q4]:checked").value;
  const q5 = document.querySelector("input[name=q5]:checked").value;
  const q6 = document.querySelector("input[name=q6]:checked").value;
  const q7 = document.querySelector("input[name=q7]:checked").value;
  const q8 = document.querySelector("input[name=q8]:checked").value;
  const q9 = document.querySelector("input[name=q9]:checked").value;
  const q10 = document.querySelector("input[name=q10]:checked").value;
  let total = 0;
  if (q1 === "A") {
    conscientiousness++;
  } else if (q1 === "B") {
    neuroticism++;
  } else if (q1 === "C") {
    conscientiousness += 1;
  } else {
    extraversion += 1;
  }
  if (q2 === "A") {
  } else if (q2 === "B") {
    conscientiousness += 1;
  } else if (q2 === "C") {
    extraversion += 1;
  } else {
    agreeableness += 1;
  }
  if (q3 === "A") {
    conscientiousness += 1;
  } else if (q3 === "B") {
    conscientiousness += 1;
  } else if (q3 === "C") {
    agreeableness += 1;
  } else {
    extraversion += 1;
  }
  if (q4 === "A") {
    openness += 1;
  } else if (q4 === "B") {
    openness += 1;
  } else if (q4 === "C") {
    extraversion += 1;
  } else {
    conscientiousness += 1;
  }
  if (q5 === "A") {
    conscientiousness += 1;
  } else if (q5 === "B") {
    conscientiousness += 1;
  } else if (q5 === "C") {
    agreeableness += 1;
  } else {
    openness += 1;
  }
  if (q6 === "A") {
    neuroticism += 1;
  } else if (q6 === "B") {
    conscientiousness += 1;
  } else if (q6 === "C") {
    extraversion -= 1;
  } else {
    openness++;
  }
  if (q7 === "A") {
    neuroticism++;
  } else if (q7 === "B") {
    conscientiousness++;
  } else if (q7 === "C") {
    agreeableness++;
  } else {
    extraversion++;
  }
  if (q8 === "A") {
    neuroticism++;
  } else if (q8 === "B") {
    agreeableness--;
  } else if (q8 === "C") {
    openness++;
  } else {
    extraversion--;
  }
  if (q9 === "A") {
    extraversion++;
  } else if (q9 === "B") {
    extraversion++;
  } else if (q9 === "C") {
    conscientiousness++;
  } else {
    openness++;
  }
  if (q10 === "A") {
    openness--;
  } else if (q10 === "B") {
    extraversion++;
  } else if (q10 === "C") {
    conscientiousness++;
  } else {
    neuroticism++;
  }
  key = Math.max(
    openness,
    conscientiousness,
    extraversion,
    agreeableness,
    neuroticism
  );
  let result;
  if (key == openness) {
    result = "Openness";
  } else if (key == conscientiousness) {
    result = "Conscientiousness";
  } else if (key == extraversion) {
    result = "Extraversion";
  } else if (key == agreeableness) {
    result = "Agreeableness";
  } else {
    result = "Nueroticism";
  }
  scores.style.display = "";
  document.getElementById(
    "scoreOfTest"
  ).innerHTML = `<h3 class="p-3 m-3 text-dark">
    The Personality you are close to is 
    <small class="text-primary">${result}</small>
  </h3>`;

  $(document).ready(function () {
    donutChart();

    $(window).resize(function () {
      window.donutChart.redraw();
    });
  });

  let name = document.getElementById("name").value;
  let ID = document.getElementById("ID").value;
  let gender = document.getElementById("gender").value;
  let serialNumber = 3;
  let html = `<tr>
  <th scope="row">1</th>
  <td>Mark</td>
  <td>21K-3451</td>
  <td>Male</td>
</tr>
<tr>
  <th scope="row">2</th>
  <td>Jacob</td>
  <td>21K-3457</td>
  <td>Male</td>
</tr>
<tr>
  <th scope="row">3</th>
  <td>Some Girl</td>
  <td>21K-3057</td>
  <td>Female</td>
</tr>`;
  html += `<tr>
  <th scope="row">${++serialNumber}</th>
  <td>${name}</td>
  <td>${ID}</td>
  <td>${gender}</td>
</tr>`;
document.getElementById('tableBody').innerHTML = html;

let suggestion = document.getElementById('suggestions');
if (key == openness) {
  suggestion.innerHTML = `<p>Be open to new experiences: People with openness personalities are typically curious and interested in trying new things. You should continue to seek out new experiences, whether it's traveling to new places, trying new foods, or learning a new skill. <br><br>

  Stay curious and ask questions: You should cultivate your natural curiosity and always be asking questions. This will help you to learn new things and to gain a deeper understanding of the world around you.
  <br><br>
  Surround yourself with diverse perspectives: People with openness personalities tend to value diversity and are open to hearing different viewpoints. You should seek out people from different backgrounds and with different perspectives to expand your worldview.
  <br><br>
  Pursue creative outlets: Many people with openness personalities have a strong creative side. You should find ways to express your creativity, whether it's through art, music, writing, or another creative pursuit.
  <br><br>
  Embrace uncertainty and ambiguity: People with openness personalities are often comfortable with ambiguity and uncertainty. You should embrace this aspect of your personality and be willing to take risks and try new things, even if the outcome is uncertain.
  <br><br>
  Ultimately, you should embrace and celebrate your openness personality and find ways to use it to your advantage in your personal and professional life.
  `;
} else if (key == conscientiousness) {
  suggestion.innerHTML = `<p>Set clear goals and prioritize tasks: People with conscientiousness personalities are typically organized and goal-oriented. You should take the time to set clear goals and prioritize your tasks, which will help you to stay focused and on track.
  <br><br>

  Develop a routine: Conscientious people often thrive on routine and structure. You should develop a daily routine that works for you, including regular exercise, healthy eating habits, and a consistent sleep schedule.
  <br><br>
  Pay attention to details: Conscientious people tend to be detail-oriented and thorough. You should pay close attention to details in your work and personal life to ensure that everything is done correctly and to the best of your ability.
  <br><br>
  Be dependable: People with conscientiousness personalities value reliability and dependability. You should strive to be someone that others can count on, whether it's at work or in your personal life.
  <br><br>
  Manage stress effectively: Conscientious people often feel stressed when things don't go according to plan. You should develop effective stress management techniques, such as meditation, exercise, or talking to a trusted friend or counselor.
  <br><br>
  Again, it's important to remember that everyone is different, and what works for one person may not work for another. However, these suggestions can serve as a starting point for someone with a conscientiousness personality to make the most of their strengths and achieve their goals.`;
} else if (key == extraversion) {
  suggestion.innerHTML = `<p>Build and maintain social connections: People with extraversion personalities tend to be outgoing and social. You should actively seek out opportunities to build and maintain social connections, whether it's through joining a club, attending networking events, or simply making an effort to connect with people in your community.
  <br><br>
  Take on leadership roles: Extraverted individuals often thrive in leadership roles. You should seek out opportunities to take on leadership roles, whether it's at work or in your personal life. This will allow you to use your natural charisma and people skills to motivate and inspire others.
  <br><br>
  Be comfortable in the spotlight: People with extraversion personalities tend to enjoy being the center of attention. You should be comfortable speaking in public and presenting your ideas to others, whether it's in a professional or personal setting.
  <br><br>
  Find ways to recharge your energy: Although extraverted people thrive on social interaction, it's important to find ways to recharge your energy. You should make time for yourself to engage in quiet activities, such as reading, meditation, or going for a walk in nature.
  <br><br>
  Practice active listening: Extraverted individuals tend to be talkative and outgoing, but it's important to also practice active listening. You should make an effort to listen to others and to show genuine interest in what they have to say.
  <br><br>
  Remember, everyone is different, and there is no "one-size-fits-all" approach to personality. However, these suggestions can help someone with an extraversion personality to maximize their strengths and achieve their goals.`;
} else if (key == agreeableness) {
  suggestion.innerHTML = `Practice assertiveness: People with agreeableness personalities tend to avoid conflict and prioritize harmony. However, it's important to also be assertive and stand up for yourself when necessary. You should practice expressing your needs and opinions in a clear and respectful manner.
  <br><br>
  Develop good communication skills: Agreeable people tend to be good listeners and communicators. You should develop your communication skills to be able to express your thoughts and feelings clearly and effectively.
  <br><br>
  Be empathetic and compassionate: People with agreeableness personalities tend to be empathetic and compassionate. You should use these qualities to build strong relationships with others, whether it's in your personal or professional life.
  <br><br>
  Set healthy boundaries: Agreeable people tend to put others' needs before their own, which can lead to burnout and resentment. You should learn to set healthy boundaries to protect your own well-being and to ensure that you are not taken advantage of.
  <br><br>
  Develop conflict resolution skills: Although agreeable people tend to avoid conflict, it's important to know how to resolve conflicts when they arise. You should develop your conflict resolution skills to be able to navigate difficult situations and maintain positive relationships.
  <br><br>
  Remember, everyone is different, and there is no "one-size-fits-all" approach to personality. However, these suggestions can help someone with an agreeableness personality to maximize their strengths and achieve their goals while also taking care of themselves.`;
} else {
  suggestion.innerHTML = `<p>Practice self-care: People with neuroticism personalities tend to experience higher levels of stress and anxiety. It's important to take care of yourself by engaging in activities that promote relaxation and stress relief, such as meditation, exercise, or spending time in nature.
<br><br>
  Challenge negative thoughts: Neurotic people tend to have negative thoughts and worry excessively. You should challenge these thoughts by asking yourself if they are realistic or if there is evidence to support them. It can also be helpful to talk to a therapist or counselor to develop coping strategies for managing negative thoughts.
  <br><br>
  Develop coping strategies: People with neuroticism personalities may experience intense emotions and mood swings. You should develop coping strategies that work for you, such as practicing mindfulness, journaling, or seeking support from loved ones.
  <br><br>
  Focus on the present moment: Neurotic people tend to worry about the future or dwell on the past. You should practice being present in the moment and focusing on what is happening right now, rather than worrying about what might happen in the future.
  <br><br>
  Seek professional help: If your symptoms of neuroticism are interfering with your daily life or causing significant distress, it may be helpful to seek professional help from a therapist or counselor who can work with you to develop strategies for managing your symptoms.
  <br><br>
  These suggestions can help someone with a neuroticism personality to manage their symptoms and improve their overall well-being.`;
}
});

function donutChart() {
  window.donutChart = Morris.Donut({
    element: "donut-chart",
    data: [
      { label: "Openness", value: `${openness}` },
      { label: "Conscientiousness", value: `${conscientiousness}` },
      { label: "Extraversion", value: `${extraversion}` },
      { label: "Agreeableness", value: `${agreeableness}` },
      { label: "Nueroticism", value: `${neuroticism}` },
    ],
    resize: true,
    redraw: true,
  });
}
