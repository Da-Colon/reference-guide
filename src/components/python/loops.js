import React from 'react'
import Quote from '../quote'
import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";
import { forLoops, range, listLoop, nestedLoop, whileLoop, breakStatement, continueStatement } from '../../constants/code/python/loops';
import TableRow from '../tableRow';

  const Loops = () => (
  <div>
    <Quote url="https://wiki.python.org/moin/ForLoop" siteName="wiki.python.org">
      The Python for statement iterates over the members of a sequence in order, executing the block each time. Contrast the for statement with the ''while'' loop, used when a condition needs to be checked each iteration, or to repeat a block of code forever.
    </Quote>
    <h3 id="for-loops" className="heading-three my-4">
      For Loops
    </h3>
      For loops are traditionally used when you have a block of code which you want to repeat a fixed number of times.
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={forLoops}
      />
    </div>
    <table className="table">
        <tbody>
          <TableRow id="range" url="https://www.w3schools.com/python/ref_func_range.asp" name="range" code={range} >
            Returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number.
          </TableRow>
        </tbody>
    </table>
    <h4 id="for-loops-lists" className="my-4">Looping through a list</h4>
        By replacing the range with a list, a for loop will ilterate through a list for the entire length of the list.
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={listLoop}
      />
    </div>
    <h4 id="for-loops-nested" className="my-4">Nested for loops</h4>
        Nested for loops are primary used when you want to ilterate through a list of lists.
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={nestedLoop}
      />
    </div>
    <h3 id="while-loops" className="heading-three my-4">
      While Loops
    </h3>
      With the while loop we can execute a set of statements as long as a condition is true.<span className="warning"> Danger of causing a infinite loop that will crash your program. Remember to write in something to exit loop.</span>
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={whileLoop}
      />
    </div>
    <h3 id="break-statement" className="heading-three my-4">
      Break statement
    </h3>
      The break statement in Python terminates the current loop and resumes execution at the next statement.
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={breakStatement}
      />
    </div>
    <h3 id="continue-statement" className="heading-three my-4">
      Continue statement
    </h3>
      The continue statement in Python returns the control to the beginning of the while loop.
    <div className="my-4 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={continueStatement}
      />
    </div>
  </div>
)

export default Loops