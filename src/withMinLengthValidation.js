import React from 'react';

const withMinLengthValidation = ( Component, length ) => props => {
  return (
    <div>
      <Component {...props} />
      { `${props.value}`.length < length && <span>Minimum {length} required.</span> }
    </div>
  )
}

export default withMinLengthValidation
