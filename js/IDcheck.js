/*  *******************************
 * @title IDcheck
 * @version 1.0
 * @author Gab Ortíz
 ******************************* */

 // VARIABLES

 do {
    var nombreCompleto = prompt ("Nombre completo del ciudadano");
    var dniValid = prompt ("DNI del ciudadano");
    dniValid = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var check = validID (this.dniValid);

 switch (true) {

   case dniValid < 0:
   case dniValid.length !== 8:
   case dniValid === "":

   if (dniValid === "salir") {
       alert("Adios!");
       break;
     }
     alert("ATENCIÓN!! El DNI suministrado no es correcto.");
     break;
     default:
     resultado = nombreCompleto + dniValid;
     validID.push(resultado); 
              }
    } while (numeroDni !== "salir");

    for (var dni of dniValid) {
     document.write(dni + "<br>");
   }
          
           
//Clases 

class Ciudadano {
  constructor (nombreCompleto, dniValid){
    this.nombreCompleto = nombreCompleto;
    this.dniValid = dniValid;
  }

  policia (check) {
    if (check) {
      document.write (`El N° de DNI ${this.dniValid} de ${this.nombreCompleto} es un ID válida`);
      else{
      document.write (`El N° de DNI ${this.dniValid} de ${this.nombreCompleto} NO es un ID válida`);
      }
    }
  }
}

function check (dniValid){
  var validID = (nombreCompleto+dniValid);

}
