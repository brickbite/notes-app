
import React from 'react';

const Header = (props) => {
  return (
    <div>
      <button
        className="Button Action"
        onClick={() => {
          props.add('add', null)}
        }
      >+ Add Note</button>
    </div>
  )
};

export default Header;