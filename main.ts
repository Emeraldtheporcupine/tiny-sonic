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
    } else if (EndLevel >= 1) {
        Finish()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    MiniJump = 1
    animation.runImageAnimation(
    MiniSonic,
    assets.animation`SonicSpin`,
    75,
    true
    )
    if (MiniSonic.vy == 0) {
        MiniSonic.vy = -100
    }
})
function LoadLevel (level: number) {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    SpringLeap = 1
    MiniSonic.vy = -137.5
    tiles.setTileAt(location, assets.tile`myTile13`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    MiniJump = 0
    animation.runImageAnimation(
    MiniSonic,
    assets.animation`SonicRunL`,
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    MiniJump = 0
    animation.runImageAnimation(
    MiniSonic,
    assets.animation`SonicStandR2`,
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
function Finish () {
    EndLevel = 0
    BeatLevel = true
    animation.runImageAnimation(
    MiniSonic,
    [img`
        . . 6 6 6 . . 8 . . 8 . . . . . 
        . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
        . . . 6 6 6 6 6 1 1 1 6 1 . . . 
        . . 6 6 6 6 6 6 1 f 1 6 f . . . 
        . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
        . . . 6 6 6 6 6 d d d f f f . . 
        . . 6 6 6 6 6 6 d f d d d . . . 
        . 6 6 6 6 6 6 6 6 d f d . . . . 
        . . . . . 6 8 6 6 6 . . . . . . 
        . . . . . 6 8 1 6 d b . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . 6 6 . 6 . 6 . . . . . . . 
        . . . . 2 2 6 . 6 . . . . . . . 
        . . . . 2 1 . . 4 1 4 . . . . . 
        . . . . 2 2 2 2 4 4 4 4 . . . . 
        `,img`
        . . 6 6 6 . . 8 . . 8 . . . . . 
        . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
        . . . 6 6 6 6 6 1 1 1 6 1 . . . 
        . . 6 6 6 6 6 6 1 f 1 6 f . . . 
        . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
        . . . 6 6 6 6 6 d d d f f f . . 
        . . 6 6 6 6 6 6 d f d d d . . . 
        . 6 6 6 6 6 6 6 6 d f d . . . . 
        . . . . . 6 8 6 6 6 . . . . . . 
        . . . . . 8 6 6 6 d 6 1 . . . . 
        . . . . . 6 1 6 6 6 . . . . . . 
        . . . 6 6 . 8 2 6 . . . . . . . 
        . . . . . . 8 1 6 2 . . . . . . 
        . . . . . . . 2 4 1 4 . . . . . 
        . . . . . . 2 2 4 4 4 4 . . . . 
        `,img`
        . . 6 6 6 . . 8 . . 8 . . . . . 
        . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
        . . . 6 6 6 6 6 1 1 1 6 1 . . . 
        . . 6 6 6 6 6 6 1 f 1 6 f . . . 
        . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
        . . . 6 6 6 6 6 d d d f f f . . 
        . . 6 6 6 6 6 6 d f d d d . . . 
        . 6 6 6 6 6 6 6 6 d f d . . . . 
        . . . . . 6 8 6 6 6 . . 1 . . . 
        . . . . . 8 6 6 6 d 8 . 1 . . . 
        . . . . . 6 1 6 6 6 . 8 . . . . 
        . . . 6 6 . 8 2 6 . . . . . . . 
        . . . . . . 8 1 6 2 . . . . . . 
        . . . . . . . 2 4 1 4 . . . . . 
        . . . . . . 2 2 4 4 4 4 . . . . 
        `,img`
        . . 6 6 6 . . 8 . . 8 . . . . . 
        . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
        . . . 6 6 6 6 6 1 1 1 6 1 . . . 
        . . 6 6 6 6 6 6 1 f 1 6 f . . . 
        . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
        . . . 6 6 6 6 6 d d d f f f . . 
        . . 6 6 6 6 6 6 d f d d d . . . 
        . 6 6 6 6 6 6 6 6 d f d . . . . 
        . . . . . 6 8 6 6 6 . . . . . . 
        . . . . . 8 6 6 6 d 8 . 1 1 . . 
        . . . . . 6 1 6 6 6 . 8 . . . . 
        . . . 6 6 . 8 2 6 . . . . . . . 
        . . . . . . 8 1 6 2 . . . . . . 
        . . . . . . . 2 4 1 4 . . . . . 
        . . . . . . 2 2 4 4 4 4 . . . . 
        `,img`
        . . 6 6 6 . . 8 . . 8 . . . . . 
        . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
        . . . 6 6 6 6 6 1 1 1 6 1 . . . 
        . . 6 6 6 6 6 6 1 f 1 6 f . . . 
        . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
        . . . 6 6 6 6 6 d d d f f f . . 
        . . 6 6 6 6 6 6 d f d d d . . . 
        . 6 6 6 6 6 6 6 6 d f d . . . . 
        . . . . . 6 8 6 6 6 . . 1 . . . 
        . . . . . 8 6 6 6 d 8 . 1 . . . 
        . . . . . 6 1 6 6 6 . 8 . . . . 
        . . . 6 6 . 8 2 6 . . . . . . . 
        . . . . . . 8 1 6 2 . . . . . . 
        . . . . . . . 2 4 1 4 . . . . . 
        . . . . . . 2 2 4 4 4 4 . . . . 
        `,img`
        . . 6 6 6 . . 8 . . 8 . . . . . 
        . 6 6 6 6 6 8 d 8 6 6 6 . . . . 
        . . 6 6 6 6 6 6 6 1 6 6 6 . . . 
        . . . 6 6 6 6 6 1 1 1 6 1 . . . 
        . . 6 6 6 6 6 6 1 f 1 6 f . . . 
        . . 6 6 6 6 6 6 1 1 1 1 1 . . . 
        . . . 6 6 6 6 6 d d d f f f . . 
        . . 6 6 6 6 6 6 d f d d d . . . 
        . 6 6 6 6 6 6 6 6 d f d . . . . 
        . . . . . 6 8 6 6 6 . . . . . . 
        . . . . . 8 6 6 6 d 8 . 1 1 . . 
        . . . . . 6 1 6 6 6 . 8 . . . . 
        . . . 6 6 . 8 2 6 . . . . . . . 
        . . . . . . 8 1 6 2 . . . . . . 
        . . . . . . . 2 4 1 4 . . . . . 
        . . . . . . 2 2 4 4 4 4 . . . . 
        `],
    400,
    false
    )
    controller.moveSprite(MiniSonic, 0, 0)
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    EggmanRoutine()
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
function EggmanRoutine () {
    scene.cameraFollowSprite(Boss1)
    MiniSonic.setStayInScreen(true)
    animation.runImageAnimation(
    Boss1,
    [img`
        ....bbfbcbbfbbbcbfbbfbcbfbb....
        ...bbbbcbbbbbfbcbbbbbb22222b...
        ...bbfbcbfbbbbbcbbbbbb22222b...
        ...bbbbcbbbbbbbcbfbbbf22222b...
        ...bbbbcbbbbbfbcbbbbbb22222b.33
        ...bbfbcbfbbbbbcbbbbbb222223333
        ...bbbbcbbbbbbbcbfbbbbbcbbb3333
        ...bbbbcbbbbbfbcbb1111111111...
        ..2bbfbcbfbbbbbcbbbb111111112..
        cbbc2222222222225555552222222..
        cbbc22222222222255555552222222.
        cfbc22222222222255555552222222.
        cbbc22222222222225555555222222.
        cbbc22222222222222555555522222.
        cbfc22222222222222255555552222.
        cbbc22222222222222222555555522.
        cbbc22222222222222222255555552.
        cfbc2222222bbbbbb2222222555552.
        cbbc2222222cccccc2222222222222.
        cbbc2222222bbbbbb2222222222222.
        cbfc2222222bfbbfb2222222222222.
        cbbc2222222bbbbbb222222222222..
        cbbc2222222cccccc222222222222..
        ...22222222bbbbbb22222222222...
        ...22222222bfbbfb22222222222...
        ....2222222bbbbbb2222222222....
        .....222222cccccc2222222222....
        ......22222bbbbbb2222222222....
        ........222bfbbfb222222222.....
        ..........2bbbbbb22222222......
        ...........cccccccccc..........
        ..........bbbbbfbcbbbcbc.......
        ..........bbbbbbcbfbcbbb.......
        ..........bbbfbcbbbcbfbb.......
        ..........bbbbcbfbcbbbbbcc.....
        ..........bbbcbbbcbfbbbbccc....
        ................ccccccccccc....
        ................ccccccccccc....
        ................ccccccccccc....
        `,img`
        ....bbfbcbbfbbbcbfbbfbcbfbb....
        ...bbbbcbbbbbfbcbbbbbb22222b...
        ...bbfbcbfbbbbbcbbbbbb22222b...
        ...bbbbcbbbbbbbcbfbbbf22222b...
        ...bbbbcbbbbbfbcbbbbbb22222b.33
        ...bbfbcbfbbbbbcbbbbbb222223333
        ...bbbbcbbbbbbbcbfbbbbbcbbb3333
        ...bbbbcbbbbbfbcbb1111111111...
        ..2bbfbcbfbbbbbcbbbb111111112..
        cbbc2222222222225555552222222..
        cbbc22222222222255555552222222.
        cfbc22222222222255555552222222.
        cbbc22222222222225555555222222.
        cbbc22222222222222555555522222.
        cbfc22222222222222255555552222.
        cbbc22222222222222222555555522.
        cbbc22222222222222222255555552.
        cfbc22222222222222222222555552.
        cbbc22222222222222222222222222.
        cbbc22222222222222222222222222.
        cbfc22222222bbbbbb222222222222.
        cbbc22222222cccccc22222222222..
        cbbc22222222bbbbbb22222222222..
        ...222222222bfbbfb2222222222...
        ...222222222bbbbbb2222222222...
        ....22222222cccccc222222222....
        .....2222222bbbbbb222222222....
        ......222222bfbbfb222222222....
        ........2222bbbbbb22222222.....
        ..........22cccccc2222222......
        ............bbbbbbcccc.........
        ............bfbbfbcccc.........
        ............bbbbbbcccc.........
        ............cccccccccc.........
        ...........bbbbbfbcbbbcbcc.....
        ...........bbbbbbcbfbcbbbcc....
        ...........bbbfbcbbbcbfbbcc....
        ...........bbbbcbfbcbbbbbcc....
        ...........bbbcbbbcbfbbbbcc....
        `,img`
        ....bbfbcbbfbbbcbfbbfbcbfbb....
        ...bbbbcbbbbbfbcbbbbbb22222b...
        ...bbfbcbfbbbbbcbbbbbb22222b...
        ...bbbbcbbbbbbbcbfbbbf22222b...
        ...bbbbcbbbbbfbcbbbbbb22222b.33
        ...bbfbcbfbbbbbcbbbbbb222223333
        ...bbbbcbbbbbbbcbfbbbbbcbbb3333
        ...bbbbcbbbbbfbcbb1111111111...
        ..2bbfbcbfbbbbbcbbbb111111112..
        cbbc2222222222225555552222222..
        cbbc22222222222255555552222222.
        cfbc22222222222255555552222222.
        cbbc22222222222225555555222222.
        cbbc22222222222222555555522222.
        cbfc22222222222222255555552222.
        cbbc22222222222222222555555522.
        cbbc22222222222222222255555552.
        cfbc2222222222bbbbbb2222555552.
        cbbc2222222222cccccc2222222222.
        cbbc2222222222bbbbbb2222222222.
        cbfc2222222222bfbbfb2222222222.
        cbbc2222222222bbbbbb222222222..
        cbbc2222222222cccccc222222222..
        ...22222222222bbbbbb22222222...
        ...22222222222bfbbfb22222222...
        ....2222222222bbbbbb2222222....
        .....222222222cccccc2222222....
        ......22222222bbbbbb2222222....
        ........222222bfbbfb222222.....
        ..........2222bbbbbb22222......
        ..............cccccc...........
        .............bbbbbfbcbbbcbc....
        .............bbbbbbcbfbcbbb....
        .............bbbfbcbbbcbfbb....
        .............bbbbcbfbcbbbbb....
        .............bbbcbbbcbfbbbb....
        ................ccccccccccc....
        ................ccccccccccc....
        ................ccccccccccc....
        `,img`
        ....bbfbcbbfbbbcbfbbfbcbfbb....
        ...bbbbcbbbbbfbcbbbbbb22222b...
        ...bbfbcbfbbbbbcbbbbbb22222b...
        ...bbbbcbbbbbbbcbfbbbf22222b...
        ...bbbbcbbbbbfbcbbbbbb22222b.33
        ...bbfbcbfbbbbbcbbbbbb222223333
        ...bbbbcbbbbbbbcbfbbbbbcbbb3333
        ...bbbbcbbbbbfbcbb1111111111...
        ..2bbfbcbfbbbbbcbbbb111111112..
        cbbc2222222222225555552222222..
        cbbc22222222222255555552222222.
        cfbc22222222222255555552222222.
        cbbc22222222222225555555222222.
        cbbc22222222222222555555522222.
        cbfc22222222222222255555552222.
        cbbc22222222222222222555555522.
        cbbc22222222222222222255555552.
        cfbc22222222222222222222555552.
        cbbc22222222222222222222222222.
        cbbc22222222222222222222222222.
        cbfc22222222bbbbbb222222222222.
        cbbc22222222cccccc22222222222..
        cbbc22222222bbbbbb22222222222..
        ...222222222bfbbfb2222222222...
        ...222222222bbbbbb2222222222...
        ....22222222cccccc222222222....
        .....2222222bbbbbb222222222....
        ......222222bfbbfb222222222....
        ........2222bbbbbb22222222.....
        ..........22cccccc2222222......
        ............bbbbbbcccc.........
        ............bfbbfbcccc.........
        ............bbbbbbcccc.........
        ............cccccccccc.........
        ...........bbbbbfbcbbbcbcc.....
        ...........bbbbbbcbfbcbbbcc....
        ...........bbbfbcbbbcbfbbcc....
        ...........bbbbcbfbcbbbbbcc....
        ...........bbbcbbbcbfbbbbcc....
        `],
    500,
    true
    )
    Boss1.setVelocity(25, 0)
}
function OnStart () {
    scene.setBackgroundImage(assets.image`GreenHillBackground`)
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
    Boss1 = sprites.create(img`
        ....bbfbcbbfbbbcbfbbfbcbfbb....
        ...bbbbcbbbbbfbcbbbbbb22222b...
        ...bbfbcbfbbbbbcbbbbbb22222b...
        ...bbbbcbbbbbbbcbfbbbf22222b...
        ...bbbbcbbbbbfbcbbbbbb22222b.33
        ...bbfbcbfbbbbbcbbbbbb222223333
        ...bbbbcbbbbbbbcbfbbbbbcbbb3333
        ...bbbbcbbbbbfbcbb1111111111...
        ..2bbfbcbfbbbbbcbbbb111111112..
        cbbc2222222222225555552222222..
        cbbc22222222222255555552222222.
        cfbc22222222222255555552222222.
        cbbc22222222222225555555222222.
        cbbc22222222222222555555522222.
        cbfc22222222222222255555552222.
        cbbc22222222222222222555555522.
        cbbc22222222222222222255555552.
        cfbc22222222222222222222555552.
        cbbc22222222222222222222222222.
        cbbc22222222222222222222222222.
        cbfc22222222bbbbbb222222222222.
        cbbc22222222cccccc22222222222..
        cbbc22222222bbbbbb22222222222..
        ...222222222bfbbfb2222222222...
        ...222222222bbbbbb2222222222...
        ....22222222cccccc222222222....
        .....2222222bbbbbb222222222....
        ......222222bfbbfb222222222....
        ........2222bbbbbb22222222.....
        ..........22cccccc2222222......
        ............bbbbbbcccc.........
        ............bfbbfbcccc.........
        ............bbbbbbcccc.........
        ............cccccccccc.........
        ...........bbbbbfbcbbbcbcc.....
        ...........bbbbbbcbfbcbbbcc....
        ...........bbbfbcbbbcbfbbcc....
        ...........bbbbcbfbcbbbbbcc....
        ...........bbbcbbbcbfbbbbcc....
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Boss1, tiles.getTileLocation(55, 6))
    Boss1Arm = sprites.create(img`
        ................................
        ...1112222......................
        ..1122222221....................
        .112222222221...................
        1122222222222c..................
        1222222222222cb.................
        1222222222222cb.................
        2222222222222cbb............11..
        2222222222222cbb..........ffbbb.
        2222222222222cfbcbbbcbfbc1ffbb..
        2222222222222cbbcbfbcbbbcbffbb..
        .22222222222cbbbcbbbcbbbcbffbb1.
        ..222222222bcbfbcbbbcbfbcbffbb..
        ...2222222bbcbbbcbfbcbbbcbffbb..
        ...........bcbbbcbbbcbbbcbffbb1.
        ...........bcbfbcbbbcbfbcbffbb..
        ............cbbbcbfbcbbbcbffbb..
        ............cbbbcbbbcbbbcbffbb1.
        .............bfbcbbbcbfbcbffbb..
        ..........................ffb...
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Boss1Arm, tiles.getTileLocation(55, 6))
    Boss1Arm.follow(Boss1, 100)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(11, 11), assets.tile`myTile12`)
    tiles.setTileAt(tiles.getTileLocation(9, 11), assets.tile`myTile12`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`myTile6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    Boss1.setVelocity(0, 75)
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.stopAllSounds()
    music.play(music.createSong(hex`009b000408050204001c00100500640000041e000004000000000000000000000000000a040004720000000400012204000800012008000c0001250c001400012218001c00011d20002400012428002c00012930003800012a40004800012c4c005000012250005400012054005800012558006000012264006800011d6c007000012270007400012978008000012a88009000012c9400a000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80087000000010001040800090001071000110001041800190002030720002100010428002900010730003100010438003900010740004100010448004900010750005100010458005900020307600061000104680069000107700071000105780079000107800081000105880089000204079000910001059400950001079800990001079c009d000105`), music.PlaybackMode.LoopingInBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (MiniJump == 1) {
        EndLevel = 1
        sprites.destroy(otherSprite, effects.fire, 500)
    }
})
let Boss1Arm: Sprite = null
let Boss1: Sprite = null
let BeatLevel = false
let SpringLeap = 0
let MiniSonic: Sprite = null
let EndLevel = 0
let MiniJump = 0
OnStart()
