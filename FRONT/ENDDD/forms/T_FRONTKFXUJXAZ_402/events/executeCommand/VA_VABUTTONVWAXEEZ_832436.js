

//Entity: EstudianteTODOS
//EstudianteTODOS. (Button) View: EstudianteARCForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONVWAXEEZ_832436 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EstudianteTODOS = true;
    let nombre = entities.EstudianteTODOS.nombre;
    let apellido = entities.EstudianteTODOS.apellido
    console.log(nombre+" "+apellido);
};