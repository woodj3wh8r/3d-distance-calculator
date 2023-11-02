//  d=√x - x2 ^2+y - y2 ^2+z - z2^2
//  #Math.sqrt(0)
//  #Math.imul(0, 0)
let x = 689
let x2 = 10
let y = 125
let y2 = 10
let z = 90
let z2 = 10
let a = x2 - x
let a2 = y2 - y
let a3 = z2 - z
let b = a * a
let b2 = a2 * a2
let b3 = a3 * a3
let c = b + b2 + b3
let distance = Math.sqrt(c)
let my_sprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
my_sprite.sayText(distance)
