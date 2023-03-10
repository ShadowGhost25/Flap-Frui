window.addEventListener('load', function () {

	var game = new Phaser.Game({
		"title": "Flap Fruit",
		"width": 1920,
		"height": 880,
		"type": Phaser.AUTO,
		"backgroundColor": "#88F",
		"parent": "game-container",
		"render": { "pixelArt": true },
		"physics": { default: "arcade", },
		"scale": {
			"mode": Phaser.Scale.FIT,
			"autoCenter": Phaser.Scale.CENTER_BOTH
		}
	});
	game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {

	preload() {
		this.load.pack("pack", "assets/pack.json");
		this.load.audio("audio_beam", ["assets/sounds/pix.ogg"])
	}

	create() {
		this.scene.start("Scene1");
	}

}
