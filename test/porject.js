function generateWord() {
  var words = ["비빔밥", "김치찌개", "불고기", "매운탕", "갈비"];
  // 랜덤으로 단어 선택
  var randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];

  // 선택된 단어 출력
  var wordBox = document.getElementById("word-box");
  wordBox.style.display = "block";
  wordBox.innerHTML = randomWord;
}
