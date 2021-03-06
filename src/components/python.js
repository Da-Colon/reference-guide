import React from "react";
import Strings from "./python/strings";
import Numbers from "./python/numbers";
import Lists from "./python/lists";
import Booleans from "./python/booleans";
import Dictionaries from "./python/dictionaries"
import Functions from "./python/function";
import Loops from "./python/loops";

const PythonSheet = () => {
  return (
    <div>
      <h1 id="python-heading" className="heading">
        Python
      </h1>
      <div className="quote flex-center mb-8">
        <q cite="https://en.wikipedia.org/wiki/Python_(programming_language)">
          Python is an interpreted, high-level, general-purpose programming
          language. Created by Guido van Rossum and first released in 1991,
          Python's design philosophy emphasizes code readability with its
          notable use of significant whitespace.
        </q>
        <a
          className="self-end quote-link"
          href="https://en.wikipedia.org/wiki/Python_(programming_language)"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Wikipedia
        </a>
      </div>
      <div id="data-types" className="heading-two flex-center mb-8">
        <h2>Data-Types</h2>
      </div>
      <Strings />
      <Numbers />
      <Lists />
      <Booleans />
      <Dictionaries />
      <div id="functions" className="heading-two flex-center mb-8">
        <h2>Functions</h2>
      </div>
      <Functions />
      <div id="loops" className="heading-two flex-center mb-8">
        <h2>Loops</h2>
      </div>
      <Loops />
    </div>
  );
};

export default PythonSheet;
