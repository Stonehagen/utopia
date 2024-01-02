import * as Phaser from 'phaser';
import GameScene from './src/scenes/GameScene';

const config = {
  name: 'app',
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [GameScene],
};

window.game = new Phaser.Game(config);
