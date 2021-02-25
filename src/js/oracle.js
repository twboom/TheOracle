let oracle = [];
oracle.responses = [];
fetch('assets/response.json')
    .then(response => response.json())
    .then(data => oracle.responses = data);

const questionField = document.querySelector('#question');
const answerField = document.querySelector('#answer');

Object.defineProperty(window, 'ask', {
  get: function() {
    const ans = answer();
    console.log('You asked: ' + questionField.value);
    console.log(ans);
    answerField.innerHTML = ans;
  }
});

function answer() {
    if (questionField.value === '') { return oracle.responses.empty[Math.floor(Math.random() * oracle.responses.empty.length)] }
    else {
        return oracle.responses.filled[Math.floor(Math.random() * oracle.responses.filled.length)]
    }
}