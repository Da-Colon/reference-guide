import React from 'react'
import PropTypes from 'prop-types'
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

TableRow.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default TableRow