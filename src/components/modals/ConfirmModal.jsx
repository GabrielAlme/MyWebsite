import emailjs from '@emailjs/browser'

function ConfirmModal({ title, message, confirmMessage, onConfirm, onClose }) {
    return (
        <div className="modal-container">
            <div classnName="confirm">
                <h2>{title}</h2>
                <p>{message}</p>
                <button onClick={onConfirm}>{confirmMessage}</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}

export default ConfirmModal