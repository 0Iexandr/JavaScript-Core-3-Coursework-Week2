const root = document.querySelector('#root');

function CheckError(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw Error(response.statusText);
    };
};

function gettingHumourData() {
    fetch('https://xkcd.now.sh/?comic=latest')
    .then(CheckError)
    .then(data => {
        console.log(data);
        const img = document.createElement('img');
        
        img.src = data.img;
        root.appendChild(img);
    })
    .catch(error => console.log(error));
};

gettingHumourData();