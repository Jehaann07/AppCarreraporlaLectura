var idInterval=0;function crear()
{var divContentElementos=$("<div>",{id:"contentElementos","class":"cardWrapper "+claseCartas+" "+claseTamCartas});$('#lienzo').append(divContentElementos);cargar();}
function cargar()
{var countAudio=0;mostrados=[];var repetido=0;for(i=0;i<gruposD.length;i++){repetido=1;aleatorio=0;while(aleatorio>=gruposD.length||repetido==1){aleatorio=parseInt(100*Math.random());repetido=0;for(j=0;j<mostrados.length;j++){if(mostrados[j]==aleatorio)repetido=1;}}
mostrados[i]=aleatorio;var divElemento=$("<div>",{id:"elemento"+i,"class":"block-card cardContainer"});$('#contentElementos').append(divElemento);var divCard=$("<div>",{id:"card"+i,"class":"card"});$('#elemento'+i).append(divCard);var divCardFront=$("<div>",{id:"cardFront"+i,"class":"front"});$('#card'+i).append(divCardFront);var divCardFrontCont=$("<div>",{id:"cardFrontCont"+i,"class":"cardTxt"});$('#cardFront'+i).append(divCardFrontCont);var divCardBack=$("<div>",{id:"cardBack"+i,"class":"back"});$('#card'+i).append(divCardBack);var divCardBackCont=$("<div>",{id:"cardBackCont"+i,"class":"cardTxt"});$('#cardBack'+i).append(divCardBackCont);if(gruposD[aleatorio]["elemento_Tipo"]=="TEXTO"){$("#cardBackCont"+i).html("<div class='cardContent cardTxt'><div class='scrollbox'>"+gruposD[aleatorio]["elemento_Valor"]+"</div></div>");}
else if(gruposD[aleatorio]["elemento_Tipo"]=="IMAGEN"){var src=rutaRecursos+gruposD[aleatorio]["elemento_Valor"];$("#cardBackCont"+i).html("<div class='cardContent cardImage'><img src='"+src+"' width='259' height='194'></div>");}
else if(gruposD[aleatorio]["elemento_Tipo"]=="AUDIO"){var cadenaAudio="<div class='pistaAudio' id='pAudio_"+countAudio+"'>";cadenaAudio+="<div id='audioTag_"+countAudio+"'></div>";cadenaAudio+="<div class='soundPlayer' id='btnAudio_"+countAudio+"' data-orden='"+countAudio+"'>";cadenaAudio+="<div class='errorSound' id='errorAudio_"+countAudio+"'></div>";cadenaAudio+="<a href='#' class='btn' id='audioOK_"+countAudio+"'><span id='iconoAudio_"+countAudio+"' class='iPlayerReducido iPlay'></span></a>";cadenaAudio+="</div>";cadenaAudio+="</div>";$("#cardBackCont"+i).html("<div class='cardContent cardSound'><button class='soundCard' data-element='"+countAudio+"'></button><div style='display:none' class='cardContent cardSound'>"+cadenaAudio+"</div></div>");var rutaAudio=rutaRecursos+gruposD[aleatorio]["elemento_Valor"];var rutaAudioOgg=rutaRecursosInicio+gruposD[aleatorio]["elemento_Valor"];var audioCadena="<audio id='pistaAudio_"+countAudio+"'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores("+countAudio+",0);' type='audio/ogg'></source></audio>";$('#audioTag_'+countAudio).html(audioCadena);$('#btnAudio_'+countAudio).show();$('#btnAudio_'+countAudio).click(function(e){e.preventDefault();gestionReproducir("pistaAudio_"+$(this).attr('data-orden'),"iconoAudio_"+$(this).attr('data-orden'),1);});countAudio++;}
numAudios=countAudio;}
if(cartasOcultas=='1'){$('.card').bind("click",gestionToogle);soundClick=0;$('.soundCard').click(function(e){soundClick=1;e.stopPropagation();if($(this).hasClass('sound-active')){$('.card').bind("click",gestionToogle);$('.cardOk').unbind('click');}
else $('.card').unbind("click");$(this).toggleClass('sound-active');$('#btnAudio_'+$(this).attr('data-element')).click();});}
else{$('.card').addClass('flipped');$('.card').bind("click",gestionToogle2);soundClick=0;$('.soundCard').click(function(e){soundClick=1;e.stopPropagation();if($(this).hasClass('sound-active')){$('.card').bind("click",gestionToogle2);$('.cardOk').unbind('click');if($(this).parent().parent().parent().parent().hasClass('cardOk'))soundClick=0;}
else{$('.card').unbind("click");}
$(this).toggleClass('sound-active');$('#btnAudio_'+$(this).attr('data-element')).click();});}
$(".front").css('background-color',colorFondo);};function extraerDatos()
{tipo_actividad="RelacionarMosaico";sensible_mayusculas="noDefinido";sensible_acentos="noDefinido";sensible_mayusculas_ocultar="si";sensible_acentos_ocultar="si";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
try{botonReinicio=xmlDoc.getElementsByTagName("boton_reiniciar")[0].childNodes[0].nodeValue;}catch(e){botonReinicio='visible';}
try{colorFuente=xmlDoc.getElementsByTagName("color_fuente")[0].childNodes[0].nodeValue;colorFuenteB=xmlDoc.getElementsByTagName("color_fuente_b")[0].childNodes[0].nodeValue;colorFuenteInt=colorFuente.substring(2,colorFuente.length);colorFuente="#"+colorFuente.substring(2,colorFuente.length);colorFuenteB="#"+colorFuenteB.substring(2,colorFuenteB.length);}catch(e){colorFuente="#FFFFFF";colorFuenteB="#111111";}
colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
try{franjaPersonalizada=xmlDoc.getElementsByTagName("franjaPersonalizada")[0].childNodes[0].nodeValue;}catch(e){franjaPersonalizada="";}
numero_intentos=xmlDoc.getElementsByTagName("numero_intentos")[0].childNodes[0].nodeValue;puntos_resta=xmlDoc.getElementsByTagName("puntos_resta")[0].childNodes[0].nodeValue;if(xmlDoc.getElementsByTagName("autor")[0].childNodes.length==0){autor='';}else{autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;}
try{descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;}catch(e){descripcionUsuario="";}
registro=xmlDoc.getElementsByTagName("registro")[0];tiempo=xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0].nodeValue;if(tiempo=="si")tiempo=xmlDoc.getElementsByTagName("tiempo")[0].attributes.getNamedItem("maximo").value;else if(tiempo=="no")tiempo=0;descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("tituloApli")[0].childNodes[0].nodeValue;pregunta=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;txtGrupo=xmlDoc.getElementsByTagName("idioma")[0].getElementsByTagName("txtGrupo")[0].childNodes[0].nodeValue;gruposD=new Array();countEl=0;var parejas=xmlDoc.getElementsByTagName("pareja");for(i=0;i<parejas.length;i++)
{elementoA=parejas[i].getElementsByTagName("elementoA")[0];elementoB=parejas[i].getElementsByTagName("elementoB")[0];var datosPareja=new Array();datosPareja["elemento_Tipo"]=elementoA.attributes.getNamedItem("tipo").value;datosPareja["elemento_Valor"]=elementoA.childNodes[0].nodeValue;gruposD[countEl]=datosPareja;countEl++;datosPareja=new Array();datosPareja["elemento_Tipo"]=elementoB.attributes.getNamedItem("tipo").value;datosPareja["elemento_Valor"]=elementoB.childNodes[0].nodeValue;gruposD[countEl]=datosPareja;countEl++;}
cartasOcultas=xmlDoc.getElementsByTagName("cartasOcultas")[0].childNodes[0].nodeValue;tamanoCartas=xmlDoc.getElementsByTagName("tamanoCartas")[0].childNodes[0].nodeValue;if(cartasOcultas=='1')claseCartas='carta-oculta';else claseCartas='carta-visible';if(tamanoCartas=='S')claseTamCartas='size-s';else if(tamanoCartas=='M')claseTamCartas='size-m';else claseTamCartas='size-l';var idioma=xmlDoc.getElementsByTagName("idioma")[0];nIntentos=idioma.getElementsByTagName("nIntentos")[0].childNodes[0].nodeValue;txtPuntos=idioma.getElementsByTagName("txtPuntos")[0].childNodes[0].nodeValue;txtTiempo=idioma.getElementsByTagName("txtTiempo")[0].childNodes[0].nodeValue;txtTiempoRestante=idioma.getElementsByTagName("txtTiempoRestante")[0].childNodes[0].nodeValue;txtRespuestaIncorrecta=idioma.getElementsByTagName("txtRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtTiempoSuperado=idioma.getElementsByTagName("txtTiempoSuperado")[0].childNodes[0].nodeValue;txtCerrar=idioma.getElementsByTagName("txtCerrar")[0].childNodes[0].nodeValue;txtTituloRespuestaCorrecta=idioma.getElementsByTagName("txtTituloRespuestaCorrecta")[0].childNodes[0].nodeValue;txtSuperadoNumeroIntentos=idioma.getElementsByTagName("txtSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtTituloSuperadoNumeroIntentos=idioma.getElementsByTagName("txtTituloSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtTituloActividadNoSuperada=idioma.getElementsByTagName("txtTituloActividadNoSuperada")[0].childNodes[0].nodeValue;txtTituloActividadSuperada=idioma.getElementsByTagName("txtTituloActividadSuperada")[0].childNodes[0].nodeValue;txtActividadSuperada=idioma.getElementsByTagName("txtActividadSuperada")[0].childNodes[0].nodeValue;txtTituloRespuestaIncorrecta=idioma.getElementsByTagName("txtTituloRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtGrupoCorrecto=idioma.getElementsByTagName("txtGrupoCorrecto")[0].childNodes[0].nodeValue;txtBoxRespuestaCorrecta=idioma.getElementsByTagName("txtBoxRespuestaCorrecta")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtTiempoMaximo=idioma.getElementsByTagName("txtTiempoMaximo")[0].childNodes[0].nodeValue;txtSensible=idioma.getElementsByTagName("txtSensible")[0].childNodes[0].nodeValue;txtMayusculasMinusculas=idioma.getElementsByTagName("txtMayusculasMinusculas")[0].childNodes[0].nodeValue;txtAcentos=idioma.getElementsByTagName("txtAcentos")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtReiniciar=idioma.getElementsByTagName("txtReiniciar")[0].childNodes[0].nodeValue;txtVolverJugar=idioma.getElementsByTagName("txtVolverJugar")[0].childNodes[0].nodeValue;txtResponder=idioma.getElementsByTagName("txtResponder")[0].childNodes[0].nodeValue;txtRegistrarse=idioma.getElementsByTagName("txtRegistrarse")[0].childNodes[0].nodeValue;txtAcceder=idioma.getElementsByTagName("txtAcceder")[0].childNodes[0].nodeValue;txtCompartirResultado=idioma.getElementsByTagName("txtCompartirResultado")[0].childNodes[0].nodeValue;txtImprimir=idioma.getElementsByTagName("txtImprimir")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;txtSocial=idioma.getElementsByTagName("txtSocial")[0].childNodes[0].nodeValue;}
function inicializarElementos()
{inicializarColores();inicializarEventosPrincipales();inicializarPantallaInicial();inicializarParametros();inicializarTituloAct();inicializarAlertaCorrecta();inicializarAlertaIncorrecta();inicializarRecargar();inicializarAyuda();inicializarRegistro();}
function inicializarEventosPrincipales()
{$(window).resize(function(){redimensionar();});if(navigator.appVersion.indexOf("MSIE 9")!=-1)$("body").addClass("ie9");};function inicializarVariablesXapi(){}
function inicializarCorregir(){}
function inicializarXapi(){}
function completarXapi(tipoFinal){}
function abandonarXapi(){}
function responderUnicaXapi(testcorrecta,respuesta,testrespondida,exito){}
function responderMultipleXAPI(correcta,respuesta,testrespondida,exito){}
function responderEscritaXapi(correcta,testrespondida,exito){}
function pulsar(sentido){var origen="";if(sentido=="siguiente"){origen="#btnAdelante"}
else{origen="#btnAtras"}
$(origen).click(function(e){e.preventDefault();if(sentido=="siguiente"){cambiarPregunta("AD");}
else{cambiarPregunta("AT");}});}
function pulsarRadio(){}
function pulsarEscribir(e){}
function pulsarReproducir(e){}
function desmarcarCheck(){}
function marcarCheck(){};function comenzar()
{inicializarVariablesXapi();inicializarXapi();$('#contentPreActividad').hide();$('#contentAct').css('top',0);idInterval=setInterval(contador,1000);}
function redimensionar()
{cargarDescripcionInicio();}
var gestionParejaAudio=0;function gestionToogle()
{if(!$(this).hasClass('flipped')){$(this).toggleClass('flipped');var numEle=$(this).attr('id').substring(4,$(this).attr('id').length);if($("#cardBackCont"+numEle+" .cardSound").length){$("#cardBackCont"+numEle+" .cardSound .soundCard").click();$(".card").unbind('click');}}
$(this).addClass('preFlipped');if($('.preFlipped').length==2)
{gestionParejaAudio=0;$('.card').unbind("click");if(!$("#cardBackCont"+numEle+" .cardSound").length)setTimeout(compruebaPareja,600);else gestionParejaAudio=1;}}
function gestionToogle2()
{if(!soundClick){$(this).addClass('preFlipped');if($('.preFlipped').length==2)
{$('.card').unbind("click");setTimeout(compruebaPareja2,600);}}
else{soundClick=0;}}
var parejasCorrectas=[];function compruebaPareja()
{var parejaCorrecta=0;var elemSel=new Array();$('.preFlipped').each(function(){elemSel.push($(this).attr('id'));});var posA=elemSel[0].substring(4,elemSel[0].length);var posB=elemSel[1].substring(4,elemSel[1].length);if(Math.abs(mostrados[posA]-mostrados[posB])==1&&Math.max(mostrados[posA],mostrados[posB])%2!=0)parejaCorrecta=1;else parejaCorrecta=0;if(parejaCorrecta){parejasCorrectas[parejasCorrectas.length]=mostrados[posA];$('.preFlipped').each(function(){$(this).addClass("marca").addClass('cardOk');$(this).addClass("animar");});$('.preFlipped').removeClass('preFlipped');$('.card').bind("click",gestionToogle);$('.cardOk').unbind("click");compruebaFinal();}
else{$('.preFlipped').each(function(){$(this).addClass("marca").addClass('cardError');$(this).addClass("animar");});setTimeout(function(){$('.cardError').removeClass("marca").removeClass('animar').removeClass('cardError');$('.preFlipped').removeClass('flipped').removeClass('preFlipped');$('.card').bind("click",gestionToogle);$('.cardOk').unbind("click");actualizarIntentos();actualizaPuntos();},200);}}
function compruebaPareja2()
{var parejaCorrecta=0;var elemSel=new Array();$('.preFlipped').each(function(){elemSel.push($(this).attr('id'));});var posA=elemSel[0].substring(4,elemSel[0].length);var posB=elemSel[1].substring(4,elemSel[1].length);if(Math.abs(mostrados[posA]-mostrados[posB])==1&&Math.max(mostrados[posA],mostrados[posB])%2!=0)parejaCorrecta=1;else parejaCorrecta=0;if(parejaCorrecta){parejasCorrectas[parejasCorrectas.length]=mostrados[posA];$('.preFlipped').each(function(){$(this).addClass("marca").addClass('cardOk');$(this).addClass("animar");});$('.preFlipped').removeClass('preFlipped');$('.card').bind("click",gestionToogle2);$('.cardOk').unbind("click");compruebaFinal();}
else{$('.preFlipped').each(function(){$(this).addClass("marca").addClass('cardError');$(this).addClass("animar");});setTimeout(function(){$('.cardError').removeClass("marca").removeClass('animar').removeClass('cardError');$('.preFlipped').removeClass('preFlipped');$('.card').bind("click",gestionToogle2);$('.cardOk').unbind("click");actualizarIntentos();actualizaPuntos();},200);}}
function compruebaFinal()
{if(mostrados.length==$(".cardOk").length){for(i=0;i<parejasCorrectas.length;i++){numero=0;if(parejasCorrectas[i]%2!=0){numero=parejasCorrectas[i]-1;}
else{numero=parejasCorrectas[i];}
responderEscritaXapi(gruposD[numero]["elemento_Valor"],gruposD[numero+1]["elemento_Valor"],gruposD[numero]["elemento_Valor"]+" - "+gruposD[numero+1]["elemento_Valor"],1)}
cargarPantallaFinal('OK');completarXapi('OK',puntosReg,tiempoFinal)}}
function actualizarIntentos()
{var cadenaIntentos=$('#numIntentos').text();var pos=cadenaIntentos.indexOf("/");var numeroIntentos=parseInt(cadenaIntentos.substring(0,pos+1));if(numeroIntentos<=numero_intentos-1)
{numeroIntentos++;cadenaIntentos=numeroIntentos+"<sup>/"+numero_intentos+"</sup>";$('#numIntentos').html(cadenaIntentos);$('#cajaIntentos').addClass('alertLuz');setTimeout(function(){$('#cajaIntentos').removeClass('alertLuz');},1000);}
if(numeroIntentos==numero_intentos)
{for(i=0;i<parejasCorrectas.length;i++){numero=0;if(parejasCorrectas[i]%2!=0){numero=parejasCorrectas[i]-1;}
else{numero=parejasCorrectas[i];}
responderEscritaXapi(i,gruposD[numero]["elemento_Valor"]+" - "+gruposD[numero+1]["elemento_Valor"],gruposD[numero]["elemento_Valor"]+" - "+gruposD[numero+1]["elemento_Valor"],1)}
cargarPantallaFinal('intentos');puntosReg=0;completarXapi('KO',puntosReg,tiempoFinal)
$("#numPuntos").html("0");}}
var puntosReg=100;function actualizaPuntos()
{var actuales=parseInt(puntosReg);var descuento=parseInt(puntosReg/numero_intentos);var cantidadActual=actuales-descuento;if(cantidadActual<0)cantidadActual=0;puntosReg=parseInt(cantidadActual);$("#numPuntos").html(parseInt(cantidadActual));}
var compruebaFin=0;function reproducir(media,icono)
{try{document.getElementById(media).currentTime=0;}catch(e){}
document.getElementById(media).pause();if(document.getElementById(media).currentTime!=0)document.getElementById(media).load();document.getElementById(media).play();$("#"+icono).removeClass("iPlay");$("#"+icono).addClass("iPause");clearInterval(compruebaFin);compruebaFin=setInterval(function(){controlFinalAudio(media,icono);},500);}
function gestionReproducir(media,icono,tipo)
{if($("#"+icono).hasClass("iPlay"))
{if(tipo==1)pararTodosAudios(icono.substring(11,icono.length));else pararTodosAudiosFinal(icono.substring(12,icono.length));$("#"+icono).removeClass("iPlay");$("#"+icono).addClass("iPause");reproducir(media,icono);}
else
{$("#"+icono).addClass("iPlay");$("#"+icono).removeClass("iPause");document.getElementById(media).pause();}}
function pararTodosAudios(n)
{$(".soundCard").removeClass("sound-active");if(n!=-1)$(".soundCard[data-element='"+n+"']").addClass("sound-active");for(m=0;m<numAudios;m++){if($("#iconoAudio_"+m).hasClass("iPause")){$("#iconoAudio_"+m).addClass("iPlay");$("#iconoAudio_"+m).removeClass("iPause");document.getElementById("pistaAudio_"+m).pause();}}}
function pararTodosAudiosFinal(n)
{$(".scF").removeClass("sound-active");$(".scF[data-element='"+n+"']").addClass("sound-active");for(m=0;m<numAudios;m++){if($("#iconoAudioF_"+m).hasClass("iPause")){$("#iconoAudioF_"+m).addClass("iPlay");$("#iconoAudioF_"+m).removeClass("iPause");document.getElementById("pistaAudioF_"+m).pause();}}}
function controlFinalAudio(media,icono)
{if(document.getElementById(media).ended)
{$("#"+icono).addClass("iPlay");$("#"+icono).removeClass("iPause");if(cartasOcultas=='1'){$(".preFlipped .back .cardTxt .cardSound .soundCard").toggleClass('sound-active');$('.card').bind("click",gestionToogle);if(gestionParejaAudio){compruebaPareja();gestionParejaAudio=0;}}
else{$(".sound-active").toggleClass('sound-active');$('.card').bind("click",gestionToogle);}
clearInterval(compruebaFin);}}
function errores(n,tipo)
{if(tipo==0)$(".soundCard[data-element='"+n+"']").removeClass('sound-active').addClass('sound-error').unbind('click');if(tipo==1)$(".scF[data-element='"+n+"']").removeClass('sound-active').addClass('sound-error').unbind('click');}
function completarPantallaFinal()
{pararTodosAudios(-1);var divContentElementosFinal=$("<div>",{id:"contentElementosFinal"});$("#correccion").append(divContentElementosFinal);$(".groupInfoRespuestas").prepend($("#correccion"));for(k=0;k<gruposD.length/2;k++){var divCajaPareja=$("<div>",{id:"cajaPareja"+k,"class":"cajaPareja"});$('#contentElementosFinal').append(divCajaPareja);var divArrow=$("<div>",{id:"arrowCardF"+k,"class":"arrowCard"});$('#cajaPareja'+k).prepend(divArrow);}
countAudio=0;countCajas=0;for(i=0;i<gruposD.length;i++){var divElemento=$("<div>",{id:"elementoF"+i,"class":"cardContainerCorreccion"});$('#contentElementosFinal').append(divElemento);if(gruposD[i]["elemento_Tipo"]=="TEXTO"){$("#elementoF"+i).html("<div class='cardTxt'><div class='scrollbox'>"+gruposD[i]["elemento_Valor"]+"</div></div>");}
else if(gruposD[i]["elemento_Tipo"]=="IMAGEN"){var src=rutaRecursos+gruposD[i]["elemento_Valor"];$("#elementoF"+i).html("<div class='cardImage'><img src='"+src+"' width='259' height='194'></div>");}
else if(gruposD[i]["elemento_Tipo"]=="AUDIO"){var cadenaAudio="<div class='pistaAudio' id='pAudioF_"+countAudio+"'>";cadenaAudio+="<div id='audioTagF_"+countAudio+"'></div>";cadenaAudio+="<div class='soundPlayer' id='btnAudioF_"+countAudio+"' data-orden='"+countAudio+"'>";cadenaAudio+="<div class='errorSound' id='errorAudioF_"+countAudio+"'></div>";cadenaAudio+="<a href='#' class='btn' id='audioOKF_"+countAudio+"'><span id='iconoAudioF_"+countAudio+"' class='iPlayerReducido iPlay'></span></a>";cadenaAudio+="</div>";cadenaAudio+="</div>";$("#elementoF"+i).html("<div class='cardSound'><button class='soundCard scF' data-element='"+countAudio+"'></button><div style='display:none' class='cardContent cardSound'>"+cadenaAudio+"</div></div>");var rutaAudio=rutaRecursos+gruposD[i]["elemento_Valor"];var rutaAudioOgg=rutaRecursosInicio+gruposD[i]["elemento_Valor"];var audioCadena="<audio id='pistaAudioF_"+countAudio+"'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores("+countAudio+",1);' type='audio/ogg'></source></audio>";$('#audioTagF_'+countAudio).html(audioCadena);$('#btnAudioF_'+countAudio).show();$('#btnAudioF_'+countAudio).click(function(e){e.preventDefault();gestionReproducir("pistaAudioF_"+$(this).attr('data-orden'),"iconoAudioF_"+$(this).attr('data-orden'),0);});countAudio++;}}
var countP=0;for(j=0;j<gruposD.length;j++){$('#cajaPareja'+countP).append($("#elementoF"+j));for(m=0;m<parejasCorrectas.length;m++){if(parejasCorrectas[m]==j){$('#cajaPareja'+countP).addClass('parejaOk');}}
if(j%2!=0)countP++;}
$('.scF').click(function(){$(this).toggleClass('sound-active');$('#btnAudioF_'+$(this).attr('data-element')).click();});}