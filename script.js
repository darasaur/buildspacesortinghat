document.addEventListener('DOMContentLoaded', function() {
  // the quiz starts on question one 
  let question = 1;
  // each house starts with no points 
  let gaudmire = 0;
  let erevald = 0;
  let alterok = 0;
  let spectreseek = 0;
  let house = ""

  // random house code 
  //const randomButton = document.getElementById('randomButton');
  randomButton.addEventListener("click", function() { // generates a random house 
    //randomHouse();
  });

  // this allows the quiz question to be interacted with 
  const quizQuestion = document.getElementById("quizQuestion");

  // this allows the quiz buttons to be interacted with
  const quizButtonOne = document.getElementById("quizButtonOne");
  const quizButtonTwo = document.getElementById("quizButtonTwo");
  const quizButtonThree = document.getElementById("quizButtonThree");
  const quizButtonFour = document.getElementById("quizButtonFour");

  // this function controls what happens when button one is clicked 

  quizButtonOne.addEventListener("click", function() {

    // checks which house to assign a point to
    if (question === 1) {
      erevald++;
      question++; // adds one to the questioncount
      changeQuestionText(); // changes the button text for the next question
    } else if (question === 2) {
      spectreseek++;
      question++;
      changeQuestionText();
    } else if (question === 3) {
      gaudmire++;
      chooseHouse();
    }
  });

  // this function controls what happens when button two is clicked 
  quizButtonTwo.addEventListener("click", function() {

    // checks which house to assign a point to
    if (question === 1) {
      alterok++;
      question++;
      changeQuestionText();
    } else if (question === 2) {
      erevald++;
      question++;
      changeQuestionText();
    } else if (question === 3) {
      spectreseek++;
      chooseHouse();
    }
  });

  // this function controls what happens when button three is clicked 
  quizButtonThree.addEventListener("click", function() {

    // checks which house to assign a point to
    if (question === 1) {
      gaudmire++;
      question++;
      changeQuestionText();
    } else if (question === 2) {
      alterok++;
      question++;
      changeQuestionText();
    } else if (question === 3) {
      erevald++;
      chooseHouse();
    }
  });

  // this function controls what happens when button four is clicked 
  quizButtonFour.addEventListener("click", function() {

    // checks which house to assign a point to
    if (question === 1) {
      spectreseek++;
      question++;
      changeQuestionText();
    } else if (question === 2) {
      gaudmire++;
      question++;
      changeQuestionText();
    } else if (question === 3) {
      alterok++;
      chooseHouse();
    }
  });

  // function that changes inner text of each question 
  function changeQuestionText() {
    if (question === 2) { // changes text for question two 
      quizQuestion.innerText = "when faced with a challenge you"
      quizButtonOne.innerText = "keep moving forward, there’s no time to waste";
      quizButtonTwo.innerText = "feel at peace knowing this is part of the journey to whatever is meant for you";
      quizButtonThree.innerText = "seek feedback and figure out what to do differently next time";
      quizButtonFour.innerText = "see it as an opportunity to learn";
    } else if (question === 3) { // changes text for question three 
      quizQuestion.innerText = "you are most often described as"
      quizButtonOne.innerText = "energizing";
      quizButtonTwo.innerText = "visionary";
      quizButtonThree.innerText = "calm";
      quizButtonFour.innerText = "thoughtful";
    }
  }

  // this calculates the result and changes the screen when question = 3
  function chooseHouse() {
    if (gaudmire >= 2) { // checks to see if gaudmire is the result 
      house = "gaudmire"
      displayHouse();
    } else if (erevald >= 2) { // checks to see if erevald is the result
      house = "erevald"
      displayHouse();
    } else if (alterok >= 2) { // checks to see if alterok is the result
      house = "alterok"
      displayHouse();
    } else if (spectreseek >= 2) { // checks to see if spectreseek is the result 
      house = "spectreseek"
    } else {
      randomHouse();
    }
  };

  // this generates a random house 
  function randomHouse() {
    let houses = ["gaudmire", "erevald", "alterok", "spectreseek"];
    let randomIndex = Math.floor(Math.random() * 4);
    house = houses[randomIndex];
    displayHouse();
  };

  // this opens the house screen 
  function displayHouse() {
    if (house === "gaudmire") {
      window.location.href = "gaudmire.html";
    } else if (house === "erevald") {
      window.location.href = "erevald.html";
    } else if (house === "alterok") {
      window.location.href = "alterok.html";
    } else if (house === "spectreseek") {
      window.location.href = "spectreseek.html";
    }
  };
});
