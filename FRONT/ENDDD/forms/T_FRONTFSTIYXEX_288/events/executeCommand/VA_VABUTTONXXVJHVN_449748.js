

//Entity: EstudianteTODOS
//EstudianteTODOS. (Button) View: EstudianteJesForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONXXVJHVN_449748 = function(  entities, executeCommandEventArgs ) {
    const Estudiante = entities.EstudianteTODOS;
    console.log("Nombre: " + Estudiante.nombre + " ,Apellido: "+Estudiante.apellido);
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EstudianteTODOS = true;

};