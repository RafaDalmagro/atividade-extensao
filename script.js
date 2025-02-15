document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("agricultores-container");

    const agricultores = [
        {
            nome: "Luana e João, os Jovens do Orgânico",
            resumo: "Luana e João são um casal na casa dos 30 anos que largou a vida corrida da cidade para se dedicar à agricultura sustentável. Eles transformaram um terreno abandonado em um modelo de cultivo orgânico, produzindo alfaces, cenouras e tomates livres de pesticidas.",
            foto: "luana_joao.jpg"
        },
        {
            nome: "Dona Rosa das Flores",
            resumo: "Dona Rosa, uma mulher de 45 anos, é a responsável por colorir a feira com seus arranjos florais deslumbrantes. Desde girassóis dourados até margaridas delicadas, suas flores enchem o ambiente de vida e perfume.",
            foto: "dona_rosa.jpg"
        },
        {
            nome: "Dona Celina da Serra",
            resumo: "Dona Celina é uma senhora de 68 anos, conhecida por suas mãos mágicas no cultivo de ervas medicinais. Descendente de uma longa linhagem de curandeiros, ela aprendeu com a avó a preparar chás e pomadas que aliviam dores e curam males.",
            foto: "celina_serra.jpg"
        },
        {
            nome: "Seu Bento do Vale Verde",
            resumo: "Seu Bento é um veterano de 75 anos, que dedicou a vida ao cultivo de frutas tropicais. Ele planta desde os 10 anos no mesmo pedaço de terra fértil que herdou do pai. Mangas, abacates e bananas ocupam sua banca, que atrai filas de moradores.",
            foto: "bento_verde.jpg"
        },
        {
            nome: "Tio Zeca do Mel",
            resumo: "Tio Zeca, um apicultor de 50 anos, é o mestre dos doces da feira. Com um chapéu de palha e um sorriso acolhedor, ele vende mel puro e própolis das colmeias que cuida como se fossem família.",
            foto: "tio_zeca.jpg"
        }
    ];

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
    exibirAgricultores(agricultores);
});