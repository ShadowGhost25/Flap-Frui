// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var ground = this.add.image(501.31467, 437.1181, "textures", "ground");
		
		var korzina = this.add.image(469.92743, 331.76266, "textures", "korzina");
		
		var watermelon = this.add.image(478.0, 154.0, "textures", "watermelon");
		
		var cherry = this.add.image(557.0, 206.0, "textures", "cherry");
		
		var mushroom = this.add.image(404.0, 224.0, "textures", "mushroom");
		
		var tablet = this.add.image(481.0, 217.0, "textures", "tablet");
		
		var apple = this.add.image(468.0, 271.0, "textures", "apple");
		
		this.fGround = ground;
		this.fKorzina = korzina;

		this.fWatermelon = watermelon;
		this.fCherry = cherry;
		this.fApple = apple;

		this.fTablet = tablet;
		this.fMushroom = mushroom;
	}
	
	/* START-USER-CODE */


	create() {
		this._create();
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.fKorzina);
		this.physics.add.existing(this.fGround);
		
		this.physics.add.existing(this.fApple);
		this.physics.add.existing(this.fCherry);

		this.physics.add.overlap(this.fKorzina, this.fApple, this.hitApple, null, this);
		this.physics.add.overlap(this.fKorzina, this.fCherry, this.hitCherry, null, this);

		this.physics.add.overlap(this.fApple, this.fGround, this.missApple, null, this);
		this.physics.add.overlap(this.fCherry, this.fGround, this.missCherry, null, this);

		this.createScore();
		this.createLife();
	}

	createScore() {
		this.score = 0;

		var style = { font: "15px Lucida Sans", fill: "#fff" };
		this.scoreText = this.add.text(20, 20, "Score: " + this.score, style);
	}
	createLife() {
		this.life = 3;

		var styleLife = { font: "15px Lucida Sans", fill: "#fff" };
		this.lifeText = this.add.text(930, 20, "Life: " + this.life, styleLife);
	}

	hitApple() {
		this.fApple.x = Phaser.Math.Between(0, 1000);
		this.fApple.y = Phaser.Math.Between(-50, -50);
		
		this.score += 1;

		this.scoreText.setText("Score: " + this.score);
		this.tweens.add({
			targets: this.fKorzina,
			duration: 150,
			scaleX: 1.2,
			scaleY: 1.2,
			yoyo: true
		})
	}

	hitCherry() {
		this.fCherry.x = Phaser.Math.Between(0, 1000);
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

	missApple() {
		
		this.fApple.x = Phaser.Math.Between(0, 1000);
		this.fApple.y = Phaser.Math.Between(-50, -50);
		this.life -= 1;

		this.lifeText.setText("Life: " + this.life);
		this.tweens.add({
			targets: this.fApple,
		})
	}

	missCherry() {
		this.fCherry.x = Phaser.Math.Between(0, 1000);
		this.fCherry	.y = Phaser.Math.Between(-50, -50);
		this.life -= 1;

		this.lifeText.setText("Life: " + this.life);
		this.tweens.add({
			targets: this.fCherry,
		})
	}

	update() {
		// if(this.score === 0) {
		// 	this.fApple.y += 0.5
		// }else {
		// 	this.fApple.y += this.score/2;
		// }
		// if(this.fApple.y === 450){
		// 	this.score -1;
		// }
		this.fApple.y += 4;
		this.fCherry.y += 2;
		this.fMushroom.y +=7;
		this.fWatermelon.y +=3;
		this.fTablet.y += 9;
		if (this.cursors.right.isDown) {
			this.fKorzina.x += 7;
		} else if (this.cursors.left.isDown) {
			this.fKorzina.x -= 7;
		}
		if (this.fKorzina.x < 0) {
			this.fKorzina.x += 1000;
		} else if (this.fKorzina.x > 1000) {
			this.fKorzina.x = 0;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
