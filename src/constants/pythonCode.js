export const stringLiteral = 
`# variable_name = 'string'
str = "I am a string data-type"`

export const capitalizeString = 
`str = "hello"
str.capitalize()
# outputs: Hello`

export const findString = 
`str = "hello"
str.find("o")
# outputs: 4`

export const formatString = 
`str = "My name is {}. I am {} years old."
str.format("David", 34)
# outputs: My name is David. I am 34 years old.

"The price is $ {:.2f}.".format(34)
# outputs: The price is $ 34.00.

"The price is {:.0%} of the total.".format(.25)
# outputs: The price is 25% of the total.`

export const lowerString = 
`str = "HELLO WORLD"
str.lower()
# outputs: hello world`


export const replaceString =
`# method parameters: 
# string.replace(oldValue (req), newValue (req), count (optional))

str = "Please replace: jump, jump"
str.replace("jump", "lay down")
# outputs: Please replace: lay down, lay down

str = "Please replace: jump, jump"
str.replace("jump", "lay down", 1)
# outputs: Please replace: lay down, jump`

export const splitString = 
`# method parameters:
# string.split(separtor (optional), maxSpilt (optional))

str = "I am using split!"
str.split()
# outputs: ['I', 'am', 'using', 'split!']

str.split('i', 1)
# outputs: ['I am us', 'ng split!'] 
# notice the missing 'i'`

export const titleString = 
`str = "the lion king"
str.title()
# ouputs: The Lion King`

export const upperString = 
`str = "hello world"
str.upper()
# outputs: HELLO WORLD`

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
