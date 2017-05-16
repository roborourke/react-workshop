import React from 'react';

export default Component => props => props.loading
  ? <div>
      Loading
      …
    </div>
  : <Component {...props} />
