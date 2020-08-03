export const intNumber = 
`# type int (integer) or whole numbers
num_int = 1`

export const floatNumber = 
`# type float
num_float = 3.141592`

export const complexNumber = 
`# type complex
num_complex = 5j`

export const randomFloat = 
`import random
print(random.random())`

export const randomRange =
`import random
# syntax: random.randrange(start (optional), stop (req), step (optional))

const num = random.randrange(2)
# returns integer between 0 and 2

const num_two = random.randrange(100, 200)
# returns integer between 100 and 200

const num_three = random.randrange(1, 10, 2)
#returns odd integer between 1 and 10`

export const randomInt = 
`import random
# syntax random.randint(start (req), stop (req))

const num = random.randint(100, 200)
# returns integer between 100 and 200`