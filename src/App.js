import React, { Component } from 'react';

import './app.css';

import Header from './components/header/header.js';
import Note from './components/note/note.js';
import AddEditModal from './components/modal/add-edit-note.js';
import DeleteModal from './components/modal/delete-note-confirmation.js';

class App extends Component {

  constructor() {
    super()
    this.state = {
      action: null,
      targetNote: null,
      notes: {
        v343x2mn: {
          color: 'Red',
          title: 'Review Layout Design',
          content: `note1
            has some content like this`
        },
        an4fz452: {
          color: 'Green',
          title: 'Devise Components',
          content: 'note2'
        },
        a52is3gc: {
          color: 'Yellow',
          title: 'Create React Components',
          content: 'note3'
        },
        g6vemxam: {
          color: 'Blue',
          title: 'Do CSS Styling',
          content: 'note3'
        },
        n8d4nmyn: {
          color: 'Blue',
          title: 'Horizontally long',
          content: 'Hereisalotofcharactersthatwilloverflowbecauseoftoomanycharacters'
        },
        we63nkaa: {
          color: 'Blue',
          title: 'Vertically long',
          content: `Scroll here!
          
          
          We
          Have
          Not
          Enough
          Lines
          To
          Display
          All
          Of
          These
          Lines`
        },
        a5rjyqrq: {
          color: 'Yellow',
          title: 'Thisisanotewithareallylongtitlethatwilloverflowandsomeextracharactersincase',
          content: 'scroll on the title!'
        },
        d6n56nze: {
          color: 'Red',
          title: 'Lots of words in a title should just make it scroll',
          content: 'and not stretch the title section'
        }
      }
    }
  }

  editNote = (newNote, id = null) => {
    if (id === null) {
      id = '';
      const chars = '23456789abdegjkmnpqrvwxyz';
      const id_length = 8;

      for (var i = 0; i < id_length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      // TODO: check if id is unique?
    }
    const newNotes = this.state.notes;
    newNotes[id] = newNote;
    this.setState({notes: newNotes}, this.changeAction(null, null));
  }

  deleteNote = (id) => {
    const newNotes = this.state.notes;
    delete newNotes[id];
    this.setState({notes: newNotes}, this.changeAction(null, null));
  }

  changeAction = (act, target) => {
    this.setState({action: act, targetNote: target});
  }

  render() {
    return (
      <div className="App">
        <header className="App-Header-Container">
          <Header add={this.changeAction}/>
        </header>
        <div>
          {this.state.action === 'add' || this.state.action === 'edit'
            ? <AddEditModal
              edit={this.editNote}
              back={this.changeAction}
              targetid={this.state.targetNote}
              content={this.state.notes[this.state.targetNote]
                ? this.state.notes[this.state.targetNote]
                : {color: '', title: '', content: ''}}/>
            : null}
          {this.state.action === 'delete'
            ? <DeleteModal delete={this.deleteNote} back={this.changeAction} target={this.state.targetNote}/>
            : null}
        </div>
        <div className="App-Entries">
          {Object.keys(this.state.notes).map(noteId => {
            return (
                <Note key={noteId} 
                noteid={noteId} 
                note={this.state.notes[noteId]}
                edit={this.changeAction}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
