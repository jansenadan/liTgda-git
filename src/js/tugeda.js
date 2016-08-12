(function foreva() {
$(document).on('ready', function(){
	lituFront();
})

var _lt = {
	_vel: 600,
	_dAnchoPage: 0,
	_esMobile: 0,
	_camino: [],
	// _camino: ['Ruta',1,2,3,'3-1','3-1-1','3-1-2',4,5,6,7,8,9,10,11,12,13,15,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,38],
	// _camino: ['Ruta1',1,2,3,'3-1','3-1-1','3-1-2',4,5,6,7,8,9,10,11,12,13,15,17,18,19,22,27,30],
	// _camino: ['Ruta2',1,2,3,'3-1','3-1-1','3-1-2',4,5,6,7,8,9,10,11,12,13,15,17,18,19,22,27,30],
	// _camino: ['Ruta',1,2,3,'3-1','3-1-1','3-1-2',4,6,6,7,8,9,10],
	_rStart: ['ruta',1,2,3],
	_r0_0: ['Resto del mundo',1,2,3,4],
	_r0_0a: [4],
	_r0_1: ['Colombia',1,2,3,'3-1',4],
	_r0_1a: [301],/*['3-1'],*/
	_r0_1_0: /*'Colombia Continental',*/[4,5,6],
	_r0_1_1: /*'Providencia',*/[311,4,5,6],
	_r0_1_2: /*'San Andrés',*/[312,4,5,6],
	_rmixta: [7],
	_r1: [8,9,10,11,12,13,14,15,16,17],
	_r1parcial: [8,9,10],
	_r1emo: [11,12,13,14,15,16,17],
	_r1noEmo: [12,13,14,15,16,17],
	_r2: [18,19,20,21,14,22,23,24,25,16,17],
	_r3: [26,27,28,29,30,31,32,33,34,35,36,/*'36-1',*/37,38],
	_ruta: 0,
	_actual: 0,
	_nSlides: 0,
	_sig: 0,
	_pais: 0,
	_depto: 0,
	_gen: 0,
	_edad: 0,
	_edu: 0,
	_idi: 0,
	_etni: 0,
	_situa: 0,
	_emo: 0,
	_nivel: 0,
	_accion: 0,
	_vecinos: 0,
	_acuerdo: 0,
	_confia: 0,
	_repite: 0,
	_reversa: 0,
	_alerta:0,
	_vertModu: 0,
	_vertActual: 1,
	_vertNum: 0,
	_inyecta: {
		8: {
			1: '<h2>Ten cuidado</h2><p class="txt-l">Vivir choques por celos</p><p>significa que se ha perdido algo de confianza y respeto con tu pareja.</p><div class="consejo"><p>Las parejas que evitan los choques viven felices su amor.</p><h4 class="frase-cursiva">Dat da dat!</h4></div>',
			2: '<h2>Ten cuidado</h2><p class="txt-l">Vivir cantaleta por celos</p><p>significa que se ha perdido un nivel importante de confianza y respeto con tu pareja.</p><div class="consejo"><p>Las parejas que no se dan cantaleta se cansan menos.</p><h4 class="frase-cursiva">Lego taak!</h4></div>',
			3: '<h2>Ten cuidado</h2><p class="txt-l">Vivir controladera por celos</p><p>significa que se ha perdido un nivel importante de confianza y respeto con tu pareja.</p><div class="consejo"><p>Las parejas sin controladera fortalecen la confianza.</p><h4 class="frase-cursiva">No chuut?</h4></div>',
			4: '<h2>Ten cuidado</h2><p class="txt-l">Experimentar show de celos</p><p>significa que se ha perdido un nivel importante de confianza y respeto con tu pareja.</p><div class="consejo"><p>Sin shows de celos es mayor la tranquilidad de la pareja.</p><h4 class="frase-cursiva">Tek it iisi!</h4></div>',
			5: '<h2>Ten cuidado</h2><p class="txt-l">Vivir revisadera por celos</p><p>significa que se ha perdido mucha confianza y respeto con tu pareja.</p><div class="consejo"><p>Las parejas que no andan revisándose los objetos personales viven sin estrés.</p><h4 class="frase-cursiva">Dat da dat!</h4></div>',
			6: '<h2>Ten cuidado</h2><p class="txt-l">Vivir vigiladera por celos</p><p>significa que se ha perdido mucha confianza y respeto con tu pareja.</p><div class="consejo"><p>Las parejas que no andan vigilándose viven su amor sin desconfianza.</p><h4 class="frase-cursiva">Tek it iisi!</h4></div>',
			7: '<h2>Ten cuidado</h2><p class="txt-l">Experimentar prohibiciones por celos</p><p>significa que se ha perdido mucha confianza y respeto con tu pareja.</p><div class="consejo"><p>Sin prohibiciones se disfruta de un amor sin castigos.</p><h4 class="frase-cursiva">No chuut?</h4></div>',
			8: '<h2>Ten cuidado</h2><p class="txt-l">Vivir peleas y golpes por celos</p><p>significa que se ha perdido demasiada confianza y respeto con tu pareja.</p><div class="consejo"><p>Las parejas que resuelven por las buenas logran todo lo que se proponen.</p><h4 class="frase-cursiva">Lego taak!</h4></div>',
			9: '<h2>Ten cuidado</h2><p class="txt-l">Experimentar amenazas por celos</p><p>significa que se ha perdido demasiada confianza y respeto con tu pareja.</p><div class="consejo"><p>Las parejas que no se amenazan cultivan un amor libre de miedo.</p><h4 class="frase-cursiva">Dat da dat!</h4></div>',
			10: '<h2>Ten cuidado</h2><p class="txt-l">Vivir encierro por celos</p><p>significa que se perdió demasiada confianza y respeto con tu pareja.</p><div class="consejo"><p>Cuando se elige no encerrar a la pareja, se respeta la relación y el derecho a vivir libremente.</p><h4 class="frase-cursiva">No chuut?</h4></div>',
			11: '<h2>Ten cuidado</h2><p class="txt-l">Llegar a romper mal por celos</p><p>significa que se perdió demasiada confianza y respeto con tu pareja.</p><div class="consejo"><p>Cuando se elige nunca celar, se evita romper la relación de forma agresiva.</p><h4 class="frase-cursiva">Dat da dat!</h4></div>'
		},
		11: {
			1: '<h2>Está claro</h2><p class="txt-l">Si algunas veces has sentido incomodidad por celos</p><p>significa que tu amor de pareja ha sufrido un daño.</p><div class="consejo"><p>Sin incomodidad, se disfruta más del amor.</p></div>',
			2: '<h2>Está claro</h2><p class="txt-l">Si has sentido incomodidad permanente por celos</p><p>significa que tu amor de pareja ha sufrido un daño grande.</p><div class="consejo"><p>Sin inconformidad, el amor crece mejor.</p></div>',
			3: '<h2>Está claro</h2><p class="txt-l">Si has derramado lágrimas amargas por celos</p><p>significa que tu amor de pareja ha sufrido un daño grande.</p><div class="consejo"><p>Sin lágrimas constantes, el amor se fortalece.</p></div>',
			4: '<h2>Está claro</h2><p class="txt-l">Si has sentido resentimiento, odio o rencor por celos</p><p>significa que el daño sufrido por tu amor de pareja ha sido muy grande.</p><div class="consejo"><p>Sin odio y sin rencor, el amor da buenos frutos.</p></div>',
			5: '<h2>Está claro</h2><p class="txt-l">Si has sentido desesperación por celos</p><p>significa que el daño sufrido por tu amor de pareja ha sido muy grande.</p><div class="consejo"><p>Cuando la calma gana a la desesperación, las parejas evitan la violencia.</p></div>',
			6: '<h2>Está claro</h2><p class="txt-l">Si has sentido terror por causa de los celos</p><p>significa que el daño sufrido por tu amor de pareja es irreparable.</p><div class="consejo"><p>Cuando la paz de la pareja le gana al miedo, la claridad guía la relación.</p></div>',
			7 :'<h2>Está claro</h2><p class="txt-l">Si has llegado a sentir aborrecimiento por causa de los celos</p><p>significa que el daño sufrido por tu amor de pareja ha sido muy grande.</p><div class="consejo"><p>El cuidado, el respeto y la confianza preservan el cariño y el aprecio en la pareja.</p></div>'
		},
		12: {
			1: '<p>Tus respuestas indican que tienes</p><p class="txt-l">un amor que no conviene</p><h2>Da wat yu de wiet pan</h2><p>Los celos han lesionado de alguna manera la confianza, el respeto y el cariño en pareja, y lo más preocupante es que ya hay violencia en tu relación.</p><p>Con toda seguridad la violencia crecerá. </p><p>Revisa  y corrige: <br>  Elimina los celos antes de que crezcan.</p>',
			2: '<p>Tus respuestas indican que tienes</p><p class="txt-l">un amor que no conviene</p><h2>Da wat yu de wiet pan</h2><p>Los celos han lesionado grandemente la confianza, el respeto y el cariño en pareja, y lo más preocupante es que ya hay mucha violencia en tu relación y esta  violencia seguirá creciendo y creciendo.</p><p>¿Qué harás para detener esta situación?</p>',
			3: '<p>Tus respuestas indican que tienes</p><p class="txt-l">un amor que no conviene</p><h2>Da wat yu de wiet pan</h2><p>Los celos han lesionado irremediablemente la confianza, el respeto y el cariño en pareja, y lo más preocupante es que la violencia de tu relación pone en riesgo la vida y la integridad. Es indispensable tomar una decisión radical.</p><p>¿Qué harás para detener esta situación?</p>'
		},
		13: {
			1: '<h2 class="frase-cursiva">Sabías que</h2><p class="txt-l">las malas palabras y el control son violencia.</p><p class="txt-l">No es normal que haya problemas por celos.</p><p>Es un síntoma de desconfianza, maltrato y dominio. Si no puedes corregirlos por tu cuenta, busca orientación profesional.</p><p class="txt-l">Esto puede salvar vidas.</p><p class="reflex">Una persona que no aprende a controlar sus celos es capaz de acabar con la vida de su pareja.</p><img src="img/elem/globo-corazoncito.png" class="img-responsive center-block" alt="Corazón pequeño">',
			2: '<h2 class="frase-cursiva">Sabías que</h2><p class="txt-l">los insultos y la controladera son violencia.</p><p class="txt-l">No es normal que haya acoso por celos.</p><p style="max-width: 720px;">Es un síntoma de desconfianza, irrespeto e invasión de la privacidad. Si no puedes corregirlos termina con la relación y busca orientación de un profesional.</p><p class="txt-l">Esto puede salvar vidas.</p><p class="reflex" style="max-width: 450px;">Una persona que no aprende a controlar sus celos es capaz de acabar con la vida de su pareja.</p><img src="img/elem/globo-corazoncito.png" class="img-responsive center-block" alt="Corazón pequeño">',
			3: '<h2 class="frase-cursiva">Sabías que</h2><p class="txt-l">por celos ocurren tragedias.</p><p class="txt-l">Tú o tu pareja están en grave peligro de lesión o muerte.</p><p class="txt-l">Los celos han ido demasiado lejos.</p><p class="reflex">Es hora de terminar con la relación y de pedir ayuda a las autoridades para solicitar orientación y protección.</p><img src="img/elem/globo-corazoncito.png" class="img-responsive center-block" alt="Corazón pequeño">'
		},
		23: {
			1: '<p class="txt-l">Tu respuesta muestra que no eres indiferente frente a la violencia contra la mujer y eso</p><h2>está muy bien</h2><p class="txt-l"><span>Sin embargo, </span>la intervención directa no es la mejor opción ya que te expones a la agresión.</p><div class="consejo"><p class="txt-l">¡Lo mejor es llamar a la autoridad para evitar nuevas agresiones!</p></div>',
			2: '<p class="txt-l">Tu respuesta muestra que no eres indiferente frente a la violencia contra la mujer, pero además, sabes cuidar la integridad  de todos (as) acudiendo a la autoridad.</p><h2>¡Eso está muy pero muy bien!</h2><div class="consejo"><p class="txt-l">Actuar por solidaridad nos hace mejores vecinos, mejores personas y mejores ciudadanos: gracias por ayudar.</p></div>',
			3: '<p class="txt-l">Tu respuesta muestra que quizás, por evitarte problemas y malos ratos, prefieres ser indiferente frente a esta violenta situación.</p><h2>¡Ser indiferente no es la salida !</h2><div class="consejo"><p class="txt-l">Si quieres ayudar sin exponerte, llama a la autoridad. De esta manera colaboras, no dejas sola a la víctima y dejas claro que esto está mal.</p></div>'
		},
		29: {
			1: '<h2>¡Congrats!</h2><p class="txt-l">Tienes una alta disposición a convivir con personas distintas a ti.</p><p>Eso demuestra que reconoces el valor de las diferencias y la importancia de la tolerancia para vivir juntos.</p><p class="txt-l">Recuerda siempre que hay un poco de los demás en ti.</p><p>Todos estamos hechos de carne y hueso, y de distintos ingredientes que nos dan otras personas con sus formas de pensar, sentir, actuar y ver el mundo. En cada uno hay mundos distintos y rasgos comúnes que nos permiten comunicarnos, reconocernos, respetarnos y construir juntos.</p><p class="txt-l">¡Difunde esa actutid al mundo que te rodea!</p><img src="img/elem/flecha-p29.png" class="img-responsive center-block" alt="Flecha de cierre"/>',
			2: '<h2>¡Lego Taak!</h2><p class="txt-l">Tu disposición a convivir con personas distintas a ti puede mejorar.</p><p>No te dejes llevar por los prejuicios, no generalices.</p><p>Date la oportunidad de pensar mejor de la gente, ya que todos podemos comportarnos de manera correcta o incorrecta, pero eso nada tiene que ver con el origen, el color o la cultura. Las emociones y actitudes de intolerancia pueden terminar en comportamientos violentos, por eso recuerda que la diversidad es la oportunidad para construir cosas nuevas.</p><p>¡Tolerar es la llave de la convivencia y no consiste en aguantar o ser indiferente; es abrirte a conocer, respetar y reconocer al otro con sus diferencias. Get in da mode Livin Tugeda!</p><img src="img/elem/flecha-p29.png" class="img-responsive center-block" alt="Flecha de cierre"/>',
			3: '<h2>¡Watch Out!</h2><p class="txt-l">Tienes muy poca disposición a convivir con personas distintas a ti. ¡Cambia el Chip!</p><p>No te dejes llevar por los prejuicios, no generalices.</p><p>Date la oportunidad de pensar mejor de la gente, ya que todos podemos comportarnos de manera correcta o incorrecta, pero eso nada tiene que ver con el origen, el color o la cultura. Las emociones y actitudes de intolerancia pueden terminar en comportamientos violentos, por eso recuerda que la diversidad es la oportunidad para construir cosas nuevas.</p><p>¡Tolerar es la llave de la convivencia y no consiste en aguantar o ser indiferente; es abrirte a conocer, respetar y reconocer al otro con sus diferencias.  Get in da mode Livin Tugeda!</p><img src="img/elem/flecha-p29.png" class="img-responsive center-block" alt="Flecha de cierre"/>'
		},
		32: {
			1: '<h2>¡Congrats!</h2><p class="txt-l">El diálogo es tu principal herramienta para la vida en comunidad. </p><p>Tienes un gran potencial de líder. Piensas en los demás para tomar decisiones, buscas el diálogo para resolver conflictos, ayudas a mantener las buenas relaciones entre tu gente tejiendo puentes de comunicación y generando nuevos acuerdos. </p><p>Además eres capaz de sobreponerte al incumplimiento y te pones en los zapatos del otro porque conoces la importancia de construir juntos. </p><p class="txt-l">¡Explota ese potencial y contagia a los demás con tu buena vibra! </p><img src="img/elem/flecha-p29.png" class="img-responsive center-block" alt="Flecha de cierre"/>',
			2: '<h2>¡Lego Taak!</h2><p class="txt-l">Full que invites al otro a dialogar o a generar nuevos acuerdos, pero no lo hagas buscando culparlo o avergonzarlo.</p><p>¡Date la oportunidad completa!</p><p>Crees en el diálogo pero dejas que los malos sentimientos se queden y opaquen tus buenas intenciones, haciendo que la relación no se repare del todo.  Cuando actúas desde el resentimiento la posibilidad de construir buenas relaciones con los demás se hace difícil.</p><p class="txt-l">Para crecer juntos, exprésate y escucha a los demás sin hacerlos sentir mal.</p><img src="img/elem/flecha-p29.png" class="img-responsive center-block" alt="Flecha de cierre"/>',
			3: '<h2>¡Watch Out!</h2><p class="txt-l">Cuando evades no resuelves y haces más difícil reconstruir acuerdos y relaciones.</p><p> Además, hacer sentir culpable al otro o avergonzarlo tampoco es una forma de reparar la situación; al contrario, es agregar un daño extra. </p><p>¡Cuida tus vínculos con los demás!</p><p>Al no hablar ni generar acuerdos agrandas el conflicto hasta que se hace irreparable. Además, te muestras como alguien indiferente a la opinión, situación o sentimientos del otro. Aprende a oír y ponte en el lugar de otro porque seguramente también te has equivocado o has incumplido.</p><p class="txt-l">¡No imaginas los beneficios que llegan y lo bien que se siente!</p><img src="img/elem/flecha-p29.png" class="img-responsive center-block" alt="Flecha de cierre"/>'
		},
		35: {
			1: '<h2>¡Congrats!</h2><p class="txt-l">Confiar es la base de la convivencia y de tu tranquilidad. Es soltar, crecer junto a los demás, creer en ti y en los otros.</p><p>Has logrado superar las barreras de la incredulidad. Eso te permite afianzar relaciones libres, respetuosas y duraderas. Si no confiaras y la duda te asaltara a cada instante, vivirías entre la prevención y el miedo. Pero tú decidiste confiar. Expande esa maravillosa actitud.</p><p class="txt-l">¡Porque la confianza genera más confianza!</p><img src="img/elem/flecha-p29.png" class="img-responsive center-block" alt="Flecha de cierre"/>',
			2: '<h2>¡Watch Out! </h2><p class="txt-l">La desconfianza es una carga que no vale la pena llevar a cuestas y, llevada al extremo, te aisla y te inmoviliza.</p><p>Confía. Vivir tu vida desde la confianza te libera y es el primer paso para una sana convivencia.</p><p>Si no confías y la duda te asalta a cada instante, estás viviendo con prevención y miedo. Dar cada paso te cuesta demasiados esfuerzos, tiempo y emociones negativas. Atrévete a confiar. Verás lo bien que se siente y los mundos que se te abren.</p><p class="txt-l">¡Porque la confianza genera más confianza!</p><img src="img/elem/flecha-p29.png" class="img-responsive center-block" alt="Flecha de cierre"/>'
		}
	}
}


function lituFront() {
	mide();
	$('.page').css({'left': _lt._dAnchoPage, 'display': 'none'});
	$('.p1').css({'left': 0, 'display': 'block'});
	_lt._actual = 1;
	setRuta(_lt._rStart, 0);
	$('#mainNav .izq').on('click', function(e){
		_lt._reversa = 1;
		desli(e);
	}).siblings('.der').on('click', function(e){
		_lt._reversa = 0;
		desli(e);
	});
	$('.p1 .der').on('click', function(e){
		_lt._reversa = 0;
		desli(e);
	});
	displayFlechas();
	human();
	$('input').on('change', quitaAlerta);
	$('.p7 .check input').on('change', excluyeCheck);
	$('.p10 .check input').on('change', excluyeCheck);
	$('.p27 .check input').on('change', excluyeCheck);
	$('.reset').on('click', resetEncuesta);
	// $('.backTopostales').on('click', goBackTopostales);
	// $('area').mouseover(function(e){muestra(this,e)});
	// $('area').mouseout(function(){oculta()});
	// $('area').mousemove(function(e){desfase(e)});
	$(".litu-mapa").on( "click", "input[type=radio]", function(){
		var miID = $(this).attr('id'),
			miLab = $(this).closest('.page').find('label[for='+miID+']'),
			labels = $(this).closest('.page').find('label');
		labels.removeClass('lActivo');
		miLab.addClass('lActivo');
	});
}


function lee() {
	var pasa = 0,
		val = 0,
		actu = _lt._camino[_lt._actual],
		queEsActu = typeof actu,
		tostr = actu.toString();
	
	// loga('queEsActu: ', queEsActu);
	if(actu > 1 && actu != 5 && actu != 8 && actu != 9 && actu != 11 && actu != 12 && actu != 13 && actu != 14 && actu != 15 && actu != 16 && actu != 18  && actu != 19  && actu != 20  && actu != 21  && actu != 23  && actu != 24  && actu != 25 && actu != 26 && actu != 28 && actu != 29 && actu != 30 && actu != 31 && actu != 32 && actu != 34 && actu != 35  && actu != 36  && actu != 37) {
		var inp = $('.p'+_lt._camino[_lt._actual]+' input:checked'),
			inpColl = inp.length;
		if (inpColl > 1) {
			val = [];
			inp.each(function (i) {
				val[i] = $(this).attr('value');
				loga('val['+i+']: ',val[i]);
			})
		} else {
			val = inp.attr('value');
		}

		pasa = inpColl;
		_lt._alerta = 0;
		// loga('inp: ',inp);
		loga('val: ',val+', actu: '+actu+', _lt._camino: '+_lt._camino);
		// initVert();

	} else if (actu === 5) {
		var edadH = _lt._edad,
			educaH = $('.p'+_lt._camino[_lt._actual]+' .radio input:checked'),
			idioH = $('.p'+_lt._camino[_lt._actual]+' .check input:checked'),
			idioHColl = idioH.length;
		if (idioHColl > 1) {
			// val = [];
			_lt._idi = [];
			idioH.each(function (i) {
				_lt._idi[i] = $(this).attr('value');
				loga('_lt._idi['+i+']: ',_lt._idi[i]);
			})
		} else {
			_lt._idi = idioH.attr('value');
		}
		// val = _lt._idi.length;
		_lt._edu = educaH.attr('value');
		if(edadH != 0 && _lt._edu != 0 && _lt._edu != undefined && _lt._idi != 0 && _lt._idi != undefined ) {
			pasa = 1;
			loga('Validado Multicampo');
		}
		_lt._alerta = 1;
		loga('val: ',val+', actu: '+actu+', _lt._camino: '+_lt._camino);
		loga('Datos Pag 5 edadH: ',edadH+', _lt._edu: '+_lt._edu+', _lt._idio: '+_lt._idi);
			//Aquí hay que validar todos los campos
			//Incluidos el slider de la edad, checkbox de escolaridad
			//y los checkbox de idioma
	} else if (actu === 30) {
		var acuerData = $('.p'+_lt._camino[_lt._actual]+' input:checked'),
			acuerDataColl = acuerData.length;
		loga('Checkpoint---->', acuerData+', acuerDataColl: '+acuerDataColl);
		if (acuerDataColl > 1) {
			val = [];
			// _lt._acuerdo = [];
			acuerData.each(function (i) {
				val[i] = [];
				val[i][0] = $(this).attr('name');
				val[i][1] = $(this).attr('value');
				loga('val['+i+']: ',val[i]);
			})
			// loga('Respondió varias: ',val)
			if (val.length === 5) {
				loga('Respondió todo: ',val);
				var nivel = 0;
				if (val[0][1] > 2 && val[4][1] > 2 && val[1][1] < 3 && val[2][1] < 3 && val[3][1] < 3) {
					nivel = 1;
				} else if (val[0][1] < 3 && val[4][1] < 3 && val[1][1] > 2 && val[2][1] > 2 && val[3][1] > 2) {
					nivel = 3;
				} else {
					nivel = 2;
				}
				aplicaNiveles(32, nivel, true, 'rect');
				pasa = 1;
			}
		} else {
			val = acuerData.attr('value')
			loga('Está incompleto: ',val)
		}


	} else {
		_lt._alerta = 0;
		pasa = 1;
		// initVert();
	}
	switch(actu) {
		case 2:
			if (val === 'gente') {
				_lt._ruta = 3; 
			} else {
				_lt._ruta = 0;
			}
			loga('Pantalla 2; _lt._ruta: ',_lt._ruta);
		break;
		case 3:
			_lt._camino = _lt._rStart;
			if (!_lt._reversa) {
				// Toca resetear el camino hasta lo que debería llevar acá.
				// _lt._camino = _lt._rStart;
				/*var ar = _lt._rStart;
				 loga('Reversa ar: ',ar);
				 setRuta(ar, 0);*/
				if (val === 'Resto del mundo') {
					_lt._pais = val;
					loga('_lt._ruta: ', _lt._ruta);
					if (_lt._ruta === 3) {
						var ar = _lt._camino.concat(_lt._r0_1_0).concat(_lt._r3);
						loga('ar: ', ar);
						setRuta(ar, 1);
					} else if (_lt._ruta === 0) { // <-------- 20160731-12h: Hice cambios aquí
						var ar = _lt._camino.concat(_lt._r0_1_0);
						loga('ar: ', ar);
						setRuta(ar, 0);
					}
					/*var ar = _lt._camino.concat(_lt._r0_1_0);
					 loga('ar: ',ar);
					 setRuta(ar, 0); */
				} else if (val === 'Colombia') {
					_lt._pais = val;
					var ar = _lt._camino.concat(_lt._r0_1a);
					loga('ar: ', ar);
					setRuta(ar, 0);
					// setRuta(_lt._r0_1, 0);
				}
				loga('Pantalla 3; _lt._pais: ', _lt._pais);
			}
		break;
		case 301:
			// Toca resetear el camino hasta lo que debería llevar acá.
			// _lt._camino = _lt._rStart.concat(_lt._r0_1a);
			var ar = _lt._rStart.concat(_lt._r0_1a);
			setRuta(ar, 0);
			if (!_lt._reversa) {
				_lt._depto = val;
				if (val === 'San Andrés') {
					var ar = _lt._camino.concat(_lt._r0_1_2);
					loga('ar: ',ar);
					setRuta(ar, 0);
				} else if(val === 'Providencia') {
					var ar = _lt._camino.concat(_lt._r0_1_1);
					loga('ar: ',ar);
					setRuta(ar, 0);
				} else if (val != undefined) {
					var ar = _lt._camino.concat(_lt._r0_1_0);
					loga('ar: ',ar);
					setRuta(ar, 0);
				}
				loga('Estoy en Col: ',_lt._depto);
			}
		break;
		case 311:
		case 312:
			if (!_lt._reversa && val != undefined) {
				if (_lt._ruta === 3) {
					var ar = _lt._camino.concat(_lt._r3);
					loga('ar: ',ar);
					setRuta(ar, 1);
				}
			}

		break;
		case 4:
			if(!_lt._reversa) {
				_lt._gen = val;
				if (val === 'Mujer') {
					$('.p5 .corpo').removeClass('hom').addClass('fem');
					// $('.p5 .ui').append('Es una '+val);
				} else if (val === 'Hombre') {
					$('.p5 .corpo').removeClass('fem').addClass('hom');
					// $('.p5 .ui').append('Es un '+val);
				}
			}
			/*if (_lt._camino[_lt._actual] = undefined) {
				var ar = _lt._camino.concat(_lt._r0_1_0);
				loga('ar: ',ar);
				setRuta(ar, 0);
			};*/
		break;
		case 6:
			if(!_lt._reversa){
				_lt._etni = val;
				loga('_lt._ruta: ',_lt._ruta);
				if (_lt._ruta === 3) {
					if (_lt._camino[_lt._actual + 1] === undefined) {
						var ar = _lt._camino.concat(_lt._r3);
						loga('ar: ',ar);
						setRuta(ar, 1);
					}
				} else if (_lt._ruta < 3) {
					var ar = _lt._camino.concat(_lt._rmixta);
					loga('ar: ',ar);
					setRuta(ar, 0);
				}
			}
		break;
		case 7:
			// Toca resetear el camino hasta lo que debería llevar acá.
			var puntoCorte = _lt._camino.indexOf(7) + 1,
				ar = _lt._camino.slice(0,puntoCorte);
			loga('Reversa ar: ',ar);
			setRuta(ar, 0);
			if (!_lt._reversa) {
				var quees=typeof val,
					nivel = " ";
				loga('quees: ',quees);
				if (quees == 'object') {
					val.forEach(function(currentValue,index) {
						nivel = parseInt(currentValue);
						loga('Varios: '+nivel, typeof nivel);
					});
					eligeCamino7();
				} else {
					nivel = parseInt(val);
					loga('uno: '+nivel, typeof nivel);
					eligeCamino7();
				}
				_lt._situa = nivel;
			}

			function eligeCamino7() {
				loga('eligeCamino: '+nivel, typeof nivel);
				if (nivel < 1) {
					var ar = _lt._camino.concat(_lt._r2);
					_lt._ruta = 2;
					loga('es 0 ar: ',ar);
					setRuta(ar, 1);
				} else {
					var ar = _lt._camino.concat(_lt._r1parcial);
					_lt._ruta = 1;
					loga('es != 0 ar: ',ar);
					setRuta(ar, 0);
					aplicaNiveles(8, nivel, true, 'rect');
					aplicaNiveles(9, nivel, false, 0);
					// $('.p8').addClass('nivel'+nivel).siblings('.p9').addClass('nivel'+nivel);
				}
			}
		break;
		case 10:
			// Toca resetear el camino hasta lo que debería llevar acá.
			var puntoCorte = _lt._camino.indexOf(10) + 1,
				ar = _lt._camino.slice(0,puntoCorte);
			loga('Reversa ar: ',ar);
			setRuta(ar, 0);
			if (!_lt._reversa) {
				var quees=typeof val,
					nivel = " ";

				loga('quees: ',quees+', val:'+val);
				if( quees != "undefined" ){
					if (quees == 'object') {
						val.forEach(function(currentValue,index) {
							nivel = parseInt(currentValue);
							loga('Varios: '+nivel, typeof nivel);
						});
						_lt._emo = nivel;
						loga('aqui aplico valor a _lt._emo: '+_lt._emo, typeof _lt._emo);
						eligeCamino10();
					} else if (quees == 'string') {
						if (val.length > 1) {
							nivel = parseInt(0);
						} else {
							nivel = parseInt(val);

						}
						_lt._emo = nivel;
						eligeCamino10();
					} else {
						nivel = parseInt(val);
						loga('uno: '+nivel, typeof nivel);
						_lt._emo = nivel;
						loga('aqui aplico valor a _lt._emo: '+_lt._emo, typeof _lt._emo);
						eligeCamino10();
					}
				}
			}

			function eligeCamino10() {
				// if (_lt._emo === 0) {};
				if (_lt._situa < 2 && _lt._emo < 2) {
					_lt._nivel = 1;
				} else if (_lt._situa < 8 && _lt._emo < 4) {
					_lt._nivel = 2;
				} else if (_lt._situa > 8) {
					_lt._nivel = 3;
				} else if (_lt._emo > 3) {
					_lt._nivel = 3;
				}
				loga('Resultado, se tiene encuenta el _lt._situa: '+_lt._situa, typeof _lt._situa);
				loga('Resultado, se tiene encuenta el _lt._emo: '+_lt._emo, typeof _lt._emo);
				loga('Resultado, nivel final: '+_lt._nivel, typeof _lt._nivel);
				aplicaNiveles(12, _lt._nivel, true, 'rect');
				aplicaNiveles(13, _lt._nivel, true, 'globo');
				if (nivel < 1) {
					var ar = _lt._camino.concat(_lt._r1noEmo);
					loga('No hay emocion, ar: ',ar);
					setRuta(ar, 1);
					// var nuevoNivel = Math.ceil(_lt._situa * 0.636);
					loga('Como el nivel es 0, sigue a la 12, _lt._situa: ',_lt._situa);
				} else {
					var ar = _lt._camino.concat(_lt._r1emo);
					loga('es != 0 ar: ',ar);
					setRuta(ar, 1);
					loga('Se aplica el nivel capturado, nivel: ',nivel);
					aplicaNiveles(11, nivel, true, 'rect');
				};
			}
		break;
		/*case 13:
		break;
		case 15:
			initVert();
			if (_lt._reversa) {}
		break;*/
		case 22:
			if(!_lt._reversa){
				var quees=typeof val,
					nivel = ' ';
				loga('quees: ',quees);
				// nivel = parseInt(val);
				// loga('uno: '+nivel, typeof nivel);
				switch(val) {
					case 'interviene':
						nivel = parseInt(1);
						break;
					case 'llamaAutoridad':
						nivel = parseInt(2);
						break;
					case 'nadaHace':
						nivel = parseInt(3);
						break;
				}
				_lt._accion = nivel;
				loga('Pag22, respondió: ',val+', el nivel es: '+_lt._accion+' y es '+typeof _lt._accion);
				aplicaNiveles(23, nivel, true, 'rect');
			}
		break;
		case 26:
			loga("Estoy en la 26");
		break;
		case 27:
			if(!_lt._reversa){
				var quees=typeof val,
					nivel = ' ';
				loga('quees: ',quees);
				if(quees == "object"){
					nivel = 5;
					eligeCamino27();
				}else{
					nivel = parseInt(val);
					eligeCamino27();
				}
			}

			/*if (quees == 'object') {
				val.forEach(function(currentValue,index) {
					nivel = parseInt(nivel) + parseInt(currentValue);
					loga('Varios: '+nivel, typeof nivel);
				});
				eligeCamino27();
			} else {
				nivel = parseInt(val);
				loga('uno: '+nivel, typeof nivel);
				eligeCamino27();
			};*/

			function eligeCamino27() {
				loga('eligeCamino: '+nivel, typeof nivel);
				if (nivel < 1) {
					_lt._vecinos = parseInt(1);
				} else if (nivel < 4) {
					_lt._vecinos = parseInt(2);
				} else {
					_lt._vecinos = parseInt(3);
				}
				loga('Pag27, respondió: ',val+', el nivel es: '+_lt._vecinos+' y es '+typeof _lt._vecinos);
				aplicaNiveles(29, _lt._vecinos, true, 'rect');
			}
		break;
		/*case 30:
			var quees=typeof val,
				nivel = ' ';
			loga('quees: ',quees+', contenido de val: '+val);

		break;*/
		case 33:
			var quees=typeof val,
				nivel = ' ';
			loga('quees: ',quees);
			// nivel = parseInt(val);
			if (val === 'si') {
				loga('si');
				nivel = parseInt(1);
			} else {
				loga('¿no?');
				nivel = parseInt(2);
			};

			_lt._confia = nivel;
			loga('Pag33, respondió: ',val+', el nivel es: '+_lt._confia+' y es '+typeof _lt._confia);
			aplicaNiveles(35, nivel, true, 'rect');
		break;
		default:
			loga('Switch default, Pág saliente: ',actu);
		break;
	}
	loga('Valor nuevo _lt._camino: ',_lt._camino+' ///******** FIN de La Función lee ********************//');
	val = 0;
	return(pasa);
}

function setRuta(cual,ultimo) {
	_lt._camino = cual;
	_lt._nSlides = _lt._camino.length - ultimo;
}

function reversaRuta() {
	loga()
}


function aplicaNiveles(pagina, nivel, flagIny, contenedor) {
	var el = $('.p'+pagina),
		txt = _lt._inyecta,
		contenido = '';
	loga('pag: ', pagina+', nivel: '+nivel);
	loga('Elem: ', el);
	el.removeClass("nivel1 nivel2 nivel3 nivel4 nivel5 nivel6 nivel7 nivel8 nivel9 nivel10 nivel11");
	if (flagIny) {
		contenido = txt[pagina][nivel];
		loga('contenido página: ',contenido);
		el.addClass('nivel'+nivel).find('div.'+contenedor).html(contenido)
	} else {
		loga('contenido: ','Sin contenido');
		el.addClass('nivel'+nivel);
	}

}

function desli(esto) {
	var e = esto,
		btn = e.currentTarget,
		dir = btn.getAttribute('class'),
		pasa = lee(),
		qe = $(btn),
		alertaEl = $('.alerta'),
		alerta = alertaEl.hasClass('active'),
		msg = ['Elige una opción','Contesta todas la preguntas'];
	// lee();
	if (alerta) {
		alertaEl.removeClass('active');
	};
	if (dir === 'der') {
		if (pasa) {
			$('#mainNav .izq').off('click').siblings('.der').off('click');
			fw();
		} else {
			alertaEl.html(msg[_lt._alerta]).addClass('active');
		}
	} else if (dir === 'izq') {
		$('#mainNav .izq').off('click').siblings('.der').off('click');
		rw();
	}
}
function fw() {
	var fw = _lt._actual + 1;
	//_lt._reversa = 0;
	if (fw > _lt._nSlides) {
		fw = _lt._nSlides;
	} else {
		move(fw);
	}
}
function rw() {
	var rw = _lt._actual - 1;
	//_lt._reversa = 1;
	if (rw < 1) {
		rw = 1;
	} else {
		move(rw);
	}
}
function move(nuevoCont,vel) {
	// var distancia = (nuevoCont - _lt._actual) * _lt._dAnchoPage,
	var distancia = (_lt._actual - nuevoCont) * _lt._dAnchoPage,
		// desplaza = (distancia*(nuevoCont-1))*-1,
		// desplaza = distancia*-1,
		speed = vel,
		elSale = $('.p'+_lt._camino[_lt._actual]),
		elEntra = $('.p'+_lt._camino[nuevoCont]);
	if (speed == null) {
		speed = _lt._vel;
	}
	elSale.animate({'left': distancia}, speed, function() {
		elSale.css('display', 'none');
	})
	elEntra.css('display', 'block').animate({'left': 0}, speed, function() {
		_lt._actual = nuevoCont;
		displayFlechas();
		$('#mainNav .izq').on('click', function (e) {
			_lt._reversa = 1;
			desli(e);
		}).siblings('.der').on('click', function (e) {
			_lt._reversa = 0;
			desli(e);
		});
		initVert();
	})
	loga('Función move --> nuevoCont: ',nuevoCont+', slide: '+ _lt._camino[nuevoCont] +', distancia: '+distancia+', tipo: '+ typeof _lt._camino[nuevoCont]+', _lt._nSlides: '+_lt._nSlides);
}
function displayFlechas() {
	switch(_lt._actual) {
	case 1:
	case 3:
		$('.der').css('display', 'block');
		$('.izq').css('display', 'none');
	break;
	case _lt._nSlides:
		$('.der').css('display', 'none');
		$('.izq').css('display', 'block');
	break;
	default:
		$('.der').css('display', 'block');
		$('.izq').css('display', 'block');
		if (_lt._camino[_lt._actual] === 5) {
			$('nav').addClass('sidebar');
		}else {
			$('nav').removeClass('sidebar');
		}
	break;
	}
	if(_lt._camino[_lt._actual] == 26 || _lt._camino[_lt._actual] == 7 ){
		if(_lt._repite){
			$('.der').css('display', 'block');
			$('.izq').css('display', 'none');
		}
	}
}

/****************************************************************
***************        Navegación vertical      ******************
*****************************************************************/
function initVert() {
	$('.pArr').off('click').siblings('.pAba').off('click');
	if (_lt._vertActual > 1) {
		$('.multiPage').animate({'top': 0}, 600, function() {});
	};
	if (_lt._camino[_lt._actual] === 14 || _lt._camino[_lt._actual] === 16 || _lt._camino[_lt._actual] === 36 || _lt._camino[_lt._actual] === 37) {
		var elePage = $('.p'+_lt._camino[_lt._actual]);
		_lt._vertActual = 1;
		_lt._vertNum = elePage.children('.multiPage').find('.singlePage').length;
		elePage.children('.multiPage').css('top', 0);
		elePage.find('.pArr').on('click', desliVert).siblings('.pAba').on('click', desliVert);
		displayFlechasVert();
		loga('function initVert, _lt._vertNum: ', _lt._vertNum);
	}
	// loga('detect Num singlepages: ',$('.p14 > .multiPage .singlepage'));
}
function desliVert(esto) {
	var e = esto,
		btn = e.currentTarget,
		dir = btn.getAttribute('class'),
		qe = $(btn);
	_lt._vertModu = qe.parents('.page');
	qe.off('click').siblings('div').off('click');
	if (dir === 'pAba') {
		fwVert();
	} else if (dir === 'pArr') {
		rwVert();
	}
}
function fwVert() {
	var fw = _lt._vertActual + 1;
	if (fw > _lt._vertNum) {
		fw = _lt._vertNum;
	} else {
		moveVert(fw);
	}
}
function rwVert() {
	var rw = _lt._vertActual - 1;
	if (rw < 1) {
		rw = 1;
	} else {
		moveVert(rw);
	}
}
function moveVert(nuevoCont,vel) {
	// var distanciaVert = (nuevoCont - _lt._actual) * _lt._dAnchoPage,
	// var distanciaVert = (_lt._vertActual - nuevoCont) * _lt._vertModu.height(),
	var distanciaVert = ((nuevoCont - 1) * _lt._vertModu.height())*-1,
		// desplaza = (distanciaVert*(nuevoCont-1))*-1,
		// desplaza = distanciaVert*-1,
		speed = vel;
	if (speed == null) {
		speed = _lt._vel;
	}
	_lt._vertModu.find('.multiPage').animate({'top': distanciaVert}, speed, function() {
		_lt._vertActual = nuevoCont;
		displayFlechasVert();
		_lt._vertModu.find('.pArr').on('click', desliVert).siblings('.pAba').on('click', desliVert);
	})
	loga('Función moveVert --> nuevoCont: ',nuevoCont+'_lt._vertModu.height: '+_lt._vertModu.height()+', distanciaVert: '+distanciaVert+', _lt._vertNum: '+_lt._vertNum);
}
function displayFlechasVert() {
	switch(_lt._vertActual) {
	case 1:
		$('.pAba').css('display', 'block');
		$('.pArr').css('display', 'none');
	break;
	case _lt._vertNum:
		$('.pAba').css('display', 'none');
		$('.pArr').css('display', 'block');
	break;
	default:
		$('.pAba').css('display', 'block');
		$('.pArr').css('display', 'block');
	break;
	}
}

/****************************************************************
***************     Navegación vertical END    ******************
*****************************************************************/





/****************************************************************
***************        Botones del final       ******************
*****************************************************************/


function resetEncuesta() {
	var nuevoCont = 0,
		pagAInsertar = [],
		tempIniAr = [],
		tempFinAr = [],
		rutaEmpalmeFinal = [];
	// loga('--->>Reset, _lt._ruta: ', _lt._ruta);
	nuevoCont = _lt._camino.indexOf(6);
	// loga('Posición d Pag 6 en nuevoCont: ',nuevoCont);
	nuevoCont += 1;
	// loga('nuevoCont aumentado en 1: ',nuevoCont);
	tempIniAr = _lt._camino.slice(0,nuevoCont);
	tempFinAr = _lt._camino.slice(nuevoCont);
	// loga('------>> _lt._camino: ', _lt._camino);
	// loga('tempIniAr: ', tempIniAr);
	// loga('tempFinAr: ', tempFinAr);
	_lt._actual += 1;
	if (_lt._ruta === 3) {
		pagAInsertar[0] = 7;
		rutaEmpalmeFinal = pagAInsertar;
		var ar = tempIniAr.concat(pagAInsertar).concat(tempFinAr);
		// loga('Camino con pag Insertada, ar: ',ar);
		setRuta(ar, 1);

	} else if (_lt._ruta < 3) {
		// loga('Es la Ruta 1 o la 2'),
		pagAInsertar[0] = 26;
		rutaEmpalmeFinal = _lt._r3;
		var ar = tempIniAr.concat(pagAInsertar).concat(tempFinAr);
		// loga('Camino con pag Insertada, ar: ',ar);
		setRuta(ar, 1);
	}
	if (_lt._repite) {
		location.reload();
	} else {
		_lt._repite = 1;
		move(nuevoCont);
		ar = tempIniAr.concat(rutaEmpalmeFinal);
		// loga('Cambio el camino para que funciona como la rut 1 o 2, ar: ',ar);
		setRuta(ar, 1);

		// setTimeout(function(){ alert("Hello"); }, 1000);
	}
}







function goBackTopostales() {
	var nuevoCont = _lt._actual - 1;
	// loga('goBackTopostales, es la ruta: ',_lt._ruta);
	move(nuevoCont);
}


/****************************************************************
*************** Interacción de los input con otros input y otros
				 elementos de cada página ******************
*****************************************************************/

function human() {
	$('.p5 .menor .radio input').on('change', birrete);
	$('.p5 .menor .check input').on('change', idioma);

	$('.slider').on('input', function() {
		var ageEl = $(this),
			age = ageEl[0].value;
		edad(age);
		// loga('el slider cambia y su valor es: ',age);
		// loga('ageEl: ', ageEl);
	});
	
}
function edad(ed) {
	var years = parseInt(ed),
		humElem = $('.p5 .corpo'),
		contEdad = $('.p5 .ui > p span');
	// loga('edad: '+years, typeof years);
	_lt._edad = years;
	contEdad.html(years);
	if (years < 16) {
		if (years < 10) {
			contEdad.removeClass('dob');
		} else {
			contEdad.addClass('dob');
		}
		humElem.addClass('peq').removeClass('jov adu abu');
	} else if (years < 40) {
		humElem.addClass('jov').removeClass('peq adu abu');
		contEdad.addClass('dob');
	} else if (years < 70) {
		humElem.addClass('adu').removeClass('peq jov abu');
		contEdad.addClass('dob');
	} else {
		humElem.addClass('abu').removeClass('peq jov adu');
		contEdad.addClass('dob');
	}
}
function birrete(esto) {
	var e = esto,
		btn = e.currentTarget,
		grad = btn.getAttribute('value'),
		qe = $(btn),
		bir = $('.p5 .birrete');
	switch(grad) {
		case 'primaria':
			bir.addClass('prim').removeClass('secu tecn univ posg no');
		break;
		case 'secundaria':
			bir.addClass('secu').removeClass('prim tecn univ posg no');
		break;
		case 'tecnico':
			bir.addClass('tecn').removeClass('prim secu univ posg no');
		break;
		case 'universitario':
			bir.addClass('univ').removeClass('prim secu tecn posg no');
		break;
		case 'posgrado':
			bir.addClass('posg').removeClass('prim secu tecn univ no');
		break;
		case 'noEstudio':
			bir.addClass('no').removeClass('prim secu tecn univ posg');
		break;
		default:
			// loga('esto no esta funcionando..');
		break;
	}
}
function idioma(esto) {
	var e = esto,
		btn = e.currentTarget,
		grad = btn.getAttribute('value'),
		val = '',
		qe = $(btn),
		idiEl = $('.p5 .leng')
		inp = $('.p5 .menor .check input:checked'),
		inpColl = inp.length;
	idiEl.removeClass('kriol espanol english otroIdi');
	if (inpColl > 1) {
		val = [];
		inp.each(function (i) {
			val[i] = $(this).attr('id');
			// loga('val['+i+']: ',val[i]);
		idiEl.addClass(val[i]);
		})
	} else {
		val = inp.attr('id');
		idiEl.addClass(val);
	}
}
function excluyeCheck(esto) {
	var e = esto,
		btn = e.currentTarget,
		clase = btn.parentElement.getAttribute('class'),
		nivel = parseInt(clase.slice(11)),
		qe = $(btn);
	// loga('nivel: ', nivel);
	if(qe.prop('checked')) {
		if (nivel === 0) {
			qe.parents('.opciones').find('div:not(.nivel0) input:checked').prop('checked', false);
			// loga('Opción ninguna, :', 'funciona');
		} else {
			qe.parents('.opciones').find('.nivel0 input:checked').prop('checked', false);
			// loga('Opción alguna otra, :', 'funciona');
		}
	}
}
function quitaAlerta(esto) {
	var e = esto,
		btn = e.currentTarget,
		alertaEl = $('.alerta'),
		alerta = alertaEl.hasClass('active'),
		qe = $(btn);
	if(qe.prop('checked')) {
		if (alerta) {
			alertaEl.removeClass('active');
		};
	}
}

/****************************************************************
*************** Tooltip ******************
*****************************************************************/
function muestra(esto) {
	var disp = $(esto).attr("href"),
		nombre = $(esto).attr("value"),
		ttip = $('#tip');
	$('#tip > h4 > b').html(nombre);
	if($(esto).attr("value") != "menu") {
		ttip.css({'display': 'block'});
	}
}
function oculta() {
	$('#tip').css('display', 'none');
}
function desfase(e) {
	var esto = e,
		hit = esto.currentTarget,
		qe = $(hit);

	// var ElemLooks = qe.parent('map').parent('.ui'),
	var ElemLooks = qe.parent('map').parent('.match').parent('.ui'),
	Offset = ElemLooks.offset(),
	ratonX = e.pageX,
	ratonY = e.pageY,
	ttip = $('#tip'),
	altoTip = ttip.height() + 28;
	anchoTip = ttip.width() + 38;
	if(ratonX > $(document).width()/2) {
		var izq = e.pageX - Offset.left - anchoTip;
		ttip.removeClass('inv');
	} else {
		var izq = e.pageX - Offset.left + 10;
		ttip.addClass('inv');
	}
	if(ratonY > $(document).height()/2) {
		var arr = e.pageY - Offset.top - altoTip;
	} else {
		var arr = e.pageY - Offset.top + 10;
	}
	ttip.css({'top': arr, 'left': izq});
	//$('#tip > strong').html('Offset.top:'+Offset.top+', Offset.left:'+Offset.left+', pageY:'+e.pageY+', pageX:'+e.pageX);
}

/****************************************************************
*************** END Tooltip ******************
*****************************************************************/



function mide() {
	_lt._dAnchoPage = $('#mainWrapper').width();
	if (_lt._dAnchoPage > 640) {
		_lt._esMobile = false;
		
	} else {
		_lt._esMobile = true;
	};
	loga('_lt._esMobile: ', _lt._esMobile);
	/*if (_lt._esHome > 1) {
		setPosForViewport();
	}*/
}


function loga(txt, valor) {
	console.log(txt, valor);
}



})();