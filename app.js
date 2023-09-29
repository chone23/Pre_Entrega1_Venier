function validarNota(){
    let nota= true;
    while(nota){
        nota1 = parseFloat( prompt("ingrese nota 1:"));
        nota2 = parseFloat( prompt("ingrese nota 2:"));
        nota3 = parseFloat( prompt("ingrese nota 3:"));
        
        if(nota1 >= 0 && nota1 <= 10 &&nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10){

            let notaFinal = (nota1 + nota2 + nota3) / 3;

             console.log(`la nota final es: ${notaFinal}`);
             
             alert(`la nota final es: ${notaFinal}`)

             nota=false;
        }else{

            alert("por favor, infrese nota valida")

            nota=true;

        }
    }
}
function calcularNotaFinal(){
    let contador =3;

    while (contador > 0 ){
        validarNota();2
        contador--;
    }

}
calcularNotaFinal();