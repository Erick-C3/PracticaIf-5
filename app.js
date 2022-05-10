/*
    
    info:
    limite de mascotas: 3

    comportamientos:
    - en caso de que supere el limite entonces 
        negar la solicitud

        - caso contrario entonces permitir la solicitud

*/

const LIMITE_MASCOTAS = 3;
const TIPO_MASCOTA_1 = "gatos";
const TIPO_MASCOTA_2 = "perros"

let tipoMascotas = "tipo de mascota por def";
let cantMascotas = "cant por def";

/*
    Recibe la informacion del cliente y en caso de que no cumpla con los 
    requisitos la solicitud se niega
    Requisitos:
        - cantidad de mascotas a pasear menor o igual que 3
        - solo puede ser perros o gatos
*/
function verificarSolicitud(){
    tipoMascotas = document.querySelector("#tipo_mascota").value;// perros
    cantMascotas = document.querySelector("#cantidad_mascotas").value;

    if(tipoMascotas == TIPO_MASCOTA_1 || tipoMascotas == TIPO_MASCOTA_2){
        if( cantMascotas <= LIMITE_MASCOTAS){
            document.querySelector("#respuesta_verificacion").innerHTML = `
                <h4> solicitud aceptada  </h4>
            `;
        }else{        
            document.querySelector("#respuesta_verificacion").innerHTML = `
                <h4> solicitud negada - cantidad supera el limite </h4>
            `;
        }
    }else{
        document.querySelector("#respuesta_verificacion").innerHTML = `
            <h4> tipo de mascota no valida </h4>
        `;
    }
}