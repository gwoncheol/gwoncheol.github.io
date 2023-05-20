function generateWord() {
  var words = [
    "햄버거",
    "바베큐",
    "파스타",
    "피자",
    "샌드위치",
    "스테이크",
    "샐러드",
    "연어 스테이크",
    "리조또",
    "필라프",
    "스프",
    "베이글",
    "핫도그",
    "카르보나라",
    "또띠아",
    "치킨",
  ];
  // 랜덤으로 단어 선택
  var randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];

  // 선택된 단어 출력
  var wordBox = document.getElementById("word-box");
  wordBox.style.display = "block";
  wordBox.innerHTML = randomWord;
}
