import React from 'react'
import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";
import { list, accessList, listAppend, listPop, listInsert } from '../../constants/pythonCode'

const Lists = () => (
  <>
    <h3 id="lists" className="mb-4 heading-three">
        Lists
    </h3>
    <div className="quote flex-center mb-4">
      <q cite="https://www.w3schools.com/python/python_strings.asp">
      A list is a collection which is ordered and changeable. In Python lists are written with square brackets.
      </q>
      <div className="self-end quote-link mb-4">
        <a
          href="https://www.w3schools.com/python/python_lists.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          W3schools
        </a>
      </div>
    </div>
    <div className="mb-8 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
      >
        {list}
      </CodeBlock>
    </div>
    <h3 id="accessing" className="mb-4 heading-three">
        Accessing a list
    </h3>
    <div className="mb-8 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
      >
        {accessList}
      </CodeBlock>
    </div>
    <h3 id="listMethods" className="mb-4 heading-three">
        Common list methods
    </h3>
    <table cellSpacing={10} className="table">
      <tbody>
        <tr id="append" className="table-row">
          <td>
            <a
              href="https://www.w3schools.com/python/ref_list_append.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>append()</h4>
            </a>
          </td>
          <td>Adds an element at the end of the list</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <CodeBlock
              language="python"
              showLineNumbers={true}
              wrapLines={true}
              style={pojoaque}
            >
              {listAppend}
            </CodeBlock>
          </td>
        </tr>
        <tr id="pop" className="table-row">
          <td>
            <a
              href="https://www.w3schools.com/python/ref_list_pop.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>pop()</h4>
            </a>
          </td>
          <td>Removes the element at the specified position</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <CodeBlock
              language="python"
              showLineNumbers={true}
              wrapLines={true}
              style={pojoaque}
            >
              {listPop}
            </CodeBlock>
          </td>
        </tr>
        <tr id="insert" className="table-row">
          <td>
            <a
              href="https://www.w3schools.com/python/ref_list_insert.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>insert()</h4>
            </a>
          </td>
          <td>Adds an element at the specified position</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <CodeBlock
              language="python"
              showLineNumbers={true}
              wrapLines={true}
              style={pojoaque}
            >
              {listInsert}
            </CodeBlock>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="see-more">
    <a
      href="https://www.w3schools.com/python/python_ref_list.asp"
      target="_blank"
      rel="noopener noreferrer"
    >
      See more string methods...
    </a>
    </div>
  </>
)

export default Lists