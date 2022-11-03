const addingButton = document.querySelector('button[data-action="add-new"]');
const list = document.querySelector('#list');

addingButton.addEventListener('click', onAddingButtonClick);

function CheckError(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw Error(response.statusText);
    };
};

function onAddingButtonClick() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(CheckError)
    .then(data => {
        const li = document.createElement('li');

        li.insertAdjacentHTML('afterbegin', `<img src=${data.message} width='300' height='240'></img>`);
        list.appendChild(li);
    })
    .catch(error => console.log(error));
};