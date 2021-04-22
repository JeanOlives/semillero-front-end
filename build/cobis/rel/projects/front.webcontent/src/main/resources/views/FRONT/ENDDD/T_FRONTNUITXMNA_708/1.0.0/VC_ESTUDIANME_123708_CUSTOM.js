/* variables locales de T_FRONTNUITXMNA_708*/

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

    
        var task = designerEvents.api.estudiantelampform;
    

    //"TaskId": "T_FRONTNUITXMNA_708"


    	

//Entity: EstudianteTODOS
//EstudianteTODOS. (Button) View: EstudianteLampForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONOYCYEKL_566309 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.EstudianteTODOS = true;
    
    const Estudiate = entities.EstudianteTODOS;
    console.log("Nombre: " + Estudiate.nombre + ", Apellido: " + Estudiante.apellido);

};



}));
