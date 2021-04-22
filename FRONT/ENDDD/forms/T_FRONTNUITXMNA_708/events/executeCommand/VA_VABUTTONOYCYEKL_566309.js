

//Entity: EstudianteTODOS
//EstudianteTODOS. (Button) View: EstudianteLampForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONOYCYEKL_566309 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EstudianteTODOS = true;
    
    const Estudiate = entities.EstudianteTODOS;
    console.log("Nombre: " + Estudiate.nombre + ", Apellido: " + Estudiante.apellido);

};