const messages = [
    
    'Diego',
    'Ana',
    'Cecilia',
    'Laura',
    'Carolina',
    'Juan',
    'Antonia',
    'Jesus',
    'juanote'
];

const randomMsg = () => {

    const message = messages[Math.floor(Math.random()* messages.length)];
    console.log(message);

}

module.exports = { randomMsg };