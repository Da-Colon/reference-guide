import React from 'react'
import { Prism as CodeBlock } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dictionaries, dictionaryAccess, dictionaryNestedAccess, dictionaryChangeValue, dictionaryCheckKey, dictionaryAddValue, dictionaryGet, dictionaryItems, dictionaryKeys, dictionaryUpdate } from '../../constants/pythonCode';

const Dictionaries = () => (
<div className="container-topic">
      <h3 id="dictionaries" className="heading-three mb-4">
        Dictionaries
      </h3>
      <div className="quote flex-center mb-4">
        <q cite="https://www.w3schools.com/python/python_dictionaries.asp">
        A dictionary is a collection which is unordered, changeable and indexed. In Python dictionaries are written with curly brackets, and they have keys and values.
        </q>
        <div className="self-end quote-link mb-4">
          <a
            href="https://www.w3schools.com/python/python_dictionaries.asp"
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
          {dictionaries}
        </CodeBlock>
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
        >
          {dictionaryAccess}
        </CodeBlock>
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
        >
          {dictionaryNestedAccess}
        </CodeBlock>
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
        >
          {dictionaryChangeValue}
        </CodeBlock>
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
        >
          {dictionaryCheckKey}
        </CodeBlock>
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
        >
          {dictionaryAddValue}
        </CodeBlock>
      </div>
      <h3 className="mb-4">Common dictionary methods</h3>
      <table className="table">
        <tbody>
        <tr id="dictionary-get" className="table-row">
            <td>
              <a
                href="https://www.w3schools.com/python/ref_dictionary_get.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>get()</h4>
              </a>
            </td>
            <td>Returns the value of the specified key</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
              >
                {dictionaryGet}
              </CodeBlock>
            </td>
          </tr>
        <tr id="dictionary-items" className="table-row">
            <td>
              <a
                href="https://www.w3schools.com/python/ref_dictionary_items.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>items()</h4>
              </a>
            </td>
            <td>Returns a list containing a
              <a
              className="link"
              href="https://www.w3schools.com/python/python_dictionaries.asp"
              target="_blank"
              rel="noopener noreferrer">
                {" "}tuple{" "} 
              </a>
                for each key value pair
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
              >
                {dictionaryItems}
              </CodeBlock>
            </td>
          </tr>
          <tr id="dictionary-keys" className="table-row">
            <td>
              <a
                href="https://www.w3schools.com/python/ref_dictionary_keys.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>keys()</h4>
              </a>
            </td>
            <td>Returns a list containing the dictionary's keys</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
              >
                {dictionaryKeys}
              </CodeBlock>
            </td>
          </tr>
          <tr id="dictionary-update" className="table-row">
            <td>
              <a
                href="https://www.w3schools.com/python/ref_dictionary_update.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>update()</h4>
              </a>
            </td>
            <td>Updates the dictionary with the specified key-value pairs</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
              >
                {dictionaryUpdate}
              </CodeBlock>
            </td>
          </tr>
          <tr id="dictionary-values" className="table-row">
            <td>
              <a
                href="https://www.w3schools.com/python/ref_dictionary_values.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>values()</h4>
              </a>
            </td>
            <td>Returns a list of all the values in the dictionary</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <CodeBlock
                language="python"
                showLineNumbers={true}
                wrapLines={true}
                style={pojoaque}
              >
                {dictionaryUpdate}
              </CodeBlock>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
)

export default Dictionaries