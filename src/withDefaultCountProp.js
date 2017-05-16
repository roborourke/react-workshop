import React from 'react';

export default ( Component, count ) => props => <Component count={count} {...props} />
