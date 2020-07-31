import React from 'react'
import { HashLink } from "react-router-hash-link";

export default function Home() {

  return (
    <div>
      <HashLink to="/python">
        <h4>Python</h4>
      </HashLink>
    </div>
  )
}
