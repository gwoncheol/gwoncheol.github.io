function generateWord() {
  var words = [
    "떡갈비",
    "닭갈비",
    "청국장",
    "삼계탕",
    "매운탕",
    "비빔밥",
    "보쌈",
    "간장게장",
    "족발",
  ];
  // 랜덤으로 단어 선택
  var randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];

  // 선택된 단어 출력
  var wordBox = document.getElementById("word-box");
  wordBox.style.display = "block";
  wordBox.innerHTML = randomWord;
}
