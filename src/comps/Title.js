import React from 'react';
const Title = ({user}) => {
  return (
    <div className="title">
      <h2>Storage Your Pictures</h2>
      {user && <h3>Welcome , {user}</h3>}
    </div>
  )
}

export default Title;