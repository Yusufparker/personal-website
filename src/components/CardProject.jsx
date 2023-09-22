
import { Link } from "react-router-dom"


const DropDown = ({ idProject, link, dropId}) =>{
    return(
        <div className={`dropdown-project animate__animated   ${dropId===idProject ? ' animate__rotateIn' : 'd-none'}   `}>
            <ul>
                <li>
                    <a href={link} target="__blank" className="drop-link"><i className="bi bi-box-arrow-up-left"></i> Link</a>
                </li>
                <li>
                    <Link to={`/projects/${idProject}`} className="drop-link"><i className="bi bi-search"></i> Detail</Link>
                </li>
            </ul>
        </div>
    )
}





export default function CardProject({p , dropdownClick, dropId}){

    return(
        <div className="col-md-6 p-2 ">
            <div className="p-3 w-100 h-100 card-project animate__animated animate__fadeInLeft">
                <img src={p.image[0]} className="img-fluid" alt={p.title} />
                <h5 className="mt-2">{p.title}</h5>
                <p className="desc">{p.desc}</p>
                <div className="btn-project position-relative">
                    <a className="btn-dropdown btn-drop" onClick={()=>dropdownClick(p.id)}><i className="bi bi-three-dots btn-drop"></i></a>
                        <DropDown  idProject = {p.id}  link={p.link} dropId={dropId} /> 
                </div>
            </div>
        </div>

    )
}

