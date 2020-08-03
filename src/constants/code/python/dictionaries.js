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
