const empleado = document.getElementById("Empleado")
const error = document.getElementById("errorEmpleado")
const Check = document.getElementById("gridCheck")
let btnvalidar = document.getElementById("validar")

// Valores agregados a LocalStorage
localStorage.setItem(123,1);
localStorage.setItem(124,2);
localStorage.setItem(125,3);
localStorage.setItem(126,4);

// Boton validar en Login
btnvalidar.addEventListener("click",() => {
    Validar()
})

function Validar(){
    for (let i = 0; i <localStorage.length; i++){
        let NoEmpleado = localStorage.key(i)

        if (parseInt(NoEmpleado) == empleado.value) {
            error.style.color = "green";
            error.innerText = "Usuario Encontrado, disfruta de los beneficios"
            let SesionEmpleado = empleado.value;
            document.getElementById("Empleado").value = "";
            
                if (Check.checked){
                    sessionStorage.setItem(SesionEmpleado,1)
                    document.getElementById("gridCheck").checked = false;
                }
        return
        }

        if (i==4){
            error.style.color = "red";
            error.innerText = "Usuario No Valido"
        }
    }


}