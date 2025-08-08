let contador = 0;

document.getElementById("aumentarbtn").addEventListener("click", () => {
    contador++;
    document.getElementById("contador").textContent = contador;
});
document.getElementById("diminuirbtn").addEventListener("click", () => {
    contador--;
    document.getElementById("contador").textContent = contador;
})
document.getElementById("zerarbtn").addEventListener("click", () => {
    contador = 0;
    document.getElementById("contador").textContent = contador;
})
