import { useState } from "react"



const Sosmed = ({img, text, icon, link})=>{
    return (
      <div className="row mb-3 sosmed ps-3 pe-3 pt-2 pb-2 rounded d-flex align-items-center animate__animated animate__bounceInRight">
        <div className="col-3">
          <img src={img} alt="muhammad yusuf" className="img-fluid" />
        </div>
        <div className="col-7 text-center">
          <p>
            <i className={`bi ${icon} me-3`}></i> {text}
          </p>
        </div>
        <div className="col-2">
          <a href={link} className=" btn" target="__blank">
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      </div>
    );
}




function Contact() {
    const [name, setName]= useState('')
    const [message,SetMessage] = useState('')
    const [isNameWarning, setIsNameWarning]  = useState(false)
    const [isMsgWarning, setIsMsgWarning]  = useState(false)
    const emailSubject = "Pesan Dari Website"


    const handleSendMsgEmail = () => {
    if (name && message) {
        const emailBody = `Nama: ${name}, Pesan: ${message}`;
        const emailUrl = `mailto:mrmy160602@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        SetMessage('')
        setName('')
        window.location.href = emailUrl;
    } else {
        setIsNameWarning(!name);
        setIsMsgWarning(!message);
    }
  };

    const handleChangeName = (e) =>{
        setName(e.target.value)
        setIsNameWarning(false)
    }

    const handleChangeMessage = (e)=>{
        SetMessage(e.target.value)
        setIsMsgWarning(false)
    }



    return (
        <>
        <div className="contact container text-white  mb-5">
            <div className="row">
                <div className="col-md-6 mb-4 ">
                    <h1 className="fs-6">Contact Me</h1>
                    <p className="contact-desc mb-4">Feel free to get in touch with me if you have any questions.</p>
                    <form>
                        <div className="mb-3">
                            <input type="text" className={`form-control ${isNameWarning ? 'is-invalid' : ''}`} placeholder="yout name.." value={name} onChange={handleChangeName}  required/>
                        </div>
                        <div className="mb-3">
                            <textarea className={`form-control ${isMsgWarning ? 'is-invalid' : ''}`} placeholder="your message.." value={message} rows={6} onChange={handleChangeMessage} required></textarea>
                        </div>
                        <a className="btn btn-send w-100" onClick={handleSendMsgEmail}>Send</a>
                    </form>
                </div>
                <div className="col-md-6 ps-md-5 pe-3 pt-3">
                    <Sosmed  img='img/yusuf parker.jpeg' text='Email' icon='bi-envelope' link='mailto:mrmy160602@gmail.com'   />
                    <Sosmed  img='img/img-ig.jpg' text='Instagram' icon='bi-instagram' link='https://www.instagram.com/yusuf_parker/'   />
                    <Sosmed  img='img/img2.jpg' text='Tiktok' icon='bi-tiktok' link='https://www.tiktok.com/@yusufparker16'   />
                    <Sosmed  img='img/yusuf parker.jpeg' text='Github' icon='bi-github' link='https://github.com/Yusufparker/'   />
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
