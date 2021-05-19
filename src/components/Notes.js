import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import marked from 'marked';
import { useState } from 'react';
const Notes = ({title}) => {

    const [value, setValue] = useState('');

    const editHandler = () => {
        const notesEl = document.querySelector('.notes-wrapper');

        const main = notesEl.querySelector('.main');
        const textArea = notesEl.querySelector('textarea');

        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    }
    const inputHandler = e => {
        setValue(e.target.value);
        console.log(value);

    }
    

    return ( 
        <div className="notes">
            <h1>{title}</h1>
            <div className="notes-wrapper">
                <div className="tools">
                    <button onClick={() => editHandler()}><FontAwesomeIcon icon={faEdit} /></button>
                    <button><FontAwesomeIcon icon={faTrash} /></button>
                </div>
                <div className="main hidden" dangerouslySetInnerHTML={{ __html: marked(value) }}></div>
                <textarea onInput={inputHandler}></textarea>
            </div>
        </div>
     );
}
 
export default Notes;