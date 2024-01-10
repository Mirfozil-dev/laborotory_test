// Функция сериализации
function serialize(array) {
    return array.map(num => String.fromCharCode(num)).join('');
  }
  
  // Функция десериализации
  function deserialize(str) {
    return str.split('').map(char => char.charCodeAt(0));
  }
  
  // Функция для вычисления коэффициента сжатия
  function compressionRatio(original, compressed) {
    return (1 - (compressed.length / original.length)) * 100;
  }
  
  // Тесты
  const tests = [
    [1, 2, 3, 4, 5], // Простейший короткий тест
    Array.from({length: 50}, () => Math.floor(Math.random() * 300) + 1), // Случайные 50 чисел
    Array.from({length: 100}, () => Math.floor(Math.random() * 300) + 1), // Случайные 100 чисел
    Array.from({length: 500}, () => Math.floor(Math.random() * 300) + 1), // Случайные 500 чисел
    Array.from({length: 1000}, () => Math.floor(Math.random() * 300) + 1), // Случайные 1000 чисел
    Array.from({length: 1000}, () => Math.floor(Math.random() * 9) + 1), // Граничный случай - все числа из одной цифры
    Array.from({length: 1000}, () => Math.floor(Math.random() * 90) + 10), // Граничный случай - все числа из двух цифр
    Array.from({length: 1000}, () => Math.floor(Math.random() * 900) + 100), // Граничный случай - все числа из трех цифр
    Array.from({length: 300}, (_, index) => index % 3 + 1).flat(), // Каждое число по три раза
  ];
  
  // Выполнение тестов
  tests.forEach(test => {
    const originalString = JSON.stringify(test);
    const compressedString = serialize(test);
    const ratio = compressionRatio(originalString, compressedString);
    
    console.log('Исходная строка:', originalString);
    console.log('Сжатая строка:', compressedString);
    console.log('Коэффициент сжатия:', ratio.toFixed(2) + '%');
  });
  