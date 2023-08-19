import React, { useEffect } from "react";
import Modal from 'react-modal';
import '../Modal/Modal.css';
import Error from '../../Images/Error.png';
import Cancel from '../../Images/Cancel.png';
import { useNavigate } from "react-router-dom";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalView = (props) => {
    const navigate = useNavigate();
    let subtitle;
    // const history = useHistory();
    const [modalIsOpen, setIsOpen] = React.useState(false);


    function openModal() {
        setIsOpen(props.openmodal);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    function closeModal() {
        setIsOpen(false);
        navigate(-1);
    }

    useEffect(()=>{
        openModal()
    }, [])
    return (
        <React.Fragment >
            <div className="modalcontainer">
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <img src={Error} alt="error-image" width={200} height={120} className="error-image"/>
                <button onClick={closeModal} className="close-modal-btn"><img src={Cancel} width={25} height={25} alt="close-img"/></button>
                <h2  className="error-text">{props.errortext}</h2>
                {/* <span>Extra Text</span> */}
                <button className="back-btn" onClick={()=> navigate(-1)}>Back</button>
            </Modal>
            </div>
        </React.Fragment>
    )
}

export default ModalView;