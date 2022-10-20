let result = document.querySelector('.main--result');

function removeBorder() {
    document.querySelector('.main--right-index.magreza').classList.remove('checked');
    document.querySelector('.main--right-index.normal').classList.remove('checked');
    document.querySelector('.main--right-index.sobrepeso').classList.remove('checked');
    document.querySelector('.main--right-index.obesidade').classList.remove('checked');
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let height = document.querySelector('.main--height').value;
    let weight = document.querySelector('.main--weight').value;

    let newHeight = height * height;
    let imc = (weight / newHeight).toFixed(1);

    result.style.display = 'block';

    result.innerHTML = 
    `O seu IMC é de: <span>${imc}</span> <br/>
    Veja o seu índice ao lado (ou abaixo).`;

    if(imc <= 18.5) {
        document.querySelector('.main--result span').style.color = '#32323d6b';
        removeBorder();
        document.querySelector('.main--right-index.magreza').classList.add('checked');
    } else if(imc > 18.5 && imc <= 24.9) {
        document.querySelector('.main--result span').style.color = '#17ac17';
        removeBorder();
        document.querySelector('.main--right-index.normal').classList.add('checked');
    } else if(imc > 24.9 && imc <= 30) {
        document.querySelector('.main--result span').style.color = '#ebb758';
        removeBorder();
        document.querySelector('.main--right-index.sobrepeso').classList.add('checked');
    } else if(imc > 30 && imc <= 99) {
        document.querySelector('.main--result span').style.color = '#FF0000';
        removeBorder();
        document.querySelector('.main--right-index.obesidade').classList.add('checked');
    }
})