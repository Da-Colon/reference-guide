export const functions = 
`def function_name():
    print("Don't forget about proper indention")`

export const functionsCall = 
`def hello_world():
    print("Hello World")

hello_world()
# outputs: Hello World`

export const functionsArgument =
`# Defining the parameters in the functions 
def function_name(parameter_one, parameter_2):
    do something...

# Passing in arguments in the function call
function_name(argument_one, argument_two)

def hello(name):
    print("Hello, {}!".format(name))
    
hello("Barry Allen")
outputs: Hello, Barry Allen!`

export const functionsArgumentError =
`def hello(name): # Notice the since parameter defined
    print(name)
    
hello("John", "Smith") # Notice 2 arguements passed in here
# outputs: TypeError: hello() takes 1 positional argument but 2 were given`

export const functionsArgumentsArbitrary =
`def inventory(*items):
    for item in items:
        print(item)
        
inventory("Bread", "Grape Jelly", "Peanut Butter")
# ouputs:
# Bread
# Grape Jelly
# Peanut Butter`


export const functionsReturn = 
`def suggested_tip(bill_total, tip_percent):
    tip = bill_total * (tip_percent / 100)
    return "$ {:.2f}".format(tip)
    
suggested_tip(125, 15)
# outputs: $ 18.75`