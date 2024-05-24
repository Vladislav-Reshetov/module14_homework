const btn = document.querySelector("button");
const resultNode = document.querySelector(".picture");

const useRequest = (valueWidth, valueHeight) => {
    return fetch('https://dummyimage.com/${valueWidth}x${valueHeight}')
        .then((response) => {
            displayResult(response.url);
            return response;
        })
        .catch(() => { console.log ('error') })
};

function displayResult(linkSrc) {
    let cards = '';
    cards = cards + '<img class="image" src="${linkSrc}" alt="image">';
    resultNode.innerHTML=cards;
};

btn.addEventListener("click", async () => {
    const valueWidth = document.querySelector('.input__width').value;
    const valueHeight = document.querySelector('.input__height').value;
        if (valueWidth < 100 || valueWidth > 300 || valueHeight < 100 || valueHeight > 300 || isNaN(valueWidth) || isNaN(valueHeight)) {
            resultNode.innerHTML = "Одно из чисел вне диапазона от 100 до 300";
        } else {
            const requestResult = await useRequest(valueWidth, valueHeight);
        }
});