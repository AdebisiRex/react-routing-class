import React from 'react'

const HasChildren = (props) => {
  return (
    <div className='row'>
      <h1 className='col-3 border border-2 border-warning'>Hello World</h1>
      <div className='col border border-2 border-success'>{props.children}</div>
      <div className='col-3 border border-2 border-warning'></div>
    </div>
  );
}

export default HasChildren