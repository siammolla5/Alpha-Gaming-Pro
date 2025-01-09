function elimentbyid(eliments) {
  const eliment = document.getElementById(eliments);
  eliment.classList.add("hidden");
}

function hiddeneliment(hidden) {
  const eliment = document.getElementById(hidden);
  eliment.classList.remove("hidden");
}
function setbackgroundcolorbyid(elementid) {
  const element = document.getElementById(elementid);
  element.classList.add("bg-orange-400");
}
function removebackgroundcolorbyid(elementid) {
  const element = document.getElementById(elementid);
  element.classList.remove("bg-orange-400");
}
//////////////////////////////////////////////////////////////

/// Score function make///

function scoreElimentById(elementid) {
  const score = document.getElementById(elementid);
  const scoreText = score.innerText;
  const scoreTextChange = parseInt(scoreText);
  return scoreTextChange;
}

function setScorById(elementid, value) {
  const element = document.getElementById(elementid);
  element.innerText = value;
}

function getElementTextById(elementid) {
  const element = document.getElementById(elementid);
  const text = element.innerText;
  return text;
}
////////////////////////////////////////////////

/////////////////////////////////////
function rendomAlphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetsplit = alphabet.split("");
  // console.log(alphabetsplit);

  const randomnumber = Math.random() * 25;
  const index = Math.round(randomnumber);

  const words = alphabetsplit[index];
  // console.log(index, words);
  return words;
}
