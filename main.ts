scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (MiniJump == 1) {
        animation.runImageAnimation(
        MiniSonic,
        [img`
            . . 6 6 6 . . 8 . . 8 . . . . . 
            . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
            . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
            . . . 6 6 6 6 6 1 1 1 6 1 . . . 
            . . 6 6 6 6 6 6 1 1 f 6 f . . . 
            . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
            . . . 6 6 6 6 6 d d d f f f . . 
            . . 6 6 6 6 6 6 d f d d d . . . 
            . 6 6 6 6 6 6 6 6 d f d . . . . 
            . . . . . 6 8 6 6 6 . . . . . . 
            . . . . . 6 8 1 6 d b . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . 6 6 . 6 6 6 . . . . . . . 
            . . . . . . 6 . 6 . . . . . . . 
            . . . . . 2 1 2 4 1 4 . . . . . 
            . . . . . 2 2 2 2 4 4 4 . . . . 
            `],
        500,
        false
        )
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    MiniJump = 1
    animation.runImageAnimation(
    MiniSonic,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 1 1 6 6 6 6 6 6 6 6 6 . . 
        . . 6 1 1 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 . . 6 6 . 6 6 . . . . 
        . . . . 6 6 . . 6 . . 6 6 6 . . 
        . . 6 . . 6 . . 6 6 . 6 6 6 . . 
        . . 6 . . 6 . . . 6 . . 6 6 6 . 
        . . 6 6 6 6 6 6 . 6 6 . 6 6 6 . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . 6 6 6 6 6 6 6 6 6 1 1 1 6 . 
        . . 6 6 6 8 8 6 6 6 1 1 1 1 6 . 
        . . 6 6 6 8 6 6 6 1 1 1 f f 6 . 
        . . 6 6 6 1 1 d d 1 1 f f 6 2 . 
        . . . 6 6 1 1 d d 1 f f 6 2 2 . 
        . . . 6 6 6 6 d d d d 6 f 2 . . 
        . . . . . 6 6 1 1 2 2 2 2 f . . 
        . . . . . . . 1 1 2 2 2 . . f . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 1 1 6 6 6 6 6 6 6 6 6 . . 
        . . 6 1 1 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 2 2 2 . . f . 
        . . . . . 6 6 1 1 2 2 2 2 f . . 
        . . . 6 6 6 6 d d d d 6 f 2 . . 
        . . . 6 6 1 1 d d 1 f f 6 2 2 . 
        . . 6 6 6 1 1 d d 1 1 f f 6 2 . 
        . . 6 6 6 8 6 6 6 1 1 1 f f 6 . 
        . . 6 6 6 8 8 6 6 6 1 1 1 1 6 . 
        . . 6 6 6 6 6 6 6 6 6 1 1 1 6 . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . 6 6 6 6 6 6 . 6 6 . 6 6 6 . 
        . . 6 . . 6 . . . 6 . . 6 6 6 . 
        . . 6 . . 6 . . 6 6 . 6 6 6 . . 
        . . . . 6 6 . . 6 . . 6 6 6 . . 
        . . . . 6 . . 6 6 . 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    if (MiniSonic.vy == 0) {
        MiniSonic.vy = -100
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    MiniJump = 0
    animation.runImageAnimation(
    MiniSonic,
    [img`
        . . . . . 8 . . 8 . . 6 6 6 . . 
        . . . . 6 6 6 8 d 8 6 6 6 6 6 . 
        . . . 6 6 6 1 6 6 6 6 6 6 6 . . 
        . . . 1 6 1 1 1 6 6 6 6 6 . . . 
        . . . f 6 f 1 1 6 6 6 6 6 6 . . 
        . . . 1 1 1 1 1 6 6 6 6 6 6 . . 
        . . f f f d d d 6 6 6 6 6 . . . 
        . . . d d d f d 6 6 6 6 6 6 . . 
        . . . . d f d 6 6 6 6 6 6 6 6 . 
        . . . . . . 6 6 6 8 6 . . . . . 
        . . . . . b d 2 2 1 2 . . . . . 
        . . . . . 2 2 2 2 1 2 2 . . . . 
        . . . . . 2 . 6 6 6 . . 2 . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 4 . 4 4 1 . . 4 . . . . 
        . . . . . 4 4 4 1 4 4 4 . . . . 
        `,img`
        . . . . . 8 . . 8 . . 6 6 6 . . 
        . . . . 6 6 6 8 d 8 6 6 6 6 6 . 
        . . . 6 6 6 1 6 6 6 6 6 6 6 . . 
        . . . 1 6 1 1 1 6 6 6 6 6 . . . 
        . . . f 6 f 1 1 6 6 6 6 6 6 . . 
        . . . 1 1 1 1 1 6 6 6 6 6 6 . . 
        . . f f f d d d 6 6 6 6 6 . . . 
        . . . d d d f d 6 6 6 6 6 6 . . 
        . . . . d f d 6 6 6 6 6 6 6 6 . 
        . . . . . . 6 6 6 8 6 . . . . . 
        . . . . . 2 2 . . 4 4 4 . . . . 
        . . . . 2 2 . . . . . 4 4 . . . 
        . . . . 1 1 . 6 6 6 . 1 1 . . . 
        . . . . 2 2 . 6 6 6 . 4 4 . . . 
        . . . . 2 2 . . . . . 4 4 . . . 
        . . . . . 2 2 2 . . 4 4 . . . . 
        `,img`
        . . . . . 8 . . 8 . . 6 6 6 . . 
        . . . . 6 6 6 8 d 8 6 6 6 6 6 . 
        . . . 6 6 6 1 6 6 6 6 6 6 6 . . 
        . . . 1 6 1 1 1 6 6 6 6 6 . . . 
        . . . f 6 f 1 1 6 6 6 6 6 6 . . 
        . . . 1 1 1 1 1 6 6 6 6 6 6 . . 
        . . f f f d d d 6 6 6 6 6 . . . 
        . . . d d d f d 6 6 6 6 6 6 . . 
        . . . . d f d 6 6 6 6 6 6 6 6 . 
        . . . . . . 6 6 6 8 6 . . . . . 
        . . . . . b d 4 4 1 4 . . . . . 
        . . . . . 4 4 4 4 1 4 4 . . . . 
        . . . . . 4 . 6 6 6 . . 4 . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . 2 . 2 2 1 . . 2 . . . . 
        . . . . . 2 2 2 1 2 2 2 . . . . 
        `,img`
        . . . . . 8 . . 8 . . 6 6 6 . . 
        . . . . 6 6 6 8 d 8 6 6 6 6 6 . 
        . . . 6 6 6 1 6 6 6 6 6 6 6 . . 
        . . . 1 6 1 1 1 6 6 6 6 6 . . . 
        . . . f 6 f 1 1 6 6 6 6 6 6 . . 
        . . . 1 1 1 1 1 6 6 6 6 6 6 . . 
        . . f f f d d d 6 6 6 6 6 . . . 
        . . . d d d f d 6 6 6 6 6 6 . . 
        . . . . d f d 6 6 6 6 6 6 6 6 . 
        . . . . . . 6 6 6 8 6 . . . . . 
        . . . . . 4 4 . . 2 2 2 . . . . 
        . . . . 4 4 . . . . . 2 2 . . . 
        . . . . 1 1 . 6 6 6 . 1 1 . . . 
        . . . . 4 4 . 6 6 6 . 2 2 . . . 
        . . . . 4 4 . . . . . 2 2 . . . 
        . . . . . 4 4 4 . . 2 2 . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    MiniJump = 0
    animation.runImageAnimation(
    MiniSonic,
    [img`
        . . 6 6 6 . . 8 . . 8 . . . . . 
        . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
        . . . 6 6 6 6 6 1 1 1 6 1 . . . 
        . . 6 6 6 6 6 6 1 1 f 6 f . . . 
        . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
        . . . 6 6 6 6 6 d d d f f f . . 
        . . 6 6 6 6 6 6 d f d d d . . . 
        . 6 6 6 6 6 6 6 6 d f d . . . . 
        . . . . . 6 8 6 6 6 . . . . . . 
        . . . . . 6 8 1 6 d b . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . 6 6 . 6 6 6 . . . . . . . 
        . . . . . . 6 . 6 . . . . . . . 
        . . . . . 2 1 2 4 1 4 . . . . . 
        . . . . . 2 2 2 2 4 4 4 . . . . 
        `],
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    MiniJump = 0
    animation.runImageAnimation(
    MiniSonic,
    [img`
        . . . . . 8 . . 8 . . 6 6 6 . . 
        . . . . 6 6 6 8 d 8 6 6 6 6 6 . 
        . . . 6 6 6 1 6 6 6 6 6 6 6 . . 
        . . . 1 6 1 1 1 6 6 6 6 6 . . . 
        . . . f 6 f 1 1 6 6 6 6 6 6 . . 
        . . . 1 1 1 1 1 6 6 6 6 6 6 . . 
        . . f f f d d d 6 6 6 6 6 . . . 
        . . . d d d f d 6 6 6 6 6 6 . . 
        . . . . d f d 6 6 6 6 6 6 6 6 . 
        . . . . . . 6 6 6 8 6 . . . . . 
        . . . . . b d 6 1 8 6 . . . . . 
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . . . 6 6 6 . 6 6 . . . 
        . . . . . . . 6 . 6 . . . . . . 
        . . . . . 4 1 4 2 1 2 . . . . . 
        . . . . 4 4 4 2 2 2 2 . . . . . 
        `],
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    MiniJump = 0
    animation.runImageAnimation(
    MiniSonic,
    [img`
        . . 6 6 6 . . 8 . . 8 . . . . . 
        . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
        . . . 6 6 6 6 6 1 1 1 6 1 . . . 
        . . 6 6 6 6 6 6 1 1 f 6 f . . . 
        . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
        . . . 6 6 6 6 6 d d d f f f . . 
        . . 6 6 6 6 6 6 d f d d d . . . 
        . 6 6 6 6 6 6 6 6 d f d . . . . 
        . . . . . 6 8 6 6 6 . . . . . . 
        . . . . . 2 1 2 2 d b . . . . . 
        . . . . 2 2 1 2 2 2 2 . . . . . 
        . . . 2 . . 6 6 6 . 2 . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . 4 . . 1 4 4 . 4 . . . . 
        . . . . 4 4 4 1 4 4 4 . . . . . 
        `,img`
        . . 6 6 6 . . 8 . . 8 . . . . . 
        . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
        . . . 6 6 6 6 6 1 1 1 6 1 . . . 
        . . 6 6 6 6 6 6 1 1 f 6 f . . . 
        . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
        . . . 6 6 6 6 6 d d d f f f . . 
        . . 6 6 6 6 6 6 d f d d d . . . 
        . 6 6 6 6 6 6 6 6 d f d . . . . 
        . . . . . 6 8 6 6 6 . . . . . . 
        . . . . 4 4 4 . . 2 2 . . . . . 
        . . . 4 4 . . . . . 2 2 . . . . 
        . . . 1 1 . 6 6 6 . 1 1 . . . . 
        . . . 4 4 . 6 6 6 . 2 2 . . . . 
        . . . 4 4 . . . . . 2 2 . . . . 
        . . . . 4 4 . . 2 2 2 . . . . . 
        `,img`
        . . 6 6 6 . . 8 . . 8 . . . . . 
        . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
        . . . 6 6 6 6 6 1 1 1 6 1 . . . 
        . . 6 6 6 6 6 6 1 1 f 6 f . . . 
        . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
        . . . 6 6 6 6 6 d d d f f f . . 
        . . 6 6 6 6 6 6 d f d d d . . . 
        . 6 6 6 6 6 6 6 6 d f d . . . . 
        . . . . . 6 8 6 6 6 . . . . . . 
        . . . . . 4 1 4 4 d b . . . . . 
        . . . . 4 4 1 4 4 4 4 . . . . . 
        . . . 4 . . 6 6 6 . 4 . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . 2 . . 1 2 2 . 2 . . . . 
        . . . . 2 2 2 1 2 2 2 . . . . . 
        `,img`
        . . 6 6 6 . . 8 . . 8 . . . . . 
        . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
        . . . 6 6 6 6 6 1 1 1 6 1 . . . 
        . . 6 6 6 6 6 6 1 1 f 6 f . . . 
        . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
        . . . 6 6 6 6 6 d d d f f f . . 
        . . 6 6 6 6 6 6 d f d d d . . . 
        . 6 6 6 6 6 6 6 6 d f d . . . . 
        . . . . . 6 8 6 6 6 . . . . . . 
        . . . . 2 2 2 . . 4 4 . . . . . 
        . . . 2 2 . . . . . 4 4 . . . . 
        . . . 1 1 . 6 6 6 . 1 1 . . . . 
        . . . 2 2 . 6 6 6 . 4 4 . . . . 
        . . . 2 2 . . . . . 4 4 . . . . 
        . . . . 2 2 . . 4 4 4 . . . . . 
        `],
    100,
    true
    )
})
let MiniJump = 0
let MiniSonic: Sprite = null
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888811111111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888881111111111111188888888881111111111111111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888811111111111111111888888811111111111111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888881111111111111111111188881111111111111111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888811111111111111111111118111111111111111111111111188888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888
    8888111111111111111111111111111111111111111111111111118888888888888888888888888888888888811111111111888888888888888888888888888888888888888888888888888888888888
    8888111111111111111111111111111111111111111111111111111888888888888888888888888888888888111111111111118888888888888888888888888888888888888888888888888888888888
    8888111111111111111111111111111111111111111111111111111188888888888888888888888888888811111111111111111188888888888888888888888888888888888888888888888888888888
    8881111111111111111111111111111111111111111111111111111188888888888888888888888888888111111111111111111118888888888888888888888888888888888888888888888888888888
    8811111111111111111111111111111111111111111111111111111118888888888888888888888888881111111111111111111118888888888888888888888888888888888888888888888888888888
    8811111111111111111111111111111111111111111e11111111111111888888888888888888111118811111111111111111111111888888888888888888888888888888888888888888888888888888
    811111111111111111111111111111111111111111ee11111111111111888888888888888811111111811111111111111111111111188888888888888888888888888888888888888888888888888888
    8111111111111e1111111111111111111111111111ee111111111111111888888888888811111111111111111111e1111111111111188888888888888888888888888888888888888888888888888888
    111111111111ee1111111111111111111111111111ee11111111111111188888888888811111111111111111111ee1111111111111118888888888888888888888888888888888888888888888888888
    111111111111ee1111111111111111111111111111ee11111111111111118888888888111111111111111111111ee1111111111111111888888888888888888888888888888888888888888888888888
    111111111111ee1111111111111111111111111111ee11111111111111111888888811111111111111111111111ee1111111111111111888888888888888888888888888888888888888888888888888
    111111111111ee1111111111111111111111111111eee1111111111111111888888111111111111111111111111ee1111111111111111188888888888888888888888888888888888888888888888888
    111111111111ee1111111111111111111111111111eee1111111111111111188881111111111111111111111111ee1111111111111111188888888888888888888888888888888888888888888888888
    111111111111ee1111111111111111111111111111eee1111111111111111188811111111111111111111111111ee1111111111111111118888811888888888888888888888888888881111118888888
    11111111111eeee111111111111111111111111111eee1111111111111111188811111111111111111111111111ee1111111111111111118888111118888888888888888888888888811111118888888
    11111111111eeee111111111111111111111111111eee1111111111111111118111111111111111111111111111eee111111111111111118881111118888888888888811111118888111111111888888
    11111111111eeee111111111111111111111111111eeee111111111111111111111111111111111111111111111eee111111111111111111811111118888888888888111111111181111111111188888
    11111111111eeee111111111111111111111111111eeee111111111111111111111111111111111111111111111eee111111111111111111111111111888888888881111111111111111111111188888
    11111111111eeee111111111111111111111111111eeee111111111111111111111111111111111111111111111eee111111111111111111111111111888888888811111111111111111111111118888
    11111111111eeee111111111111111111111111111eeee111111111111111111111111111111111111111111111eee111111111111111111111111111188888888111111111111111111111111111111
    1111111111eeeee111111111111111111111111111eeee111111111111111111111111111111111111111111111eee111111111111111111111111111118888881111111111111111111111111111111
    1111111111eeeeee11111111111111111111111111eeeee11111111111111111111111111111111111111111111eee1111111111111e1111111111111111888811111111111111111111111111111111
    1111111111eeeeee11111111111111111111111111eeeee11111111111111111111111111111e11111111111111eee111111111111eee111111111111111188111111111111111111111111111111111
    1111111111eeeeee11111111111111111111111111eeeee1111111111111111111111111111ee11111111111111eeee11111111111eee111111111111111181111111111111111111111111111111111
    1111111111eeeeee11111111111111111111111111eeeee1111111111111111111111111111ee11111111111111eeee11111111111eee111111111111111181111111111111111111111111111111111
    1111111111eeeeee1111111111111111111111111eeeeee1111111111111111111111111111ee11111111111111eeee11111111111eee111111111111111111111111111111111111111111111111111
    11111e1111eeeeee1111111111111111111111111eeeeeee111111111111111111111111111ee1111111111111eeeee11111111111eee111111111111111111111111111111111111111111111111111
    1111ee111eeeeeeee111111111111111111111111eeeeeee1111111111111e1111111111111ee1111111111111eeeee11111111111eeee11111111111111111111111111111111111111777777777111
    1111ee111eeeeeeee111111111111111111111111eeeeeee111111111111ee1111111111111eee111111111111eeeee1111111111eeeee11111111111111111111111111111111111177777777777771
    1111ee111eeeeeeee111111111111111111111111eeeeeee111111111111ee1111111111111eee111111111111eeeee1111111111eeeee11111111111111111111111111111111111777777777777777
    1111eee11eeeeeeee111111111111111111111111eeeeeee111111111111ee1111111111111eee111111111111eeeeee111111111eeeee11111111111111111111111111111111117777777777777777
    1111eee11eeeeeeee111111111111111111111111eeeeeee11111111111eeee111111111111eee111111111111eeeeee111111111eeeeee1111111111111111111111111111111117777777777777777
    1111eee11eeeeeeee111111111111111111111111eeeeeeee1111111111eeee111111111111eee111111111111eeeeee111111111eeeeee1111111111111111111111111111111177777777777777777
    1111eee1eeeeeeeee111111111111111111111111eeeeeeee111111111eeeeee11111111111eeee11111111111eeeeee111111111eeeeee1111111111111111111111111111111177777777777777777
    1111eee1eeeeeeeeee11111111111111111111111eeeeeeee111111111eeeeee11111111111eeee11111111111eeeeee111111111eeeeee1111111111111111111111111111111177777777777777777
    1111eeeeeeeeeeeeee111111111e1111111111111eeeeeeee111111111eeeeee11111111111eeee11111111111eeeeee11111111eeeeeee111111111111111111111111111111e177777777777777777
    1111eeeeeeeeeeeeee11111111eee111111111111eeeeeeee11111111eeeeeeee1111111111eeee11111111111eeeeee11111111eeeeeeee1111111111111111111111111111ee177777777777777777
    1111eeeeeeeeeeeeee11111111eee111111111111eeeeeeeee1111111eeeeeeee1111111111eeee11111111111eeeeeee1111111eeeeeeee1111111111111111111111111111ee177777777777777777
    111eeeeeeeeeeeeeee11111111eee111111111111eeeeeeeee1111111eeeeeeee1111111111eeeee1111111111eeeeeee1111111eeeeeeee111111111111111111111111111eee177777777777777777
    111eeeeeeeeeeeeeee1111111eeee111111111111eeeeeeeee111111eeeeeeeeee111111111eeeee1111111111eeeeeee1111111eeeeeeee11111111111177777777777111eeee177777777777777777
    111eeeeeeeeeeeeeeee111111eeeee11111111111eeeeeeeee111111eeeeeeeeee111111111eeeee1111111111eeeeeee1111111eeeeeeeee1111111117777777777777771eeeee77777777777777777
    111eeeeeeeeeeeeeeee11111eeeeee11111111111eeeeeeeee11111eeeeeeeeeeee11111111eeeee1111111111eeeeeee111111eeeeeeeeee1111111177777777777777777eeeee.7777777777777777
    111eeeeeeeeeeeeeeee11111eeeeee11999999991eeeeeeeeee1111eeeeeeeeeeee11111111eeeee1111111111eeeeeee111111eeeeeeeeee11111117777777777777777777eeee.7777777777777777
    111eeeeeeeeeeeeeeee11111eeeeee999999999999eeeeeeeee1111eeeeeeeeeeee1111111eeeeeee111111111eeeeeee111111eeeeeeeeee111111777777777777777777777eeeee777777777777777
    111eeeeeeeeeeeeeeee1111eeeeee999999999999999eeeeeee111eeeeeeeeeeeeee111111eeeeeee11111111eeeeeeeee11111eeeeeeeeee1111177777777777777777777777eeeee77777777777778
    111eeeeeeeeeeeeeeee1111eeeee9999999999999999eeeeeee111eeeeeeeeeeeeee111111eeeeeee11111111eeeeeeeee11111eeeeeeeeeee1117777777777777777777777777eeee77777777777888
    111eeeeeeeeeeeeeeee111eeeeee9999999999999999eeeeeee111eeeeeeeeeeeeee111111eeeeeee11111111eeeeeeeee11111eeeeeeeeeee1117777777777777777777777777ee7777777777788888
    1117777777eeeeeeeeee11eeeeee9999999999999999eeeeeeee1eeeeeeeeeeeeeeee11111eeeeeee11111111eeeeeeeee1111eeeeeeeeeeee1177777777777777777777777777777777777777778888
    11777777777eeeeeeeee11eeeeee9999999999999999eeeeeeee1eeeeeeeeeeeeeeee11111eeeeeeee1111111eeeeeeeee1111eeeeeeeeeeee1177777777777777777777777777777777777777778888
    177777777777eeeeeeee1eeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeee11111eeeeeeee1111111eeeeeeeee1111eeeeeeeeeeeee177777777777777777777777777777777777777777888
    7777777777777eeeeeee1eeeeeee9998999999999999eeeeeeeeeeeeeeeeeeeeeeeeee1111eeeeeeee1111111eeeeeeeee1111eeeeeeeeeeeee177777777777777777777777777777777777777777888
    7777777777777eeeeeeeeeeeeeee9998999999989999eeeeeeeeeeeeeeeeeeeeeeeeee1111eeeeeeee1111111eeeeeeeee1111eeeeeeeeeeeee177777777777777777777777777777777777777777888
    7777777777777eeeeeeeeeeeeeee9998999999989999eeeeeeeeeeeeeeeeeeeeeeeeeee111eeeeeeee1888111eeeeeeeeee111eeeeeeeeeeeee177777777777777777777777777777777777777777888
    7777777777777eeeeeeeeeeeeeee9998999999999999eeeeeeeeeeeeeeeeeeeeeeeeeee111eeeeeeeee888881eeeeeeeeee11eeeeeeeeeeeeee177777777777777777777777777777777777777777888
    7777777777777eeeeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeee1888eeeeeeee888888eeeeeeeeee11eeeeeeeeeeeeeee77777777777777777777777777777777777777777888
    7777777777777eeeeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeee888888eeeeeeeeee88eeeeeeeeeeeeeee77777777777777777777777777777777777777777888
    7777777777777eeeeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeee888888eeeeeeeeee88eeeeeeeeeeeeeee77777777777777777777777777777777777777778888
    777777777777eeeeeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeeee88888eeeeeeeeee88eeeeeeeeeeeeeee77777777777777777777777777777777777777778888
    77777777777eeeeeeeeeeeeeeeee9999999998999999eeeeeeeeeeeeeeeeeeeeeeeeeeeee8eeeeeeeeee88888eeeeeeeeee88eeeeeeeeeeeeeeee7777777777777777777777777ee7777777777788888
    7777777777777eeeeeeeeeeeeeee9998999998999999eeeeeeeeeeeeeeeeeeeeeeeeeeeee8eeeeeeeeee88888eeeeeeeeeee8eeeeeeeeeeeeeeee7777777777777777777777777eeee77777777777777
    7777777777777eeeeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88888eeeeeeeeeeeeeeeeeeeeeeeeeeee877777777777777777777777eeeeee7777777777777
    77777777777777eeeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88888eeeeeeeeeeeeeeeeeeeeeeeeeeee88777777777777777777777eeeee777777777777777
    777777777777777eeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888eeeeeeeeeeeeeeeeeeeeeeeeeeeee8887777777777777777777eeeee7777777777777777
    7777777777777777eeeeeeeeeeee9999999999999899eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888eeeeeeeeeeeeeeeeeeeeeeeeeeeeee88877777777777777777eeeee77777777777777777
    7777777777777777eeeeeeeeeeee9999989999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888eeeeeeeeeeeeeeeeeeeeeeeeeeeeee8888777777777777777eeeee777777777777777777
    7777777777777777eeeeeeeeeeee9999989999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888eeeeeeeeeeeeeeeeeeeeeeeeeeeeee8888887777777e777eeeeeee777777777777777777
    77777777777777777eeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888eeeeeeeeeeeeeeeeeeeeeeeeeeeeee888888888888eeeeeeeeeee7777777777777777777
    77777777777777777eeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88888888888eeeeeeeeeee7777777777777777777
    77777777777777777eeeeeeeeeee9999999999998999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8888888888eeeeeeeeeee77777777777777777777
    77777777777777777eeeeeeeeeee9999999989998999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8888888888eeeeeeeeeee77777777777777777777
    77777777777777777eeeeeeeeeee9999989989998999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888888888eeeeeeeeeeee77777777777777777777
    77777777777777777eeeeeeeeeee9999989999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888888888eeeeeeeeeeee77777777777777777777
    77777777777777777eeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88888888eeeeeeeeeeee77777777777777777777
    77777777777777777eeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8888888eeeeeeeeeeeee77777777777777777777
    77777777777777777eeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8888888eeeeeeeeeeeee77777777777777777777
    77777777777777777eeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888888eeeeeeeeeeeeee77777777777777777777
    77777777777777777eeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88888eeeeeeeeeeeeee77777777777777777777
    7777777777777777eeeeeeeeeeee9998999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8888eeeeeeeeeeeeeee77777777777777777777
    7777777777777777eeeeeeeeeeee9998999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8888eeeeeeeeeeeeeee77777777777777777777
    7777777777777777eeeeeeeeeeee9998999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888eeeeeeeeeeeeeeeee7777777777777777777
    777777777777777eeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888eeeeeeeeeeeeeeeee7777777777777777777
    77777777777777eeeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeeeeeeeeeeee777777777777777777
    7777777777777eeeeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeeee777777777777777777
    7777777777777eeeeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeeeee77777777777777777
    77777777777eeeeeeeeeeeee11111119999998999991111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777
    7777777777eeeeeeeeeeeee1111111119999111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777
    777777777eeeeeeeeeeeeee11111111199911111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777
    7777779999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999911111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999991111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999888888888888888888888889999999999999999
    8888888888888888888999999999999111111111111111111118999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888889999999999999
    8888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899999999
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888999
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
MiniSonic = sprites.create(img`
    . . 6 6 6 . . 8 . . 8 . . . . . 
    . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
    . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
    . . . 6 6 6 6 6 1 1 1 6 1 . . . 
    . . 6 6 6 6 6 6 1 1 f 6 f . . . 
    . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
    . . . 6 6 6 6 6 d d d f f f . . 
    . . 6 6 6 6 6 6 d f d d d . . . 
    . 6 6 6 6 6 6 6 6 d f d . . . . 
    . . . . . 6 8 6 6 6 . . . . . . 
    . . . . . 6 8 1 6 d b . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . 6 6 . 6 6 6 . . . . . . . 
    . . . . . . 6 . 6 . . . . . . . 
    . . . . . 2 1 2 4 1 4 . . . . . 
    . . . . . 2 2 2 2 4 4 4 . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(MiniSonic)
controller.moveSprite(MiniSonic, 100, 0)
MiniSonic.ay = 200
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(MiniSonic, tiles.getTileLocation(0, 14))
music.play(music.createSong(hex`00780004080d0207001c00020a006400f40164000004000000000000000000000000000000000380010000040001250400080001220c001000012510001400012418001c0001251c002000012424002800011b2c003000012c34003800012938003c0001274000440001254400480001244c005000012550005400012458005c00011b6000640001256400680001226c007000012570007400012478007c0001257c008000012484008800011b8c009000011e90009400011e98009c00011da000a400011ea800ac00011db000b4000119b800bc000125bc00c0000122c400c8000125c800cc000124d000d4000125d400d8000124dc00e000011be400e800012cec00f0000129f000f4000127f800fc000125fc000001012404010801012508010c01012410011401011b18011c0101251c012001012224012801012528012c0101243001340101253401380101243c014001011b44014801011e48014c01011e50015401011d58015c01011e60016401011d68016c0101196c017001012270017401012078017c0101197c018001012480018401012088018c0101248c019001012094019c01011909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80086010000010001050400050001030c000d0001051000110001041800190001051c001d0001042400250001092c002d00010a3400350001073800390001064000410001064400450001054c004d0001055000510001045800590001096000610001056400650001036c006d0001057000710001047800790001057c007d0001048400850001098c008d000108900091000108980099000107a000a1000108a800a9000107b000b1000109b800b9000105bc00bd000103c400c5000105c800c9000104d000d1000105d400d5000104dc00dd000109e400e500010aec00ed000107f000f1000106f800f9000105fc00fd0001040401050101050801090101041001110101091801190101051c011d0101032401250101052801290101043001310101053401350101043c013d0101094401450101084801490101085001510101075801590101086001610101076801690101096c016d0101037001710101037801790101097c017d0101058001810101038801890101058c018d010103940195010109980199010109`), music.PlaybackMode.LoopingInBackground)