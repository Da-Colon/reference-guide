import React from "react";
import Strings from "./python/strings";
import Numbers from "./python/numbers";

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
    </div>
  );
};

export default PythonSheet;
