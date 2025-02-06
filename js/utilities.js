/**
 * Esta función te permite hacer un reset de los campos selecciónados por el usuario.
 * No se retorna nada. recuerca que algunos valores se hace el reset a 0, otros a 1
 */
export function reset(billInput, customPercentageBtn, peopleInput, tipAmountInput, totalInput, percentageButtons) {
    billInput.value= "";
    customPercentageBtn.value = "";
    peopleInput.value = 1;
    tipAmountInput.textContent = "0";
    totalInput.textContent = "0";

    claseActivo(percentageButtons);
}


/**
 * Esta función te permite calcular el tip(propina) que se recibirá
 * por cada persona.
 * @returns el monto de tip por persona.
 */
export function calcularTip(bill, tip, people) {
    let calculoTip = 0 ;

    if(people !=0 ){
        if(tip != 0){ //verificamos puso un valor
            calculoTip = ((bill * (tip/100)) / people);
        }else{
            calculoTip = (bill * 1) / people;
        }    
    }else{
        calculoTip = 0.00;
    }

    return calculoTip.toFixed(2); //redondear a 2 decimales
}

/**
 * Calcula el total a pagar por cada persona, incluyendo el tip que
 * le corresponde.
 * @returns el monto total por persona.
 */
export function calcularTotal(bill, tip, people) {
    let porPersona = calcularTip(bill,tip,people);
    let xPersona = 0 ;

    if(people != 0 && tip !=0){
        xPersona = (bill/ people) + parseFloat(porPersona);
    }else if(people != 0 && tip === 0){
        xPersona = bill / people;
    }else{
        xPersona = 0.00;
    }
    return xPersona.toFixed(2);
}



/**
 * Valida si el valor de un campo es 0 o no, si lo es retorna true, si no, retorna false
 */
export function esCero(input) {
    if(input.value >= 1){        
        input.classList.remove('input-invalid');
        document.querySelector("#esCero").textContent ="";
        return true;
    }else{
        input.classList.add('input-invalid');
        document.querySelector("#esCero").textContent = "Can't be zero";
        return false;
    }
}


/**
 * Añade la clase "active" al elemento.
 * @param { Node } input - un elemento input de html.
 * puedes investigar sobre : uso de classList en los elementos DOM. añadir, remover.
 */
export function claseActivo(input) {
    input.forEach(boton => boton.classList.remove('active'));
}
