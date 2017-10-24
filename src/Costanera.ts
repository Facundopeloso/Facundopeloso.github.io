<<<<<<< HEAD
/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Personaje.ts" />
/// <reference path="./Boom.ts" />
/// <reference path="./Ball.ts" />
/// <reference path="./Bonus.ts" />

module JuegoCostanera {
	export class Costanera{
		game:Phaser.Game;
		ancho: number;
		alto:number;
		personaje: Personaje;
		piedra: Piedra;
		fruta: Fruta;
		cursores:Phaser.CursorKeys;
		saltarBtn:Phaser.Key;
		textoVidas: Phaser.Text;
		textoPuntos: Phaser.Text;
		dobleSalto:number;
		bajarBtn:Phaser.Key;

//--	------------------setters y getters --------------------------------------
		setGame(game: Phaser.Game ){
			this.game = game;
		}
=======
// /// <reference path="../tsDefinitions/phaser.d.ts" />
import {Personaje} from './Personaje'
import {Basurero} from './Basurero'
import {Ball} from './Ball'
export class Costanera
{
	game:Phaser.Game;
	ancho: number;
	alto:number;
	personaje: Personaje;
	basurero: Basurero;
	bonus: Phaser.Sprite;
	cursores:Phaser.CursorKeys;
	saltarBtn:Phaser.Key;
	facing: string;
	emitter: Phaser.Particles.Arcade.Emitter;
	ball: Ball;
	emitterball: Phaser.Particles.Arcade.Emitter;
//--------------------setters y getters --------------------------------------
setBall(value:Ball){
	this.ball = value;
}
getBall():Ball{
	return this.ball;
}


setGame(game: Phaser.Game ){
		this.game = game;
	}

	getGame (){
		return this.game;
	}

	setAncho(ancho: number ){
		this.ancho = ancho;
	}

	getAncho (){
		return this.ancho;
	}

	setAlto(alto: number ){
		this.alto = alto;
	}

	getAlto (){
		return this.alto;
	}

	setPersonaje(personaje: Personaje ){
		this.personaje = personaje;
	}

	getPersonaje ():Personaje{
		return this.personaje;
	}
>>>>>>> bb88965c2d2816ede4b9b89056ea54c5102b7ff8

		getGame (){
			return this.game;
		}

		setAncho(ancho: number ){
			this.ancho = ancho;
		}

		getAncho (){
			return this.ancho;
		}

		setAlto(alto: number ){
			this.alto = alto;
		}

		getAlto (){
			return this.alto;
		}

		setPersonaje(personaje: Personaje ){
			this.personaje = personaje;
		}

		getPersonaje ():Personaje{
			return this.personaje;
		}

		setPiedra(value:Piedra){
			this.piedra = value;
		}

		getPiedra ():Piedra{
			return this.piedra;
		}

		setFruta(value: Fruta){
			this.fruta = value;
		}

		getFruta (){
			return this.fruta;
		}

<<<<<<< HEAD
		setCursores(cursores: Phaser.CursorKeys ){
			this.cursores = cursores;
		}

		getCursores (){
			return this.cursores;
		}
=======
	getEmitter(){
		return this.emitter , this.emitterball;
		
	}
	
>>>>>>> bb88965c2d2816ede4b9b89056ea54c5102b7ff8

		setSaltarBtn(saltarBtn: Phaser.Key ){
			this.saltarBtn = saltarBtn;
		}

