const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]

const pushYourName = names.push(prompt(`What is your name???`))

const yourName = names[pushYourName-1]

const sortedNames = names.sort() 

const nameIndexPosition = names.indexOf(yourName)

const uppercaseNames = for (const name of names) {
    console.log(names[names.indexOf(name)].toUpperCase())
}

// indexing number === names.indexOf("Mason") or any other name

// yourName is a hacky variable as it seems to change the list positioning, a better way would be:
// yourName = prompt(`What is your name???`)
// pushYourName = names.push(yourName)

