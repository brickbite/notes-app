
import React, { Component } from 'react';
import './modal.css';

export default class AddEditModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      color: 'Red',
      title: '',
      content: ''
    }
  }

  componentDidMount() {
    if (this.props.content) {
      this.setState(this.props.content);
    }
  }

  updateField(field, content) {
    const updated = {};
    updated[field] = content;
    this.setState(updated, () => {
      this.checkActionable();
    });
  }

  checkActionable() {
    if (this.props.content.color === '') {
      if (this.props.content.title !== this.state.title
        || this.props.content.content !== this.state.content) {
        this.setState({disabled: false});
      }
    } else if (this.props.content.color !== this.state.color 
      || this.props.content.title !== this.state.title
      || this.props.content.content !== this.state.content) {
      this.setState({disabled: false});
    } else {
      this.setState({disabled: true});
    }
  }

  render() {
    return (
      <div className="Modal-Background"
        onClick={(event) => { this.props.back('none'); }}
      >
        <div className="Modal-Container"
          onClick={(event) => { event.stopPropagation(); }}
        >
        
          <div className="Modal-Header">

            <div className={this.state.color}></div>

            <div className="Color-Picker-Container">
              <div
                className={`Color-Picker Red${this.state.color === 'Red'
                  ? ` Selected` : ``}`}
                onClick={() => this.updateField('color', 'Red')}
              ></div>
              <div
                className={`Color-Picker Green${this.state.color === 'Green'
                  ? ` Selected` : ``}`}
                onClick={() => this.updateField('color', 'Green')}
              ></div>
              <div
                className={`Color-Picker Yellow${this.state.color === 'Yellow'
                ? ` Selected` : ``}`}
                onClick={() => this.updateField('color', 'Yellow')}
              ></div>
              <div
                className={`Color-Picker Blue${this.state.color === 'Blue'
                  ? ` Selected` : ``}`}
                onClick={() => this.updateField('color', 'Blue')}
              ></div>
            </div>

            <div>
              <input
                className="Input-Title"
                value={this.state.title}
                placeholder="Untitled"
                onChange={(event) => {
                this.updateField('title', event.target.value)
                }}
              />
            </div>
          </div>
          
          <div className="Modal-Content">
            <div>
              <textarea
                className="Input-Content"
                value={this.state.content}
                placeholder="Just start typing here"
                onChange={(event) => {
                  this.updateField('content', event.target.value)
                }}/>
            </div>
          </div>
          
          <div className="Modal-Footer">
            <button 
              className={`Button Cancel`}
              onClick={() => {
                this.props.back('none');
              }}
            >
              Cancel
            </button>

            <button
              className={`Button Action ${this.state.disabled ? 'Disabled' : ''}`}
              disabled={this.state.disabled}
              onClick={() => {
                this.props.edit(this.state, this.props.targetid);
              }}
            >
              Save
            </button>
            
          </div>
        
        </div>

      </div>
    )
  }
}
