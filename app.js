let project = require("pillars");

project.services.get("http").start();

project.routes.add(new Route({
		path: "/paralogs"
	},function(gw){
		project.config.logFile=false;
		console.log("Parando los logs");
		gw.send("Logs parados");
}));

project.routes.add(new Route({
		path: "/arrancalogs"
	},function(gw){
		project.config.logFile=true;
		console.log("arrancando los logs");
		gw.send("Logs arrancados");
}));

project.routes.add(new Route({
		path: "/valor"
	},function(gw){		
		console.log("El valor de logFile es:",project.config.logFile);
		gw.send("El Valor de logFile es"+project.config.logFile);
}));
