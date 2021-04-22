

//Entity: EstudianteTODOS
//EstudianteTODOS. (Button) View: EstudianteDsyForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONMYGZIEQ_326726 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EstudianteTODOS = true;
    const Estudiante = entities.EstudianteTODOS;
    console.log("Nombre: " + Estudiante.nombre + " ,Apellido: "+Estudiante.apellido)

};