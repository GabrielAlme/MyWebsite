import './Modal.css';

function BasicModal ({title, message, onClose}) {
    return (
        <div className="modal-container">
            <div className="basic-modal">
                <h2>{title}</h2>
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default BasicModal