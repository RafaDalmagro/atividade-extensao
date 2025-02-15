document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("agricultores-container");

    async function carregarAgricultores() {
        try {
            const response = await fetch("./data/agricultores.json");
            if (!response.ok) {
                throw new Error("Erro ao carregar os dados dos agricultores.");
            }
            const agricultores = await response.json();
            exibirAgricultores(agricultores);
        } catch (error) {
            console.error(error);
            container.innerHTML = `<p class="text-danger text-center">Erro ao carregar os dados.</p>`;
        }
    }

    function exibirAgricultores(agricultores) {
        agricultores.forEach(agricultor => {
            const card = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="images/${agricultor.foto}" class="card-img-top" alt="${agricultor.nome}">
                        <div class="card-body">
                            <h5 class="card-title">${agricultor.nome}</h5>
                            <p class="card-text">${agricultor.resumo}</p>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }

    carregarAgricultores();
});