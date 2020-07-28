import React from 'react'
import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  stringLiteral,
  capitalizeString,
  findString,
  formatString,
  lowerString,
  replaceString,
  splitString,
  titleString,
  upperString,
} from "../../constants/pythonCode";

const Strings = () =>  (
    <div className="container-topic">
      <h3 id="strings" className="heading-three mb-4">
        Strings
      </h3>
      <div className="quote flex-center mb-8">
        <q cite="https://www.w3schools.com/python/python_strings.asp">
          String literals in python are surrounded by either single quotation
          marks, or double quotation marks.
        </q>
        <div className="self-end quote-link mb-8">
          <a
            href="https://www.w3schools.com/python/python_strings.asp"
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
          {stringLiteral}
        </CodeBlock>
      </div>
      <h3 className="mb-4">Common string methods</h3>
      <table cellSpacing={10} className="table">
        <tbody>
          <tr id="capitalize" className="table-row">
            <td>
              <a
                href="https://www.w3schools.com/python/ref_string_capitalize.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>capitalize()</h4>
              </a>
            </td>
            <td>Converts the first character to upper case</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
              >
                {capitalizeString}
              </CodeBlock>
            </td>
          </tr>
          <tr id="find" className="table-row">
            <td className="table-cell">
              <a
                href="https://www.w3schools.com/python/ref_string_find.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>find()</h4>
              </a>
            </td>
            <td>
              Searches the string for a specified value and returns the position
              of where it was found
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
                children={findString}
                />
            </td>
          </tr>
          <tr id="format" className="table-row">
            <td className="table-cell">
              <a
                href="https://www.w3schools.com/python/ref_string_format.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>format()</h4>
              </a>
            </td>
            <td>Formats specified values in a string</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
                children={formatString}
                />
            </td>
          </tr>
          <tr id="lower" className="table-row">
            <td className="table-cell">
              <a
                href="https://www.w3schools.com/python/ref_string_lower.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>lower()</h4>
              </a>
            </td>
            <td>Converts a string into lower case</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
                children={lowerString}
                />
            </td>
          </tr>
          <tr id="replace" className="table-row">
            <td className="table-cell">
              <a
                href="https://www.w3schools.com/python/ref_string_replace.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>replace()</h4>
              </a>
            </td>
            <td>
              Returns a string where a specified value is replaced with a
              specified value
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
                children={replaceString}
                />
            </td>
          </tr>
          <tr id="split" className="table-row">
            <td className="table-cell">
              <a
                href="https://www.w3schools.com/python/ref_string_split.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>split()</h4>
              </a>
            </td>
            <td>
              Splits the string at the specified separator, and returns a list
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
                children={splitString}
                />
            </td>
          </tr>
          <tr id="title" className="table-row">
            <td className="table-cell">
              <a
                href="https://www.w3schools.com/python/ref_string_title.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>title()</h4>
              </a>
            </td>
            <td>Converts the first character of each word to upper case</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
                children={titleString}
                />
            </td>
          </tr>
          <tr id="upper" className="table-row">
            <td className="table-cell">
              <a
                href="https://www.w3schools.com/python/ref_string_upper.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>upper()</h4>
              </a>
            </td>
            <td>Converts a string into upper case</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
                children={upperString}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="see-more">
        <a
          href="https://www.w3schools.com/python/python_ref_string.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more string methods...
        </a>
      </div>
    </div>
  )

export default Strings
