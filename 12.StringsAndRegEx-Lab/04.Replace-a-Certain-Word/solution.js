function solve() {
  let array = JSON.parse(document.getElementById('arr').value);
  let word = document.getElementById('str').value;

  let searchedWord = array[0].split(' ').filter(x => x !== '')[2];
  let resultElement = document.getElementById('result');

  for (let str of array) {
    let regex = new RegExp(searchedWord, 'gi');
    let result = str.replace(regex, word);

    let pElement = document.createElement('p');
    pElement.textContent = result;
    resultElement.appendChild(pElement);
  }
}