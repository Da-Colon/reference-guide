import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import fileArrowRight from "../../assets/images/curved-arrow-right-scaled.png";
import fileArrowDown from "../../assets/images/curved-arrow-down-scaled.png";

const PythonNav = (props) => {
  const [dataTypeExpanded, setDataTypeExpanded] = useState(false);
  const [stringsExpanded, setStringsExpanded] = useState(false);

  return (
    <div className="nav-item">
      <HashLink to="/python" onClick={() => window.scrollTo(0, 0)}>
        <h4>Python</h4>
      </HashLink>
      <ul>
        <div className="link-list">
          <img
            alt=""
            onClick={() => setDataTypeExpanded(!dataTypeExpanded)}
            src={!dataTypeExpanded ? fileArrowRight : fileArrowDown}
          />
          <HashLink
            smooth
            to="/python#data-types"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <li>Data-Types</li>
          </HashLink>
        </div>
        {dataTypeExpanded && (
          <div className="link-list link-sub-list">
            <img
              alt=""
              onClick={() => setStringsExpanded(!stringsExpanded)}
              src={!stringsExpanded ? fileArrowRight : fileArrowDown}
            />
            <HashLink
              smooth
              to="/python#strings"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li>Strings</li>
            </HashLink>
          </div>
        )}
        {stringsExpanded && (
          <div className="link-sub-list ml-24">
            <HashLink
              smooth
              to="/python#capitalize"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li className="pt-8 gold-color">capitalize()</li>
            </HashLink>
            <HashLink
              smooth
              to="/python#find"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li className="pt-8 gold-color">find()</li>
            </HashLink>
            <HashLink
              smooth
              to="/python#format"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li className="pt-8 gold-color">format()</li>
            </HashLink>
            <HashLink
              smooth
              to="/python#lower"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li className="pt-8 gold-color">lower()</li>
            </HashLink>
            <HashLink
              smooth
              to="/python#replace"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li className="pt-8 gold-color">replace()</li>
            </HashLink>
            <HashLink
              smooth
              to="/python#split"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li className="pt-8 gold-color">split()</li>
            </HashLink>
            <HashLink
              smooth
              to="/python#title"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li className="pt-8 gold-color">title()</li>
            </HashLink>
            <HashLink
              smooth
              to="/python#upper"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li className="pt-8 gold-color">upper()</li>
            </HashLink>
          </div>
        )}
      </ul>
    </div>
  );
};

PythonNav.propTypes = {};

export default PythonNav;
