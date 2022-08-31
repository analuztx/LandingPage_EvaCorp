/* Lê o XML */	
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("postagem");

/* Exibe o conteúdo */
function funcaoConteudo(){
	n = x.length-1;
	var i = n; i >= 0;{
		document.write(
		"<td><img src='img/" + x[i].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='70' height='70'></td>" +
		"<td>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +			
		"<td>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) + "</td></tr>");}
}