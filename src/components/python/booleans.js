import React from 'react'

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";
import { booleans, booleansComparators, booleansOperators, booleansValues } from '../../constants/pythonCode';
import Quote from '../quote';
import TableRow from '../tableRow';

const Booleans = () => (
    <div className="container-topic">
      <h3 id="booleans" className="heading-three my-4">
        Booleans
      </h3>
      <Quote url="https://www.w3schools.com/python/python_booleans.asp" siteName="W3schools">
        In programming you often need to know if an expression is True or False. You can evaluate any expression in Python, and get one of two answers, True or False.
      </Quote>
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={booleans}
      />
      <h4 id="boolean-comparator" className="my-4">Expressions</h4>
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={booleansComparators}
      />
      <h4 className="my-4" id="boolean-operators">Logical Operators: 'and', 'or', or 'not'</h4>
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={booleansOperators}
      />
      <table className="table">
        <tbody>
          <TableRow id="bool" url="https://www.programiz.com/python-programming/methods/built-in/bool" name="bool" code={booleansValues}>
            Evaluate a given value and returns a boolean. Most values in Python returns 'True' if it has some sort of content
          </TableRow>
        </tbody>
      </table>
      <div className="see-more">
        <a
          href="https://www.programiz.com/python-programming/operators"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more about booleans...
        </a>
      </div>
    </div>
  )

export default Booleans