controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Amogus,
    [img`
        ......ffffffffff........
        .....f1111111111f.......
        ....f11ffffffff11f......
        ....f11f999911f11f......
        ....f11f999999f11f......
        ....f11ffffffff11f......
        ....f111111111111f......
        ....f111111111111f......
        ....f111111111111f......
        ....f111111111111f......
        ....f111111111111f......
        ....f111ffffff111f......
        ....f111f....f111f......
        ....f1ffff...f1ffff.....
        ....f11111f..f11111f....
        ....fffffff..fffffff....
        `,img`
        ......ffffffffff........
        .....f1111111111f.......
        ....f11ffffffff11f......
        ....f11f999911f11f......
        ....f11f999999f11f......
        ....f11ffffffff11f......
        ....f111111111111f......
        ....f111111111111f......
        ....f111111111111f......
        ....f111111111111f......
        ....f111111111111f......
        ....f111ffffff111f......
        ....f111f....f111f......
        ....f1ffff...f1ffff.....
        ....f11111f..f11111f....
        ....fffffff..fffffff....
        `],
    500,
    false
    )
})
let Amogus: Sprite = null
Amogus = sprites.create(assets.image`Amogus`, SpriteKind.Player)
Amogus.setPosition(12, 101)
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333333333333334333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333ffffffffffffffff3333333333
    3333333333333333333333333333333333333334433333333333333333333333333333333333333333333333333333333333333333333333333333333fffffffffffff999999999999999ffff3333333
    3333333333333333333333333333333333333334433333333333333333333333333333333333333333333333333333333333333333333333333fffffff999999999999999999999999999999ffff3333
    33333333333333333333333333333333333333344333333333333333333333333333333333333333333333333333333333333333333333fffff9999999999999999999999999999999999999999ffff3
    333333333333333333333333333333333333333443333333333333333333333333333333333333333333333333333333333333333333ff999999999999999999999999999999999999999999999999f3
    33333333333333333333333333333333333333444333333333333333333333333333333333333333333333333333333333333333ffff99999999999999999999999999999999999999999999999999ff
    33333333333333333333333333333333333333444333433333333333333333333333333333333333333333333333333333333fff99f9999999999999999999999999997777777779999999999999999f
    33333333333333333333333333333333333333444334443333333333333333333333333333333333333333333333333333333f9999999999999999999999999999999777777777779999999999999999
    33333333333333333333333333333333333334444334443333333333333333333333333333333333333333333333333333fff99999999999999999999999999999997777777777777999999999999999
    3333333333333333333333333ffffff333334444433444433333333333333333333333333333333333333333333333333ff9999999999999999999999999999999977777777777777799999999999999
    3333333333333333333ffffffccccccff334444443344444333333333333333333333333333333333333333333333333f999999999999999999999999977777777777777777777777779999999999999
    3333333333333333fffcccccccccccccf334444443444444333333333333333333333333333333333333333333333fff9999999999999999999999997777777777777777777777777779999999999999
    333333333333ffffccccccccccccccccf34444444344444433333333333333333333333333333333333333333333ff999999999999999999999999977777777777777777777777777779999999999999
    33333333333fcccccccccccccccccccccf444444434444443333333333333333333333333333333333333333333f99999999999999999999999999777777777777777777777777777779999999999999
    3333333333ffcccccccccccccccccccccff4444443444444333333333333333333333333333333333333333333f999999999999999999999999999777777777777777777777777777779999999999999
    333333333fccccccccccccccccccccccccf444444444444433333333333333333333333333333333333333333f9999999999999999999999999997777777777777777777777777777779999999999999
    3333333ffccccccccccccccccccccccccccf4444444444443333334333333333333333333333333333333333f99999999999999999999999999997777777777777777777777777777779999999999999
    333333fcccccccccccccccccccccccccccccf44444444444333334433333333333333333333333333333333f999999999999999999999999999997777777777777777777777777777779999999999999
    333333fcccccccccccccccccccccccccccccf4422444444433333443333333333333333333333333333333ff999999999999999999999999999997777777777777777777777777777779999999999999
    33333fccccccccccccccccccccccccccccccf422244444443333444333333333333333333333333333333ff9999999999999999999999999999997777777777777777777777777777799999999999999
    333ffcccccccccccccccccccccccccccccccf222244444443334444333333333333333333333333333333f99999999999999999999999999999997777777777777777777777777777999999999999999
    333fcccccccccccccccccccccccccccccccccf22224444443344444333333333333333333333333333333f99999999999999999999999999999997777777777777777777777777779999995555555555
    33fcccfffffffccccccccccccccccccccccccc22224444443444444333333333333333333333333333333f99999999999999999999999999999997777777777777777777777777799999955555555555
    33fccfffffffffcccccccccccccfcccccccccc2222444444444444433333333333333333333333333333f999999999999999999999999999999997777777777777777777777779999999555555555555
    33fccfffffffffcccccccccccccffccccccccc222224444444444443333333333333333333333333333f9999999999999999999999999999999999777777777777777777777779999999555444444444
    33fccfffffffffcccccccccccccfffcccccccc222222444444444443333333333333333333333333333f9999999999999999999999999999999999777777777777777777777779999995555444444444
    33fccfffffffffcccccccccccccffffcccccccf2222244444444444333333333333333333333333333f99999999999999999999999999999999999977777777777777777777779999995555444444444
    3fcccfffffffffccccccccccccfffffcccccccc2222244222444444333333333333333333333333333f99999999999999999999999999999999999997777777777777777777779999955554444444444
    3fcccfffffffffccccccccccccfffffccccccccf22224222244444433333333333333333333333333f999999999999999999999999999999999999999977777777777777777779999955554444444444
    fccccfffffffffccccccccccccfffffccccccccf2222222224444443333333333333333333333333f9999999999999999999999999999999999999999977777777777777777779999555554444444444
    fcccccfffffffcccccccccccccfffffcccccccccf22222222444444333333333333333333333333f99999999999999999999999999999999999999999977777777777777777799999555544444444444
    fcccccccccccccccccccccccccfffffcccccccccf22222222444444333333333333333333333333f99999999999999999999999999999999999999999977777777777e99999999995555544444444444
    fcccccccccccccccccccccccccfffffcccccccccf2222222244444433333333333333333333333f999999999999999999999999999999999999999999977777777777e9999999999555554444444ffff
    fcccccccccccccccccccccccccfffffcccccccccc222222224444443333333333333333333333f999999999999999999999999999999999999999999999777777777ee999999999955554444444f4444
    fcccccccccccccccccccccccccfffffccccccccccf22222224444433333333333333333333333f99999999999999999999999999999999999999999999997777777eee99999999995555444444f44444
    fcccccccccccccccccccccccccfffffccccccccccf22222244444433333333333333333333333f9999999999999999999999999999999999999999999999999eeeeeee9999999999555544444f444144
    fcccccccccccccccccccccccccfffffccccccccccf2222224444433333333333333333333333f9999999999999999999999fffffff999999999999999999999eeeeeee9999999999555544444f444144
    fcccccccccccccccccccccccccfffffccccccccccf2222244444333333333333333333333333f999999999999999999999f1111111f99999999999999999999eeeeeee9999999999555544444f444111
    fcccccccccccccccccccccccccfffffccccccccccf222244444433333333333333333333333f999999999999999999999f111111111f9999999999999999999eeeeeee9999999999555544444f444144
    fcccccccccccccccccccccccccfffffccccccccccf22224444433333333333333333333333f999999999999999999999f11111111111f999999999999999999eeeeeee9999999999555544444f444144
    fccccccccfffccccccccccccccfffffccccccccccc22444444333333333333333333333333f999999999999999999999fffff111fffff999999999999999999eeeeeee9999999999555544444f444111
    fccccccfffffccccccccccccccfffffccccccccccccf44444333333333333333333333333f9999999999999999999999ff111f11ff11f999999999999999999eeeeeee9999999999555544444f444144
    fccccccfffffcccccccccccccccfffcccccccccccccf44443333333333333333333333333f9999999999999999999999ff111f11ff11f999999999999999999eeeeeee99999999995555444444f44144
    fccccccfffffcccccccccccccccccccccccccccccccf4444333333333333333333333333f99999999999999999999999ffffff11fffff999999999999999999eeeeeee999999999955554444444f4444
    fccccccfffffcccccccccccccccccccccccccccccccf444333333333333333333333333ff99999999999999999999999f11111111111f999999999999999999eeeeeee9999999999555544444444ffff
    fccccccfffffcccccccccccccccccccccccccccccccf443333333333333333333333333f999999999999999999999999f111fffff111f999999999999999999eeeeeee99999999995555444444444444
    fccccccfffffccccccccccccccccccccccccccccccccf33333333333333333333333333f9999999999999999999999999f111111111f9999999999999999999eeeeeee99999999995555444444444444
    fccccccfffffcccccccccccccccccccccccccccccccccf3333333333333333333333333f99999999999999999999999999f1111111f99999999999999999999eeeeeee99999999995555444444444444
    fccccccfffffcccccccccccccccccccccccccccccccccf333333333333333333333333f9999999999999999999999999999ff11111f99999999999999999999eeeeeee99999999995555444444444444
    fccccccfffffcccccccccccccccccccccccccccccccccf333333333333333333333333f99999999999999999999999999999f11111f99999999999999999999eeeeeee99999999995555444444444444
    fccccccfffffcccccccccccccccccccccccccccccccccf333333333333333333333333f9999999999999999999999999999f1111111f9999999999999999999eeeeeee99999999995555444444444444
    fccccccfffffccccccccccccccccccccccccccccccccccf3333333333333333333333f9999999999999999999999999999f111111111f999999999999999999eeeeeee99999999995555444444444444
    fccccfffffffccccccccccccccccccccccccccccccccccf3333333333333333333333f9999999999999999999999999999f111111111f999999999999999999eeeeeee99999999995555444444444444
    fcccccffffffcccccccccccccccccccccccccccccccccccf333333333333333333333f9999999999999999999999999999f111111111f999999999999999999eeeeeee99999999995555444444444444
    fccccccccffffcccccccccccccccccccccccccccccccccccf33333333333333333333f9999999999999999999999999999f111111111f999999999999999999eeeeeee99999999995555444444444444
    fccccccccccfccccccccccccccccccccccccccccccccccccf3333333333333333333f99999999999999999999999999999f111111111f999999999999999999eeeeeee99999999995555444444444444
    fcccccccccccccccccccccccccccccccccccccccccccccccf3333333333333333333f99999999999999999999999999999f111111111f999999999999999999eeeeeee99999999995555444444444444
    fcccccccccccccccccccccccccccccccccccccccccccccccff33333333333333333ff99999999999999999999999999999f111111111f999999999999999999eeeeeee99999999995555444444444444
    fccccccccccccccccccccccccccccccccccccccccccccccccf3333333333333333fff99999999999999999999999999999f111fff111f999999999999999999eeeeeee99999999995555444444444444
    fcccccccccccccfffffffffffffffffccccccccccccccccccf3333333333333333ff999999999999999999999999999999f111f9f111f999999999999999999eeeeeee99999999995555444444444444
    fccccccccfffffeeeeeeeeeeeeeeeeefffcccccccccccccccf3333333333333333ff99999999999999999999999999999ff111ff1111f999999999999999999eeeeeee99999999995555444444444444
    fcccccfffeeeeeeeeeeeeeeeeeeeeeeeeeffffcccccccccccff33333333333333ff99999999999999999999999999999f11111f11111f99999999fffffffffffeeeeee99999999995555444444444444
    fccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffccccccccf33333333333333ff777777777777777ffffffffffff55f11111f11111f777777ffeeeeeeeeeeeff777777777777775555444444444444
    fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffccccf3333333333333355555555fffffffffeeeeeeeeeeeefffffffffffffff555fffeeeeeeeeeeeeeeeff5555555555555555444444444444
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccf33333333333333555555ffeeeeeeeeeeeeeeeeeeeeeeeeeeffff555555fffeeeeeeeeeeeeeeeeeeeeff55555555555555555555555555
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff333333333333355555feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeefff555555555555555555fffff
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
