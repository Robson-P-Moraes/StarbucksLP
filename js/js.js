var imagem1 = document.getElementById("mudarImg1");
var h2_text1 = document.querySelector(".h2_text1");
var text1 = document.querySelector(".text1");
var imgMaior = document.getElementById("imgMaior");
var text = document.getElementById ("secText3");

function img1(){

    // ao clicar na imagem menor, abre a imagem maior (funcionando!)
    document.getElementById("imgMaior").src="assets/img1.png";
    
    h2_text1.innerHTML = "Café verde";

    text1.textContent = "O café colombiano exala um aroma irresistível, com notas delicadas e um sabor encorpado que cativa os sentidos. Cultivado nas altas montanhas colombianas, seu caráter único reflete o cuidado artesanal dos produtores, resultando em uma bebida exuberante que agrada paladares ao redor do mundo.";

    

    // consegui esconder a div ao clicar duas vezes sobre a imagem, não é o que quero
    
    

    // imagem1.addEventListener("click", function(
        
    // ){
    //     
    //     var textoA = document.getElementById("secText1");
        

    //     
    //     // if(textoA.style.display == "none") {
    //     //     textoA.style.display = "block";
    //     // }else {
    //     //     textoA.style.display = "none";
    //     // }
    // });
}

function img2() {
    document.getElementById("imgMaior").src="assets/img2.png";

    h2_text1.innerHTML = "Milkshake de morango";

    text1.textContent = "O milkshake de morango é uma sinfonia de sabores, onde a doçura dos morangos frescos se mistura à cremosidade do leite e ao toque suave do gelado. Sua cor vibrante e textura aveludada proporcionam uma experiência refrescante e indulgente, que conquista paladares com sua simplicidade e delicioso aroma frutado."
}

function img3() {
    document.getElementById("imgMaior").src="assets/img3.png";
    

    h2_text1.innerHTML = "Café com notas de frutas vermelhas";

    text1.textContent = "Este café exala um aroma envolvente, onde notas sutis de frutas vermelhas dançam delicadamente sobre o paladar. Com sua acidez brilhante e corpo aveludado, cada gole revela uma harmonia única de framboesas e amoras, criando uma experiência sensorial memorável para os apreciadores mais exigentes.";
}