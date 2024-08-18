const marcas = ['Volkswagen', 'Toyota', 'Honda'];
const modelos = {
    'Volkswagen': ['Gol', 'Polo', 'Jetta'],
    'Toyota': ['Corolla', 'Hilux', 'Camry'],
    'Honda': ['Civic', 'HR-V', 'City']
};
const anos = [2023, 2022, 2021, 2020, 2019];
const cores = ['Prata', 'Preto', 'Branco', 'Vermelho'];

const selectMarca = document.getElementById('marcas');
const selectModelo = document.getElementById('modelos');
const selectAno = document.getElementById('ano');
const selectAnoFabricacao = document.getElementById('anof');
const selectVersao = document.getElementById('versao');
const selectCor = document.getElementById('cor');
const form = document.getElementById('formCarro');

function popularSelect(select, options) {
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
}

function popularModelosPorMarca(marca) {
    selectModelo.innerHTML = ''; // Limpa as opções anteriores
    if (marca in modelos) {
        popularSelect(selectModelo, modelos[marca]);
    }
}

// Popular os selects iniciais
popularSelect(selectMarca, marcas);
popularSelect(selectAno, anos);
popularSelect(selectAnoFabricacao, anos);
popularSelect(selectCor, cores);

// Atualizar modelos quando a marca é alterada
selectMarca.addEventListener('change', () => {
    popularModelosPorMarca(selectMarca.value);
});

// Enviar o formulário (implemente a lógica de envio para o servidor)
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Aqui você implementaria a lógica para enviar os dados para o servidor
    const data = {
        marca: selectMarca.value,
        modelo: selectModelo.value,
        ano: selectAno.value,
        anoFabricacao: selectAnoFabricacao.value,
        versao: selectVersao.value,
        cor: selectCor.value
    };
    console.log(data); // Exemplo: console.log para verificar os dados
});
