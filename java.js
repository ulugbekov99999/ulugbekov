// Переменные
let score = 0; // Текущие очки
let clicks = 0; // Количество кликов в текущем задании
let taskGoal = 100; // Цель задания

// Элементы страницы
const scoreElement = document.getElementById('score');
const progressElement = document.getElementById('progress');
const taskTextElement = document.getElementById('taskText');
const rewardElement = document.getElementById('reward');
const clickButton = document.getElementById('clickButton');

// Обработчик кликов
clickButton.addEventListener('click', () => {
  // Увеличиваем очки
  score++;
  scoreElement.textContent = score;

  // Увеличиваем клики в задании
  clicks++;
  progressElement.textContent = `${clicks}/${taskGoal}`;

  // Проверяем выполнение задания
  if (clicks >= taskGoal) {
    completeTask();
  }
});

// Завершение задания
function completeTask() {
  // Показываем награду
  rewardElement.classList.remove('hidden');
  score += 100; // Награда за выполнение задания
  scoreElement.textContent = score;

  // Сбрасываем задание
  setTimeout(() => {
    rewardElement.classList.add('hidden'); // Прячем награду
    clicks = 0; // Сбрасываем клики
    taskGoal += 100; // Увеличиваем цель для следующего задания
    taskTextElement.textContent = `Сделайте ${taskGoal} кликов!`;
    progressElement.textContent = `${clicks}/${taskGoal}`;
  }, 2000);
}
