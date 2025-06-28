let imgExpandir = document.querySelectorAll('img');

let textDescritivo = document.querySelector('.ocultText');

imgExpandir.forEach(img => {

    img.addEventListener('click', function () {
        if(textDescritivo.style.display === 'none'|| textDescritivo.style.display === ''){
            textDescritivo.style.display = 'block'
        }else{
            textDescritivo.style.display = 'none';
        }
    });


});