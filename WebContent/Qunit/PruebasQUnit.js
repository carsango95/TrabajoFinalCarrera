

QUnit.test("Test Posición y Tamaño del Background Correctas", function(assert) {
	var pruebaPosicion = new Background();
	assert.deepEqual( pruebaPosicion.x , 0 , "La posición horizontal inicial del background es correcta");
	assert.deepEqual( pruebaPosicion.y , 0 , "La posición vertical inicial del background es correcta");
	assert.deepEqual( pruebaPosicion.width  , 1000 , "La anchura del background es correcta");
	assert.deepEqual( pruebaPosicion.height , 600 , "La altura del background es correcta");
})

QUnit.test("Test Posición y Tamaño del Portero Correctas", function(assert) {
	var pruebaPosicion = new Oblak();
	assert.deepEqual( pruebaPosicion.x , 460 , "La posición horizontal inicial del portero es correcta");
	assert.deepEqual( pruebaPosicion.y , 292 , "La posición vertical inicial del portero es correcta");
	assert.deepEqual( pruebaPosicion.width  , 80 , "La anchura del portero es correcta");
	assert.deepEqual( pruebaPosicion.height , 80 , "La altura del portero es correcta");
})

QUnit.test("Test Posición y Tamaño del Portero Correctas", function(assert) {
	var pruebaPosicion = new Ball(300);
	assert.deepEqual( pruebaPosicion.x , 300 , "La posición horizontal inicial de la pelota es correcta");
	assert.deepEqual( pruebaPosicion.y , 600 , "La posición vertical inicial de la pelota es correcta");
	assert.deepEqual( pruebaPosicion.width  , 30 , "La anchura de la pelota es correcta");
	assert.deepEqual( pruebaPosicion.height , 30 , "La altura de la pelota es correcta");
})

QUnit.test("Test Imagen del Background Cargada Correctamente", function(assert) {
	var img = "images/background.jpeg";
	assert.ok("Imagen background cargada correctamente");
});

QUnit.test("Test Imagen del Portero Cargada Correctamente", function(assert) {
	var img = "images/oblak.png";
	assert.ok("Imagen portero cargada correctamente");
});

QUnit.test("Test Imagen de la Pelota Cargada Correctamente", function(assert) {
	var img = "images/pelota.png";
	assert.ok("Imagen pelota cargada correctamente");
});

