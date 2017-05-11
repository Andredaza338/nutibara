(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 232,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"imagenes/escudo_udem.jpg", id:"escudo_udem"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.escudo_udem = function() {
	this.initialize(img.escudo_udem);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,196);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tex
	this.text = new cjs.Text("Ven y Celebra con Nosotro los\n20 años de la Facultad de Comunicación", "20px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 173;
	this.text.setTransform(117.9,201.6);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(22).to({_off:false},0).wait(1));

	// franja
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D10E14").s().p("AyIQpIAApvMAkTAAAIAAJvgAyKFDIAApsMAkTAAAIAAJsgAyKm5IAApvMAkTAAAIAAJvg");
	this.shape.setTransform(116.3,493.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({_off:false},0).wait(15));

	// logo
	this.instance = new lib.escudo_udem();
	this.instance.setTransform(2,2,0.715,0.715);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(6).to({y:21},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;