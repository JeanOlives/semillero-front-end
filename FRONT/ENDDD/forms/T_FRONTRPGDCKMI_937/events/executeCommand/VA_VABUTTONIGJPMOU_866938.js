

//Entity: EstudianteTODOS
//EstudianteTODOS. (Button) View: EstudianteVpiForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONIGJPMOU_866938 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EstudianteTODOS = true;
    let nom = entities.EstudianteTODOS.nombre;
    let ap = entities.EstudianteTODOS.apellido;
    let edad = entities.EstudianteTODOS.edad;
    let sexo = entities.EstudianteTODOS.sexo;
    
    console.log("nombre: "+nom);
    console.log("apellido: "+ap);
    console.log("edad: "+edad);
    console.log("sexo: "+sexo);

};