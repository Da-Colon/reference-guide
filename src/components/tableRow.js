import React from 'react'
import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";

const TableRow = ({id, name, url, children, code}) => (
  <>
    <tr id={id} className="table-row">
      <td>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>{name}()</h4>
        </a>
      </td>
      <td>{children}</td>
    </tr>
    <tr>
      <td colSpan={2}>
        <CodeBlock
          language="python"
          showLineNumbers={true}
          wrapLines={true}
          style={pojoaque}
          children={code}
        />
      </td>
    </tr>
  </>
)

export default TableRow