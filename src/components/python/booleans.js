import React from 'react'

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";
import { booleans, booleansComparators, booleansOperators, booleansValues } from '../../constants/pythonCode';

const Booleans = () => (
    <div className="container-topic">
      <h3 id="booleans" className="heading-three mb-4">
        Booleans
      </h3>
      <div className="quote flex-center mb-8">
        <q cite="https://www.w3schools.com/python/python_booleans.asp">
        In programming you often need to know if an expression is True or False.
        You can evaluate any expression in Python, and get one of two answers, True or False.
        </q>
        <div className="self-end quote-link mb-8">
          <a
            href="https://www.w3schools.com/python/python_booleans.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            W3schools
          </a>
        </div>
      </div>
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
      <table cellSpacing={10} className="table">
        <tbody>
        <tr id="bool" className="table-row">
            <td>
              <a
                href="https://www.programiz.com/python-programming/methods/built-in/bool"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>bool()</h4>
              </a>
            </td>
            <td>Evaluate a given value and returns a boolean. Most values in Python returns 'True' if it has some sort of content.</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
                children={booleansValues}
              />
            </td>
          </tr>
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