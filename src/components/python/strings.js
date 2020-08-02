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
import TableRow from '../smComponents/tableRow';
import Quote from '../smComponents/quote';

const Strings = () =>  (
    <div className="container-topic">
      <h3 id="strings" className="heading-three my-4">
        Strings
      </h3>
      <Quote url="https://www.w3schools.com/python/python_strings.asp" siteName="W3schools">
        String literals in python are surrounded by either single quotation marks, or double quotation marks.
      </Quote>
      <div className="mb-8 code-block">
        <CodeBlock
          language="python"
          showLineNumbers={true}
          wrapLines={true}
          style={pojoaque}
          children={stringLiteral}
        />
      </div>
      <h3 className="mb-4">Common string methods</h3>
      <table className="table">
        <tbody>
          <TableRow id="captialize" url="https://www.w3schools.com/python/ref_string_capitalize.asp" name="captialize" code={capitalizeString}>
            Converts the first character to upper case
          </TableRow>
          <TableRow id="find" url="https://www.w3schools.com/python/ref_string_find.asp" name="find" code={findString}>
            Searches the string for a specified value and returns the position of where it was found
          </TableRow>
          <TableRow id="format" url="https://www.w3schools.com/python/ref_string_format.asp" name="format" code={formatString}>
            Formats specified values in a string
          </TableRow>
          <TableRow id="lower" url="https://www.w3schools.com/python/ref_string_lower.asp" name="lower" code={lowerString}>
            Converts a string into lower case
          </TableRow>
          <TableRow id="replace" url="https://www.w3schools.com/python/ref_string_replace.asp" name="replace" code={replaceString}>
            Returns a string where a specified value is replaced with a specified value
          </TableRow>
          <TableRow id="split" url="https://www.w3schools.com/python/ref_string_split.asp" name="split" code={splitString}>
            Splits the string at the specified separator, and returns a list
          </TableRow>
          <TableRow id="title" url="https://www.w3schools.com/python/ref_string_title.asp" name="title" code={titleString}>
            Converts the first character of each word to upper case
          </TableRow>
          <TableRow id="upper" url="https://www.w3schools.com/python/ref_string_upper.asp" name="upper" code={upperString}>
            Converts a string into upper case
          </TableRow>
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
