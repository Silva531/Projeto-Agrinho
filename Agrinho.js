function calcular() {

    let cultura = document.getElementById("cultura").value;
    let quantidade = Number(document.getElementById("quantidade").value);
    let preco = Number(document.getElementById("preco").value);
    let custo = Number(document.getElementById("custo").value);

    let receita = quantidade * preco;
    let lucro = receita - custo;

    document.getElementById("resultado").innerHTML = `
        <h3>Resultado</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Receita Estimada:</strong> R$ ${receita.toFixed(2)}</p>
        <p><strong>Lucro Estimado:</strong> R$ ${lucro.toFixed(2)}</p>
    `;
}