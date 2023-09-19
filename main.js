var imagens = ["1.jpg", "2.jfif", "3.jfif", "4.jfif"];
var texto = ["Minha família", "Meu baby", "Linguado", "Sebastião"];
var i = 0;
function proximo() {
    i++
    document.getElementById("fotos").src = imagens[i];
    document.getElementById("legenda").innerHTML = texto[i];
}