
// You can write more code here

/* START OF COMPILED CODE */

class Scene2 extends Phaser.Scene {

	constructor() {
		super("Scene2");


	}


	create() {

		var fon_1 = this.add.image(968.5174, 493.07822, "textures", "fon");
		fon_1.setScale(2.7547295, 2.4384286);
		this.createScore();
	}
	createScore() {
		var styleGameOver = { font: "60px ", fill: "#fff" };
		this.scoreGame = this.add.text(800, 400, "Game over ", styleGameOver);
		this.scoreGameover = this.add.text(800, 450, "Score: " + this.finalScore, styleGameOver);
	}

	/* START-USER-CODE */
	init(data) {
		this.finalScore = data.score;
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
