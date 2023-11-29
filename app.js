
const hello = document.querySelector('.hello');

document.querySelector('.button').addEventListener('click', () => {
    const input = document.querySelector('.input').value;
    hello.insertAdjacentHTML("beforeend", input)
    document.querySelector('input').value= '' ;
})
