// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {

	constructor() {

		super("Scene1");

	}

	_create() {

		var fon = this.add.image(970.0975, 512.9616, "textures", "fon");
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

		var heart = this.add.image(1735.1487, 62.5406, "textures", "heart");
		heart.setScale(1.0460824, 1.009834);

		this.fGround = ground;
		this.fWatermelon = watermelon;
		this.fCherry = cherry;
		this.fMushroom = mushroom;
		this.fTablet = tablet;
		this.fApple = apple;
		this.fKorzina = korzina;

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
	}








	/* START-USER-CODE */

	create() {
		this._create();

		this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		this.escBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
		this.cursors = this.input.keyboard.createCursorKeys();
		// this.keyCodes = this.input.keyboard.createKeyCodes();
		this.physics.add.existing(this.fKorzina);
		this.physics.add.existing(this.fGround);

		this.physics.add.existing(this.fApple);
		this.physics.add.existing(this.fCherry);
		this.physics.add.existing(this.fWatermelon);
		this.physics.add.existing(this.fMushroom);
		this.physics.add.existing(this.fTablet);

		this.physics.add.overlap(this.fKorzina, this.fApple, this.hitApple, null, this);
		this.physics.add.overlap(this.fKorzina, this.fCherry, this.hitCherry, null, this);
		this.physics.add.overlap(this.fKorzina, this.fWatermelon, this.hitWatermelon, null, this);
		this.physics.add.overlap(this.fKorzina, this.fMushroom, this.hitMushroom, null, this);
		this.physics.add.overlap(this.fKorzina, this.fTablet, this.hitTablet, null, this);

		this.physics.add.overlap(this.fApple, this.fGround, this.missApple, null, this);
		this.physics.add.overlap(this.fCherry, this.fGround, this.missCherry, null, this);
		this.physics.add.overlap(this.fWatermelon, this.fGround, this.missWatermelon, null, this);

		this.physics.add.overlap(this.fCherry, this.fGround, this.missCherry, null, this);

		this.createScore();
		this.createLife();
		this.stopGame();

	}

	stopGame() {
		this.input.keyboard.on('keydown-ESC', function () {



			console.log('vi', this.pauseText);

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
		this.scoreText = this.add.text(10, 20, "Score: " + this.score, style);

		var style = { font: "200px ", fill: "#fff" };
		this.pauseText = this.add.text(650, 350, "PAUSE ", style);
		this.pauseText.setVisible(false);
	}
	createLife() {
		this.life = 3;

		var styleLife = { font: "50px", fill: "#fff" };
		this.lifeText = this.add.text(1800, 20, ":" + this.life, styleLife);
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
		this.fMushroom.y = Phaser.Math.Between(-50, -50);

		this.life -= 1;

		this.lifeText.setText(":" + this.life);
		this.tweens.add({
			targets: this.fKorzina,
		})
	}

	hitTablet() {
		this.fTablet.x = Phaser.Math.Between(0, 1920);
		this.fTablet.y = Phaser.Math.Between(-50, -50);

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

	update() {

		// if (this.fKey.esc.isDown) {
		// 	console.log('sakdnl');

		// 	if (this.fGame.pause) {
		// 		this.fGame.pause = false;
		// 	} else {
		// 		this.fGame.pause = true;
		// 	}
		// }



		// if(this.score === 0) {
		// 	this.fApple.y += 0.5
		// }else {
		// 	this.fApple.y += this.score/2;
		// }
		// if(this.fApple.y === 450){
		// 	this.score -1;
		// }
		if (!this.fGame.pause) {

			if (this.life >= 1) {
				this.fApple.y += 3;
				this.fCherry.y += 2.4;
				this.fMushroom.y += 1.5;
				this.fWatermelon.y += 4;
				this.fTablet.y += 2;
			} else if (this.life < 0) {
				var styleGameOver = { font: "60px ", fill: "#fff" };
				this.scoreGame = this.add.text(800, 400, "Game over ", styleGameOver);
				this.scoreGameover = this.add.text(800, 450, "Score: " + this.score, styleGameOver);
			}


			if (this.cursors.right.isDown) {
				this.fKorzina.x += 12;
			} else if (this.cursors.left.isDown) {

				this.fKorzina.x -= 12;
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
