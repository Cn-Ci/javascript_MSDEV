function round(number,X) {
	X = (!X ? 2 : X);
	return Math.round(number*Math.pow(10,X))/Math.pow(10,X);
}


function updatedistance(input) {
	var dist=input.value*1;
	var type=input.name;
	
	if (type == "km")	    { a = dist * 10000000000000; }
	else if (type == "m")   { a = dist * 10000000000; }
	else if (type == "cm")  { a = dist * 100000000; }
	else if (type == "mia") { a = dist * 16093440000000; }
	else if (type == "roa") { a = dist * 50292000000; }
	else if (type == "yda") { a = dist * 9144000000; }
	else if (type == "pia") { a = dist * 3048000000; }
	else if (type == "poa") { a = dist * 254000000; }
	else if (type == "ena") { a = dist * 2194560000000; }
	else if (type == "bra") { a = dist * 18288000000; }
	else if (type == "mn")  { a = dist * 18520000000000; }
	else if (type == "brn") { a = dist * 18520000000; }
	else if (type == "enn") { a = dist * 1852000000000; }
	else if (type == "br")  { a = dist * 16242000000; }
	else if (type == "en")  { a = dist * 1949040000000; }
	else if (type == "ln")  { a = dist * 55560000000000; }
	else if (type == "mr")   { a = dist * 14842650000000; }
	else if (type == "pasr") { a = dist * 14842650000; }
	else if (type == "dr")  { a = dist * 185533125; }
	else if (type == "pr")  { a = dist * 2968530000; }  
	else if (type == "gr")  { a = dist * 7421325000; }
	else if (type == "mif") { a = dist * 19490400000000; }
	else if (type == "tof") { a = dist * 19490400000; }
	else if (type == "pef") { a = dist * 58471200000; }
	else if (type == "vef") { a = dist * 9745200000; }
	else if (type == "pif") { a = dist * 3248400000; }
	else if (type == "pof") { a = dist * 270700000; }



	km = round  (a*0.0000000000001);
	m = round   (a*0.0000000001);
	cm = round  (a*0.00000001);
	mia = round (a*0.00000000000006213711);
	roa = round (a*0.000000000019883878151594686);
	yda = round (a*0.0000000001093613);
	pia = round (a*0.000000000328084);
	poa = round (a*0.000000003937008);
	ena = round (a*0.0000000000004556722076407116);
	bra = round (a*0.00000000005468066491688539);
	mn = round  (a*0.00000000000005399568034557236);
	brn = round (a*0.00000000005399568034557236);
	enn = round (a*0.0000000000005399568034557236);
	br = round  (a*0.00000000006156877231867997);
	en = round  (a*0.0000000000005130731026556664);
	ln = round  (a*0.000000000000017998560115190785);
	mr = round  (a*0.00000000000006737341377718938);
  pasr = round  (a*0.00000000006737341377718938);
	dr = round  (a*0.00000000538987310217515);
	pr = round  (a*0.0000000003368670688859469);
	gr = round  (a*0.00000000013474682755437876);
	mif = round (a*0.00000000000005130731026556664);
	tof = round (a*0.00000000005130731026556664);
	pef = round (a*0.00000000001710243675518888);
	vef = round (a*0.00000000010261462053113328);
	pif = round (a*0.000000000307843861593399);
	pof = round (a*0.0000000036941263391207978);



	if (type != "km")  { document.distances.km.value=km; }
	if (type != "m")   { document.distances.m.value=m; }
	if (type != "cm")  { document.distances.cm.value=cm; }
	if (type != "mia") { document.distances.mia.value=mia; }
	if (type != "roa") { document.distances.roa.value=roa; }
	if (type != "yda") { document.distances.yda.value=yda; }
	if (type != "pia") { document.distances.pia.value=pia; }
	if (type != "poa") { document.distances.poa.value=poa; }
	if (type != "ena") { document.distances.ena.value=ena; }
	if (type != "bra") { document.distances.bra.value=bra; }
	if (type != "mn")  { document.distances.mn.value=mn; }
	if (type != "brn") { document.distances.brn.value=brn; }
	if (type != "enn") { document.distances.enn.value=enn; }
	if (type != "br")  { document.distances.br.value=br; }
	if (type != "en")  { document.distances.en.value=en; }
	if (type != "ln")  { document.distances.ln.value=ln; }
	if (type != "mr")  { document.distances.mr.value=mr; }
 	if (type != "pasr") { document.distances.pasr.value=pasr; }
	if (type != "dr")  { document.distances.dr.value=dr; }
	if (type != "pr")  { document.distances.pr.value=pr; }
	if (type != "gr")  { document.distances.gr.value=gr; }
	if (type != "mif") { document.distances.mif.value=mif; }
	if (type != "tof") { document.distances.tof.value=tof; }
	if (type != "pef") { document.distances.pef.value=pef; }
	if (type != "vef") { document.distances.vef.value=vef; }
	if (type != "pif") { document.distances.pif.value=pif; }
	if (type != "pof") { document.distances.pof.value=pof; }
}

