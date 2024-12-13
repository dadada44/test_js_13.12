const zbozi = ["voda",  "cukr", "jabluko"];
const cena = [45, 54, 12]
const kosik = [];

function vypis(array, output){
    document.getElementById(output).innerHTML = "";
    for(let i =0; i<array.length; i++){
        document.getElementById(output).innerHTML += zbozi[i] + " "+ cena[i] + "<br>";
    }
}

vypis(zbozi, "zbozi");
vypis(kosik, "kosik")

function Add(){
    const input = document.getElementById("add-component");
    if((input.value<=zbozi.length) && (input.value> 0) && (!isNaN(input.value))){
        kosik.push(zbozi[input.value -1]);  
        zbozi.splice(input.value - 1, 1);
    }
    else{
        alert("Chyba");
    }

    vypis(kosik, "kosik"); 
    vypis(zbozi, "zbozi");   
}

function Odeber() { 
    const select = document.getElementById("kosik"); 
    const index = select.selectedIndex; 
    
    console.log("index = ", index);

    if (index >= 0) { 
        zbozi.push(kosik[index]); 
        kosik.splice(index, 1); 
        updateKosikOptions(); 
    } else { 
        alert("Chyba");
    } 

    vypis(kosik, "kosik"); 
    vypis(zbozi, "zbozi");
}

