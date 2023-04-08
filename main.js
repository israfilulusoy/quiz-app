const quizData = [
  {
    question: "”Ateşten Gömlek” Romanın yazarı kimdir?",
    a: "Ziya Gökalp",
    b: "Ömer Seyfettin",
    c: "Halide Edip Adıvar",
    d: "Mehmet Emin Yurdakul",
    e: "Onur Aslan",
    correct: "c",
  },
  {
    question: "Türkiye’nin en eski şehri hangisidir?",
    a: "İstanbul",
    b: "Ankara",
    c: "Eskişehir",
    d: "Hakkari",
    e: "Van",
    correct: "d",
  },
  {
    question: "İlk defa Dünya Haritasını Kim Çizmiştir?",
    a: "Katip Çelebi",
    b: "Süleyman Çelebi",
    c: "Sultan Mehmet",
    d: "Piri Reis",
    e: "Osman Paşa",
    correct: "d",
  },
  {
    question: "Üç büyük dince kutsal sayılan şehir hangisidir?",
    a: "İstanbul",
    b: "Roma",
    c: " Kudüs",
    d: " Hatay",
    e: "Venedik",
    correct: "c",
  },
  {
    question: "İsveç Kralı olarak bilinen yazılım kralı kimdir?",
    a: "Fatih Kadir Akın",
    b: "İlker Kurtel",
    c: "Didem Küçükkaraaslan",
    d: "Azmi Mengü",
    e: "Mehmet Can Seyhan",
    correct: "e",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswers();

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectedAnswers() {
  answerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
  
      `;
    }
  }
});
