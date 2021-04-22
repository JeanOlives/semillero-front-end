/* variables locales de T_FRONTVCHUGMDN_844*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.estudianteofva;
    

    //"TaskId": "T_FRONTVCHUGMDN_844"


    	

//Entity: EstudianteTODOS
//EstudianteTODOS. (Button) View: EstudianteOFVA
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONOGBLEXO_986277 = function(  entities, executeCommandEventArgs ) {

    const Estudiante = entities.EstudianteTODOS;
    console.log("Nombre: " + Estudiante.nombre + " ,Apellido: "+Estudiante.apellido);
    
    executeCommandEventArgs.commons.execServer = true;
    
};



}));
