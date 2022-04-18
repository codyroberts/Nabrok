import * as Phaser from 'phaser'
import controls from './controls'
import playerAnimation from './animations/player'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
}

export class GameScene extends Phaser.Scene {
  private player: Phaser.Physics.Arcade.Sprite

  constructor() {
    super(sceneConfig)

    this.player = null
  }

  public preload() {
    this.load.spritesheet('player_idle', 'assets/spritesheets/human/Idle.png', {
      frameWidth: 32,
      frameHeight: 32,
    })
    this.load.spritesheet('player_walk', 'assets/spritesheets/human/Walk.png', {
      frameWidth: 32,
      frameHeight: 32,
    })
    this.load.spritesheet(
      'player_attack',
      'assets/spritesheets/human/Attack.png',
      { frameWidth: 32, frameHeight: 32 }
    )
  }

  public create() {
    this.player = this.physics.add.sprite(48, 48, 'hero') as any
    this.player.body = this.player.body as Phaser.Physics.Arcade.Body
    this.player.setSize(16, 16)

    this.cameras.main.setBounds(0, 0, 240, 240)
    this.physics.world.setBounds(0, 0, 240, 240)

    this.cameras.main.setZoom(4)
    this.cameras.main.zoomTo(6)
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05)
    this.player.setScale(1)

    // Imports animations from animations.ts
    playerAnimation(this)
  }

  public update() {
    // Imports game controls from controls.ts
    controls(this, this.player)
  }
}

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Nabrok',

  type: Phaser.AUTO,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  render: {
    pixelArt: true,
  },

  scene: GameScene,

  parent: 'game',
  // backgroundColor: '#000000',
}

export const game = new Phaser.Game(gameConfig)
