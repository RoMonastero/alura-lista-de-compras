import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
    if(inputItem.value === ""){
        alert("Por favor, insira um item!");
        return
    }

    const itemDalista = document.createElement("li"); // Cria um elemento HTML
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container"); // Adiciona uma classe ao elemento HTML
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function(){
        if(inputCheckbox.checked){
            nomeItem.style.textDecoration = "line-through";
        }else{
            nomeItem.style.textDecoration = "none"
        }
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDalista.appendChild(containerItemDaLista);

    const itemData = document.createElement("p");

    itemData.classList.add("texto-data")

    const dataCompleta = gerarDiaDaSemana();

    itemData.innerText = dataCompleta;

    itemDalista.appendChild(itemData);

    return itemDalista;
    
}