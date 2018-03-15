
import React from 'react';
import './note.css';

const Note = (props) => {
  return (
    <div className="Note">

      <div className={props.note.color}></div>

      <div className="Note-Header">
        <div className="Note-Header-Title">{props.note.title}</div>

        <div className="Note-Header-Action-Container">          
            <button className="Note-Header-Action"
              onClick={() => {
              props.edit('edit', props.noteid);
            }}>
              <i class="Icon fas fa-pencil-alt"></i>
            </button>
          
            <button className="Note-Header-Action"
              onClick={() => {
              props.edit('delete', props.noteid);
            }}>
              <i class="Icon fas fa-trash-alt"></i>
            </button>
          
        </div>
      </div>

      <div className="Note-Content">
        {props.note.content.split('\n').map((line, index) => {
          return (
            <div key={`${line}+${index}`}>
              {line}
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Note;