import React from 'react'
import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";
import { intNumber, floatNumber, complexNumber, randomFloat, randomRange, randomInt } from '../../constants/pythonCode';

const Numbers = () => (
  <>
    <h3 id="numbers" className="mb-4 heading-three">
        Numbers
    </h3>
    There are three types of numeric types in python:
    <h4 id="type-int" className="my-4">Int</h4>
    Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={intNumber}
      />
    </div>
    <h4 id="type-float" className="my-4">Float</h4>
    Float, or "floating point number" is a number, positive or negative, containing one or more decimals.
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={floatNumber}
      />
  
    </div>
    <h4 id="type-complex" className="my-4">Complex</h4>
    Complex numbers are written with a "j" as the imaginary part:
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={complexNumber}
      />
    </div>
    <h4 id="numberMethods" className="mt-8 mb-4">Python Random Module 
    <a
      className="quote-link"
      href="https://www.w3schools.com/python/module_random.asp"
      target="_blank"
      rel="noopener noreferrer"
      > (View more...)</a></h4>
    <table cellSpacing={10} className="table">
      <tbody>
        <tr id="random" className="table-row">
          <td>
            <a
              href="https://www.w3schools.com/python/ref_random_random.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>random()</h4>
            </a>
          </td>
          <td>Returns a random float number between 0 and 1</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <CodeBlock
              language="python"
              showLineNumbers={true}
              wrapLines={true}
              style={pojoaque}
              children={randomFloat}
            />
          </td>
        </tr>
        <tr id="randrange" className="table-row">
          <td>
            <a
              href="https://www.w3schools.com/python/ref_random_randrange.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>randrange()</h4>
            </a>
          </td>
          <td>Returns a random number between the given range</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <CodeBlock
              language="python"
              showLineNumbers={true}
              wrapLines={true}
              style={pojoaque}
              children={randomRange}
            />
          </td>
        </tr>
        <tr id="randint" className="table-row">
          <td>
            <a
              href="https://www.w3schools.com/python/ref_random_randint.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>randint()</h4>
            </a>
          </td>
          <td>Returns a random number between the given range</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <CodeBlock
              language="python"
              showLineNumbers={true}
              wrapLines={true}
              style={pojoaque}
              children={randomInt}
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div className="see-more">
        <a
          href="https://www.tutorialspoint.com/python/python_numbers.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more about numbers...
        </a>
      </div>
  </>
)

export default Numbers