		getSaltarBtn (){
			return this.saltarBtn;
		}

<<<<<<< HEAD
		getDobleSalto(){
			return this.dobleSalto
		}
=======
	constructor(ancho: number,alto:number)
	{
		// create our phaser game
		// 800 - width
		// 600 - height
		// Phaser.AUTO - determine the renderer automatically (canvas, webgl)
		// 'content' - the name of the container to add our game to
		// { preload:this.preload, create:this.create} - functions to call for our states
		this.setGame(new Phaser.Game( ancho, alto, Phaser.CANVAS, 'content', { 
			preload:this.preload, 
			create:this.create, 
			update: this.update,
			setGame: this.setGame,
			getGame: this.getGame,
			setAncho: this.setAncho,
			getAncho: this.getAncho,
			setAlto: this.setAlto,
			getAlto: this.getAlto,
			setPersonaje: this.setPersonaje,
			getPersonaje: this.getPersonaje,
			setBasurero: this.setBasurero,
			getBasurero: this.getBasurero,
			setBonus: this.setBonus,
			getBonus: this.getBonus,
			setCursores: this.setCursores,
			getCursores: this.getCursores,
			setSaltarBtn: this.setSaltarBtn,
			getSaltarBtn: this.getSaltarBtn,
			getFacing: this.getFacing,
			setFacing: this.setFacing,
			getEmitter: this.getEmitter,
			setEmitter: this.setEmitter,
			collisionHandler: this.collisionHandler,
			listener: this.listener,
			setBall: this.setBall,
			getBall: this.getBall,
		} ));
	}
	
	preload()
	{ 
		// add our logo image to the assets class under the
		// key 'logo'. We're also setting the background colour
		// so it's the same as the background colour in the image
		this.getGame().load.image("ball", "assets/ball.png");
		this.getGame().load.image('basurero', 'assets/basurero.png');
		this.getGame().load.image('bonus', 'assets/hamburguesa.png');
		this.getGame().load.spritesheet('player', 'sprites/dude.png', 32, 48);
		this.getGame().load.image( 'costanera', "assets/costanera.jpg" );
		
		//Agregamos un comentario para probar subir cambios a GIT desde el editor
		//hacemos un cambio en el archivo
		
	}
>>>>>>> bb88965c2d2816ede4b9b89056ea54c5102b7ff8
	
		setDobleSalto(valor){
			this.dobleSalto=valor;
		}
		
<<<<<<< HEAD
		setBajarBtn(valor: Phaser.Key ){
			this.bajarBtn = valor;
		}
=======
		this.getGame().physics.enable(this.getPersonaje(),Phaser.Physics.ARCADE);
				
		//Personaje
		this.getPersonaje().body.collideWorldBounds = true;
		this.getPersonaje().body.gravity.y = 500;
		this.getPersonaje().body.setSize(20, 32, 5, 16);
		this.getPersonaje().animations.add('left', [0, 1, 2, 3], 10, true);
		this.getPersonaje().animations.add('turn', [4], 20, true);
		this.getPersonaje().animations.add('right', [5, 6, 7, 8], 10, true);
		this.setFacing('left');

		//Basurero
		this.setBasurero(this.getGame().add.sprite(300, 50, 'basurero'));
		this.getBasurero().name = 'basurero';
		//Ball
		this.setBall(this.getGame().add.sprite(300,50, "ball"));
		this.getBall().name= "ball";
		//physicsbasurero
		this.getGame().physics.enable(this.getBasurero(), Phaser.Physics.ARCADE);
		//  This adjusts the collision body size.
		//  220x10 is the new width/height.
		//  See the offset bounding box for another example.
		this.getBasurero().body.setSize(10, 10, 0, 0);
		//physicsball
		this.getGame().physics.enable(this.getBall(), Phaser.Physics.ARCADE);
		this.getBall().body.setSize(10, 10, 0, 0);
		//bonus
		var bonus = this.getGame().add.sprite(300, 50, 'bonus');
		this.setBonus(bonus);
		bonus.name = 'bonus';
>>>>>>> bb88965c2d2816ede4b9b89056ea54c5102b7ff8
	
		getBajarBtn (){
			return this.bajarBtn;
		}
	

<<<<<<< HEAD
		getTextoPuntos(){
			return this.textoPuntos;
		}

		setTextoPuntos(value:Phaser.Text){
			this.textoPuntos = value;
		}
=======
		//emitter Basurero
		var emitter = this.getGame().add.emitter(this.getGame().world.centerX, 5, 5);
		this.setEmitter(emitter);
		this.getEmitter().width = this.getGame().world.width;
		
		//emiter Ball
		var emitterball =this.getGame().add.emitter(this.getGame().world.centerX, 5,5);
		this.setEmitter(emitterball);
		this.getEmitter().width = this.getGame().world.width;
		this.getEmitter().makeParticles("ball",[0,1,2,3,4,5,6] ,7,true,true);
		this.getEmitter().setYSpeed(100, 200);
		this.getEmitter().setXSpeed(-5, 5);
		this.getEmitter().start(false, 1600, 1, 0);
		
