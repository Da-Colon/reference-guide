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