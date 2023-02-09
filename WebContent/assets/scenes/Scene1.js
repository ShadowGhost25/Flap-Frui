// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var fon = this.add.image(1000.0, 500.0, "textures", "fon");
		fon.setScale(-2.7192035, 2.4384286);
		
		var ground = this.add.image(1104.4503, 867.45154, "textures", "ground");
		ground.setOrigin(0.5720697, 0.5);
		ground.setScale(1.984614, 2.02962);
		
		var watermelon = this.add.image(777.5087, -386.03564, "textures", "watermelon");
		watermelon.setScale(1.6604077, 1.4176551);
		
		var cherry = this.add.image(1417.2, -223.18826, "textures", "cherry");
		cherry.setScale(1.353198, 1.6326509);
		
		var mushroom = this.add.image(302.4404, -643.43335, "textures", "mushroom");
		mushroom.setScale(1.8797132, 1.723319);
		
		var tablet = this.add.image(1227.2368, -575.21643, "textures", "tablet");
		tablet.setScale(1.8398038, 1.4887581);
		
		var apple = this.add.image(345.4157, -101.43261, "textures", "apple");
		apple.setScale(1.798879, 1.9055235);
		
		var korzina = this.add.image(951.09595, 757.91077, "textures", "korzina");
		korzina.setScale(1.7356731, 1.6912552);
		
		var heart = this.add.image(1735.1487, 62.5406);
		heart.setScale(1.0460824, 1.009834);
		
		var heart1 = this.add.image(1700.0, 100.0, "textures", "heart1");
		heart1.setScale(0.78393275, 0.7281513);
		
		var heart2 = this.add.image(1600.0, 100.0, "textures", "heart2");
		heart2.setScale(0.78393275, 0.7281513);
		
		var heart3 = this.add.image(1500.0, 100.0, "textures", "heart3");
		heart3.setScale(0.78393275, 0.7281513);
		
		this.fGround = ground;
		this.fWatermelon = watermelon;
		this.fCherry = cherry;
		this.fMushroom = mushroom;
		this.fTablet = tablet;
		this.fApple = apple;
		this.fKorzina = korzina;
		this.fHeart1 = heart1;
		this.fHeart2 = heart2;
		this.fHeart3 = heart3;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	/* START-USER-CODE */

	create() {
		var keys = this.input.keyboard.addKeys({
			up: 'up',
			down: 'down',
			left: 'left',
			right: 'right',
			esc: 'ESC',
		});
		this.fKey = keys;

		var game = {
			pause: false
		}
		this.fGame = game;
		this._create();
		this.beamSound = this.sound.add("audio_beam")
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.fKorzina);
		this.physics.add.existing(this.fGround);

		this.physics.add.existing(this.fApple);
		this.physics.add.existing(this.fCherry);
		this.physics.add.existing(this.fWatermelon);
		this.physics.add.existing(this.fMushroom);
		this.physics.add.existing(this.fTablet);

		// this.physics.add.existing(this.fHeart1);
		// this.physics.add.existing(this.fHeart2);
		// this.physics.add.existing(this.fHeart3);

		this.physics.add.overlap(this.fKorzina, this.fApple, this.hitApple, null, this);
		this.physics.add.overlap(this.fKorzina, this.fCherry, this.hitCherry, null, this);
		this.physics.add.overlap(this.fKorzina, this.fWatermelon, this.hitWatermelon, null, this);
		this.physics.add.overlap(this.fKorzina, this.fMushroom, this.hitMushroom, null, this);
		this.physics.add.overlap(this.fKorzina, this.fTablet, this.hitTablet, null, this);

		this.physics.add.overlap(this.fApple, this.fGround, this.missApple, null, this);
		this.physics.add.overlap(this.fCherry, this.fGround, this.missCherry, null, this);
		this.physics.add.overlap(this.fWatermelon, this.fGround, this.missWatermelon, null, this);
		this.physics.add.overlap(this.fMushroom, this.fGround, this.missMushroom, null, this);

		this.createScore();
		this.createLife();
		this.stopGame();
		this.beamSound.play();
	}

	stopGame() {
		this.input.keyboard.on('keydown-ESC', function () {

			if (this.fGame.pause) {
				this.fGame.pause = false;
				this.pauseText.setVisible(false);
			}
			else {
				this.pauseText.setVisible(true);
				this.fGame.pause = true;
			}
		}, this);
	}

	createScore() {
		this.score = 0;

		var style = { font: "50px ", fill: "#fff" };
		this.scoreText = this.add.text(10, 20, "Score:" + this.score, style);

		var style = { font: "200px ", fill: "#fff" };
		this.pauseText = this.add.text(650, 350, "PAUSE ", style);
		this.pauseText.setVisible(false);
	}
	createLife() {
		this.life = 3;
		var styleLife = { font: "60px", fill: "#fff" };
		this.lifeText = this.add.text(1740, 65, ":" + this.life, styleLife);
	}

	hitApple() {
		this.fApple.x = Phaser.Math.Between(0, 1920);
		this.fApple.y = Phaser.Math.Between(-50, -50);

		this.score += 1;

		this.scoreText.setText("Score: " + this.score);
	}

	hitCherry() {
		this.fCherry.x = Phaser.Math.Between(0, 1920);
		this.fCherry.y = Phaser.Math.Between(-50, -50);

		this.score += 2;

		this.scoreText.setText("Score: " + this.score);
		this.tweens.add({
			targets: this.fKorzina,
			duration: 150,
			scaleX: 1.2,
			scaleY: 1.2,
			yoyo: true
		})
	}

	hitWatermelon() {
		this.fWatermelon.x = Phaser.Math.Between(0, 1000);
		this.fWatermelon.y = Phaser.Math.Between(-50, -50);

		this.score += 3;

		this.scoreText.setText("Score: " + this.score);
		this.tweens.add({
			targets: this.fKorzina,
			duration: 150,
			scaleX: 1.2,
			scaleY: 1.2,
			yoyo: true
		})
	}

	hitMushroom() {
		this.fMushroom.x = Phaser.Math.Between(0, 1920);
		this.fMushroom.y = Phaser.Math.Between(-100, -100);

		this.life -= 1;

		this.lifeText.setText(":" + this.life);
		this.tweens.add({
			targets: this.fKorzina,
		})
	}

	hitTablet() {
		this.fTablet.x = Phaser.Math.Between(0, 1920);
		this.fTablet.y = Phaser.Math.Between(-1000, -1000);

		if (this.life < 3) {
			this.life += 1;
		}


		this.lifeText.setText(":" + this.life);
		this.tweens.add({
			targets: this.fKorzina,
		})


	}

	missApple() {

		this.fApple.x = Phaser.Math.Between(0, 1920);
		this.fApple.y = Phaser.Math.Between(-50, -50);
		this.life -= 1;

		this.lifeText.setText(":" + this.life);
		this.tweens.add({
			targets: this.fApple,
		})
	}

	missCherry() {
		this.fCherry.x = Phaser.Math.Between(0, 1920);
		this.fCherry.y = Phaser.Math.Between(-50, -50);
		this.life -= 1;

		this.lifeText.setText(":" + this.life);
		this.tweens.add({
			targets: this.fCherry,
		})
	}

	missWatermelon() {
		this.fWatermelon.x = Phaser.Math.Between(0, 1920);
		this.fWatermelon.y = Phaser.Math.Between(-50, -50);
		this.life -= 1;

		this.lifeText.setText(":" + this.life);
		this.tweens.add({
			targets: this.fWatermelon,
		})
	}
	missMushroom(){
		this.fMushroom.x = Phaser.Math.Between(0, 1920);
		this.fMushroom.y = Phaser.Math.Between(-300, -300);
	}
	// missTablet(){
	// 	this.
	// }
	update() {
		// if(this.score === 0) {
		// 	this.fApple.y += 0.5
		// }else {
		// 	this.fApple.y += this.score/2;
		// }
		// if(this.fApple.y === 450){
		// 	this.score -1;
		// }

		//Life
		if(this.life === 2) {
			this.fHeart1. y -= 300;
		}
		if(this.life === 3){
			this.fHeart1.x = 1700.0;
			this.fHeart1.y = 100.0;
		}
		if(this.life === 1){
			this.fHeart2.y -= 300;
		}
		if(this.life === 2){
			this.fHeart2.x = 1600.0;
			this.fHeart2.y = 100.0;
		}
		if(this.life === 0){
			this.fHeart3.y -= 300;
		}
		//Движения
		if (!this.fGame.pause) {
			if (this.life >= 1) {
			if (this.cursors.right.isDown) {
				this.fKorzina.x += 14;
			} else if (this.cursors.left.isDown) {
				this.fKorzina.x -= 14;
			}
				this.fApple.y += 3;
				this.fCherry.y += 2.4;
				this.fMushroom.y += 20;
				this.fWatermelon.y += 3.6;
				this.fTablet.y += 2;
			} else if (this.life <= 0 && this.score < 10 ) {
				var styleGameOver = { font: "60px ", fill: "#fff" };
				this.scoreGame = this.add.text(800, 400, "Game over ", styleGameOver);
				this.scoreGameover = this.add.text(800, 450, "Score: " + this.score, styleGameOver);
				this.fApple.y += 0;
				this.fCherry.y += 0;
				this.fMushroom.y += 0;
				this.fWatermelon.y += 0;
				this.fTablet.y += 0;
				this.beamSound.stop();
			} else if (this.score > 10 && this.score){
				var styleGameOver = { font: "60px "	, fill: "#fff" };
				this.scoreGame = this.add.text(800, 400, "Win", styleGameOver);
			}

			if (this.fKorzina.x < 0) {
				this.fKorzina.x += 1920;
			} else if (this.fKorzina.x > 1920) {
				this.fKorzina.x = 0;
			}
			if (this.fTablet.y > 1500) {
				this.fTablet.y = -394.88712;
			}
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
