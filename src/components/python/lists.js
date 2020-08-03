import React from 'react'
import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";
import { list, accessList, listAppend, listPop, listInsert } from '../../constants/pythonCode'
import TableRow from '../smComponents/tableRow';
import Quote from '../smComponents/quote';

const Lists = () => (
  <>
    <h3 id="lists" className="my-4 heading-three">
        Lists
    </h3>
    <Quote url="https://www.w3schools.com/python/python_lists.asp" siteName="W3schools">
      A list is a collection which is ordered and changeable. In Python lists are written with square brackets.
    </Quote>
    <div className="mb-8 code-block">
      <CodeBlock
        language="python"
        showLineNumbers={true}
        wrapLines={true}
        style={pojoaque}
        children={list}
      />
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
        children={accessList}
      />
    </div>
    <h3 id="listMethods" className="mb-4 heading-three">
        Common list methods
    </h3>
    <table className="table">
      <tbody>
        <TableRow id="append" url="https://www.w3schools.com/python/ref_list_append.asp" name="append" code={listAppend}>
          Adds an element at the end of the list
        </TableRow>
        <TableRow id="pop" url="https://www.w3schools.com/python/ref_list_pop.asp" name="pop" code={listPop}>
          Removes the element at the specified position
        </TableRow>
        <TableRow id="insert" url="https://www.w3schools.com/python/ref_list_insert.asp" name="insert" code={listInsert}>
          Adds an element at the specified position
        </TableRow>
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