		this.getEmitter().makeParticles('basurero',null,1,true);
		// emitter.minParticleScale = 0.1;
		// emitter.maxParticleScale = 0.5;
	
		this.getEmitter().setYSpeed(100, 200);
		this.getEmitter().setXSpeed(-5, 5);
		
		this.getEmitter().start(false, 1600, 1, 0);
>>>>>>> bb88965c2d2816ede4b9b89056ea54c5102b7ff8

		getTextoVidas(){
			return this.textoVidas;
		}

		setTextoVidas(value:Phaser.Text){
			this.textoVidas = value;
		}

		constructor(ancho: number,alto:number)
		{
			this.setGame(new Phaser.Game( ancho, alto, Phaser.CANVAS, 'content', { 
				preload:this.preload, 
				create:this.create, 
				update: this.update,
				setGame: this.setGame,
				getGame: this.getGame,
				setAncho: this.setAncho,
				getAncho: this.getAncho,
				setAlto: this.setAlto,
				getAlto: this.getAlto,
				setPersonaje: this.setPersonaje,
				getPersonaje: this.getPersonaje,
				setPiedra: this.setPiedra,
				getPiedra: this.getPiedra,
				setFruta: this.setFruta,
				getFruta: this.getFruta,
				setCursores: this.setCursores,
				getCursores: this.getCursores,
				setSaltarBtn: this.setSaltarBtn,
				getSaltarBtn: this.getSaltarBtn,
				collisionPiedra: this.collisionPiedra,
				collisionFruta: this.collisionFruta,
				listener: this.listener,
				getDobleSalto: this.getDobleSalto,
				setDobleSalto: this.setDobleSalto,
				setBajarBtn: this.setBajarBtn,
				getBajarBtn: this.getBajarBtn,
				getTextoPuntos: this.getTextoPuntos,
				setTextoPuntos: this.setTextoPuntos,
				getTextoVidas: this.getTextoVidas,
				setTextoVidas: this.setTextoVidas
			} ));
		}

		preload()
		{ 
			// add our logo image to the assets class under the
			// key 'logo'. We're also setting the background colour
			// so it's the same as the background colour in the image
			this.getGame().load.image('piedra', 'assets/piedra.png');
			this.getGame().load.image('bonus', 'assets/manzana.png');
			this.getGame().load.image('player', 'assets/phaser-dude.png');
			this.getGame().load.image( 'costanera', "assets/costanera.jpg" );
			this.getGame().load.image('gameover', "assets/gameover.png" )
		}

		create()
		{
			//Seteamos la imagen del juego en la posicion '0,0'
		    //y el ancho y alto de la misma según el tamaño de la ventana actual
			var logo = this.getGame().add.sprite( this.getGame().world.centerX, this.getGame().world.centerY, 'costanera' );
			logo.x = 0;
			logo.y = 0;
			logo.height = this.getGame().height;
			logo.width = this.getGame().width;

			this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
			this.getGame().time.desiredFps = 30;
			this.getGame().physics.arcade.gravity.y = 250;

			//Personaje
			var personaje = new Personaje(this.getGame(),this.getGame().world.centerX, this.getGame().world.top, 'player');
			this.setPersonaje(personaje);
		
			//piedra
			var piedra = new Piedra(this.getGame(),300, 50, 'piedra');
			this.setPiedra(piedra);
			this.getGame().physics.enable(this.getPiedra(), Phaser.Physics.ARCADE);

			//Fruta
			var fruta = new Fruta(this.getGame(),300, 50, 'bonus');
			this.setFruta(fruta);
			fruta.name = 'bonus';
			this.getGame().physics.enable(fruta, Phaser.Physics.ARCADE);

			//Click event
			logo.inputEnabled = true;
			logo.events.onInputDown.add(this.listener, this);
			this.setCursores(this.getGame().input.keyboard.createCursorKeys());
			this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
			this.setBajarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.B));


