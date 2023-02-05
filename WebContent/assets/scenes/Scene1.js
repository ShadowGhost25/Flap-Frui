
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var korzina = this.add.image(487.07983,415, "textures", "korzina");
		
		var apple = this.add.image(487, -50, "textures", "apple");
		
		this.fKorzina = korzina;
		this.fApple = apple;
		
	}

	/* START-USER-CODE */
create() {
		this._create();
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.fKorzina);
		this.physics.add.existing(this.fApple);
		
		this.physics.add.overlap(this.fKorzina, this.fApple, this.hit, null, this);
		
		this.createScore();
	}
	
	createScore() {
		this.score = 0;
		
		var style = { font: "15px Lucida Sans", fill: "#fff"};
		this.scoreText = this.add.text(20, 20, "score: " +	this.score, style);
	}
	
	hit(){
		this.fApple.x = Phaser.Math.Between(0, 1000);
		this.fApple.y = Phaser.Math.Between(-50, -50);
		
		this.score += 1;
		
		this.scoreText.setText("score: " + this.score);
		this.tweens.add({
			targets: this.fKorzina,
			duration: 200,
			scaleX: 1.5,
			scaleY: 1.5,
			yoyo: true
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
		this.fApple.y += 5;

		if(this.cursors.right.isDown){
			this.fKorzina.x +=7;
		} else if(this.cursors.left.isDown ){
			this.fKorzina.x -=7;
		}
		if (this.fKorzina.x < 0) {
			this.fKorzina.x +=1000;
		 } else if (this.fKorzina.x > 1000) {
			this.fKorzina.x = 0;
		 }
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
