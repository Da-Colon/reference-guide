import React from 'react'
import Quote from '../quote'
import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";
import { functions, functionsCall, functionsArgument, functionsArgumentError, functionsArgumentsArbitrary, functionsReturn } from '../../constants/code/python/functions';

const Functions = () => (
  <div>
    <Quote url="https://www.tutorialspoint.com/python/python_functions.htm" siteName="Tutorialpoint">
      A function is a block of organized, reusable code that is used to perform a single, related action. Functions provide better modularity for your application and a high degree of code reusing.
    </Quote>
    <h3 id="functions" className="heading-three my-4">
      Anatomy of a function
    </h3>
    <h4 id="functions-define" className="my-4">Defining a function</h4>
      "def" keyword defines a function, followed by the name of function and () with or without parameters
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={functions}
      />
    </div>
    <h4 id="functions-call" className="my-4">A function call</h4>
      You can initiate a function by using the function name followed by ()
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={functionsCall}
      />
    </div>
    <h4 id="functions-argument" className="my-4">Functions with arguments</h4>
      Arguments are data passed into functions and are defined inside of the "()". You can define as many arguments as you want seperated by a comma.
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={functionsArgument}
      />
    </div>
    <h4 id="functions-argument-error" className="my-4">Number of defined arguments</h4>
      You must pass as many arguments as defined in your function
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={functionsArgumentError}
      />
    </div>
    <h4 id="functions-argument-arbitrary" className="my-4">Arbitrary arguments</h4>
      if you don't know how many argument might be passed into a function, add a "*" before parameter name when defining the function. The function will then receive a tuple of arguments.
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={functionsArgumentsArbitrary}
      />
    </div>
    <h4 id="functions-return" className="my-4">Returning Values</h4>
      You can use a return statement, to a return a value from the function.
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={functionsReturn}
      />
    </div>
    <div className="see-more">
        <a
          href="https://www.tutorialspoint.com/python/python_functions.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more about functions...
        </a>
      </div>
  </div>
)

export default Functions;