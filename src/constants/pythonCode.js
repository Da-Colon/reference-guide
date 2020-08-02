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
`# method syntax: 
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

export const list = 
`list_of_strings = ["I", "am", "a", "list", "of", "strings"]
list_of_numbers = [1, 2, 2123123, 3, 4, 5]
list_of_with_a_little_of_everything = ["string", 234, ["another", "list"]]`

export const accessList = 
`list = [1, 2, 3, 4, 5]

# By index
list[1]
# outputs: 2

# By negative index
list[-1]
# outputs: 5

# By range
list[2:4]
# outputs: [3, 4]

list[:3]
# outputs: [1, 2, 3]

list[3:]
# outputs: [4,5]`

export const listItemChange = 
`list = [0, 2, 2]
list[0] = 2
# list now equals: [2, 2 ,2]`

export const listAppend = 
`list = ["Billy", "Jason", "Trini", "Kimberly", "Zack"]
list.append("Tommy")
# list is now ["Billy", "Jason", "Trini", "Kimberly", "Zack", "Tommy"]`

export const listPop = 
`# method syntax:
# list.pop(position (optional))

list = ["Billy", "Jason", "Trini", "Kimberly", "Zack", "Tommy"]
poppedItem = list.pop()
# poppedItem value: "Tommy"
# list is now ["Billy", "Jason", "Trini", "Kimberly", "Zack"]

poppedItem = list.pop(1)
# poppedItem value: "Jason"
# list is now ["Billy", "Trini", "Kimberly", "Zack", "Tommy"]`

export const listInsert = 
`# method syntax: 
list.insert(position (required), element (required) 

list = [1, 2, 3, 4, 5]
list.insert(2, 3)
# list is now [1, 2, 3, 3, 4, 5]
`

export const booleans = 
`# Note the capitalization
true = True
false = False`

export const booleansComparators = 
`2 == 2
# outputs: True

3 > 8
# outputs: False

1 < 2
# outputs: True`

export const booleansOperators =
`# True and True
1 == 1 and 2 == 2
# outputs: True

# False or True
2 > 5 or 1 < 10
# outputs: True

not 2 == 2
# outputs True`


export const booleansValues = 
`bool("string")
# outputs: True

bool(5)
# outputs: True

bool("")
# outputs: False`

export const dictionaries = 
`# Dictionary Syntax

variable_name = {
  "key": "value",
  "key2": ["Value can be a list", "or a number", "or a string", "or a boolean"],
  "key3": 23
  "key4": {
    "nested_key": "You can even add another dictionary, creating a nested dictionary"
  }
}`

export const dictionaryAccess = 
`# Access with key

book = {
  "name": "Shogun",
  "author": "James Cavell",
  "pages": 1152,
  "originally_published": 1975
}

name = book["name"]
author = book["author"]
published = book["originally_published"]

"{} is written by {} and published in {}".format(name, author, str(published))
# outputs: Shogun is written by James Cavell and published in 1975`

export const dictionaryNestedAccess = 
`character_stats = {
  "level": 1,
  "name": "Hero",
  "special_moves": {
    "power_up": "Raises attack power",
    "heavy_blow": "A strike against one enemy and deals alot of damage"
  }
}
character_stats["special_moves"]["power_up"]
# outputs: Raises attack power

# Another way to do it
specials = character_stats["special_moves"]
specials["heavy_blow"]
# outputs: A strike against one enemy and deals alot of damage`

export const dictionaryChangeValue =
`inventory = {
  "chicken": 80,
  "lettuce": 10,
  "salt": 1
}

# using the '=" we reassign chicken to a new value
inventory["chicken"] = 60
# The value for chicken is now changed to 60`

export const dictionaryCheckKey = 
`car = {
  "power_steering": True,
  "ATB": True,
  "air_bags": True
}

if "rear_view_camara" not in car:
  print("Use your mirrors!")
# outputs: Use your mirrors!

if "air_bags" in car:
  print("That's a requirment, duh")
# outputs: That's a requirment, duh`

export const dictionaryAddValue = 
`state = {
  "name": "Georgia"
}

state["capital"] = "Atlanta"
# new object now has contains new key "capital" with the value "Atlanta"`

export const dictionaryGet = 
`# method syntax
# dictionary.get(keyname (req), value (optional))

console = {
  "name": "switch",
  "online": True,
  "portable": True,
  "subscription": True,
}

console.get("online")
# outputs: True

console.get("wired_controllers", "This console doesn't have wired controllers.")
# outputs: This console doesn't have wired controllers.`

export const dictionaryItems =
`# method syntax
# dictionary.items()

inventory = {
  "chicken": 80,
  "lettuce": 10,
  "salt": 1
}

inventory.items()
# outputs: [('chicken', 80), ('lettuce', 10), ('salt', 1)]`

export const dictionaryKeys = 
`# method syntax
dictionary.keys()

book = {
  "name": "Shogun",
  "author": "James Cavell",
  "pages": 1152,
  "originally_published": 1975
}

book.keys()
#outputs: ['name', 'author', 'pages', 'originally_published']`

export const dictionaryUpdate = 
`# method syntax
dictionary.update(iterable (required))

inventory = {
  "chicken": 80,
  "lettuce": 10,
  "salt": 1
}

inventory.update({"beef", 24})
# adds the key "beef" to inventory dictionary and assigns value 24`

export const dictionaryValues = 
`# method syntax
dictionary.values()

book = {
  "name": "Shogun",
  "author": "James Cavell",
  "pages": 1152,
  "originally_published": 1975
}

book.values()
# outputs: ['Shogun', 'James Cavell', 1152, 1975]`