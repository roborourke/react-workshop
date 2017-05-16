import React, { Children } from 'react';
import TabTitle from './Title';

const Tab = ({ children, index, onClick, selected }) => {
  let title = Children
    .toArray( children )
    .filter( child => child.type === TabTitle )
  let content = Children
    .toArray( children )
    .filter( child => child.type !== TabTitle )

  return (
    <div className="tab">
      <button onClick={ () => onClick( index ) }>{ title }</button>
      { selected && content }
    </div>
  )
}

export default Tab;
