const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]

const pushYourName = names.push(prompt(`What is your name???`))

const yourName = names[pushYourName-1]

const sortedNames = names.sort() 

const nameIndexPosition = names.indexOf(yourName)

// const uppercaseNames = for (const name of names) {
//     console.log(names[names.indexOf(name)].toUpperCase())
// } this does not work because this code would need to be a function 

// indexing number === names.indexOf("Mason") or any other name

// yourName is a hacky variable as it seems to change the list positioning, a better way would be:
// yourName = prompt(`What is your name???`)
// pushYourName = names.push(yourName)

const upperCaseNames = []

for (const name of names) {
         upperCaseNames.push(name.toUpperCase())
}


