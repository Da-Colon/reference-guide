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
# list is now [1, 2, 3, 3, 4, 5]`