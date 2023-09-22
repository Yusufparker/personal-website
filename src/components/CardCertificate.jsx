

export default function CardCertificate({c, openModal}){
    return(
        <div className="col-md-4 mb-4 card-certificate  animate__animated animate__fadeInLeft">
            <img src={c.image} alt={c.title} className="w-100 img-certificate" title={c.title} desc={c.desc} onClick={openModal}/>
        </div>
    )
}