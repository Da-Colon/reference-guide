export const forLoops = 
`for x in range(3)
    print(x)
# outputs:
# 0
# 1
# 2

# Each ilteration prints x, in this case, a sequence of [0,1,2] stoping when range is done`

export const range = 
`# method syntax
range(start (optional), stop (required), step (optional))

for x in range(0, 10, 2):
    print(x)
# outputs: 
# 0
# 2
# 4
# 6
# 8`

export const listLoop = 
`class_list = ["David", "Mary-Ella", "Remy"]

# note: student is tmp variable whose value is takes on the value of the current element in the list.
for student in class_list: 
    print(student)
# outputs: 
# David
# Mary-Ella
# Remy`

export const nestedLoop = 
`nested_list = [["This", "is"],["a", "list"], ["of", "lists"]]

for list in nested_list:
    for item in list:
        print(item)
# outputs: 
# This
# is
# a
# list
# of
# lists`

export const whileLoop = 
`num = 0
while num < 5:
    print(num)
    num += 1
    
# ouputs:
# 0
# 1
# 2
# 3
# 4`

export const breakStatement =
`for num in range(10):
    if num == 5:
        break
    print(num)

# outputs: 
# 0
# 1
# 2
# 3
# 4

num = 0
while num < 10:
    if num == 5:
        break
    print("Current Number is: {}".format(num))
    num += 1

# outputs:
# Current Number is: 0
# Current Number is: 1
# Current Number is: 2
# Current Number is: 3
# Current Number is: 4`

export const continueStatement =
`for num in range(10):
    if num == 5:
        print("Skipped 5")
        continue
    print(num)

# outputs: 
# 0
# 1
# 2
# 3
# 4
# Skipped 5
# 6
# 7
# 8
# 9

num = 0
while num < 10:
    num += 1 # If loop depending on incremate, place before continue statment
    if num == 5:
        print("Skipped 5")
        continue
    print("Current Number is: {}".format(num))

# outputs:
# Current Number is: 1
# Current Number is: 2
# Current Number is: 3
# Current Number is: 4
# Skipped 5
# Current Number is: 6
# Current Number is: 7
# Current Number is: 8
# Current Number is: 9
# Current Number is: 10`