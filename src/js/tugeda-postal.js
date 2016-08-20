(function forevaPostal() {
$(document).on('ready', function(){
	initVert();
})

var _ps = {
	_vertActual: 1,
	_vertNum: 2,
	_elePage: undefined,
	_vel: 600
}

/****************************************************************
***************        Navegación vertical      ******************
*****************************************************************/
function initVert() {
	_ps._elePage = $('.page');
	_ps._elePage.children('.multiPage').css('top', 0);
	_ps._elePage.children('nav').addClass('ani');
	_ps._elePage.find('.pArr').on('click', desliVert).siblings('.pAba').on('click', desliVert);
	displayFlechasVert();
	loga('function initVert, _ps._vertNum: ', _ps._vertNum);
	// loga('detect Num singlepages: ',$('.p14 > .multiPage .singlepage'));
}
function desliVert(esto) {
	var e = esto,
		btn = e.currentTarget,
		dir = btn.getAttribute('class'),
		qe = $(btn);
	qe.off('click').siblings('div').off('click');
	qe.parent('nav').removeClass('ani');
	if (dir === 'pAba') {
		fwVert();
	} else if (dir === 'pArr') {
		rwVert();
	}
}
function fwVert() {
	var fw = _ps._vertActual + 1;
	if (fw > _ps._vertNum) {
		fw = _ps._vertNum;
	} else {
		moveVert(fw);
	}
}
function rwVert() {
	var rw = _ps._vertActual - 1;
	if (rw < 1) {
		rw = 1;
	} else {
		moveVert(rw);
	}
}
function moveVert(nuevoCont,vel) {
	var distanciaVert = ((nuevoCont - 1) * _ps._elePage.height())*-1,
		speed = vel;
	if (speed == null) {
		speed = _ps._vel;
	}
	_ps._elePage.find('.multiPage').animate({'top': distanciaVert}, speed, function() {
		_ps._vertActual = nuevoCont;
		displayFlechasVert();
		_ps._elePage.find('.pArr').on('click', desliVert).siblings('.pAba').on('click', desliVert);
	})
	loga('Función moveVert --> nuevoCont: ',nuevoCont+'_ps._elePage.height: '+_ps._elePage.height()+', distanciaVert: '+distanciaVert+', _ps._vertNum: '+_ps._vertNum);
}
function displayFlechasVert() {
	switch(_ps._vertActual) {
	case 1:
		$('.pAba').css('display', 'block');
		$('.pArr').css('display', 'none');
	break;
	case _ps._vertNum:
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
function loga(txt, valor) {
	// console.log(txt, valor);
}

})();