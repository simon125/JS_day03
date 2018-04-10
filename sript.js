var string = "lorem ipsum dolor cos tam cos tam"


var lenghtOfString = string.length


var firstSpace = string.indexOf(0," ")
var secondSpace = string.indexOf(firstSpace + 1, " ")

var newString = string.substring(firstSpace, secondSpace)

console.log(firstSpace)
console.log(secondSpace)

document.write(newString)