function updatevitesse(input) {
	var vit=input.value*1;
	var type=input.name;

	if (type == "kmh")		{ ms = vit * 0.2777778;} 
	else if (type == "mph") { ms = vit * 0.44704;}
	else if (type == "kt")	{ ms = vit * 0.5144444;}
	else if (type == "ms")  { ms = vit;}

	kmh = round(ms*3.6);
	mph = round(ms*2.236936);
	kt  = round(ms*1.943845);
	ms  = round(ms);

	if (type != "kmh") { document.vitesses.kmh.value=kmh; }
	if (type != "mph") { document.vitesses.mph.value=mph; }
	if (type != "kt") { document.vitesses.kt.value=kt; }
	if (type != "ms") { document.vitesses.ms.value=ms; }
}

function updatepoids(input) {
	var poids=input.value*1;
	var type=input.name;

	if (type == "t")	   { mg = poids * 1000000000; }
	else if (type == "kg") { mg = poids * 1000000; }
	else if (type == "g")  { mg = poids * 1000; }
	else if (type == "lbs"){ mg = poids * 453592.3699999539; }
	else if (type == "oz") { mg = poids * 28349.52312500033; }
	else if (type == "ll") { mg = poids * 327450; }
	else if (type == "ul") { mg = poids * 27287.5; }

	t   = round ( mg * 1e-9 );
	kg  = round ( mg * 0.000001);
	g   = round ( mg * 0.001);
	lbs = round ( mg * 0.000002204622621849);
	oz  = round ( mg * 0.00003527396194958);
	ll  = round ( mg * 0.000003053901358986105);
	ul  = round ( mg * 0.000036646816307833254);

	if (type != "kg")  { document.poids.kg.value=kg; }
	if (type != "g")   { document.poids.g.value=g; }
	if (type != "lbs") { document.poids.lbs.value=lbs; }
	if (type != "oz")  { document.poids.oz.value=oz; }
	if (type != "ll")  { document.poids.ll.value=ll; }
	if (type != "ul")  { document.poids.ul.value=ul; }
}

function updatelitre(input) {
	var litre=input.value*1;
	var type=input.name;

	if (type == "t")	   { ml = litre * 1000000000; }
	else if (type == "li") { ml = litre * 1000000; }
	//else if (type == "gli")  { ml = litre * 1000; }
	else if (type == "galus"){ ml = litre * 378541.1784; }
	else if (type == "pogal") { ml = litre * 2957.35295625; }
	// else if (type == "ll"){ ml = litre * 327450; }
	// else if (type == "ul") { ml = litre * 27287.5; }

	t   = round ( ml * 1e-9 );
	li  = round ( ml * 0.000001);
	//g   = round ( ml * 0.001);
	galus = round ( ml * 0.0000026417205235814844);
	pogal  = round ( ml * 0.00033814022701843);
	//ll = round ( ml * 0.000003053901358986105);
	//ul  = round ( ml * 0.000036646816307833254);

	if (type != "li") { document.litre.li.value=li; }
	//if (type != "g") { document.litre.g.value=g; }
	if (type != "galus") { document.litre.galus.value=galus; }
	if (type != "pogal") { document.litre.pogal.value=pogal; }
	//if (type != "ll") { document.litre.ll.value=ll; }
	//if (type != "ul") { document.litre.ul.value=ul; }
}