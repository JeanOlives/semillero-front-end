

//Entity: EstudianteTODOS
//EstudianteTODOS. (Button) View: EstudianteMAPLForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONQIYELDU_156803 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    let entidad =entities.EstudianteTODOS;
    console.log("Hola " + entidad.nombre+ " " +entidad.apellido);

};