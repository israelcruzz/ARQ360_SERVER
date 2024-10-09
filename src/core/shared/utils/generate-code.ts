export const generateCode = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = [];

  for (let i = 1; i <= 3; i++) {
    const randomNumber = Math.floor(Math.random() * 10);

    code.push(randomNumber);
  }

  for (let i = 1; i <= 3; i++) {
    const randomNumber = Math.floor(Math.random() * letters.length);

    code.push(letters[randomNumber]);
  }

  return code.join('');
}