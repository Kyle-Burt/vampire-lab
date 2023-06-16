// SECTION global info/arrays

const locations = [
    '🎭', '🎪', '🎢', '🏟️', '🏨',
    '🏤', '🏥', '🏭', '🏢', '🏣',
    '🏰', '🏬', '🏥', '🏦', '🏪'
]

const people = [
    {
        name: 'Jimbo',
        picture: '🤵',
        isHunter: false,
        location: ''
    },
    {
        name: 'Sammy',
        picture: '🙆‍♀️',
        isHunter: false,
        location: ''
    },
    {
        name: 'Michael',
        picture: '👷',
        isHunter: false,
        location: ''
    },
    {
        name: 'Robert',
        picture: '👷',
        isHunter: false,
        location: ''
    },
    {
        name: 'Terry',
        picture: '🤴',
        isHunter: false,
        location: '',
    },
    {
        name: 'Bill',
        picture: '🕵️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Marie',
        picture: '👩‍🍳',
        isHunter: false,
        location: '',
    },
    {
        name: 'Mykeal',
        picture: '💂',
        isHunter: false,
        location: '',
    },
    {
        name: 'Phil',
        picture: '🧜‍♂️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Wilson',
        picture: '🏐',
        isHunter: false,
        location: '',
    },
    {
        name: 'Wendy',
        picture: '👩‍⚕️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Jeremy',
        picture: '🦹',
        isHunter: false,
        location: '',
    },
    {
        name: 'Mary',
        picture: '👩‍⚖️',
        isHunter: false,
        location: '',
    }
]

// SECTION Functions

function vampireHunter() {
    let randomNumber = Math.floor(Math.random() * people.length)
    console.log(randomNumber)
    let randomPeople = people[randomNumber]
    randomPeople.isHunter = true
    console.log(randomPeople)
}

function findVampire() {
    let foundVampire = people.find(people => people.isHunter)
    console.log(foundVampire)
    return foundVampire
}

function drawPeople() {
    let randomNumber = Math.floor(Math.random() * people.length)
    let randomPeople = people[randomNumber]
    console.log(randomPeople.picture)

    const peopleLineupElement = document.getElementById(`peopleLineup`)
    peopleLineupElement.innerText = randomPeople.picture
}



// SECTION invoke functions

vampireHunter()
findVampire()
drawPeople()