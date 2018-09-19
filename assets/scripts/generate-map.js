function loadJson(file) {
	$.getJSON(file, generateMap);
}
SVG.on(document, 'DOMContentLoaded', function() {
  loadJson("../_data/tasks.json");
})

function generateMap(json) {

	var draw = SVG('drawing').attr({
			zoomAndPan:"magnify", contentStyleType:"text/css", preserveAspectRatio:"xMidYMid meet",
			style:"background-color:black; overflow: hidden; display: inline; width: 100%; min-width: 100%; max-width: 100%; height: 720;"
	});

	var layers = draw.group().attr({id:"layers", transform:"matrix(1 0 0 1 -5900 -2350)"});

	var layerBg = layers.group().attr({id:"layer-background"});
	layerBg.rect().attr({x:"0", y:"0", width:"8306", height:"4850"});

	var layerMap = layers.group().attr({id:"layer-map", style:"opacity:.5"});
	layerMap.image("../assets/maps/map.png").attr({
		id:"image-map",
		y:"0",
		x:"0",
		height:"4850",
		width:"8306",
		style:"display:inline;opacity:1;image-rendering:pixelated",
		preserveAspectRatio:"none"
	});

	var layerAreas = layers.group().attr({class:"layer-areas"});
	var labels = layerAreas.group().attr({class:"labels", fill:"white"});
	var areas = layerAreas.group().attr({class:"areas", style:"mix-blend-mode: overlay;", fill:"white"})
	for (var i = 0; i < json.length; i++) {

		var area = json[i];
		if (!area["coords"]) continue;
		var coords = area["coords"].split(';');

		var pos = coords[0].split(',')
		var label = labels.plain("Task "+(i+1)+": "+area["task"]).attr({
			x:pos[0],y:pos[1]
		});

		var task = areas.group().id("task"+i);
		for (var j = 0; j < coords.length; j+=2){
			pos0 = coords[j].split(',');
			pos1 = coords[j+1].split(',');
			x = pos0[0];
			y = pos0[1];
			w = pos1[0]-x;
			h = pos1[1]-y;
			task.rect().attr({x:x,y:y,width:w,height:h});
		}

	}

	var scene = document.getElementById('layers');
	$("#layers").panzoom();
	//panzoom(scene)
}
