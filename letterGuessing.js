const word = "guess";
let guess = "-----";
const inputMessage = `Press 'İptal' to exit.\n\nEnter a letter to find the word => `;
const win = "Congratulations! You win !";
const turkish = "tr";
const str = "";
let entered;
let counter = 0;

while (true) {
  entered = prompt(`${inputMessage} ${guess}`);

  if (entered === null) {
    break;
  }

  entered = entered.trim();

  if (entered === str) {
    continue;
  }

  entered = entered.toLocaleLowerCase(turkish);

  if (word.charAt(counter) === entered) {
    guess = guess.slice(0, counter) + entered + guess.slice(counter + 1);
    counter++;
  }

  if (word === guess) {
    alert(win);
    break;
  }

}