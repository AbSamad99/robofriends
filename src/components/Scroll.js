import React from 'react';

const Scroll=(props) => {
  return(
    <div style={{overflowY:'scroll',border:'2px solid #9FCFB8',height:'500px'}}>
    {props.children}
    </div>
  )
}

export default Scroll;