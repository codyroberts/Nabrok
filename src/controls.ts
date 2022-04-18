//This file sets up the controls for the player

import * as Phaser from 'phaser'

let attacking = false
function controls(scene: Phaser.Scene, player: Phaser.Physics.Arcade.Sprite) {
  const controls = scene.input.keyboard.createCursorKeys()
  const body = player.body as Phaser.Physics.Arcade.Body

  // TODO: Cut controls out into function. CLean up function with fewer if statements.
  if (
    !controls.up.isDown &&
    !controls.down.isDown &&
    !controls.left.isDown &&
    !controls.right.isDown &&
    !(player.anims.currentAnim?.key === 'attack')
  ) {
    player.anims.play('idle', true)
  }

  if (controls.up.isDown) {
    body.setVelocityY(-45)
    player.anims.play('walk_up', true)
  } else if (controls.down.isDown) {
    body.setVelocityY(45)
    player.anims.play('walk_down', true)
  } else {
    body.setVelocityY(0)
  }

  if (controls.left.isDown) {
    body.setVelocityX(-45)
    if (controls.down.isDown) {
      player.anims.play('walk_down', true)
    } else if (controls.up.isDown) {
      player.anims.play('walk_up', true)
    } else {
      player.flipX = true
      player.anims.play('walk_sideways', true)
    }
  } else if (controls.right.isDown) {
    body.setVelocityX(45)
    if (controls.down.isDown) {
      player.anims.play('walk_down', true)
    } else if (controls.up.isDown) {
      player.anims.play('walk_up', true)
    } else {
      console.log('walking sideways')
      player.flipX = false
      player.anims.play('walk_sideways', true)
    }
  } else {
    body.setVelocityX(0)
  }
  if (controls.space.isDown) {
    console.log('playing attack')
    attacking = true
    player.anims.play('attack', true)
  }
}

export default controls
