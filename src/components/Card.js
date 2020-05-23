import React from 'react';

const Card =({id,name,email}) => {
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2 '>
      <img src={`https://robohash.org/${id}?size=250x250`} alt='jane-doe' />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card;
