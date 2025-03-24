
//car
let carDict = {};
let lista = []

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome
       this.preco = preco
       this.alturaCacamba= alturaCacamba
       this.alturaVeiculo = alturaVeiculo
       this.alturaSolo = alturaSolo
       this.capacidadeCarga = capacidadeCarga
       this.motor = motor
       this.potencia = potencia
       this.volumeCacamba = volumeCacamba
       this.roda = roda
       this.image = image
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetcarDictPosition() {
    let list = document.querySelectorAll('input[onchange]:checked')
     lista = Array.from(list).map(cb => cb.value)
    
}

function SetCarToCompare(el, carClass) {

    if(carClass instanceof Car){       
        if(el.checked){
            carDict[el.value] = carClass;
            

            GetcarDictPosition()
           
        }
        else{
            lista = lista.filter(valor => valor !== el.value);
            delete carDict[el.value]
            
            
        }
    } else {
        
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    
    if(lista.length < 2 || lista.length > 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    Object.values(carDict).forEach((value, i) => {
        document.getElementById(`compare_modelo_${i}`).innerText = value.modelo;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = value.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = value.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).innerText = value.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = value.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).innerText = value.motor;
        document.getElementById(`compare_potencia_${i}`).innerText = value.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = value.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).innerText = value.roda;
        document.getElementById(`compare_preco_${i}`).innerText = value.preco;
    });
} 
