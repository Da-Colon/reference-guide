import React from 'react'
import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dictionaries, dictionaryAccess, dictionaryNestedAccess, dictionaryChangeValue, dictionaryCheckKey, dictionaryAddValue, dictionaryGet, dictionaryItems, dictionaryKeys, dictionaryUpdate, dictionaryValues } from '../../constants/pythonCode';
import TableRow from '../smComponents/tableRow';
import Quote from '../smComponents/quote';

const Dictionaries = () => (
<div className="container-topic">
      <h3 id="dictionaries" className="heading-three my-4">
        Dictionaries
      </h3>
      <Quote url="https://www.w3schools.com/python/python_dictionaries.asp" siteName="W3schools">
      A dictionary is a collection which is unordered, changeable and indexed. In Python dictionaries are written with curly brackets, and they have keys and values.
      </Quote>
      <div className="mb-8 code-block">
        <CodeBlock
          language="python"
          showLineNumbers={true}
          wrapLines={true}
          style={pojoaque}
          children={dictionaries}
        />
      </div>
      <h3 id="dictionary-access" className="mb-4 heading-three">
        Accessing a dictionary
      </h3>
      <div className="mb-8 code-block">
        <CodeBlock
          language="python"
          showLineNumbers={true}
          wrapLines={true}
          style={pojoaque}
          children={dictionaryAccess}
        />
      </div>
      <h3 id="nested-access" className="mb-4 heading-three">
        Accessing a nested value
      </h3>
      <div className="mb-8 code-block">
        <CodeBlock
          language="python"
          showLineNumbers={true}
          wrapLines={true}
          style={pojoaque}
          children={dictionaryNestedAccess}
        />
      </div>
      <h3 id="change-value" className="mb-4 heading-three">
        Changing a value
      </h3>
      <div className="mb-8 code-block">
        <CodeBlock
          language="python"
          showLineNumbers={true}
          wrapLines={true}
          style={pojoaque}
          children={dictionaryChangeValue}
        />
      </div>
      <h3 id="value-exists" className="mb-4 heading-three">
        Checking if key exists
      </h3>
      <div className="mb-8 code-block">
        <CodeBlock
          language="python"
          showLineNumbers={true}
          wrapLines={true}
          style={pojoaque}
          children={dictionaryCheckKey}
        />
      </div>
      <h3 id="add-value" className="mb-4 heading-three">
        Add a new key/value
      </h3>
      <div className="mb-8 code-block">
        <CodeBlock
          language="python"
          showLineNumbers={true}
          wrapLines={true}
          style={pojoaque}
          children={dictionaryAddValue}
        />
      </div>
      <h3 className="mb-4">Common dictionary methods</h3>
      <table className="table">
        <tbody>
          <TableRow id="dictionary-get" url="https://www.w3schools.com/python/ref_dictionary_get.asp" name="get" code={dictionaryGet}>
            Returns the value of the specified key
          </TableRow>
          <TableRow id="dictionary-items" url="https://www.w3schools.com/python/ref_dictionary_items.asp" name="items" code={dictionaryItems}>
            Returns a list containing a
              <a
              className="link"
              href="https://www.w3schools.com/python/python_dictionaries.asp"
              target="_blank"
              rel="noopener noreferrer">
                {" "}tuple{" "} 
              </a>
                for each key value pair
          </TableRow>
          <TableRow id="dictionary-keys" url="https://www.w3schools.com/python/ref_dictionary_keys.asp" name="keys" code={dictionaryKeys}>
            Returns a list containing the dictionary's keys
          </TableRow>
          <TableRow id="dictionary-update" url="https://www.w3schools.com/python/ref_dictionary_update.asp" name="update" code={dictionaryUpdate}>
            Updates the dictionary with the specified key-value pairs
          </TableRow>
          <TableRow id="dictionary-values" url="https://www.w3schools.com/python/ref_dictionary_values.asp" name="values" code={dictionaryValues}>
            Returns a list of all the values in the dictionary
          </TableRow>
        </tbody>
      </table>
      <div className="see-more">
        <a
          href="https://www.w3schools.com/python/python_ref_dictionary.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more dictionary methods...
        </a>
      </div>
  </div>
)

export default Dictionaries