
import React from 'react';
import './modal.css';

const DeleteConfirmation = (props) => {
  return (
    <div className="Modal-Background"
      onClick={(event) => {
        props.back('none');
      }}
    >
      <div className="Modal-Container"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
      
        <div className="Modal-Header">
          <div className="Input-Title">Delete Note</div>
          {/* <div>{props.target}</div> */}
        </div>

        <div className="Modal-Content">
          <div>Are you sure you want to delete this note?</div>
        </div>

        <div className="Modal-Footer">

          <button
            className="Button Cancel"
            onClick={() => {
              props.back('none');
            }}
          >
            Cancel
          </button>

          <button
            className="Button Delete"
            onClick={() => {
              props.delete(props.target);
            }}
          >
            Delete
          </button>

        </div>
      
      </div>
    </div>
  )
}

export default DeleteConfirmation;
