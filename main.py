# d=√x - x2 ^2+y - y2 ^2+z - z2^2
# #Math.sqrt(0)
# #Math.imul(0, 0)
x = 689
x2 = 10
y = 125
y2 = 10
z = 90
z2 = 10
a = x2 - x
a2 = y2 - y
a3 = z2 - z
b = a * a
b2 = a2 * a2
b3 = a3 * a3
c = b + b2 + b3
distance = Math.sqrt(c)
my_sprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
my_sprite.say_text(distance)