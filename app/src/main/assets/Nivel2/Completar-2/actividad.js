var DatosActividad = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><actividad tipo="Completar">\n\n<!-- Parte generica -->\n	<color_fuente_b>0x000000</color_fuente_b>\n	<color_fuente>0xFFFFFF</color_fuente>\n	<!-- Indica que color de fondo se le pondra al flash (por defecto 0x8993A0) -->\n	<color_fondo>0x8993A0</color_fondo>\n	<!-- Indica que color se le pondra a los elementos del flash (por defecto 0x728F61) -->\n	<color_botones>0xff8a00</color_botones>\n    <!-- Indica que color de fondo se le pondra al html5 (por defecto 0x7cb139) -->\n	<color_fondo_h>0x7cb139</color_fondo_h>\n	<!-- Indica que color se le pondra a los elementos del html5 (por defecto 0xFCA800) -->\n	<color_botones_h>0xFCA800</color_botones_h>\n    <!-- Indica el logo personalizado si lo hay -->\n    <logoPersonalizado>no</logoPersonalizado>\n    <franjaPersonalizada>no</franjaPersonalizada>\n	<!-- Indica si se mostrara al alumno la respuesta correcta o no, en caso de que el alumno no supere el ejercicio -->\n	<correccion>si</correccion>\n	<numero_intentos>2</numero_intentos>\n    <puntos>100</puntos>\n	<puntos_resta>50</puntos_resta>\n	<!-- Indica si la respuesta del alumno debe ser igual a la respuesta correcta en lo referente a las mayusculas y acentos, solo en el caso de que la forma de completar sea escrita -->\n	<sensible_mayusculas>no</sensible_mayusculas>\n	<sensible_acentos>no</sensible_acentos>\n	<sensible_mayusculas_ocultar>no</sensible_mayusculas_ocultar>\n	<sensible_acentos_ocultar>no</sensible_acentos_ocultar>\n	<!-- Indica si tiene un tiempo maximo para realizar la actividad, estara definido en segundos -->\n	<tiempo maximo="0">no</tiempo>\n	\n	<autor>Tecnología Educativa</autor>\n	<descripcionUsuario>Leo el cuento: “Margarita de Baile” en clase junto con mi profesor/a.\nLuego de haber leído, debo completar las frases del cuento</descripcionUsuario>\n    <descripcionUsuarioLimpio>Leo el cuento: “Margarita de Baile” en clase junto con mi profesor/a.\nLuego de haber leído, debo completar las frases del cuento</descripcionUsuarioLimpio>\n	<origen_recursos></origen_recursos><xorigen_recursos>https://cloud.educaplay.com/recursos/108/3481558/</xorigen_recursos>\n	\n      <registro>\n		<!-- Indica el tipo de registro:\n		- script -> registro a traves de un script (php, jsp, etx)\n		- scorm -> registreo a traves de scorp\n		-->\n		<tipo>scorm</tipo>\n		<!-- Indica la url del scrip, en caso de que el tipo sea script	-->\n		<url></url>\n		<!-- Indica los parametros a pasar al script, en caso de que el tipo sea script	-->\n		<parametros>\n			<!-- La etiqueta nombre contiene el nombre del parametro a pasar -->\n			<!-- La etiqueta valor contiene el valor al que hace referencia el parametro (buscara el nombre de la varible en flash):\n			- SCORE: puntuacion de la actividad, en porcentaje\n			- TIME: tiempo de la actividad, en segundos\n			- URL: direccion de la actividad\n			-->\n			<parametro id="1">\n				<nombre>score</nombre>\n				<valor>SCORE</valor>\n			</parametro>\n			<parametro id="2">\n				<nombre>time</nombre>\n				<valor>TIME</valor>\n			</parametro>\n			<parametro id="3">\n				<nombre>url</nombre>\n				<valor>URL</valor>\n			</parametro>\n		</parametros>\n	</registro>\n    \n<!-- Parte especifica -->\n	<!-- Indica si se mostrara al alumno las palabras que estan ocultas -->\n	<ayuda>si</ayuda>\n	<!-- Indica la forma de completar los huecos, 2 opciones:\n	- escribir\n	- clickar, esta forma conlleva a que la ayuda este activada\n	-->\n	<forma_completar>clickar</forma_completar>\n	<titulo>Instrucciones</titulo>\n	\n	<tituloAplicacion>Poema</tituloAplicacion>\n	\n	<!-- Indica la forma de realizar la actividad, es decir la ayuda de la actividad -->\n	<descripcion>Intenta completar el texto con las palabras que faltan.\n        Para ello, pulsa sobre las palabras de la parte inferior en el orden correcto para completar todos los huecos.\n    \n</descripcion>\n	<enunciado>Complete este texto</enunciado>\n    <!-- parametro solo para la importación a ADR -->\n    <enunciado_edu>Poema</enunciado_edu>\n    \n	<texto>Margarita está linda la mar, \ny el viento, \nlleva esencia sutil de azahar; \nyo siento \nen el alma una alondra cantar; \ntu acento: \nMargarita, te voy a contar \nun cuento: \n \nEsto era un rey que tenía \nun palacio de diamantes, \nuna tienda hecha de día \ny un rebaño de elefantes, \nun kiosko de malaquita, \nun gran manto de tisú, \ny una gentil princesita, \ntan bonita, \nMargarita, \ntan bonita, como tú. \n \nUna tarde, la princesa \nvio una estrella aparecer; \nla princesa era traviesa \ny la quiso ir a coger. \n \nLa quería para hacerla \ndecorar un prendedor, \ncon un verso y una perla \ny una pluma y una flor. \n \nLas princesas primorosas \nse parecen mucho a ti: \ncortan lirios, cortan rosas, \ncortan astros. Son así. \n \nPues se fue la niña bella, \nbajo el cielo y sobre el mar, \na cortar la blanca estrella \nque la hacía suspirar. \n \nY siguió camino arriba, \npor la luna y más allá; \nmás lo malo es que ella iba \nsin permiso de papá. \n \nCuando estuvo ya de vuelta \nde los parques del Señor, \nse miraba toda envuelta \nen un dulce resplandor. \n \nY el rey dijo: «¿Qué te has hecho? \nte he buscado y no te hallé; \ny ¿qué tienes en el pecho \nque encendido se te ve?». \n \nLa princesa no mentía. \nY así, dijo la verdad: \n«Fui a cortar la estrella mía \na la azul inmensidad». \n \nY el rey clama: «¿No te he dicho \nque el azul no hay que cortar?. \n¡Qué locura!, ¡Qué capricho!... \nEl Señor se va a enojar». \n \nY ella dice: «No hubo intento; \nyo me fui no sé por qué. \nPor las olas por el viento \nfui a la estrella y la corté». \n \nY el papá dice enojado: \n«Un castigo has de tener: \nvuelve al cielo y lo robado \nvas ahora a devolver». \n \nLa princesa se entristece \npor su dulce flor de luz, \ncuando entonces aparece \nsonriendo el Buen Jesús. \n \nY así dice: «En mis campiñas \nesa rosa le ofrecí; \nson mis flores de las niñas \nque al soñar piensan en mí». \n \nViste el rey pompas brillantes, \ny luego hace desfilar \ncuatrocientos elefantes \na la orilla de la mar. \n \nLa princesita está bella, \npues ya tiene el prendedor \nen que lucen, con la estrella, \nverso, perla, pluma y flor. \n \n* * * \n \nMargarita, está linda la mar, \ny el viento \nlleva esencia sutil de azahar: \ntu aliento. \n \nYa que lejos de mí vas a estar, \nguarda, niña, un gentil pensamiento \nal que un día te quiso contar \nun cuento.</texto>\n    <textoLimpio>Margarita está linda la mar, \ny el viento, \nlleva esencia sutil de azahar; \nyo siento \nen el alma una alondra cantar; \ntu acento: \nMargarita, te voy a contar \nun cuento: \n \nEsto era un rey que tenía \nun palacio de diamantes, \nuna tienda hecha de día \ny un rebaño de elefantes, \nun kiosko de malaquita, \nun gran manto de tisú, \ny una gentil princesita, \ntan bonita, \nMargarita, \ntan bonita, como tú. \n \nUna tarde, la princesa \nvio una estrella aparecer; \nla princesa era traviesa \ny la quiso ir a coger. \n \nLa quería para hacerla \ndecorar un prendedor, \ncon un verso y una perla \ny una pluma y una flor. \n \nLas princesas primorosas \nse parecen mucho a ti: \ncortan lirios, cortan rosas, \ncortan astros. Son así. \n \nPues se fue la niña bella, \nbajo el cielo y sobre el mar, \na cortar la blanca estrella \nque la hacía suspirar. \n \nY siguió camino arriba, \npor la luna y más allá; \nmás lo malo es que ella iba \nsin permiso de papá. \n \nCuando estuvo ya de vuelta \nde los parques del Señor, \nse miraba toda envuelta \nen un dulce resplandor. \n \nY el rey dijo: «¿Qué te has hecho? \nte he buscado y no te hallé; \ny ¿qué tienes en el pecho \nque encendido se te ve?». \n \nLa princesa no mentía. \nY así, dijo la verdad: \n«Fui a cortar la estrella mía \na la azul inmensidad». \n \nY el rey clama: «¿No te he dicho \nque el azul no hay que cortar?. \n¡Qué locura!, ¡Qué capricho!... \nEl Señor se va a enojar». \n \nY ella dice: «No hubo intento; \nyo me fui no sé por qué. \nPor las olas por el viento \nfui a la estrella y la corté». \n \nY el papá dice enojado: \n«Un castigo has de tener: \nvuelve al cielo y lo robado \nvas ahora a devolver». \n \nLa princesa se entristece \npor su dulce flor de luz, \ncuando entonces aparece \nsonriendo el Buen Jesús. \n \nY así dice: «En mis campiñas \nesa rosa le ofrecí; \nson mis flores de las niñas \nque al soñar piensan en mí». \n \nViste el rey pompas brillantes, \ny luego hace desfilar \ncuatrocientos elefantes \na la orilla de la mar. \n \nLa princesita está bella, \npues ya tiene el prendedor \nen que lucen, con la estrella, \nverso, perla, pluma y flor. \n \n* * * \n \nMargarita, está linda la mar, \ny el viento \nlleva esencia sutil de azahar: \ntu aliento. \n \nYa que lejos de mí vas a estar, \nguarda, niña, un gentil pensamiento \nal que un día te quiso contar \nun cuento.</textoLimpio>\n	<!-- Las palabras que seran eliminadas del texto -->\n	<palabras>\n    		<palabra>24</palabra>\n    		<palabra>110</palabra>\n    		<palabra>214</palabra>\n    		<palabra>266</palabra>\n    		<palabra>416</palabra>\n    		<palabra>470</palabra>\n    		<palabra>521</palabra>\n    		<palabra>572</palabra>\n    		<palabra>620</palabra>\n    		<palabra>678</palabra>\n    		<palabra>791</palabra>\n    		<palabra>843</palabra>\n    		<palabra>950</palabra>\n    		<palabra>1000</palabra>\n    		<palabra>1174</palabra>\n    		<palabra>1123</palabra>\n    		<palabra>1291</palabra>\n    		<palabra>1350</palabra>\n    		<palabra>1415</palabra>\n    		<palabra>1471</palabra>\n    		<palabra>1528</palabra>\n    		<palabra>1586</palabra>\n    		<palabra>1635</palabra>\n    		<palabra>1690</palabra>\n    		<palabra>1859</palabra>\n    		<palabra>1990</palabra>\n    		<palabra>2055</palabra>\n    		<palabra>2109</palabra>\n    		<palabra>2152</palabra>\n    		<palabra>2221</palabra>\n    		<palabra>2268</palabra>\n    	</palabras>\n	\n    \n        <idioma>\n		<nIntentos>Num. Intentos</nIntentos>\n		<txtPuntos>Puntos</txtPuntos>\n		<txtTiempo>Tiempo</txtTiempo>\n		<txtTiempoRestante>Tiempo Restante</txtTiempoRestante>\n		<comprobar>Comprobar</comprobar>\n\n		<txtRespuestaIncorrecta>Respuesta Incorrecta</txtRespuestaIncorrecta>\n		<txtActNoSuperada>Actividad no superada</txtActNoSuperada>\n		<txtTiempoSuperado>Has superado el tiempo máximo para esta actividad</txtTiempoSuperado>\n		<txtCerrar>Cerrar</txtCerrar>\n		<txtRespuestaCorrecta>La respuesta correcta es</txtRespuestaCorrecta>\n		<txtOtrasRespuestas>Otras respuestas</txtOtrasRespuestas>\n		<txtTituloRespuestaCorrecta>Respuesta correcta</txtTituloRespuestaCorrecta>\n		<txtBoxRespuestaCorrecta>Enhorabuena has superado la actividad</txtBoxRespuestaCorrecta>\n		<txtTituloOtrasRespuestas>Otras posibles respuestas</txtTituloOtrasRespuestas>\n		<txtSuperadoNumeroIntentos>Has superado el número de intentos de esta actividad</txtSuperadoNumeroIntentos>\n		<txtTituloSuperadoNumeroIntentos>Actividad no superada</txtTituloSuperadoNumeroIntentos>\n        \n   		<txtAceptar>Aceptar</txtAceptar>\n   		<txtTituloPalabrasParaCompletar>Palabras para completar los espacios</txtTituloPalabrasParaCompletar>\n   		<txtMsgNoCompleta>No ha completado todos los huecos por lo que la respuesta no es correcta</txtMsgNoCompleta>\n		<txtMsgNoCorrecta>La respuesta introducida no es correcta</txtMsgNoCorrecta>\n		<txtPalabraYaIntroducida>La palabra introducida, ya está en otro hueco</txtPalabraYaIntroducida>\n		<txtPalabraIncorrecta>La palabra introducida no está entre las opciones restantes</txtPalabraIncorrecta>\n\n   		<txtSensibleMayusculas>Diferencia entre mayúsculas y minúsculas</txtSensibleMayusculas>\n		<txtNoSensibleMayusculas>No diferencia entre mayúsculas y minúsculas</txtNoSensibleMayusculas>\n		<txtSensibleAcentos>Sensible a acentos</txtSensibleAcentos>\n		<txtNoSensibleAcentos>No sensible a acentos</txtNoSensibleAcentos>\n		\n		<txtTiempoMaximo>Tiempo máximo</txtTiempoMaximo>\n		<txtSensible>Sensible</txtSensible>\n		<txtMayusculasMinusculas>Mayúsculas/Minúsculas</txtMayusculasMinusculas>\n		<txtAcentos>Acentos</txtAcentos>\n		<txtComenzar>Comenzar</txtComenzar>\n		<txtAutor>Autor</txtAutor>\n		<txtAyuda>Ayuda</txtAyuda>\n		<txtMostrarMas>Mostrar más</txtMostrarMas>\n		<txtMostrarMenos>Mostrar menos</txtMostrarMenos>\n		<txtReiniciar>Reiniciar</txtReiniciar>\n		<txtVolverJugar>Volver a jugar</txtVolverJugar>\n		<txtResponder>Responder</txtResponder>\n		<txtRegistrarse>Registrarse</txtRegistrarse>\n		<txtAcceder>Acceder</txtAcceder>\n		<txtCompartirResultado>Compartir resultado</txtCompartirResultado>\n		<txtAumentar>Aumentar</txtAumentar>\n		<txtReducir>Reducir</txtReducir>\n		<txtPantallaCompleta>Pantalla completa</txtPantallaCompleta>\n		<txtImprimir>Imprimir</txtImprimir>\n		<txtSocial>He obtenido [puntuacion] puntos en [tiempo] min. en la actividad [nomactividad]. ¿Puedes superarlo?</txtSocial>\n	</idioma>\n\n\n</actividad>';