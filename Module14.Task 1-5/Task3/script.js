const input = document.querySelector("input");
const btn = document.querySelector("button");
const resultNode = document.querySelector(".picture");

    function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
                
        xhr.onload = function() {
            if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
            } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
            }
            };
                
            xhr.onerror = function() {
                console.log('Ошибка! Статус ответа: ', xhr.status);
            };
                
            xhr.send();
    };
    function displayResult(apiData) {
        let cards = "";

        apiData.forEach((item) => {
        const cardBlock = `
            <div class="card">
                <img
                src="${item.thumbnailUrl}"
                class="card-image"
                />
            </div>
            `;
            cards += cardBlock;
        });

        resultNode.innerHTML = cards;
    }
    btn.addEventListener("click", function () {
        const value = document.querySelector('input').value;
        const url = "https://jsonplaceholder.typicode.com/photos?_limit=" + value;

        if (value < 1 || value > 10) {
        alert("число вне диапазона от 1 до 10");
        } else {
        useRequest(url, displayResult);
        }
    });