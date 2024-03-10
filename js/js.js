
function img1(){

    // ao clicar na imagem menor, abre a imagem maior (funcionando!)
    document.getElementById("imgMaior").src="assets/img1.png";

    // consegui esconder a div ao clicar duas vezes sobre a imagem, não é o que quero
    var imagem1 = document.getElementById("mudarImg1");

    imagem1.addEventListener("click", function(){
        var textoA = document.getElementById("secText1");

        if(textoA.style.display == "none") {
            textoA.style.display = "block";
        }else {
            textoA.style.display = "none";
        }
    });
}

function img2() {
    document.getElementById("imgMaior").src="assets/img2.png";
}

function img3() {
    document.getElementById("imgMaior").src="assets/img3.png";
}

// Coloquei este código dentro das function (sem sucesso)
// Criei este addEventListener (sem sucesso)
imagem2.addEventListener("click", function(){
    var imagem2 = document.getElementById("mudarImg2");

    var subtitle = document.querySelector(".subtitulo2");

    subtitle.textContent = "Milkshake de frutas vermelhas";
});