/*
 * Archivo: VA_VABUTTONOYCYEKL_566309.java
 *
 * Esta aplicacion es parte de los paquetes bancarios propiedad de COBISCORP.
 * Su uso no autorizado queda expresamente prohibido asi como cualquier
 * alteracion o agregado hecho por alguno de sus usuarios sin el debido
 * consentimiento por escrito de COBISCORP.
 * Este programa esta protegido por la ley de derechos de autor y por las
 * convenciones internacionales de propiedad intelectual. Su uso no
 * autorizado dara derecho a COBISCORP para obtener ordenes de secuestro
 * o retencion y para perseguir penalmente a los autores de cualquier infraccion.
 */

package com.cobiscorp.cobis.front.customevents.impl.view.executecommand;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.customization.IExecuteCommand;
import com.cobiscorp.designer.api.customization.arguments.IExecuteCommandEventArgs;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

@Component
@Service({ IExecuteCommand.class })
@Properties(value={
		@Property(name = "view.id", value = "VW_ESTUDIANEE_309"),
		@Property(name = "view.version", value = "1.0.0"),
		@Property(name = "view.controlId", value = "VA_VABUTTONOYCYEKL_566309")})

public class VA_VABUTTONOYCYEKL_566309 implements IExecuteCommand {
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(VA_VABUTTONOYCYEKL_566309.class);

	@Override
	public void executeCommand(DynamicRequest entities, IExecuteCommandEventArgs arg1) {
		DataEntity entidadEstudiante = entities.getEntity(EstudianteTODOS.ENTITY_NAME);
		
		String nombre = entidadEstudiante.get(EstudianteTODOS.NOMBRE);
		String apellido = entidadEstudiante.get(EstudianteTODOS.APELLIDO);
		int edad = entidadEstudiante.get(EstudianteTODOS.EDAD);
		String sexo = entidadEstudiante.get(EstudianteTODOS.SEXO);
		try {
			if (logger.isDebugEnabled()) {
				logger.logDebug("Start executeCommand in VA_VABUTTONOYCYEKL_566309");
				logger.logDebug("Informacion recuperada: " +"Nombre: "+nombre + "\nApellido: " + apellido
						+"\nEdad: " + edad + "\nSexo: " + sexo);
			}
		} catch (Exception ex) {
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}

}

