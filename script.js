const jokes = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()
async function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const respond = await fetch('https://icanhazdadjoke.com', config)
    const data = await respond.json()
    jokes.innerHTML = data.joke

}