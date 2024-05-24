const btn = document.querySelector(".button");
const btnClear = document.querySelector(".btn__clear");
const resultNode = document.querySelector(".picture");

function displayResult(apiData) {
    let cards = "";
    apiData.forEach((item) => {
    const cardBlock = `
        <div class="card">
            <img class="card-image" src="${item.thumbnailUrl}">
            <p style="max-width: 150px; overflow: hidden;">${item.title}</p>
        </div>
    `;
    cards += cardBlock;
    });
    resultNode.innerHTML = cards;
    }
            
    const images = localStorage.getItem('cards');
    if(images) {      
    displayResult(JSON.parse(images));
    }

    btn.addEventListener("click", async () => {
    const valuePage = document.querySelector('.input__page').value;
    const valueLimit = document.querySelector('.input__limit').value;
              
    let pageExam = valuePage >= 1 && valuePage <= 10;
    let limitExam = valueLimit >= 1 && valueLimit <= 10;
               
    if (pageExam && limitExam) {
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${valuePage}&_limit=${valueLimit}`)
            .then((response) => {
                console.log('response', response);     
                    return response.json();
            })
            .then((data) => {
                displayResult(data);
                localStorage.setItem('cards', JSON.stringify(data));
            }) 
            .catch(() => { console.log('error') })
                        
        } else if (pageExam && !limitExam) {
            resultNode.innerHTML = "Лимит вне диапазона от 1 до 10";
        } else if (!pageExam && limitExam) {
            resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10";
        } else {
            resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
        }
    });
    btnClear.addEventListener("click", () => {
        localStorage.clear();
        alert('Данные из localStorage удалены');
    });