import { useState, lazy } from "react";
import { Suspense } from "react";

import data_certificate from "../utils/certificates.json"

const CardCertificate = lazy(()=> import('../components/CardCertificate'))

const ModalImage = ({image,title, desc, closeModal})=>{
    return(
        <div className="modal-image position-relative pt-5 ps-2 pe-2 pb-2" style={{ display: image ? "block" : "none" }}>
            <div className="row">
                <div className="col-md-6 mb-5">
                    <img src={image} alt="image" className="img-fluid"/>
                </div>
                <div className="col-md-6 mb-5">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </div>
            <button className="close-modal position-absolute"  onClick={closeModal}>X</button>
        </div>
    )
}


const LoadingCertificate = () =>{
    return(
        <div className="col-md-4 mb-4 card-load-certificate p-1">
            <div className="w-100 h-100">

            </div>
        </div>
    )
}



const Experiences = () => { 

    const [srcImage, setSrcImage] =useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [isCardVisible, setIsCardVisible] = useState(true);



    const openModal =(e) =>{
        // alert(e.target.src)
        setSrcImage(e.target.src)
        setTitle(e.target.getAttribute('title'))
        setDesc(e.target.getAttribute('desc'))
        setIsCardVisible(false)
    }

    const closeModal = ()=>{
        setSrcImage('')
        setTitle('')
        setDesc('')
        setIsCardVisible(true)
    }

    return (
        <div className="container text-color mb-5 certificate position-relative">
            <div className="row">
                {isCardVisible &&
                    data_certificate.reverse().map((c)=>(
                        <Suspense fallback={<LoadingCertificate/>} key={c.id}>
                            <CardCertificate c={c}  openModal={openModal}/>
                        </Suspense>
                    ))
                }
            </div>
            
        <ModalImage image={srcImage} title={title}  desc={desc}    closeModal={closeModal}/>
        </div>

    );
};




export default Experiences;
