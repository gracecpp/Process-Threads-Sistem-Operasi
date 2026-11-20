// Tiny quiz behavior. Attach a click handler to any .quiz .choice element.
// Mark data-correct="true" on the correct button.
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.quiz .choice');
  if (!btn) return;
  const quiz = btn.closest('.quiz');
  if (quiz.classList.contains('answered')) return;
  const correct = btn.dataset.correct === 'true';
  btn.classList.add(correct ? 'correct' : 'wrong');
  if (!correct) {
    const right = quiz.querySelector('.choice[data-correct="true"]');
    if (right) right.classList.add('correct');
  }
  quiz.classList.add('answered');
});
