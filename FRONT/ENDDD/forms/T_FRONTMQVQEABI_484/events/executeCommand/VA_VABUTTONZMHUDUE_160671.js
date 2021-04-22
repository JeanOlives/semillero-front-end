

//Entity: EstudianteTODOS
//EstudianteTODOS. (Button) View: EstudianteJCGRForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONZMHUDUE_160671 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EstudianteTODOS = true;
    
    const nombre = entities.EstudianteTODOS.nombre;
    const apellido = entities.EstudianteTODOS.apellido;
    
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);

};