let input = "Welcome to the oceans!"
const vowels = ["A", "E", "I", "O", "U"]
let resultArray = []

function speakWhale(string) {
  input = input.toUpperCase()

  for (i = 0; i < input.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        resultArray.push(vowels[j])
        if (input[i] === vowels[1] || input[i] === vowels[4]) {
          resultArray.push(input[i])
        }
      }
    }
  }
  return resultArray.join('')
}

console.log(speakWhale(input))