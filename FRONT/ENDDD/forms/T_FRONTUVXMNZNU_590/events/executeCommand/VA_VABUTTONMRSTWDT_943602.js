

//Entity: EstudianteTODOS
//EstudianteTODOS. (Button) View: EstudianteAFCLForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONMRSTWDT_943602 = function(  entities, executeCommandEventArgs ) {
    let nombreCompleto = entities.EstudianteTODOS.nombre+" "+entities.EstudianteTODOS.apellido;
    console.log(nombreCompleto);
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EstudianteTODOS = true;

};