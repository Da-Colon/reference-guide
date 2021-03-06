import React from 'react'
import PropTypes from 'prop-types'

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

Quote.propTypes = {
  url: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Quote