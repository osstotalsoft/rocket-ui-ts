import React from 'react'
import PropTypes from 'prop-types'

const FormattedJson = ({ children }: { children: React.ReactNode }) => (
  <pre style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap', margin: 0 }}>{JSON.stringify(children, null, 3)}</pre>
)

FormattedJson.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number, PropTypes.string])
}

export default FormattedJson
