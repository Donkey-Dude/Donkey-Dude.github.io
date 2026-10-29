// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

let characters = [
"Oliver",
"Denys",
"Andrew"];

let places = [
"Arapahoe Basin",
"EATON Humanities",
"the crib"];

let events = [
"lost car keys",
"got a flat tire",
"lost his wallet"];

// Partial return random string function

function returnRandomStoryString() {
const randomCharacter = randomValueFromArray(characters);
const randomPlace = randomValueFromArray(places);
const randomEvent = randomValueFromArray(events);
    let storyText = `${randomCharacter} and Liam were on their way to ${randomPlace} when Liam ${randomEvent}. ${randomCharacter} thought it was all over but Liam locked in and they both got to ${randomPlace}. ${randomCharacter} didn't want the measurement code to go to waste so he randomly shouted "300 pounds!". Liam responded with "94 Fahrenheit!" It was a strange celebration. The End.`
  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
let newStory = returnRandomStoryString();
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Liam",name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature = Math.round((94 -32)*(5/9)) + " Celsius";
    newStory = newStory.replace("300 pounds",weight);
    newStory = newStory.replace("94 Fahrenheit",temperature);
  }

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}