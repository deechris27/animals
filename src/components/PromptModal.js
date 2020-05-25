import React from 'react'

function PromptModal({toggleModal, name}) {
    return (
        <React.Fragment>
            <h1>Do you like {name}?</h1>
            <div className="buttons">
                <button onClick={toggleModal}>Yes</button>
                <button onClick={toggleModal}>No</button>
            </div>
        </React.Fragment>
    )
}

export default PromptModal;
