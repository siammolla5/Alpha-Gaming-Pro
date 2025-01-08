function haldelkeybordbuttonpres(event) {
  const playrpreesd = event.key;
  console.log("player prees", playrpreesd);
  const disply = document.getElementById("curent-word-show");
  const expected = disply.innerText;
  const expectedChange = expected.toLowerCase();
  console.log(playrpreesd, expectedChange);

  if (playrpreesd === expectedChange) {
    console.log("you get a poin");
    console.log("you have right prees", expectedChange);
    removebackgroundcolorbyid(expectedChange);
    gamecontinue();
  } else {
    console.log("you lost a life");
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
  hiddeneliment("plyground");
  gamecontinue();
}