 			//  Puntos
			var scoreString = 'Puntos: ';
    		var scoreText = this.getGame().add.text(10, 10, scoreString + this.getPersonaje().getPuntos(), { font: '34px Arial', fill: '#fff' });
			this.setTextoPuntos(scoreText);

			//  Vidas
			var vidasString = 'Vidas: ';
 			var vidasText = this.getGame().add.text(this.getGame().world.width - 140, 10, vidasString + this.getPersonaje().getVidas(), { font: '34px Arial', fill: '#fff' });
			this.setTextoVidas(vidasText); 
		}

		update () 
		{
			this.getGame().physics.arcade.collide(this.getPiedra().getEmitterPiedras(),this.getPersonaje(),this.collisionPiedra,null, this);
			this.getGame().physics.arcade.collide(this.getFruta().getEmitterFrutas(),this.getPersonaje(),this.collisionFruta,null, this);

			this.getPersonaje().body.velocity.x = 0;
			if (this.getCursores().left.isDown)
			{
				this.getPersonaje().body.velocity.x = -500;
				if (this.getPersonaje().getOrientacion() != 'left'){
						this.getPersonaje().animations.play('left');
						this.getPersonaje().setOrientacion('left');
				}
			}
			else if (this.getCursores().right.isDown){
				this.getPersonaje().body.velocity.x = 500;
				if (this.getPersonaje().getOrientacion() != 'right'){
						this.getPersonaje().animations.play('right');
						this.getPersonaje().setOrientacion('right');
				}
			} else {
				if (this.getPersonaje().getOrientacion() != 'idle'){
						this.getPersonaje().animations.stop();
				
						if (this.getPersonaje().getOrientacion() == 'left'){
							this.getPersonaje().frame = 0;
						}
						else{
							this.getPersonaje().frame = 5;
						}
						this.getPersonaje().setOrientacion('idle')
				}
			}

			if (this.getSaltarBtn().isDown && this.getPersonaje().body.onFloor()) {
				this.getPersonaje().body.velocity.y = -400;
				this.setDobleSalto(1);
				this.getSaltarBtn().isDown = false;
				  console.log(this.getSaltarBtn(), "Primer Salto");
			   }
		   if (this.getSaltarBtn().isDown && this.getDobleSalto() == 1) {
				this.getPersonaje().body.velocity.y = -400;
				this.setDobleSalto(2);
				this.getSaltarBtn().isDown = false;
				  console.log(this.getDobleSalto, "Segundo salto");
			}
			if (this.getBajarBtn().isDown && (this.getPersonaje().body || this.getPersonaje().body.touching.down))
			{
				this.getPersonaje().body.velocity.y = 800;
			}

			if (this.getPersonaje().getVidas() == 0){
				
				this.getPersonaje().body.collideWorldBounds = false;		
				this.getGame().time.events.repeat(Phaser.Timer.SECOND+2000 , 0, this.personajeDie, this);		
				//GAMEOVER
				var gameOverText = this.getGame().add.image(this.getGame().world.centerX-130,this.getGame().world.centerY-125,'gameover');			
			
			}
		}

		personajeDie(){
			this.getPersonaje().exists = false;	
		}

		collisionPiedra (piedra, personaje) 
		{
			piedra.kill();
			personaje.kill();

			//  Reduce the lives
			this.getPersonaje().setVidas(this.getPersonaje().getVidas() - 1);
			this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();	
			this.getPersonaje().setPuntosB(0);
		}

		collisionFruta (fruta, personaje) 
		{
			personaje.kill();
			//  Increase the score
			this.getPersonaje().setPuntos(this.getPersonaje().getPuntos() + 20);
			this.getPersonaje().setPuntosB(this.getPersonaje().getPuntosB() + 20);
			this.getTextoPuntos().text = "Puntos: " + this.getPersonaje().getPuntos().toString();
			
			if(this.getPersonaje().getPuntosB() == 200 ){
				this.getPersonaje().setVidas(this.getPersonaje().getVidas() + 1);
				this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
				this.getPersonaje().setPuntosB(0);
			}	
		}

		listener () 
		{
			this.getPersonaje().revive()
		}

	}

	// when the page has finished loading, create our game
	window.onload = () => 
	{
		var game = new Costanera(window.innerWidth,window.innerHeight);
	}

}