document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.quiz-step');
  const nextButtons = document.querySelectorAll('.next-btn');
  const form = document.getElementById('quiz-form');
  let currentStep = 0;

  const showStep = (index) => {
    steps.forEach((step, i) => {
      step.classList.toggle('d-none', i !== index);
      step.classList.toggle('active', i === index);
    });
  };

  nextButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentStep++;
      if (currentStep < steps.length) {
        showStep(currentStep);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо! Ваша заявка отправлена.');
    form.reset();
    currentStep = 0;
    showStep(currentStep);
  });

  showStep(currentStep);
});