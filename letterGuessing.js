const word = "guess";
let guess = "-----";
const inputMessage = `Press 'İptal' to exit.\n\nEnter a letter to find the word => `;
const win = "Congratulations! You win !";
const turkish = "tr";
const str = "";
let entered;

for (let index = 0; index < word.length; index++) {

  let status = false;

  while (true) {
    entered = prompt(`${inputMessage} ${guess}`);

    if (entered === null) {
      status = true;
      break;
    }
  
    if (entered.trim() === str) {
      continue;
    }

    entered = entered.toLocaleLowerCase(turkish);

    if (word.charAt(index) === entered) {
      guess = guess.slice(0, index) + entered + guess.slice(index + 1);
      break;
    }
  }

  if (word === guess) {
    alert(win);
    break;
  }

  if (status) {
    break;
  }

}