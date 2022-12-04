/* Lê o XML */
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
let y = xmlDoc.getElementsByTagName("noticia");
let x = xmlDoc.getElementsByTagName("conteudo");

/* Exibe o conteúdo */

function funcaoTitulo() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 style='font-family:Courier New, Courier, monospace; font-weight: bold; text-align: center'>" + x[i].getElementsByTagName("tituloinicio")[0].childNodes[0].nodeValue + "</h2>");}}

function funcaoSubTitulo() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p style='text-align: center;'>" + x[i].getElementsByTagName("titulosobreinicio")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoConteudo() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 class='featurette-heading' data-anime='left'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>" +
			"<h3 data-anime='right'>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</h3>");
	}
}
function funcaosobre() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 data-anime='left' style='color:#FFF'>" + x[i].getElementsByTagName("titulosobre")[0].childNodes[0].nodeValue + "</h1>");
	}
}
function funcaosobreconteudo() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 style='color: #FFF'>" + x[i].getElementsByTagName("corposobre1")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaoapp() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 id='app'>" + x[i].getElementsByTagName("tituloapp")[0].childNodes[0].nodeValue + "</h1>" +
			"<h4>" + x[i].getElementsByTagName("corpoapp")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaotituloarduino() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 class='subtitle-two' data-anime='left' style='margin-left: 5%'>" + x[i].getElementsByTagName("tituloarduino")[0].childNodes[0].nodeValue + "</h1>");
	}
}

function funcaosobrearduino() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 class='description-web' data-anime='right'>" + x[i].getElementsByTagName("corpoarduino")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaotituloweb() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 class='subtitle-two' data-anime='left' style='margin-left: -2%'>" + x[i].getElementsByTagName("tituloweb")[0].childNodes[0].nodeValue + "</h1>");
	}
}

function funcaosobreweb() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 class='description-web' data-anime='right'>" + x[i].getElementsByTagName("corpoweb")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaotituloapp() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 class='subtitle-two' data-anime='left' style='margin-left: 2%'>" + x[i].getElementsByTagName("tituloapp")[0].childNodes[0].nodeValue + "</h1>");
	}
}

function funcaosobreapp() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 class='description-web' data-anime='right'>" + x[i].getElementsByTagName("corpoapp")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaosobre2app() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 class='description-web' data-anime='right'>" + x[i].getElementsByTagName("corpoapp2")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaotitulodistanciamento() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 class='featurette-heading' style='margin-left: -5%'>" + x[i].getElementsByTagName("titulodistanciamento")[0].childNodes[0].nodeValue + "</h1>");
	}
}

function funcaosobredistanciamento() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 style='text-align:left; font-weight: bold'>" + x[i].getElementsByTagName("sobredistanciamento")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function footer() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='text-center text-muted'>" + x[i].getElementsByTagName("footer")[0].childNodes[0].nodeValue + "</p>");
	}
}

function footer1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='text-center text-muted'>" + x[i].getElementsByTagName("footer2")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoCardTitulo() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h5>" + x[i].getElementsByTagName("titulocardum")[0].childNodes[0].nodeValue + "</h5>");
	}
}

function funcaoCard() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='card-text' style='color: #000'>" + x[i].getElementsByTagName("cardumsobre")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoCardTitulo2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h5>" + x[i].getElementsByTagName("titulocarddois")[0].childNodes[0].nodeValue + "</h5>");
	}
}

function funcaoCard2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='card-text' style='color: #000'>" + x[i].getElementsByTagName("carddoissobre")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoCardTitulo3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h5>" + x[i].getElementsByTagName("titulocardtres")[0].childNodes[0].nodeValue + "</h5>");
	}
}

function funcaoCard3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='card-text' style='color: #000'>" + x[i].getElementsByTagName("cardtressobre")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoequipe() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 class='main-title' data-anime='right'>" + x[i].getElementsByTagName("equipe")[0].childNodes[0].nodeValue + "</h1>");
	}
}

function funcaonomeana() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h5 class='card-title'>" + x[i].getElementsByTagName("ananome")[0].childNodes[0].nodeValue + "</h5>");
	}
}

function funcaosobreana() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='card-text'>" + x[i].getElementsByTagName("anasobre")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaonomeartur() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h5 class='card-title'>" + x[i].getElementsByTagName("arturnome")[0].childNodes[0].nodeValue + "</h5>");
	}
}

function funcaosobreartur() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='card-text'>" + x[i].getElementsByTagName("artursobre")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaonomedavil() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h5 class='card-title'>" + x[i].getElementsByTagName("davilnome")[0].childNodes[0].nodeValue + "</h5>");
	}
}

function funcaosobredavil() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='card-text'>" + x[i].getElementsByTagName("davilsobre")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaonomedavim() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h5 class='card-title'>" + x[i].getElementsByTagName("davimnome")[0].childNodes[0].nodeValue + "</h5>");
	}
}

function funcaosobredavim() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='card-text'>" + x[i].getElementsByTagName("davimsobre")[0].childNodes[0].nodeValue + "</p>");
	}
}

function noticia() {
	n = y.length - 1;
    for (var i = n; i >= 0; i--){
        document.write("<div class='row'><div class='col-md' style='border: 1px solid #000; border-radius: 10px; margin-top: 20px'><a href='noticia.html?num_noticia=" + i + "' class='stretched-link' style='text-decoration: none;'><div class='titulocovid' style='font-size: 20px; color: #00ff'>" +  y[i].getElementsByTagName("titulonoticia")[0].childNodes[0].nodeValue  + "</div></a> <div class='blog-entry ftco-animate d-md-flex fadeInUp ftco-animated'><a href='single.html' class='img img-2'></a><div class='text'><h3 class='mb-2'><a href='single.html' style='text-align:left; text-decoration: none; color:#000; font-size: 20px'></a></h3><div class='meta-wrap'><p class='meta'><span><i class='icon-calendar mr-2' style='opacity: 70%;'>"+  y[i].getElementsByTagName("data")[0].childNodes[0].nodeValue + "</i></span></p></div><p class='mb-4' style='font-size: 18px'>"+   y[i].getElementsByTagName("postagem")[0].childNodes[0].nodeValue.substr(0,401)  +"...</p><p><a href='noticia.html?num_noticia=" + i + "' class='stretched-link' style='font-size: 15px; color: #00ff'>Leia Mais<span class='ion-ios-arrow-forward'></span></a></p></div></div></div></div>");
    }
}


function titulonoticia(){
	url = new URL(window.location.href)
	p = url.searchParams;
    i = p.get("num_noticia");
	
	document.write(y[i].getElementsByTagName("titulonoticia")[0].childNodes[0].nodeValue)
}

function datanoticia(){
	url = new URL(window.location.href)
	p = url.searchParams;
    i = p.get("num_noticia");
	
	document.write(y[i].getElementsByTagName("data")[0].childNodes[0].nodeValue)
}


function postagemnoticia(){
	url = new URL(window.location.href)
	p = url.searchParams;
    i = p.get("num_noticia");
	
	document.write(y[i].getElementsByTagName("postagem")[0].childNodes[0].nodeValue)
}

function imagemnoticia(){
	url = new URL(window.location.href)
	p = url.searchParams;
    i = p.get("num_noticia");
	
	document.write("<img src='img/"+ y[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + "'");
}

function fontenoticia(){
	url = new URL(window.location.href)
	p = url.searchParams;
    i = p.get("num_noticia");
	
	document.write(y[i].getElementsByTagName("fonte")[0].childNodes[0].nodeValue)
}