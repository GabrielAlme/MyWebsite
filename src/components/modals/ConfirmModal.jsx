import './Modal.css'

function ConfirmModal({ title, message, confirmMessage, onConfirm, onClose }) {
    return (
        <div className="modal-container">
            <div className="confirm">
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="buttons">
                    <button onClick={onConfirm}>{confirmMessage}</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal