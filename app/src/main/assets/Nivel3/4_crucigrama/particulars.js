function crear()
{var tamMaximoAncho=$('#wrapper').width();var tamMaximoAlto=$('#wrapper').height();tamCasillaAncho=parseInt(tamMaximoAncho/columnas);tamCasillaAlto=parseInt(tamMaximoAlto/filas);if(tamCasillaAncho>=tamCasillaAlto)
{tamCasilla=tamCasillaAlto;tamMaximo=tamMaximoAlto;$('#scroller').width(tamCasilla*columnas);}
else
{tamCasilla=tamCasillaAncho;tamMaximo=tamMaximoAncho;$('#scroller').width($('#wrapper').width());}
$('#scroller').addClass('unselectable');$('#lienzo').css('background-size',""+tamCasilla+"px "+tamCasilla+"px");miLienzo=$('#lienzo');miLienzo.html("<input id='control' type='password' size='2' maxlength='1'>");var px=0;var py=0;for(i=0;i<filas;i++)
{if(i<10)var ix="0"+i;else var ix=i;for(j=0;j<columnas;j++)
{pxt=px+"px";pyt=py+"px";if(j<10)var jy="0"+j;else var jy=j;var div=$("<div>",{id:"c"+ix+"_"+jy,"class":"casilla",css:{"left":pxt,"top":pyt}});miLienzo.append(div);px=px+(tamCasilla);var tamLetra=tamCasilla-8;if(tamLetra<7)tamLetra=7;$("#c"+ix+"_"+jy).css({"width":tamCasilla+"px","height":tamCasilla+"px","font-size":tamLetra+"px","line-height":tamCasilla+"px"});}
px=0;py=py+(tamCasilla);}
var altoLienzo=tamCasilla*filas;$('#lienzo').height(altoLienzo);setTimeout(function(){var margenX=($("#wrapper").width()-$("#scroller").width())/2;$('#scroller').css("left",margenX);},1000);cargar();}
var primera="";function cargar()
{if(tamCasilla<12)tamNumerito=2;else if(tamCasilla<15)tamNumerito=3;else if(tamCasilla<18)tamNumerito=4;else if(tamCasilla<21)tamNumerito=5;else if(tamCasilla<24)tamNumerito=6;else if(tamCasilla<26)tamNumerito=7;else if(tamCasilla<30)tamNumerito=8;else if(tamCasilla<35)tamNumerito=9;else if(tamCasilla<40)tamNumerito=10;else if(tamCasilla<45)tamNumerito=11;else tamNumerito=12;for(k=0;k<pa.length;k++)
{fila=fi[k];columna=co[k];direccion=di[k];palabra=pa[k];if(k<10)var kz="0"+k;else var kz=k;if(columna<10)var columnax="0"+columna;else columnax=columna;if(fila<10)var filay="0"+fila;else filay=fila;if(k==0)primera="c"+filay+"_"+columnax;if(direccion=="V")
{for(i=fila;i<=(palabra.length+fila-1);i++)
{if(i<10)var ix="0"+i;else var ix=i;if(i==fila)
{pxt=document.getElementById("c"+ix+"_"+columnax).style.left;pyt=document.getElementById("c"+ix+"_"+columnax).style.top;var span=$("<span>",{id:"sp"+ix+"_"+columnax,"class":"numerito",css:{"left":pxt,"top":pyt,"font-size":tamNumerito+"px"}});miLienzo.append(span);$("#sp"+ix+"_"+columnax).html($("#sp"+ix+"_"+columnax).html()+(k+1));}
$("#c"+ix+"_"+columnax).addClass("e"+kz);if((i==fila)&&($("#c"+ix+"_"+columnax).hasClass("activa")))
{var clase=document.getElementById("c"+ix+"_"+columnax).className;var p1=clase.substring(9,11);var p2=clase.substring(20,22);document.getElementById("c"+ix+"_"+columnax).className="casilla e"+p2+" activa e"+p1;}
else
{$("#c"+ix+"_"+columnax).addClass("activa");}}}
if(direccion=="H")
{for(j=columna;j<=(palabra.length+columna-1);j++)
{if(j<10)var jy="0"+j;else var jy=j;if(j==columna)
{pxt=document.getElementById("c"+filay+"_"+jy).style.left;pyt=document.getElementById("c"+filay+"_"+jy).style.top;var span=$("<span>",{id:"sp"+filay+"_"+jy,"class":"numerito",css:{"left":pxt,"top":pyt,"font-size":tamNumerito+"px"}});miLienzo.append(span);$("#sp"+filay+"_"+jy).html(k+1);}
$("#c"+filay+"_"+jy).addClass("e"+kz);if((j==columna)&&($("#c"+filay+"_"+jy).hasClass("activa")))
{var clase=document.getElementById("c"+filay+"_"+jy).className;var p1=clase.substring(9,11);var p2=clase.substring(20,22);document.getElementById("c"+filay+"_"+jy).className="casilla e"+p2+" activa e"+p1;}
else
{$("#c"+filay+"_"+jy).addClass("activa");}}}}
for(i=0;i<filas;i++)
{if(i<10)var ix="0"+i;else var ix=i;for(j=0;j<columnas;j++)
{if(j<10)var jy="0"+j;else var jy=j;if(!$("#c"+ix+"_"+jy).hasClass('activa'))$("#c"+ix+"_"+jy).remove();}}
$(".activa").click(actualizar);$(".numerito").click(clickCelda);$("#control").keydown(limitar);if(is_touch_device())
{$("#control").keyup(salta);$("#info .btnAccionPrincipal").show();}
else
{$("#control").change(limitar_y_saltar);$("#control").keyup(function(event){var evento=event||window.event;if(evento.keyCode==8)
{tecla=0;clickar=0;}
else
{$(this).trigger('change');}});}};function extraerDatos()
{tipo_actividad="Crucigrama";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
try{botonReinicio=xmlDoc.getElementsByTagName("boton_reiniciar")[0].childNodes[0].nodeValue;}catch(e){botonReinicio='visible';}
try{colorFuente=xmlDoc.getElementsByTagName("color_fuente")[0].childNodes[0].nodeValue;colorFuenteB=xmlDoc.getElementsByTagName("color_fuente_b")[0].childNodes[0].nodeValue;colorFuenteInt=colorFuente.substring(2,colorFuente.length);colorFuente="#"+colorFuente.substring(2,colorFuente.length);colorFuenteB="#"+colorFuenteB.substring(2,colorFuenteB.length);}catch(e){colorFuente="#FFFFFF";colorFuenteB="#111111";}
colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
try{franjaPersonalizada=xmlDoc.getElementsByTagName("franjaPersonalizada")[0].childNodes[0].nodeValue;}catch(e){franjaPersonalizada="";}
numero_intentos="noDefinido";sensible_mayusculas="noDefinido";sensible_mayusculas_ocultar="si";sensible_acentos_ocultar="si";sensible_acentos="noDefinido";if(xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0]!=undefined)
{tiempo=xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0].nodeValue;}
else
{tiempo="no";}
if(tiempo=="si")tiempo=xmlDoc.getElementsByTagName("tiempo")[0].attributes.getNamedItem("maximo").value;else if(tiempo=="no")tiempo=0;globalFeedback=xmlDoc.getElementsByTagName("globalFeedback")[0].childNodes[0].nodeValue;if(xmlDoc.getElementsByTagName("autor")[0].childNodes.length==0){autor='';}else{autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;}
descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;registro=xmlDoc.getElementsByTagName("registro")[0];descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;botonesOcultos=xmlDoc.getElementsByTagName("botonesOcultos")[0].childNodes[0].nodeValue;var idioma=xmlDoc.getElementsByTagName("idioma")[0];instrucciones=idioma.getElementsByTagName("instrucciones")[0].childNodes[0].nodeValue;txtPuntos=idioma.getElementsByTagName("txtPuntos")[0].childNodes[0].nodeValue;txtTiempo=idioma.getElementsByTagName("txtTiempo")[0].childNodes[0].nodeValue;txtTiempoRestante=idioma.getElementsByTagName("txtTiempoRestante")[0].childNodes[0].nodeValue;comprobar=idioma.getElementsByTagName("comprobar")[0].childNodes[0].nodeValue;txtRespuestaIncorrecta=idioma.getElementsByTagName("txtRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtActNoSuperada=idioma.getElementsByTagName("txtActNoSuperada")[0].childNodes[0].nodeValue;txtTiempoSuperado=idioma.getElementsByTagName("txtTiempoSuperado")[0].childNodes[0].nodeValue;txtCerrar=idioma.getElementsByTagName("txtCerrar")[0].childNodes[0].nodeValue;txtTituloRespuestaCorrecta=idioma.getElementsByTagName("txtTituloRespuestaCorrecta")[0].childNodes[0].nodeValue;txtRespuestaCorrecta=idioma.getElementsByTagName("txtRespuestaCorrecta")[0].childNodes[0].nodeValue;txtBoxRespuestaCorrecta=idioma.getElementsByTagName("txtBoxRespuestaCorrecta")[0].childNodes[0].nodeValue;txtPedirPistaPalabra=idioma.getElementsByTagName("txtPedirPistaPalabra")[0].childNodes[0].nodeValue;txtPedirPistaLetra=idioma.getElementsByTagName("txtPedirPistaLetra")[0].childNodes[0].nodeValue;txtDefinicionAudio=idioma.getElementsByTagName("txtDefinicionAudio")[0].childNodes[0].nodeValue;txtTituloDefinicion=idioma.getElementsByTagName("txtTituloDefinicion")[0].childNodes[0].nodeValue;txtTituloErrorImagen=idioma.getElementsByTagName("txtTituloErrorImagen")[0].childNodes[0].nodeValue;txtErrorImagen=idioma.getElementsByTagName("txtErrorImagen")[0].childNodes[0].nodeValue;txtTituloErrorAudio=idioma.getElementsByTagName("txtTituloErrorAudio")[0].childNodes[0].nodeValue;txtErrorAudio=idioma.getElementsByTagName("txtErrorAudioSoportado")[0].childNodes[0].nodeValue;nIntentos=idioma.getElementsByTagName("nIntentos")[0].childNodes[0].nodeValue;txtSuperadoNumeroIntentos=idioma.getElementsByTagName("txtSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtActividadNoSuperada=idioma.getElementsByTagName("txtActividadNoSuperada")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtTiempoMaximo=idioma.getElementsByTagName("txtTiempoMaximo")[0].childNodes[0].nodeValue;txtSensible=idioma.getElementsByTagName("txtSensible")[0].childNodes[0].nodeValue;txtMayusculasMinusculas=idioma.getElementsByTagName("txtMayusculasMinusculas")[0].childNodes[0].nodeValue;txtAcentos=idioma.getElementsByTagName("txtAcentos")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtReiniciar=idioma.getElementsByTagName("txtReiniciar")[0].childNodes[0].nodeValue;txtVolverJugar=idioma.getElementsByTagName("txtVolverJugar")[0].childNodes[0].nodeValue;txtResponder=idioma.getElementsByTagName("txtResponder")[0].childNodes[0].nodeValue;txtRegistrarse=idioma.getElementsByTagName("txtRegistrarse")[0].childNodes[0].nodeValue;txtAcceder=idioma.getElementsByTagName("txtAcceder")[0].childNodes[0].nodeValue;txtCompartirResultado=idioma.getElementsByTagName("txtCompartirResultado")[0].childNodes[0].nodeValue;txtAumentar=idioma.getElementsByTagName("txtAumentar")[0].childNodes[0].nodeValue;txtReducir=idioma.getElementsByTagName("txtReducir")[0].childNodes[0].nodeValue;txtImprimir=idioma.getElementsByTagName("txtImprimir")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;txtInfoAdicional=idioma.getElementsByTagName("txtInfoAdicional")[0].childNodes[0].nodeValue;txtSocial=idioma.getElementsByTagName("txtSocial")[0].childNodes[0].nodeValue;columnas=xmlDoc.getElementsByTagName("numero_columnas")[0].childNodes[0].nodeValue;filas=xmlDoc.getElementsByTagName("numero_filas")[0].childNodes[0].nodeValue;pa=[];ti=[];de=[];fi=[];co=[];di=[];fe=[];var palab=xmlDoc.getElementsByTagName("palabra");for(var i=0;i<palab.length;i++)
{pa[i]=palab[i].getElementsByTagName("valor")[0].childNodes[0].nodeValue;ti[i]=palab[i].getElementsByTagName("tipo")[0].childNodes[0].nodeValue;de[i]=palab[i].getElementsByTagName("definicion")[0].childNodes[0].nodeValue;fi[i]=parseInt(palab[i].getElementsByTagName("fila")[0].childNodes[0].nodeValue);co[i]=parseInt(palab[i].getElementsByTagName("columna")[0].childNodes[0].nodeValue);di[i]=palab[i].getElementsByTagName("direccion")[0].childNodes[0].nodeValue;if(globalFeedback==1)
{if(palab[i].getElementsByTagName("feedback")[0].childNodes[0]!=undefined)
{fe[i]=palab[i].getElementsByTagName("feedback")[0].childNodes[0].nodeValue;}}}}
function inicializarElementos()
{inicializarColores();inicializarEventosPrincipales();inicializarPantallaInicial();inicializarPista();inicializarParametros();inicializarTituloAct();inicializarBtnComprobar();inicializarBtnsAyuda();inicializarAlertaCorrecta();inicializarAlertaIncorrecta();inicializarRecargar();inicializarAyuda();inicializarZoom();inicializarRegistro();}
function inicializarEventosPrincipales()
{$(document).keyup(irPalabra).keydown(controlPalabra);$(window).resize(function(){redimensionar("redi");});}
var redimensionamos=0;function inicializarPista()
{$('#pistaLetra').text(txtPedirPistaLetra);$('#pistaPalabra').text(txtPedirPistaPalabra);$('#btnResponder').text(txtResponder);$('#btnCerrar').click(function(e){e.preventDefault();desactivarPista();desactivar("fin");});$('#btnResponder').click(function(e){e.preventDefault();desactivarPista();redimensionamos=1;$('#control').focus();setTimeout(function(){$('#control').focus();},1200);});idTimeout="pista";$('#pistaLetra').click(function(e){e.preventDefault();desactivarPista();ayudal();idTimeout=setTimeout(activarPista,1300);});$('#pistaPalabra').click(function(e){e.preventDefault();desactivarPista();ayudap();});}
function desactivarPista()
{if($('#all').width()<=600)$(".activa").bind("click",actualizar);$('#info').removeClass('visible');$('#info').addClass('oculto');$('#shadow').removeClass('visible');$('#shadow').addClass('oculto');var audio=document.getElementById("audio_0");if(audio!=null)audio.pause();}
function activarPista()
{if($('#all').width()<=600)$(".activa").unbind("click");$('#info').removeClass('oculto');$('#info').addClass('visible');$('#shadow').removeClass('oculto');$('#shadow').addClass('visible');}
function inicializarBtnComprobar()
{$('#btnComprobar').text(comprobar);$('#btnComprobar').click(function(e){e.preventDefault();corregir();});}
function inicializarBtnsAyuda()
{if(botonesOcultos==1)$(".btnsPistaExtra").hide();};function inicializarVariablesXapi(){}
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
{inicializarVariablesXapi();inicializarXapi();ayudas=Array();for(i=0;i<pa.length;i++){ayudas[i]=Array();ayudas[i]["letra"]=0;ayudas[i]["palabra"]=0;}
intentos=0;$('#contentPreActividad').hide();$('#contentAct').css('top',0);if($('#all').width()>=600)$('#'+primera).click();if(is_touch_device())
{var myScroll;myScroll=setTimeout(function(){new iScroll('wrapper',{zoom:true})},2000);}
else
{$('#wrapper').css("overflow","hidden");$('#lienzo').mousedown(capturarCoordenadasInicio);$('#lienzo').mouseup(pararDesplazamiento);$('#lienzo').mousemove(desplazarLienzo);$('#scroller').addClass('cursorGrab');document.getElementById('scroller').onmousewheel=wheel;document.getElementById('scroller').addEventListener('DOMMouseScroll',wheel,false);}}
var escala=1;var escalaAnterior=1;var controlZoom=0;function redimensionar(tipo)
{if((tipo=="redi")&&(redimensionamos==0))
{var tamMaximoAncho=$('#wrapper').width();var tamMaximoAlto=$('#wrapper').height();tamCasillaAncho=parseInt(tamMaximoAncho/columnas);tamCasillaAlto=parseInt(tamMaximoAlto/filas);if(tamCasillaAncho>=tamCasillaAlto)
{tamCasilla=tamCasillaAlto;tamMaximo=tamMaximoAlto;$('#scroller').width(tamCasilla*columnas);}
else
{tamCasilla=tamCasillaAncho;tamMaximo=tamMaximoAncho;$('#scroller').width($('#wrapper').width());}
$('#scroller').addClass('unselectable');$('#lienzo').css('background-size',""+tamCasilla+"px "+tamCasilla+"px");if(tamCasilla<12)tamNumerito=2;else if(tamCasilla<15)tamNumerito=3;else if(tamCasilla<18)tamNumerito=4;else if(tamCasilla<21)tamNumerito=5;else if(tamCasilla<24)tamNumerito=6;else if(tamCasilla<26)tamNumerito=7;else if(tamCasilla<30)tamNumerito=8;else if(tamCasilla<35)tamNumerito=9;else if(tamCasilla<40)tamNumerito=10;else if(tamCasilla<45)tamNumerito=11;else tamNumerito=12;var px=0;var py=0;for(i=0;i<filas;i++)
{if(i<10)var ix="0"+i;else var ix=i;for(j=0;j<columnas;j++)
{pxt=px+"px";pyt=py+"px";if(j<10)var jy="0"+j;else var jy=j;$("#c"+ix+"_"+jy).css({"top":pyt,"left":pxt});$("#sp"+ix+"_"+jy).css({"top":pyt,"left":pxt,"font-size":tamNumerito+"px"});px=px+(tamCasilla);var tamLetra=tamCasilla-8;if(tamLetra<7)tamLetra=7;$("#c"+ix+"_"+jy).css({"width":tamCasilla+"px","height":tamCasilla+"px","font-size":tamLetra+"px","line-height":tamCasilla+"px"});}
px=0;py=py+(tamCasilla);}
var altoLienzo=tamCasilla*filas;$('#lienzo').height(altoLienzo);var margenX=($("#wrapper").width()-$("#scroller").width())/2;$('#scroller').css("left",margenX);cargarDescripcionInicio();}
else if(redimensionamos==1)
{redimensionamos=0;}
if(tipo=="encaja")
{controlZoom=1;$('#encajarEnPantalla').addClass('disable');$('#zoomDown').addClass('disable');$('#zoomUp').removeClass('disable');escalaAnterior=escala;escala=1;var margenX=($("#wrapper").width()-$("#scroller").width())/2;$('#scroller').css("left",margenX);if(escala!=escalaAnterior)
{var zoom=parseInt(100*escala);$('#infoZoom').html(zoom+"%");$('#infoZoom').fadeIn(500);setTimeout(function(){$('#infoZoom').fadeOut(500)},2000);}
actualX=0;actualY=0;$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+actualX+"px,"+actualX+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualX+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualX+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualX+")");}
if(tipo=="up")
{controlZoom=1;$('#encajarEnPantalla').removeClass('disable');$('#zoomDown').removeClass('disable');if(escala>=4.9)$('#zoomUp').addClass('disable');if(escala!=5)
{escalaAnterior=escala;escala=escala+0.1;if(escala>=5)escala=5;if(escala!=escalaAnterior)
{var zoom=parseInt(100*escala);$('#infoZoom').html(zoom+"%");$('#infoZoom').fadeIn(500);setTimeout(function(){$('#infoZoom').fadeOut(500)},2000);}
$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+actualX+"px,"+actualY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");}}
if(tipo=="down")
{controlZoom=1;if(escala==1.1)
{$('#encajarEnPantalla').addClass('disable');$('#zoomDown').addClass('disable');}
$('#zoomUp').removeClass('disable');if(escala!=1)
{escalaAnterior=escala;escala=escala-0.1;if(escala<=1)escala=1;if(escala!=escalaAnterior)
{var zoom=parseInt(100*escala);$('#infoZoom').html(zoom+"%");$('#infoZoom').fadeIn(500);setTimeout(function(){$('#infoZoom').fadeOut(500)},2000);}
$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+actualX+"px,"+actualY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");var limX=(($('#scroller').width()*escala-$('#scroller').width())/2)-(($('#wrapper').width()-$('#scroller').width())/2);if($('#wrapper').width()>$('#scroller').width()*escala)limX=0;var limY=($('#scroller').height()*escala-$('#scroller').height())/2;var limYB=(($('#scroller').height()*escala-$('#scroller').height())/2)+($('#scroller').height()-$('#wrapper').height());if(actualX>=limX)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+limX+"px,"+actualY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+limX+","+actualY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+limX+","+actualY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+limX+","+actualY+")");actualX=limX;}
else if(actualX<-limX)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+"px,"+actualY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+actualY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+actualY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+actualY+")");actualX=-limX;}
if(actualY>=limY)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+actualX+"px,"+limY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+limY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+limY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+limY+")");actualY=limY;}
else if(actualY<-limYB)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+actualX+"px,"+(-limYB)+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+(-limYB)+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+(-limYB)+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+(-limYB)+")");actualY=-limYB;}
if(escala<1)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+",0px,0px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+",0,0)");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+",0,0)");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+",0,0)");actualX=0;actualY=0;}}}}
var activadoMover=0;var actualX=0;var actualY=0;var moviX=0;var moviY=0;function capturarCoordenadasInicio(ev)
{$('body').addClass('cursorGrabbing');var matrizInicioMoz="matrix("+escala+",0,0,"+escala+","+actualX+"px,"+actualY+"px)";var matrizInicio="matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")";$('#scroller').css("-moz-transform",matrizInicioMoz);$('#scroller').css("-ms-transform",matrizInicio);$('#scroller').css("-o-transform",matrizInicio);$('#scroller').css("-webkit-transform",matrizInicio);if(activadoMover==1)activadoMover=0;else activadoMover=1;inicioX=ev.clientX;inicioY=ev.clientY;}
function pararDesplazamiento(ev)
{$('body').removeClass('cursorGrabbing');activadoMover=0;var matriz=$('#scroller').css("-moz-transform");if(matriz==undefined)matriz=$('#scroller').css("-ms-transform");if(matriz==undefined)matriz=$('#scroller').css("-o-transform");if(matriz==undefined)matriz=$('#scroller').css("-webkit-transform");var arrayMatriz=matriz.split(',');trasX=parseInt(arrayMatriz[4]);trasY=parseInt(arrayMatriz[5]);actualX=trasX;actualY=trasY;var limX=(($('#scroller').width()*escala-$('#scroller').width())/2)-(($('#wrapper').width()-$('#scroller').width())/2);if($('#wrapper').width()>$('#scroller').width()*escala)limX=0;var limY=($('#scroller').height()*escala-$('#scroller').height())/2;var limYB=(($('#scroller').height()*escala-$('#scroller').height())/2)+($('#scroller').height()-$('#wrapper').height());if(trasX>=limX)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+limX+"px,"+moviY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+limX+","+moviY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+limX+","+moviY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+limX+","+moviY+")");moviX=limX;actualX=limX;}
else if(trasX<-limX)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+"px,"+moviY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+moviY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+moviY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+moviY+")");moviX=-limX;actualX=-limX;}
if(trasY>=limY)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+moviX+"px,"+limY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+limY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+limY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+limY+")");moviY=limY;actualY=limY;}
else if(trasY<-limYB)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+moviX+"px,"+(-limYB)+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+(-limYB)+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+(-limYB)+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+(-limYB)+")");moviY=-limYB;actualY=-limYB;}
if(escala<1)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+",0px,0px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+",0,0)");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+",0,0)");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+",0,0)");actualX=0;actualY=0;}}
function desplazarLienzo(ev)
{var movX=ev.clientX;var movY=ev.clientY;if(activadoMover==1)
{moviX=movX-inicioX+actualX;moviY=movY-inicioY+actualY;$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+moviX+"px,"+moviY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+moviY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+moviY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+moviY+")");}}
var letra1=0;var letra2=0;var permitido=1;var ctrlPalabras=1;function controlPalabra(event)
{if(ctrlPalabras==1)
{if(permitido==1)
{if((event.which!=16)&&(letra1==0)){letra1=event.keyCode;permitido=0;}}
else
{if((event.which!=16)&&(letra1!=0)&&(letra2==0)){letra2=event.keyCode;permitido=1;}}}}
function irPalabra(event)
{if(event.which==16)
{if(letra2!=0)pal=(letra1-48)+""+(letra2-48);else if(letra1!=0)pal=(letra1-48);pal=parseInt(pal);fila=fi[pal-1];columna=co[pal-1];if(columna<10)var colx="0"+columna;else colx=columna;if(fila<10)var filx="0"+fila;else filx=fila;$("#c"+filx+"_"+colx).click();letra1=0;letra2=0;permitido=1;}}
var NpalabraAnterior=-1;var clickar=0;function actualizar(event)
{clickar=1;id=event.target.getAttribute("id");NpalabraAnterior=event.target.getAttribute("class").substring(9,11);NpalabraAnterior=parseInt(NpalabraAnterior,10);activar(id);if($('#all').width()>=600)$('#control').focus();$('#control').css("top",document.getElementById(id).style.top);$('#control').css("left",document.getElementById(id).style.left);}
function clickCelda(event)
{var idNumerito=event.target.getAttribute("id");var idCelda="c"+idNumerito.substring(2,7);$("#"+idCelda).click();}
var lanzar=0;function activar(valorId)
{if(lanzar==0)
{idInterval=setInterval(contador,1000);lanzar=1;}
desactivar("activo");ctrlPalabras=0;id=valorId;clase=document.getElementById(id).className;var Npalabra=clase.substring(9,11);Npalabra=parseInt(Npalabra,10);var Npalabra2=clase.substring(20,22);Npalabra2=parseInt(Npalabra2,10);if((Npalabra!=NpalabraAnterior)&&(Npalabra2==NpalabraAnterior))
{Npalabra=Npalabra2;if(Npalabra2<10)Npalabra2="0"+Npalabra2;claseParcial="e"+Npalabra2;}
else
{claseParcial=clase.substring(8,11);}
$("."+claseParcial).addClass("activaPalabra");$("#"+id).addClass("foco");$('#control').css("top",document.getElementById(id).style.top);$('#control').css("left",document.getElementById(id).style.left);mostrarPista(Npalabra);}
function desactivar(opcion)
{$(".activa").removeClass("foco");$(".activa").removeClass("activaPalabra");$(".activa").removeClass("ok");$(".activa").removeClass("error");clase="";id="";claseParcial="";ctrlPalabras=1;if(opcion=="fin")
{$('#control').blur();var audio=document.getElementById("audio_0");if(audio!=null)
{$('#iconoAudio').removeClass("pPause");$('#iconoAudio').addClass("pPlay");audio.pause();clearTimeout(timeoutCanvas);}
if(escala!=1)
{redimensionar('encaja');}}}
var Nmostrado=-1;var timeoutCanvas=0;function mostrarPista(Npalabra)
{var tipo=ti[Npalabra];var valorPista=de[Npalabra];if((clickar==1)||(Nmostrado!=Npalabra))
{var audio=document.getElementById("audio_0");if(audio!=null)
{$('#iconoAudio').removeClass("pPause");$('#iconoAudio').addClass("pPlay");audio.pause();clearTimeout(timeoutCanvas);}
activarPista();clickar=0;$('#pista').show();$("#nPalabra").text(Npalabra+1);if(tipo=="texto")
{$("#pistaSonidoPrincipal").hide();$("#pista").html(valorPista);}
else if(tipo=="imagen")
{var errorImagen=0;var rutaPista=rutaRecursos+valorPista;$("#pistaSonidoPrincipal").hide();$('#pista').html("<img src='img_html5/loader.gif'>");var img=new Image();img.src=rutaPista;img.id='imagenPista';img.onload=function(){errorImagen=1;$("#pista").html('');$("#pista").append(img);}
setTimeout(function(){if(errorImagen==0)errores(0,-1);},5000);}
else if(tipo=="audio")
{var rutaPista=rutaRecursos+valorPista;var rutaPistaOgg=rutaRecursosInicio+valorPista;pos=-Math.PI/2;posS=pos+salto;clearTimeout(timeoutCanvas);$(".timeSound").show();$("#pistaSonidoPrincipal").show();$("#pista").text("");$("#pista").hide();var cadena="<audio id='audio_0'><source src='"+rutaPista+"' type='audio/mpeg'></source><source src='"+rutaPista.substring(0,rutaPista.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaPistaOgg.substring(0,rutaPistaOgg.length-3)+"ogg' onError='errores(1,-1);' type='audio/ogg'></source></audio>";cadena+="<div class='groupPlayer' id='contenedorPlayer_0'>";cadena+="<div id='iconoAudio_0' class='iPlayer pPlay'></div>";cadena+="<div class='playerEduca'></div>";cadena+="<canvas id='reproductor_0' class='canvasPlayer' width='131' height='131'></canvas>";cadena+="<div class='bgPlayer'></div>";cadena+="</div>";$("#imageSound").html(cadena);$('#contenedorPlayer_0').click(function(){reproducirClick("audio_0");if($('#all').width()>=600)if(id!="")$('#control').focus();});controlDuracion("audio_0");}}
Nmostrado=Npalabra;}
function reproducir(media)
{var numElemento=parseInt(media.substring(6,8),10);document.getElementById(media).play();$('#iconoAudio_'+numElemento).removeClass('pPlay');$('#iconoAudio_'+numElemento).addClass('pPause');}
function reproducirClick(media)
{var numElemento=parseInt(media.substring(6,8),10);if($('#iconoAudio_'+numElemento).hasClass("pPlay"))
{document.getElementById(media).play();$('#iconoAudio_'+numElemento).removeClass("pPlay");$('#iconoAudio_'+numElemento).addClass("pPause");setTimeout(function(){actualizarReproductor(numElemento)},tiempoSalto);controlTiempo(media);}
else
{$('#iconoAudio_'+numElemento).removeClass("pPause");$('#iconoAudio_'+numElemento).addClass("pPlay");document.getElementById(media).pause();clearTimeout(timeoutCanvas);}}
function controlTiempo(media)
{var numElemento=parseInt(media.substring(6,8),10);var audio=document.getElementById(media);var seg=audio.currentTime;var h=Math.floor(seg/3600);seg=seg%3600;var min=Math.floor(seg/60);seg=Math.floor(seg%60);if(seg.toString().length<2)seg="0"+seg;if(min.toString().length<2)min="0"+min;document.getElementById('tiempo_'+numElemento).innerHTML=min+":"+seg;if(!audio.ended)
{setTimeout(function(){controlTiempo(media);},1000);}
else
{pos=-Math.PI/2;posS=pos+salto;$('#iconoAudio_'+numElemento).removeClass('pPause');$('#iconoAudio_'+numElemento).addClass('pPlay');var miLienzo=document.getElementById('reproductor_'+numElemento);var lienzo=miLienzo.getContext('2d');lienzo.clearRect(0,0,240,240);clearTimeout(timeoutCanvas);document.getElementById('tiempo_'+numElemento).innerHTML="00:00";try{audio.currentTime=0;}catch(e){}
audio.pause();if(audio.currentTime!=0)document.getElementById(media).load();}}
function controlDuracion(media)
{var numElemento=parseInt(media.substring(6,8),10);var audio=document.getElementById(media);if(!isNaN(audio.duration))
{duracion=audio.duration;var seg=audio.duration;var h=Math.floor(seg/3600);seg=seg%3600;var min=Math.floor(seg/60);seg=Math.floor(seg%60);if(seg.toString().length<2)seg="0"+seg;if(min.toString().length<2)min="0"+min;if(isNaN(min))document.getElementById('duracion_'+numElemento).innerHTML="--:--";else document.getElementById('duracion_'+numElemento).innerHTML=min+":"+seg;controlTiempo(media);actualizarReproductor(numElemento);reproducir(media);}
else
{setTimeout(function(){controlDuracion(media);},50);}}
var salto=2*Math.PI/100;var pos=-Math.PI/2;var posS=pos+salto;function actualizarReproductor(numElemento)
{tiempoSalto=duracion/100*1000;var miLienzo=document.getElementById('reproductor_'+numElemento);var lienzo=miLienzo.getContext('2d');lienzo.beginPath();lienzo.strokeStyle='#99CC33';lienzo.lineCap='round';lienzo.shadowOffsetX=0;lienzo.shadowOffsetY=0;lienzo.shadowBlur=10;lienzo.shadowColor="rgba(153, 204, 51, 0.6)";lienzo.lineWidth=10.0;lienzo.arc(65,65,60,pos,posS,false);lienzo.stroke();pos=posS;posS=posS+salto;if(posS<=3*Math.PI/2)
{timeoutCanvas=setTimeout(function(){actualizarReproductor(numElemento)},tiempoSalto);}
else
{pos=-Math.PI/2;posS=pos+salto;}}
function gestionaAudio(media)
{var numElemento=parseInt(media.substring(6,8),10);if($('#iconoAudio_'+numElemento).hasClass('pPlay'))
{document.getElementById(media).play();$('#iconoAudio_'+numElemento).removeClass('pPlay');$('#iconoAudio_'+numElemento).addClass('pPause');}
else
{document.getElementById(media).pause();$('#iconoAudio_'+numElemento).removeClass('pPause');$('#iconoAudio_'+numElemento).addClass('pPlay');}}
var tecla=0;var key="";var letraNum=0;var movi=0;var movi2=0;function limitar_y_saltar(event)
{if($("#control").val()==""&&letraNum==1){$("#control").val(letraTecleada);}
if(movi2==1){$("#control").val(letraTecleada);movi2=0;}
var evento=event||window.event;if($(this).val()){key=$(this).val().charCodeAt(0);var e=jQuery.Event("keyup",{keyCode:key});salta(e);}}
function limitar(event)
{var evento=event||window.event;key=evento.keyCode;if(evento.keyCode==8)
{evento.preventDefault();if($("#"+id).html()=="")borra();else $("#"+id).html("");tecla=1;if(movi==1){movi2=1;movi=0;}
return true;}
else if(evento.keyCode==39)
{mueve("d");tecla=1;movi=1;return true;}
else if(evento.keyCode==37)
{mueve("i");tecla=1;movi=1;return true;}
else if(evento.keyCode==38)
{mueve("b");tecla=1;movi=1;return true;}
else if(evento.keyCode==40)
{mueve("a");tecla=1;movi=1;return true;}
else if((evento.keyCode>=48)&&(evento.keyCode<=90))
{$("#"+id).html(" ");letraNum=1;letraTecleada=String.fromCharCode(key);if(movi==1){movi2=1;movi=0;}
return true;}
else
{$("#"+id).html(" ");letraNum=0;letraTecleada=String.fromCharCode(key);if(movi==1){movi2=1;movi=0;}
return true;}}
function borra()
{var Npalabra=clase.substring(9,11);Npalabra=parseInt(Npalabra,10);var Npalabra2=clase.substring(20,22);Npalabra2=parseInt(Npalabra2,10);if(Npalabra!=NpalabraAnterior)if(Npalabra2==NpalabraAnterior)Npalabra=Npalabra2;var direccion=di[Npalabra];var col=parseInt(id.substring(4,6),10);var colM=col-1;var fil=parseInt(id.substring(1,3),10);var filM=fil-1;if(col<10)var colx="0"+col;else colx=col;if(colM<10)var colMx="0"+colM;else colMx=colM;if(fil<10)var fily="0"+fil;else fily=fil;if(filM<10)var filMy="0"+filM;else filMy=filM;if(direccion=="H")
{if(!$("#c"+fily+"_"+colMx).hasClass('activa'))return false;else if((colM>=columnas)||(colM<0))return false;else{activar("c"+fily+"_"+colMx);$("#c"+fily+"_"+colMx).html("");}}
else if(direccion=="V")
{if(!$("#c"+filMy+"_"+colx).hasClass('activa'))return false;else if((filM>=filas)||(filM<0))return false;else{activar("c"+filMy+"_"+colx);$("#c"+filMy+"_"+colx).html("");}}}
function mueve(dir)
{var Npalabra=clase.substring(9,11);var direccion=di[Npalabra];var col=parseInt(id.substring(4,6),10);var colM=col+1;var colMi=col-1;var fil=parseInt(id.substring(1,3),10);var filM=fil+1;var filMi=fil-1;if(col<10)var colx="0"+col;else colx=col;if(colM<10)var colMx="0"+colM;else colMx=colM;if(colMi<10)var colMxi="0"+colMi;else colMxi=colMi;if(fil<10)var fily="0"+fil;else fily=fil;if(filM<10)var filMy="0"+filM;else filMy=filM;if(filMi<10)var filMyi="0"+filMi;else filMyi=filMi;if(dir=="d"){if(!$("#c"+fily+"_"+colMx).hasClass('activa'))desactivar('fin');else activar("c"+fily+"_"+colMx);}
if(dir=="i"){if(!$("#c"+fily+"_"+colMxi).hasClass('activa'))desactivar('fin');else activar("c"+fily+"_"+colMxi);}
if(dir=="a"){if(!$("#c"+filMy+"_"+colx).hasClass('activa'))desactivar('fin');else activar("c"+filMy+"_"+colx);}
if(dir=="b"){if(!$("#c"+filMyi+"_"+colx).hasClass('activa'))desactivar('fin');else activar("c"+filMyi+"_"+colx);}}
var controlAnimacion=[];var contenidoAnimacion=[];function salta(event)
{var llave="";if(event=="ayuda")llave=key;else{var evento=event||window.event;llave=evento.keyCode;}
if((tecla==0)&&(llave==key))
{if($('#control').val()=="")$('#control').val(letraTecleada);$("#"+id).html($('#control').val());$('#control').val("");$("#"+id).html($("#"+id).html().replace(" ",""));$("#"+id).html($("#"+id).html().replace("&nbsp;",""));$("#"+id).html($("#"+id).html().toUpperCase());controlAnimacion.push(id);var contenido=$("#"+id).html();contenidoAnimacion.push(contenido);$("#"+id).html("<div class='letra'>"+contenido+"</div>");setTimeout(quitaLetra,800);var Npalabra=clase.substring(9,11);Npalabra=parseInt(Npalabra,10);var Npalabra2=clase.substring(20,22);Npalabra2=parseInt(Npalabra2,10);if(Npalabra!=NpalabraAnterior)if(Npalabra2==NpalabraAnterior)Npalabra=Npalabra2;var direccion=di[Npalabra];var col=parseInt(id.substring(4,6),10);var colM=col+1;var fil=parseInt(id.substring(1,3),10);var filM=fil+1;if(direccion=="H")limite=co[Npalabra]+pa[Npalabra].length;if(direccion=="V")limite=fi[Npalabra]+pa[Npalabra].length;if((((direccion=="V")&&(limite-1<filM))||((direccion=="H")&&(limite-1<colM)))&&($("#"+id).html()!=" "))
{if(idTimeout!="pista")setTimeout(function(){clearTimeout(idTimeout);},1000);desactivar("fin");NpalabraAnterior=-1;}
else
{if(col<10)var colx="0"+col;else colx=col;if(colM<10)var colMx="0"+colM;else colMx=colM;if(fil<10)var fily="0"+fil;else fily=fil;if(filM<10)var filMy="0"+filM;else filMy=filM;if(direccion=="H")activar("c"+fily+"_"+colMx);if(direccion=="V")activar("c"+filMy+"_"+colx);NpalabraAnterior=Npalabra;}}
tecla=0;clickar=0;}
function quitaLetra()
{for(i=0;i<controlAnimacion.length;i++)
{$("#"+controlAnimacion[i]).html(contenidoAnimacion[i]);delete controlAnimacion[i];delete contenidoAnimacion[i];}}
function ayudal()
{if(id!="")
{var identificador=id;$("#"+identificador).addClass('pistaLetra');setTimeout(function(){$("#"+identificador).removeClass('pistaLetra');},1000);$("#control").focus();$("#control").blur();var Npalabra=clase.substring(9,11);Npalabra=parseInt(Npalabra,10);var fila=fi[Npalabra];var columna=co[Npalabra];var direccion=di[Npalabra];if(direccion=="H")
{var posicion=parseInt(id.substring(4,6),10)-columna;}
if(direccion=="V")
{var posicion=parseInt(id.substring(1,3),10)-fila;}
var palabra=pa[Npalabra];ayudas[Npalabra]["letra"]=ayudas[Npalabra]["letra"]+1;var letra=palabra.substring(posicion,posicion+1);if($("#"+id).html()!=letra)
{actualizaPuntos(1);}
$("#control").val(letra);if($('#all').width()>=600)$('#control').focus();salta("ayuda");}}
function ayudap()
{if(id!="")
{$("#control").focus();var claseParcialActiva=claseParcial;$("."+claseParcialActiva).addClass('pistaPalabra');setTimeout(function(){$("."+claseParcialActiva).removeClass('pistaPalabra');},1000);var Npalabra=claseParcial.substring(1,3);Npalabra=parseInt(Npalabra,10);var fila=fi[Npalabra];var columna=co[Npalabra];var direccion=di[Npalabra];var palabra=pa[Npalabra];ayudas[Npalabra]["palabra"]=ayudas[Npalabra]["palabra"]+1;if(columna<10)var columnax="0"+columna;else columnax=columna;if(fila<10)var filay="0"+fila;else filay=fila;var contador=0;if(direccion=="V")
{var cont=0;for(i=fila;i<=(palabra.length+fila-1);i++)
{if(i<10)var ix="0"+i;else var ix=i;if(i==fila)id="c"+ix+"_"+columnax;var letra=palabra.substring(cont,cont+1);if($("#c"+ix+"_"+columnax).html()!=letra)contador++;$("#control").val(letra);salta("ayuda");cont++;}}
if(direccion=="H")
{var cont=0;for(j=columna;j<=(palabra.length+columna-1);j++)
{if(j<10)var jy="0"+j;else var jy=j;if(j==columna)id="c"+filay+"_"+jy;var letra=palabra.substring(cont,cont+1);if($("#c"+filay+"_"+jy).html()!=letra)contador++;$("#c"+filay+"_"+jy).addClass('pistaPalabra');setTimeout(function(){$("#c"+filay+"_"+jy).removeClass('pistaPalabra');},1000);$("#control").val(letra);salta("ayuda");cont++;}}
desactivar('fin');actualizaPuntos(contador);var audio=document.getElementById("audio_0");if(audio!=null)
{$('#iconoAudio').removeClass("pPause");$('#iconoAudio').addClass("pPlay");audio.pause();clearTimeout(timeoutCanvas);}}}
var cantidadSolicitadas=0;var puntosRestados=0;var puntosReg=100;function actualizaPuntos(numL)
{var total=$(".activa").length;var descuento=100/total;cantidadSolicitadas+=numL;cantidadActual=(total-cantidadSolicitadas)*descuento-puntosRestados;if(cantidadActual<0)cantidadActual=0;puntosReg=parseInt(cantidadActual);$("#numPuntos").html(parseInt(cantidadActual));}
function restaPuntos(cant)
{var total=$(".activa").length;var descuento=50/total;var puntosActual=parseInt($("#numPuntos").html(),10);cantidadActual=puntosActual-cant*descuento;puntosRestados+=parseInt(cant*descuento);if(cantidadActual<0)cantidadActual=0;puntosReg=parseInt(cantidadActual);$("#numPuntos").html(parseInt(cantidadActual));if(parseInt(cantidadActual)==0)
{$('#btnComprobar').unbind("click");completarXapi("KO",puntos,tiempoReg);cargarPantallaFinal('intentos');}}
function finPuntos(cant)
{var total=$(".activa").length;var descuento=100/total;var puntosActual=parseInt($("#numPuntos").html(),10);cantidadActual=puntosActual-cant*descuento;if(cantidadActual<0)cantidadActual=0;$("#numPuntos").html(parseInt(cantidadActual));puntosReg=parseInt(cantidadActual);}
function corregir(tipo)
{intentos++;contadorErrores=0;quitaLetra();var audio=document.getElementById("audio_0");if(audio!=null)audio.pause();var error=0;$(".activa").removeClass("foco");$(".activa").removeClass("activaPalabra");for(k=0;k<pa.length;k++)
{fila=fi[k];columna=co[k];direccion=di[k];palabra=pa[k];resp="";if(columna<10)var columnax="0"+columna;else columnax=columna;if(fila<10)var filay="0"+fila;else filay=fila;cont=0;if(direccion=="V")
{for(i=fila;i<=(palabra.length+fila-1);i++)
{if(i<10)var ix="0"+i;else var ix=i;var contenido=$("#c"+ix+"_"+columnax).html();if(contenido!="undefined"){resp+=$("#c"+ix+"_"+columnax).html();}
var correcto=palabra.substring(cont,cont+1);if((contenido!="")||(tipo=="fin"))
{if(contenido!=correcto)
{if(!$("#c"+ix+"_"+columnax).hasClass("error"))contadorErrores++;else if(tipo=="fin")contadorErrores++;$("#c"+ix+"_"+columnax).addClass("error");error=1;}
else
{$("#c"+ix+"_"+columnax).addClass("ok");}}
else
{$("#c"+ix+"_"+columnax).addClass("error");error=1;}
cont++;}}
if(direccion=="H")
{for(j=columna;j<=(palabra.length+columna-1);j++)
{if(j<10)var jy="0"+j;else var jy=j;var contenido=$("#c"+filay+"_"+jy).html();var correcto=palabra.substring(cont,cont+1);if(contenido!="undefined"){resp+=$("#c"+filay+"_"+jy).html();}
if((contenido!="")||(tipo=="fin"))
{if(contenido!=correcto)
{if(!$("#c"+filay+"_"+jy).hasClass("error"))contadorErrores++;else if(tipo=="fin")contadorErrores++;$("#c"+filay+"_"+jy).addClass("error");error=1;}
else
{$("#c"+filay+"_"+jy).addClass("ok");}}
else
{$("#c"+filay+"_"+jy).addClass("error");error=1;}
cont++;}}
if(resp==palabra){correcto=1;}
else{correcto=0;}
responderEscritaXapi(palabra,palabra,resp,correcto,ayudas[k]);}
if(tipo=="fin")error=2;if(error==0)
{$('#btnComprobar').unbind("click");if(puntosReg>=50){completarXapi("OK",puntosReg,tiempoReg);cargarPantallaFinal('OK');}
else{completarXapi("KO",puntosReg,tiempoReg);cargarPantallaFinal('noSuperada');}}
else
{actualizarIntentos();if(tipo=="fin")finPuntos(contadorErrores);else restaPuntos(contadorErrores);var audio=document.getElementById("audio_0");if(audio!=null)
{$('#iconoAudio').removeClass("pPause");$('#iconoAudio').addClass("pPlay");audio.pause();clearTimeout(timeoutCanvas);}}}
function actualizarIntentos()
{if(lanzar==1)
{var cadenaIntentos=$('#numIntentos').text();var pos=cadenaIntentos.indexOf("/");var numeroIntentos=parseInt(cadenaIntentos.substring(0,pos+1));if(numeroIntentos<=numero_intentos-1)
{numeroIntentos++;cadenaIntentos=numeroIntentos+"<sup>/"+numero_intentos+"</sup>";$('#numIntentos').html(cadenaIntentos);$('#cajaIntentos').addClass('alertLuz');setTimeout(function(){$('#cajaIntentos').removeClass('alertLuz');},1000);}
if(numeroIntentos==numero_intentos)
{$('#btnComprobar').unbind("click");completarXapi("KO",puntos,tiempoReg);cargarPantallaFinal('intentos');}}}
function errores(tipo,numero)
{var mensajeError="<div class='message mError'>";mensajeError+="<div class='titMessage'></div>";mensajeError+="<div class='descMessage'></div>";mensajeError+="<div class='iMessage'></div>";mensajeError+="</div>";if(tipo==0)
{if(numero==-1)
{$('#pista').html(mensajeError);}
else
{$("#pistaImagenFinal_"+numero).html(mensajeError);}
$('.titMessage').text(txtTituloErrorImagen);$('.descMessage').text(txtErrorImagen);}
else if(tipo==1)
{if(numero==-1)
{$("#imageSound").html(mensajeError);$('#pista').hide();$(".timeSound").hide();}
else
{$("#imageSound_"+numero).html(mensajeError);$(".timeSound").hide();}
$('.titMessage').text(txtTituloErrorAudio);$('.descMessage').text(txtErrorAudio);}}
function completarPantallaFinal()
{var palabraCorrecta;var palabraEscrita="";for(k=0;k<pa.length;k++)
{crearElementosFinal(k);$('#numRespuesta_'+k).html(k+1);palabraCorrecta=pa[k];if(k<10)kx="0"+k;else kx=k;casillasPalabra=$(".e"+kx);for(i=0;i<casillasPalabra.length;i++)
{palabraEscrita+=casillasPalabra[i].innerHTML;}
if(palabraCorrecta==palabraEscrita)
{$('#pCorrecta_'+k).html(palabraCorrecta);$('#pEscrita_'+k).hide();}
else
{$('#contentRespuesta_'+k).addClass('respuestaIncorrecta');$('#pCorrecta_'+k).html(palabraCorrecta);$('#pEscrita_'+k).html(palabraEscrita);}
palabraEscrita="";}
$('.accordionButton').click(function(){$('.accordionButton').removeClass('on');$('.accordionContent').slideUp('slow');if($(this).next().is(':hidden')==true){$(this).addClass('on');$(this).next().slideDown('slow');pararAudio();cargarFinal(this);}
else
{pararAudio();}});$('.accordionContent').hide();}
function crearElementosFinal(k)
{var tipo=ti[k];var cadenaHTML="";cadenaHTML+="<li>";cadenaHTML+="<div class='accordionButton' id='accordion_"+k+"'>";cadenaHTML+="<div class='contentRespuesta' id='contentRespuesta_"+k+"'>";cadenaHTML+="<span class='numRespuesta' id='numRespuesta_"+k+"'>11</span>";cadenaHTML+="<span class='txtRespuesta'><span class='tachado' id='pEscrita_"+k+"'>buetsfadvvashsseri</span><span id='pCorrecta_"+k+"'>Buitrssfsdfegbseefse</span></span>";if(globalFeedback==1)
{if(fe[k]!=undefined)
{cadenaHTML+="<span title='"+txtInfoAdicional+"' class='iExtraInfo'></span>";}}
cadenaHTML+="</div>";cadenaHTML+="</div>";cadenaHTML+="<div class='accordionContent'>";cadenaHTML+="<div class='contentInfoRespuesta'>";cadenaHTML+="<div class='contentPista'>";if(tipo=="texto")
{cadenaHTML+="<div class='pistaTexto'><span id='pista_"+k+"'>Informaci&oacute;n sobre la palabra en formato Texto</span></div>";}
else if(tipo=="imagen")
{cadenaHTML+="<div class='pistaImagen' id='pistaImagenFinal_"+k+"'>";cadenaHTML+="</div>";}
else if(tipo=="audio")
{var num=k+1;cadenaHTML+="<div class='pistaSonido'>";cadenaHTML+="<div class='imageSound' id='imageSound_"+num+"'></div>";cadenaHTML+="<div class='timeSound'><span id='tiempo_"+num+"' class='infoTime'>00:00</span> | <span id='duracion_"+num+"' class='infoTime'>00:00</span></div>";cadenaHTML+="</div>";}
cadenaHTML+="</div>";if(globalFeedback==1)
{if(fe[k]!=undefined)
{cadenaHTML+="<div class='txtExtraInfo' id='txtExtraInfo_"+k+"'></div>";}}
cadenaHTML+="</div>";cadenaHTML+="</div>";cadenaHTML+="</li>";$("#listaFinal").html($("#listaFinal").html()+cadenaHTML);}
function cargarFinal(enlace)
{var idAccordion=$(enlace).attr('id');var k=parseInt(idAccordion.substring(10,13),10);var tipo=ti[k];var valorPista=de[k];if(tipo=="texto")
{$('#pista_'+k).html(valorPista);}
else if(tipo=="imagen")
{var errorImagen=0;var rutaPista=rutaRecursos+valorPista;$("#pistaImagenFinal_"+k).html("<img src='img_html5/loader.gif'>");var img=new Image();img.src=rutaPista;img.onload=function(){errorImagen=1;$("#pistaImagenFinal_"+k).html('');$("#pistaImagenFinal_"+k).append(img);}
setTimeout(function(){if(errorImagen==0)errores(0,k);},2000);}
else if(tipo=="audio")
{$(".timeSound").show();var rutaPista=rutaRecursos+valorPista;var rutaPistaOgg=rutaRecursosInicio+valorPista;var num=k+1;var cadena="<audio id='audio_"+num+"'><source src='"+rutaPista+"' type='audio/mpeg'></source><source src='"+rutaPista.substring(0,rutaPista.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaPistaOgg.substring(0,rutaPistaOgg.length-3)+"ogg' onError='errores(1,"+num+");' type='audio/ogg'></source></audio>";cadena+="<div class='groupPlayer' id='contenedorPlayer_"+num+"'>";cadena+="<div id='iconoAudio_"+num+"' class='iPlayer pPlay'></div>";cadena+="<div class='playerEduca'></div>";cadena+="<canvas id='reproductor_"+num+"' class='canvasPlayer' width='131' height='131'></canvas>";cadena+="<div class='bgPlayer'></div>";cadena+="</div>";$("#imageSound_"+num).html(cadena);$('#contenedorPlayer_'+num).click(function(){reproducirClick("audio_"+num);});controlDuracion("audio_"+num);}
if(globalFeedback==1)
{if(fe[k]!=undefined)
{$("#txtExtraInfo_"+k).html(fe[k]);}}}
function pararAudio()
{pos=-Math.PI/2;posS=pos+salto;for(k=0;k<pa.length;k++)
{var audio=document.getElementById("audio_"+k);if(audio!=null)audio.load();$('.imageSound').html('');}};
/*!
 * iScroll v4.2.5 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function(window,doc){var m=Math,dummyStyle=doc.createElement('div').style,vendor=(function(){var vendors='t,webkitT,MozT,msT,OT'.split(','),t,i=0,l=vendors.length;for(;i<l;i++){t=vendors[i]+'ransform';if(t in dummyStyle){return vendors[i].substr(0,vendors[i].length-1);}}
return false;})(),cssVendor=vendor?'-'+vendor.toLowerCase()+'-':'',transform=prefixStyle('transform'),transitionProperty=prefixStyle('transitionProperty'),transitionDuration=prefixStyle('transitionDuration'),transformOrigin=prefixStyle('transformOrigin'),transitionTimingFunction=prefixStyle('transitionTimingFunction'),transitionDelay=prefixStyle('transitionDelay'),isAndroid=(/android/gi).test(navigator.appVersion),isIDevice=(/iphone|ipad/gi).test(navigator.appVersion),isTouchPad=(/hp-tablet/gi).test(navigator.appVersion),has3d=prefixStyle('perspective')in dummyStyle,hasTouch='ontouchstart'in window&&!isTouchPad,hasTransform=vendor!==false,hasTransitionEnd=prefixStyle('transition')in dummyStyle,RESIZE_EV='onorientationchange'in window?'orientationchange':'resize',START_EV=hasTouch?'touchstart':'mousedown',MOVE_EV=hasTouch?'touchmove':'mousemove',END_EV=hasTouch?'touchend':'mouseup',CANCEL_EV=hasTouch?'touchcancel':'mouseup',TRNEND_EV=(function(){if(vendor===false)return false;var transitionEnd={'':'transitionend','webkit':'webkitTransitionEnd','Moz':'transitionend','O':'otransitionend','ms':'MSTransitionEnd'};return transitionEnd[vendor];})(),nextFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1);};})(),cancelFrame=(function(){return window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;})(),translateZ=has3d?' translateZ(0)':'',iScroll=function(el,options){var that=this,i;that.wrapper=typeof el=='object'?el:doc.getElementById(el);that.wrapper.style.overflow='hidden';that.scroller=that.wrapper.children[0];that.options={hScroll:true,vScroll:true,x:0,y:0,bounce:true,bounceLock:false,momentum:true,lockDirection:true,useTransform:true,useTransition:false,topOffset:0,checkDOMChanges:false,handleClick:true,hScrollbar:true,vScrollbar:true,fixedScrollbar:isAndroid,hideScrollbar:isIDevice,fadeScrollbar:isIDevice&&has3d,scrollbarClass:'',zoom:false,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:'scroll',snap:false,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(e){e.preventDefault();},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(i in options)that.options[i]=options[i];that.x=that.options.x;that.y=that.options.y;that.options.useTransform=hasTransform&&that.options.useTransform;that.options.hScrollbar=that.options.hScroll&&that.options.hScrollbar;that.options.vScrollbar=that.options.vScroll&&that.options.vScrollbar;that.options.zoom=that.options.useTransform&&that.options.zoom;that.options.useTransition=hasTransitionEnd&&that.options.useTransition;if(that.options.zoom&&isAndroid){translateZ='';}
that.scroller.style[transitionProperty]=that.options.useTransform?cssVendor+'transform':'top left';that.scroller.style[transitionDuration]='0';that.scroller.style[transformOrigin]='0 0';if(that.options.useTransition)that.scroller.style[transitionTimingFunction]='cubic-bezier(0.33,0.66,0.66,1)';if(that.options.useTransform)that.scroller.style[transform]='translate('+that.x+'px,'+that.y+'px)'+translateZ;else that.scroller.style.cssText+=';position:absolute;top:'+that.y+'px;left:'+that.x+'px';if(that.options.useTransition)that.options.fixedScrollbar=true;that.refresh();that._bind(RESIZE_EV,window);that._bind(START_EV);if(!hasTouch){if(that.options.wheelAction!='none'){that._bind('DOMMouseScroll');that._bind('mousewheel');}}
if(that.options.checkDOMChanges)that.checkDOMTime=setInterval(function(){that._checkDOMChanges();},500);};iScroll.prototype={enabled:true,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(e){var that=this;switch(e.type){case START_EV:if(!hasTouch&&e.button!==0)return;that._start(e);break;case MOVE_EV:that._move(e);break;case END_EV:case CANCEL_EV:that._end(e);break;case RESIZE_EV:that._resize();break;case'DOMMouseScroll':case'mousewheel':that._wheel(e);break;case TRNEND_EV:that._transitionEnd(e);break;}},_checkDOMChanges:function(){if(this.moved||this.zoomed||this.animating||(this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale))return;this.refresh();},_scrollbar:function(dir){var that=this,bar;if(!that[dir+'Scrollbar']){if(that[dir+'ScrollbarWrapper']){if(hasTransform)that[dir+'ScrollbarIndicator'].style[transform]='';that[dir+'ScrollbarWrapper'].parentNode.removeChild(that[dir+'ScrollbarWrapper']);that[dir+'ScrollbarWrapper']=null;that[dir+'ScrollbarIndicator']=null;}
return;}
if(!that[dir+'ScrollbarWrapper']){bar=doc.createElement('div');if(that.options.scrollbarClass)bar.className=that.options.scrollbarClass+dir.toUpperCase();else bar.style.cssText='position:absolute;z-index:100;'+(dir=='h'?'height:7px;bottom:1px;left:2px;right:'+(that.vScrollbar?'7':'2')+'px':'width:7px;bottom:'+(that.hScrollbar?'7':'2')+'px;top:2px;right:1px');bar.style.cssText+=';pointer-events:none;'+cssVendor+'transition-property:opacity;'+cssVendor+'transition-duration:'+(that.options.fadeScrollbar?'350ms':'0')+';overflow:hidden;opacity:'+(that.options.hideScrollbar?'0':'1');that.wrapper.appendChild(bar);that[dir+'ScrollbarWrapper']=bar;bar=doc.createElement('div');if(!that.options.scrollbarClass){bar.style.cssText='position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.15);'+cssVendor+'background-clip:padding-box;'+cssVendor+'box-sizing:border-box;'+(dir=='h'?'height:100%':'width:100%')+';'+cssVendor+'border-radius:3px;border-radius:3px';}
bar.style.cssText+=';pointer-events:none;'+cssVendor+'transition-property:'+cssVendor+'transform;'+cssVendor+'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);'+cssVendor+'transition-duration:0;'+cssVendor+'transform: translate(0,0)'+translateZ;if(that.options.useTransition)bar.style.cssText+=';'+cssVendor+'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';that[dir+'ScrollbarWrapper'].appendChild(bar);that[dir+'ScrollbarIndicator']=bar;}
if(dir=='h'){that.hScrollbarSize=that.hScrollbarWrapper.clientWidth;that.hScrollbarIndicatorSize=m.max(m.round(that.hScrollbarSize*that.hScrollbarSize/that.scrollerW),8);that.hScrollbarIndicator.style.width=that.hScrollbarIndicatorSize+'px';that.hScrollbarMaxScroll=that.hScrollbarSize-that.hScrollbarIndicatorSize;that.hScrollbarProp=that.hScrollbarMaxScroll/that.maxScrollX;}else{that.vScrollbarSize=that.vScrollbarWrapper.clientHeight;that.vScrollbarIndicatorSize=m.max(m.round(that.vScrollbarSize*that.vScrollbarSize/that.scrollerH),8);that.vScrollbarIndicator.style.height=that.vScrollbarIndicatorSize+'px';that.vScrollbarMaxScroll=that.vScrollbarSize-that.vScrollbarIndicatorSize;that.vScrollbarProp=that.vScrollbarMaxScroll/that.maxScrollY;}
that._scrollbarPos(dir,true);},_resize:function(){var that=this;setTimeout(function(){that.refresh();},isAndroid?200:0);},_pos:function(x,y){if(this.zoomed)return;x=this.hScroll?x:0;y=this.vScroll?y:0;if(this.options.useTransform){this.scroller.style[transform]='translate('+x+'px,'+y+'px) scale('+this.scale+')'+translateZ;}else{x=m.round(x);y=m.round(y);this.scroller.style.left=x+'px';this.scroller.style.top=y+'px';}
this.x=x;this.y=y;this._scrollbarPos('h');this._scrollbarPos('v');},_scrollbarPos:function(dir,hidden){var that=this,pos=dir=='h'?that.x:that.y,size;if(!that[dir+'Scrollbar'])return;pos=that[dir+'ScrollbarProp']*pos;if(pos<0){if(!that.options.fixedScrollbar){size=that[dir+'ScrollbarIndicatorSize']+m.round(pos*3);if(size<8)size=8;that[dir+'ScrollbarIndicator'].style[dir=='h'?'width':'height']=size+'px';}
pos=0;}else if(pos>that[dir+'ScrollbarMaxScroll']){if(!that.options.fixedScrollbar){size=that[dir+'ScrollbarIndicatorSize']-m.round((pos-that[dir+'ScrollbarMaxScroll'])*3);if(size<8)size=8;that[dir+'ScrollbarIndicator'].style[dir=='h'?'width':'height']=size+'px';pos=that[dir+'ScrollbarMaxScroll']+(that[dir+'ScrollbarIndicatorSize']-size);}else{pos=that[dir+'ScrollbarMaxScroll'];}}
that[dir+'ScrollbarWrapper'].style[transitionDelay]='0';that[dir+'ScrollbarWrapper'].style.opacity=hidden&&that.options.hideScrollbar?'0':'1';that[dir+'ScrollbarIndicator'].style[transform]='translate('+(dir=='h'?pos+'px,0)':'0,'+pos+'px)')+translateZ;},_start:function(e){var that=this,point=hasTouch?e.touches[0]:e,matrix,x,y,c1,c2;if(controlZoom==1){this.scale=escala;controlZoom=0;}
if(!that.enabled)return;if(that.options.onBeforeScrollStart)that.options.onBeforeScrollStart.call(that,e);if(that.options.useTransition||that.options.zoom)that._transitionTime(0);that.moved=false;that.animating=false;that.zoomed=false;that.distX=0;that.distY=0;that.absDistX=0;that.absDistY=0;that.dirX=0;that.dirY=0;if(that.options.zoom&&hasTouch&&e.touches.length>1){c1=m.abs(e.touches[0].pageX-e.touches[1].pageX);c2=m.abs(e.touches[0].pageY-e.touches[1].pageY);that.touchesDistStart=m.sqrt(c1*c1+c2*c2);that.originX=m.abs(e.touches[0].pageX+e.touches[1].pageX-that.wrapperOffsetLeft*2)/2-that.x;that.originY=m.abs(e.touches[0].pageY+e.touches[1].pageY-that.wrapperOffsetTop*2)/2-that.y;if(that.options.onZoomStart)that.options.onZoomStart.call(that,e);}
if(that.options.momentum){if(that.options.useTransform){matrix=getComputedStyle(that.scroller,null)[transform].replace(/[^0-9\-.,]/g,'').split(',');x=+(matrix[12]||matrix[4]);y=+(matrix[13]||matrix[5]);}else{x=+getComputedStyle(that.scroller,null).left.replace(/[^0-9-]/g,'');y=+getComputedStyle(that.scroller,null).top.replace(/[^0-9-]/g,'');}
if(x!=that.x||y!=that.y){if(that.options.useTransition)that._unbind(TRNEND_EV);else cancelFrame(that.aniTime);that.steps=[];that._pos(x,y);if(that.options.onScrollEnd)that.options.onScrollEnd.call(that);}}
that.absStartX=that.x;that.absStartY=that.y;that.startX=that.x;that.startY=that.y;that.pointX=point.pageX;that.pointY=point.pageY;that.startTime=e.timeStamp||Date.now();if(that.options.onScrollStart)that.options.onScrollStart.call(that,e);that._bind(MOVE_EV,window);that._bind(END_EV,window);that._bind(CANCEL_EV,window);},_move:function(e){var that=this,point=hasTouch?e.touches[0]:e,deltaX=point.pageX-that.pointX,deltaY=point.pageY-that.pointY,newX=that.x+deltaX,newY=that.y+deltaY,c1,c2,scale,timestamp=e.timeStamp||Date.now();if(that.options.onBeforeScrollMove)that.options.onBeforeScrollMove.call(that,e);if(that.options.zoom&&hasTouch&&e.touches.length>1){c1=m.abs(e.touches[0].pageX-e.touches[1].pageX);c2=m.abs(e.touches[0].pageY-e.touches[1].pageY);that.touchesDist=m.sqrt(c1*c1+c2*c2);that.zoomed=true;scale=1/that.touchesDistStart*that.touchesDist*this.scale;if(scale>=1)escala=scale;$('#encajarEnPantalla').removeClass('disable');$('#zoomDown').removeClass('disable');$('#zoomUp').removeClass('disable');margenX0=($("#wrapper").width()-$("#scroller").width())/2;margenXI=($("#wrapper").width()-$("#scroller").width()*escala)/2;if(margenXI>0)
{if(escala>=1)
{$('#scroller').css("left",margenXI);}
else
{$('#scroller').css("left",margenX0);}}
else
{$('#scroller').css("left",0);}
if(scale<that.options.zoomMin)scale=0.5*that.options.zoomMin*Math.pow(2.0,scale/that.options.zoomMin);else if(scale>that.options.zoomMax)scale=2.0*that.options.zoomMax*Math.pow(0.5,that.options.zoomMax/scale);that.lastScale=scale/this.scale;newX=this.originX-this.originX*that.lastScale+this.x,newY=this.originY-this.originY*that.lastScale+this.y;this.scroller.style[transform]='translate('+newX+'px,'+newY+'px) scale('+scale+')'+translateZ;if(that.options.onZoom)that.options.onZoom.call(that,e);return;}
that.pointX=point.pageX;that.pointY=point.pageY;if(newX>0||newX<that.maxScrollX){newX=that.options.bounce?that.x+(deltaX/2):newX>=0||that.maxScrollX>=0?0:that.maxScrollX;}
if(newY>that.minScrollY||newY<that.maxScrollY){newY=that.options.bounce?that.y+(deltaY/2):newY>=that.minScrollY||that.maxScrollY>=0?that.minScrollY:that.maxScrollY;}
that.distX+=deltaX;that.distY+=deltaY;that.absDistX=m.abs(that.distX);that.absDistY=m.abs(that.distY);if(that.absDistX<6&&that.absDistY<6){return;}
if(that.options.lockDirection){if(that.absDistX>that.absDistY+5){newY=that.y;deltaY=0;}else if(that.absDistY>that.absDistX+5){newX=that.x;deltaX=0;}}
that.moved=true;that._pos(newX,newY);that.dirX=deltaX>0?-1:deltaX<0?1:0;that.dirY=deltaY>0?-1:deltaY<0?1:0;if(timestamp-that.startTime>300){that.startTime=timestamp;that.startX=that.x;that.startY=that.y;}
if(that.options.onScrollMove)that.options.onScrollMove.call(that,e);},_end:function(e){if(hasTouch&&e.touches.length!==0)return;var that=this,point=hasTouch?e.changedTouches[0]:e,target,ev,momentumX={dist:0,time:0},momentumY={dist:0,time:0},duration=(e.timeStamp||Date.now())-that.startTime,newPosX=that.x,newPosY=that.y,distX,distY,newDuration,snap,scale;that._unbind(MOVE_EV,window);that._unbind(END_EV,window);that._unbind(CANCEL_EV,window);if(that.options.onBeforeScrollEnd)that.options.onBeforeScrollEnd.call(that,e);if(that.zoomed){scale=that.scale*that.lastScale;scale=Math.max(that.options.zoomMin,scale);scale=Math.min(that.options.zoomMax,scale);that.lastScale=scale/that.scale;that.scale=scale;that.x=that.originX-that.originX*that.lastScale+that.x;that.y=that.originY-that.originY*that.lastScale+that.y;that.scroller.style[transitionDuration]='200ms';that.scroller.style[transform]='translate('+that.x+'px,'+that.y+'px) scale('+that.scale+')'+translateZ;actualX=that.x;actualY=that.y;that.zoomed=false;that.refresh();if(that.options.onZoomEnd)that.options.onZoomEnd.call(that,e);return;}
if(!that.moved){if(hasTouch){if(that.doubleTapTimer&&that.options.zoom){clearTimeout(that.doubleTapTimer);that.doubleTapTimer=null;if(that.options.onZoomStart)that.options.onZoomStart.call(that,e);that.zoom(that.pointX,that.pointY,that.scale==1?that.options.doubleTapZoom:1);if(that.options.onZoomEnd){setTimeout(function(){that.options.onZoomEnd.call(that,e);},200);}}else if(this.options.handleClick){if($('#all').width()>=600)$('#control').focus();that.doubleTapTimer=setTimeout(function(){that.doubleTapTimer=null;target=point.target;while(target.nodeType!=1)target=target.parentNode;if(target.tagName!='SELECT'&&target.tagName!='INPUT'&&target.tagName!='TEXTAREA'){ev=doc.createEvent('MouseEvents');ev.initMouseEvent('click',true,true,e.view,1,point.screenX,point.screenY,point.clientX,point.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);ev._fake=true;target.dispatchEvent(ev);}},that.options.zoom?250:0);}}
that._resetPos(400);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
if(duration<300&&that.options.momentum){momentumX=newPosX?that._momentum(newPosX-that.startX,duration,-that.x,that.scrollerW-that.wrapperW+that.x,that.options.bounce?that.wrapperW:0):momentumX;momentumY=newPosY?that._momentum(newPosY-that.startY,duration,-that.y,(that.maxScrollY<0?that.scrollerH-that.wrapperH+that.y-that.minScrollY:0),that.options.bounce?that.wrapperH:0):momentumY;newPosX=that.x+momentumX.dist;newPosY=that.y+momentumY.dist;if((that.x>0&&newPosX>0)||(that.x<that.maxScrollX&&newPosX<that.maxScrollX))momentumX={dist:0,time:0};if((that.y>that.minScrollY&&newPosY>that.minScrollY)||(that.y<that.maxScrollY&&newPosY<that.maxScrollY))momentumY={dist:0,time:0};}
if(momentumX.dist||momentumY.dist){newDuration=m.max(m.max(momentumX.time,momentumY.time),10);if(that.options.snap){distX=newPosX-that.absStartX;distY=newPosY-that.absStartY;if(m.abs(distX)<that.options.snapThreshold&&m.abs(distY)<that.options.snapThreshold){that.scrollTo(that.absStartX,that.absStartY,200);}
else{snap=that._snap(newPosX,newPosY);newPosX=snap.x;newPosY=snap.y;newDuration=m.max(snap.time,newDuration);}}
that.scrollTo(m.round(newPosX),m.round(newPosY),newDuration);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
if(that.options.snap){distX=newPosX-that.absStartX;distY=newPosY-that.absStartY;if(m.abs(distX)<that.options.snapThreshold&&m.abs(distY)<that.options.snapThreshold)that.scrollTo(that.absStartX,that.absStartY,200);else{snap=that._snap(that.x,that.y);if(snap.x!=that.x||snap.y!=that.y)that.scrollTo(snap.x,snap.y,snap.time);}
if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
that._resetPos(200);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);},_resetPos:function(time){var that=this,resetX=that.x>=0?0:that.x<that.maxScrollX?that.maxScrollX:that.x,resetY=that.y>=that.minScrollY||that.maxScrollY>0?that.minScrollY:that.y<that.maxScrollY?that.maxScrollY:that.y;if(resetX==that.x&&resetY==that.y){if(that.moved){that.moved=false;if(that.options.onScrollEnd)that.options.onScrollEnd.call(that);}
if(that.hScrollbar&&that.options.hideScrollbar){if(vendor=='webkit')that.hScrollbarWrapper.style[transitionDelay]='300ms';that.hScrollbarWrapper.style.opacity='0';}
if(that.vScrollbar&&that.options.hideScrollbar){if(vendor=='webkit')that.vScrollbarWrapper.style[transitionDelay]='300ms';that.vScrollbarWrapper.style.opacity='0';}
return;}
that.scrollTo(resetX,resetY,time||0);},_wheel:function(e){var that=this,wheelDeltaX,wheelDeltaY,deltaX,deltaY,deltaScale;if('wheelDeltaX'in e){wheelDeltaX=e.wheelDeltaX/12;wheelDeltaY=e.wheelDeltaY/12;}else if('wheelDelta'in e){wheelDeltaX=wheelDeltaY=e.wheelDelta/12;}else if('detail'in e){wheelDeltaX=wheelDeltaY=-e.detail*3;}else{return;}
if(that.options.wheelAction=='zoom'){deltaScale=that.scale*Math.pow(2,1/3*(wheelDeltaY?wheelDeltaY/Math.abs(wheelDeltaY):0));if(deltaScale<that.options.zoomMin)deltaScale=that.options.zoomMin;if(deltaScale>that.options.zoomMax)deltaScale=that.options.zoomMax;if(deltaScale!=that.scale){if(!that.wheelZoomCount&&that.options.onZoomStart)that.options.onZoomStart.call(that,e);that.wheelZoomCount++;that.zoom(e.pageX,e.pageY,deltaScale,400);setTimeout(function(){that.wheelZoomCount--;if(!that.wheelZoomCount&&that.options.onZoomEnd)that.options.onZoomEnd.call(that,e);},400);}
return;}
deltaX=that.x+wheelDeltaX;deltaY=that.y+wheelDeltaY;if(deltaX>0)deltaX=0;else if(deltaX<that.maxScrollX)deltaX=that.maxScrollX;if(deltaY>that.minScrollY)deltaY=that.minScrollY;else if(deltaY<that.maxScrollY)deltaY=that.maxScrollY;if(that.maxScrollY<0){that.scrollTo(deltaX,deltaY,0);}},_transitionEnd:function(e){var that=this;if(e.target!=that.scroller)return;that._unbind(TRNEND_EV);that._startAni();},_startAni:function(){var that=this,startX=that.x,startY=that.y,startTime=Date.now(),step,easeOut,animate;if(that.animating)return;if(!that.steps.length){that._resetPos(400);return;}
step=that.steps.shift();if(step.x==startX&&step.y==startY)step.time=0;that.animating=true;that.moved=true;if(that.options.useTransition){that._transitionTime(step.time);that._pos(step.x,step.y);that.animating=false;if(step.time)that._bind(TRNEND_EV);else that._resetPos(0);return;}
animate=function(){var now=Date.now(),newX,newY;if(now>=startTime+step.time){that._pos(step.x,step.y);that.animating=false;if(that.options.onAnimationEnd)that.options.onAnimationEnd.call(that);that._startAni();return;}
now=(now-startTime)/step.time-1;easeOut=m.sqrt(1-now*now);newX=(step.x-startX)*easeOut+startX;newY=(step.y-startY)*easeOut+startY;that._pos(newX,newY);if(that.animating)that.aniTime=nextFrame(animate);};animate();},_transitionTime:function(time){time+='ms';this.scroller.style[transitionDuration]=time;if(this.hScrollbar)this.hScrollbarIndicator.style[transitionDuration]=time;if(this.vScrollbar)this.vScrollbarIndicator.style[transitionDuration]=time;},_momentum:function(dist,time,maxDistUpper,maxDistLower,size){var deceleration=0.0006,speed=m.abs(dist)/time,newDist=(speed*speed)/(2*deceleration),newTime=0,outsideDist=0;if(dist>0&&newDist>maxDistUpper){outsideDist=size/(6/(newDist/speed*deceleration));maxDistUpper=maxDistUpper+outsideDist;speed=speed*maxDistUpper/newDist;newDist=maxDistUpper;}else if(dist<0&&newDist>maxDistLower){outsideDist=size/(6/(newDist/speed*deceleration));maxDistLower=maxDistLower+outsideDist;speed=speed*maxDistLower/newDist;newDist=maxDistLower;}
newDist=newDist*(dist<0?-1:1);newTime=speed/deceleration;return{dist:newDist,time:m.round(newTime)};},_offset:function(el){var left=-el.offsetLeft,top=-el.offsetTop;while(el=el.offsetParent){left-=el.offsetLeft;top-=el.offsetTop;}
if(el!=this.wrapper){left*=this.scale;top*=this.scale;}
return{left:left,top:top};},_snap:function(x,y){var that=this,i,l,page,time,sizeX,sizeY;page=that.pagesX.length-1;for(i=0,l=that.pagesX.length;i<l;i++){if(x>=that.pagesX[i]){page=i;break;}}
if(page==that.currPageX&&page>0&&that.dirX<0)page--;x=that.pagesX[page];sizeX=m.abs(x-that.pagesX[that.currPageX]);sizeX=sizeX?m.abs(that.x-x)/sizeX*500:0;that.currPageX=page;page=that.pagesY.length-1;for(i=0;i<page;i++){if(y>=that.pagesY[i]){page=i;break;}}
if(page==that.currPageY&&page>0&&that.dirY<0)page--;y=that.pagesY[page];sizeY=m.abs(y-that.pagesY[that.currPageY]);sizeY=sizeY?m.abs(that.y-y)/sizeY*500:0;that.currPageY=page;time=m.round(m.max(sizeX,sizeY))||200;return{x:x,y:y,time:time};},_bind:function(type,el,bubble){(el||this.scroller).addEventListener(type,this,!!bubble);},_unbind:function(type,el,bubble){(el||this.scroller).removeEventListener(type,this,!!bubble);},destroy:function(){var that=this;that.scroller.style[transform]='';that.hScrollbar=false;that.vScrollbar=false;that._scrollbar('h');that._scrollbar('v');that._unbind(RESIZE_EV,window);that._unbind(START_EV);that._unbind(MOVE_EV,window);that._unbind(END_EV,window);that._unbind(CANCEL_EV,window);if(!that.options.hasTouch){that._unbind('DOMMouseScroll');that._unbind('mousewheel');}
if(that.options.useTransition)that._unbind(TRNEND_EV);if(that.options.checkDOMChanges)clearInterval(that.checkDOMTime);if(that.options.onDestroy)that.options.onDestroy.call(that);},refresh:function(){var that=this,offset,i,l,els,pos=0,page=0;if(that.scale<that.options.zoomMin)that.scale=that.options.zoomMin;that.wrapperW=that.wrapper.clientWidth||1;that.wrapperH=that.wrapper.clientHeight||1;that.minScrollY=-that.options.topOffset||0;that.scrollerW=m.round(that.scroller.offsetWidth*that.scale);that.scrollerH=m.round((that.scroller.offsetHeight+that.minScrollY)*that.scale);that.maxScrollX=that.wrapperW-that.scrollerW;that.maxScrollY=that.wrapperH-that.scrollerH+that.minScrollY;that.dirX=0;that.dirY=0;if(that.options.onRefresh)that.options.onRefresh.call(that);that.hScroll=that.options.hScroll&&that.maxScrollX<0;that.vScroll=that.options.vScroll&&(!that.options.bounceLock&&!that.hScroll||that.scrollerH>that.wrapperH);that.hScrollbar=that.hScroll&&that.options.hScrollbar;that.vScrollbar=that.vScroll&&that.options.vScrollbar&&that.scrollerH>that.wrapperH;offset=that._offset(that.wrapper);that.wrapperOffsetLeft=-offset.left;that.wrapperOffsetTop=-offset.top;if(typeof that.options.snap=='string'){that.pagesX=[];that.pagesY=[];els=that.scroller.querySelectorAll(that.options.snap);for(i=0,l=els.length;i<l;i++){pos=that._offset(els[i]);pos.left+=that.wrapperOffsetLeft;pos.top+=that.wrapperOffsetTop;that.pagesX[i]=pos.left<that.maxScrollX?that.maxScrollX:pos.left*that.scale;that.pagesY[i]=pos.top<that.maxScrollY?that.maxScrollY:pos.top*that.scale;}}else if(that.options.snap){that.pagesX=[];while(pos>=that.maxScrollX){that.pagesX[page]=pos;pos=pos-that.wrapperW;page++;}
if(that.maxScrollX%that.wrapperW)that.pagesX[that.pagesX.length]=that.maxScrollX-that.pagesX[that.pagesX.length-1]+that.pagesX[that.pagesX.length-1];pos=0;page=0;that.pagesY=[];while(pos>=that.maxScrollY){that.pagesY[page]=pos;pos=pos-that.wrapperH;page++;}
if(that.maxScrollY%that.wrapperH)that.pagesY[that.pagesY.length]=that.maxScrollY-that.pagesY[that.pagesY.length-1]+that.pagesY[that.pagesY.length-1];}
that._scrollbar('h');that._scrollbar('v');if(!that.zoomed){that.scroller.style[transitionDuration]='0';that._resetPos(400);}},scrollTo:function(x,y,time,relative){var that=this,step=x,i,l;that.stop();if(!step.length)step=[{x:x,y:y,time:time,relative:relative}];for(i=0,l=step.length;i<l;i++){if(step[i].relative){step[i].x=that.x-step[i].x;step[i].y=that.y-step[i].y;}
that.steps.push({x:step[i].x,y:step[i].y,time:step[i].time||0});}
that._startAni();},scrollToElement:function(el,time){var that=this,pos;el=el.nodeType?el:that.scroller.querySelector(el);if(!el)return;pos=that._offset(el);pos.left+=that.wrapperOffsetLeft;pos.top+=that.wrapperOffsetTop;pos.left=pos.left>0?0:pos.left<that.maxScrollX?that.maxScrollX:pos.left;pos.top=pos.top>that.minScrollY?that.minScrollY:pos.top<that.maxScrollY?that.maxScrollY:pos.top;time=time===undefined?m.max(m.abs(pos.left)*2,m.abs(pos.top)*2):time;that.scrollTo(pos.left,pos.top,time);},scrollToPage:function(pageX,pageY,time){var that=this,x,y;time=time===undefined?400:time;if(that.options.onScrollStart)that.options.onScrollStart.call(that);if(that.options.snap){pageX=pageX=='next'?that.currPageX+1:pageX=='prev'?that.currPageX-1:pageX;pageY=pageY=='next'?that.currPageY+1:pageY=='prev'?that.currPageY-1:pageY;pageX=pageX<0?0:pageX>that.pagesX.length-1?that.pagesX.length-1:pageX;pageY=pageY<0?0:pageY>that.pagesY.length-1?that.pagesY.length-1:pageY;that.currPageX=pageX;that.currPageY=pageY;x=that.pagesX[pageX];y=that.pagesY[pageY];}else{x=-that.wrapperW*pageX;y=-that.wrapperH*pageY;if(x<that.maxScrollX)x=that.maxScrollX;if(y<that.maxScrollY)y=that.maxScrollY;}
that.scrollTo(x,y,time);},disable:function(){this.stop();this._resetPos(0);this.enabled=false;this._unbind(MOVE_EV,window);this._unbind(END_EV,window);this._unbind(CANCEL_EV,window);},enable:function(){this.enabled=true;},stop:function(){if(this.options.useTransition)this._unbind(TRNEND_EV);else cancelFrame(this.aniTime);this.steps=[];this.moved=false;this.animating=false;},zoom:function(x,y,scale,time){var that=this,relScale=scale/that.scale;if(!that.options.useTransform)return;that.zoomed=true;time=time===undefined?200:time;x=x-that.wrapperOffsetLeft-that.x;y=y-that.wrapperOffsetTop-that.y;that.x=x-x*relScale+that.x;that.y=y-y*relScale+that.y;that.scale=scale;that.refresh();that.x=that.x>0?0:that.x<that.maxScrollX?that.maxScrollX:that.x;that.y=that.y>that.minScrollY?that.minScrollY:that.y<that.maxScrollY?that.maxScrollY:that.y;that.scroller.style[transitionDuration]=time+'ms';that.scroller.style[transform]='translate('+that.x+'px,'+that.y+'px) scale('+scale+')'+translateZ;that.zoomed=false;},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating;}};function prefixStyle(style){if(vendor==='')return style;style=style.charAt(0).toUpperCase()+style.substr(1);return vendor+style;}
dummyStyle=null;if(typeof exports!=='undefined')exports.iScroll=iScroll;else window.iScroll=iScroll;})(window,document);