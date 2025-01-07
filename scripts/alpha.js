function gamecontinue() {
  const alphabet = rendomAlphabet();
  console.log("rendom alphasbet", alphabet);
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
