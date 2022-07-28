let dino = document.querySelector('#dino')
let quadrado = document.querySelector('#quadrado')

function pular(){
    if(dino.classList != 'animar'){
        dino.classList.add('animar')
    }

    setTimeout(function(){
        dino.classList.remove('animar')
 
    }, 500)
}

var testarColisao = setInterval( function(){

    var topoDino = parseInt(
     window.getComputedStyle(dino).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       )

       if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoDino >= 130){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Mais sorte na proxima vez!!!')
    }

},10)