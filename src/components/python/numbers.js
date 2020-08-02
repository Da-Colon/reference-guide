import React from 'react'
import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";
import { intNumber, floatNumber, complexNumber, randomFloat, randomRange, randomInt } from '../../constants/pythonCode';
import TableRow from '../smComponents/tableRow'

const Numbers = () => (
  <>
    <h3 id="numbers" className="my-4 heading-three">
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
    <table className="table">
      <tbody>
        <TableRow id="random" url="https://www.w3schools.com/python/ref_random_random.asp" name="random" code={randomFloat}>
          Returns a random float number between 0 and 1
        </TableRow>
        <TableRow id="randrange" url="https://www.w3schools.com/python/ref_random_randrange.asp" name="randrange" code={randomRange}>
          Returns a random number between the given range
        </TableRow>
        <TableRow id="randint" url="https://www.w3schools.com/python/ref_random_randint.asp" name="randint" code={randomInt}>
          Returns a random number between the given range
        </TableRow>
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