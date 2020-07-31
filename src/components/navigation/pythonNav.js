import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import fileArrowRight from "../../assets/images/curved-arrow-right-scaled.png";
import fileArrowDown from "../../assets/images/curved-arrow-down-scaled.png";

const PythonNav = (props) => {
  const [dataTypeExpanded, setDataTypeExpanded] = useState(false);
  const [stringsExpanded, setStringsExpanded] = useState(false);
  const [numbersExpanded, setNumbersExpanded] = useState(false);
  const [listsExpanded, setListsExpanded] = useState(false);
  const [booleansExpanded, setBooleansExpanded] = useState(false);

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
          <>
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
          <div className="link-list link-sub-list">
            <img
              alt=""
              onClick={() => setNumbersExpanded(!numbersExpanded)}
              src={!numbersExpanded ? fileArrowRight : fileArrowDown}
            />
            <HashLink
              smooth
              to="/python#numbers"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li>Numbers</li>
            </HashLink>
          </div>
          {numbersExpanded && (
            <div className="link-sub-list ml-24">
              <HashLink
                smooth
                to="/python#type-int"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 blue-color">Int</li>
              </HashLink>
              <HashLink
                smooth
                to="/python#type-float"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 blue-color">Float</li>
              </HashLink>
              <HashLink
                smooth
                to="/python#type-complex"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 blue-color">Complex</li>
              </HashLink>
              <HashLink
                smooth
                to="/python#random"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 gold-color">random()</li>
              </HashLink>
              <HashLink
                smooth
                to="/python#randrange"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 gold-color">randrange()</li>
              </HashLink>
              <HashLink
                smooth
                to="/python#randint"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 gold-color">randint()</li>
              </HashLink>
            </div>
          )}
          <div className="link-list link-sub-list">
            <img
              alt=""
              onClick={() => setListsExpanded(!listsExpanded)}
              src={!listsExpanded ? fileArrowRight : fileArrowDown}
            />
            <HashLink
              smooth
              to="/python#lists"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li>Lists</li>
            </HashLink>
          </div>
          {listsExpanded && (
            <div className="link-sub-list ml-24">
              <HashLink
                smooth
                to="/python#accessing"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 blue-color">Accessing a List</li>
              </HashLink>
              <HashLink
                smooth
                to="/python#append"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 gold-color">append()</li>
              </HashLink>
              <HashLink
                smooth
                to="/python#pop"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 gold-color">pop()</li>
              </HashLink>
              <HashLink
                smooth
                to="/python#insert"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 gold-color">insert()</li>
              </HashLink>
            </div>
          )}
          <div className="link-list link-sub-list">
            <img
              alt=""
              onClick={() => setBooleansExpanded(!booleansExpanded)}
              src={!booleansExpanded ? fileArrowRight : fileArrowDown}
            />
            <HashLink
              smooth
              to="/python#booleans"
              scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
              <li>Booleans</li>
            </HashLink>
          </div>
          {booleansExpanded && (
            <div className="link-sub-list ml-24">
              <HashLink
                smooth
                to="/python#boolean-comparator"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 blue-color">Expressions</li>
              </HashLink>
              <HashLink
                smooth
                to="/python#boolean-operators"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 blue-color">Operators</li>
              </HashLink>
              <HashLink
                smooth
                to="/python#bool"
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}>
                <li className="pt-8 gold-color">bool()</li>
              </HashLink>
            </div>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

PythonNav.propTypes = {};

export default PythonNav;
