import React from 'react'

const Quote = ({url, children, siteName}) => (
  <div className="quote flex-center mb-4">
        <q cite={url}>
          {children}
        </q>
        <div className="self-end quote-link mb-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {siteName}
          </a>
        </div>
      </div>
)

export default Quote