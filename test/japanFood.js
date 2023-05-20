function generateWord() {
  var words = [
    "우동",
    "초밥",
    "라멘",
    "덴푸라",
    "오코노미야키",
    "차즈케",
    "오뎅",
  ];
  // 랜덤으로 단어 선택
  var randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];

  // 선택된 단어 출력
  var wordBox = document.getElementById("word-box");
  wordBox.style.display = "block";
  wordBox.innerHTML = randomWord;
}
