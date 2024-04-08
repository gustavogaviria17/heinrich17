export const generateRandomHex = (): string => {
  // Генерация случайного числа между 0 и 255 для каждого из цветов
  let color = '#';

  for (let i = 0; i < 3; i += 1) {
    // Добавление к шестнадцатеричной строке значения отдельного цвета
    color += (`0${(Math.random() * 256).toString(16)}`).slice(-2);
  }

return color;
};
