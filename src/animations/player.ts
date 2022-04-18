import * as Phaser from 'phaser'

function playerAnimation(scene: Phaser.Scene) {
  scene.anims.create({
    key: 'idle',
    frames: scene.anims.generateFrameNumbers('player_idle', {
      start: 0,
      end: 15,
    }),
    frameRate: 5,
    repeat: -1,
  })

  scene.anims.create({
    key: 'walk_down',
    frames: scene.anims.generateFrameNumbers('player_walk', {
      start: 0,
      end: 3,
    }),
    frameRate: 5,
    repeat: -1,
  })

  scene.anims.create({
    key: 'walk_up',
    frames: scene.anims.generateFrameNumbers('player_walk', {
      start: 9,
      end: 11,
    }),
    frameRate: 5,
    repeat: -1,
  })

  scene.anims.create({
    key: 'walk_sideways',
    frames: scene.anims.generateFrameNumbers('player_walk', {
      start: 0,
      end: 3,
    }),
    frameRate: 5,
    repeat: -1,
  })
  console.log(
    scene.anims.generateFrameNumbers('player_attack', {
      start: 0,
      end: 4,
    })
  )
  console.log(
    scene.anims.generateFrameNumbers('player_attack', {
      start: 2,
      end: 5,
    })
  )

  scene.anims.create({
    key: 'attack',
    frames: scene.anims.generateFrameNumbers('player_attack', {
      end: 5,
    }),
    frameRate: 5,
  })
}

export default playerAnimation
