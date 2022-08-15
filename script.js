let pickedMain, pickedDrink, pickedDessert;

function selecionaMain(item){
    let picked = document.querySelector('.main .border');
    if (picked !== null){
        document.querySelector('.main .border .icon').classList.add('hidden')
        picked.classList.remove('border');
    }
        item.classList.toggle('border');
        document.querySelector('.main .border .icon').classList.toggle('hidden')
    
    pickedMain = document.querySelector('.main .border .option h3').innerHTML
}

function selecionaDrink(item){
    let picked = document.querySelector('.drink .border');
    if (picked !== null){
        document.querySelector('.drink .border .icon').classList.add('hidden')
        picked.classList.remove('border');
    }
        item.classList.toggle('border');
        document.querySelector('.drink .border .icon').classList.toggle('hidden')
    
    pickedDrink = document.querySelector('.drink .border .option h3').innerHTML
}

function selecionaDessert(item){
    let picked = document.querySelector('.dessert .border');
    if (picked !== null){
        document.querySelector('.dessert .border .icon').classList.add('hidden')
        picked.classList.remove('border');
    }
        item.classList.toggle('border');
        document.querySelector('.dessert .border .icon').classList.toggle('hidden');

    pickedDessert = document.querySelector('.dessert .border .option h3').innerHTML
}