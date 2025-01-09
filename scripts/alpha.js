function haldelkeybordbuttonpres(event) {
  const playrpreesd = event.key;
  console.log("player prees", playrpreesd);
  if (playrpreesd === "Escape") {
    gameOver();
  }
  const disply = document.getElementById("curent-word-show");
  const expected = disply.innerText;
  const expectedChange = expected.toLowerCase();
  console.log(playrpreesd, expectedChange);

  if (playrpreesd === expectedChange) {
    console.log("you get a poin");

    // const currentscor = document.getElementById("score-text");
    // const courrentscorText = currentscor.innerText;
    // const courrenscornumber = parseInt(courrentscorText);
    // console.log(courrenscornumber);
    const currentscor = scoreElimentById("score-text");
    const newscore = currentscor + 1;
    setScorById("score-text", newscore);

    /////////////////////////////////////////////////////
    ////////////////////////////////////////////////

    console.log("you have right prees", expectedChange);
    removebackgroundcolorbyid(expectedChange);
    gamecontinue();
  } else {
    console.log("you lost a life");
    // const curentlife = document.getElementById("curret-life");
    // const curentlifeText = curentlife.innerText;
    // const curentlifeTextChange = parseInt(curentlifeText);
    // console.log(curentlifeTextChange);

    const lifeScore = scoreElimentById("curret-life");
    const newlifescour = lifeScore - 1;
    setScorById("curret-life", newlifescour);
    if (newlifescour === 0) {
      gameOver();
    }
  }
}
document.addEventListener("keyup", haldelkeybordbuttonpres);

function gamecontinue() {
  const alphabet = rendomAlphabet();
  //console.log("rendom alphasbet", alphabet);
  /////////////////////////////////////////
  const disply = document.getElementById("curent-word-show");
  disply.innerText = alphabet;

  setbackgroundcolorbyid(alphabet);
}

function play() {
  elimentbyid("home-scren");
  elimentbyid("scor");
  hiddeneliment("plyground");

  setScorById("curret-life", 5);
  setScorById("score-text", 0);

  gamecontinue();
}

function gameOver() {
  elimentbyid("plyground");
  hiddeneliment("scor");
  const lastScorText = document.getElementById("score-text");
  const lastscor = lastScorText.innerText;
  // console.log("last scor", lastscor);
  setScorById("last-scor", lastscor);

  const currentAlphabet = getElementTextById("curent-word-show");
  removebackgroundcolorbyid(currentAlphabet);
}
