const makeRequest = (valueWidth, valueHeight) => {
    return fetch(`https://dummyimage.com/${valueWidth}x${valueHeight}/`)
    .then((response) => { 
        return response;
    })
    .catch(() => { 
        document.querySelector('.picture').innerHTML = 'Error';
        console.log('error');
    });
}

let btn = document.querySelector('.button');

btn.addEventListener('click', async () => {
    const valueWidth = parseInt(document.querySelector('.input__width').value);
    const valueHeight = parseInt(document.querySelector('.input__height').value);
    if (!(100 <= valueWidth <= 300) || !(100 <= valueHeight <= 300)) {
        document.querySelector('.picture').innerHTML = 'Одно из чисел вне диапазона от 100 до 300';
    } else {
        const requestResult = await makeRequest(valueWidth, valueHeight);

        document.querySelector('.picture').innerHTML += `<img src="${requestResult.url}">`;  
    }
});
