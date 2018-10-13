function loadJson(file) {
	$.getJSON(file, generateMap);
}
SVG.on(document, 'DOMContentLoaded', function() {
  loadJson("../_data/tasks.json");
})

function generateMap(json) {
	if (startId == -1) {
		startId = 0;
		endId = Object.keys(json).length;
	}
	var draw = SVG('drawing').attr({
			zoomAndPan:"magnify", contentStyleType:"text/css", preserveAspectRatio:"xMidYMid meet",
			style:"background-color:black; overflow: hidden; display: inline; width: 100%; min-width: 100%; max-width: 100%; min-height: 720; height: 100%;"
	});
	var defs = draw.defs();
	var masks = defs.clip().attr({id:"masks"});

	// Needs improvement
	var cw = draw.node.clientWidth/2;
	var ch = draw.node.clientHeight/2;
	var pos0 = json[startId].coords[0];
	var sx = -(pos0.x+pos0.w/2-cw);
	var sy = -(pos0.y+pos0.h/2+ch);
	var layers = draw.group().attr({id:"layers", transform:"matrix(1 0 0 1 "+sx+" "+sy+")"});

	var layerBg = layers.group().attr({id:"layer-background"});
	layerBg.rect().attr({x:"0", y:"0", width:"8306", height:"4850"});

	var layerMap = layers.group().attr({id:"layer-map", style:"opacity:1"});
	var layerMapBack = layerMap.image("../assets/maps/map.png").attr({
		id:"image-map",
		style:"display:inline;opacity:1;image-rendering:auto",
		preserveAspectRatio:"none"
	});

	var layerCover = layerMap.rect().attr({
		x:0,y:0,width:8306,height:4850,
		fill:"#330300",
		style:"mix-blend-mode:multiply;opacity:.75",
	});

	var layerMapTop = layerMapBack.clone().attr({
		x:0,y:0,width:8306,height:4850,
		id:"image-map-top",
		style:"display:inline;opacity:1;image-rendering:auto",
		preserveAspectRatio:"none",
		"clip-path":"url(#masks)"
	})
	layerMap.add(layerMapTop);

	var layerAreas = layers.group().attr({class:"layer-areas"});
	var labels = layerAreas.group().attr({class:"labels", fill:"white"});
	var areas = layerAreas.group().attr({class:"areas", style:"opacity:0", fill:"white"})
	for (var i = startId; i < endId+1; i++) {

		var area = json[i];
		if (!area.coords) continue;
		var coords = area.coords;

		var pos = coords[0];
		var label = labels.plain("Task "+(i+1)+": "+area["task"]).attr({
			x:pos.x,y:pos.y
		});

		for (var j = 0; j < coords.length; j+=2){
			var pos = coords[j];
			var attrs = {
				x:pos.x,
				y:pos.y,
				width:pos.w,
				height:pos.h
			}
			areas.rect().id("task"+i).attr(attrs);
			masks.rect().id("taskmask"+i).attr(attrs);
		}

	}

	/* jQuery panzoom (not working)
	var $section = $('#layers');
	var $panzoom = $section.panzoom();
	$panzoom.parent().on('mousewheel.focal', function( e ) {
		e.preventDefault();
		var delta = e.delta || e.originalEvent.wheelDelta;
		var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
		$panzoom.panzoom('zoom', zoomOut, {
			increment: 0.1,
			animate: true,
			focal: e
		});
	});//*/
	var scene = document.getElementById('layers');
	panzoom(scene);
}
