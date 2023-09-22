import data_projek from "../utils/projects.json"
import { useParams } from "react-router-dom"
import { lazy, Suspense } from "react";


const SliderProject = lazy(()=> import('../components/SliderProject'))






const LoadSlider = () =>{
    return(
        <div className="text-center loading-slider">
        </div>
    )
}



const SingleProject = ()=>{
    const {idProject} = useParams()
    const project = data_projek.find((project) => project.id == idProject);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (!project) return <p className="text-white">Proyek tidak ditemukan</p>;

    return(
        <>
            <div className="container single-project text-white mb-5">
                <a href="/projects" className="mb-4 d-block text-decoration-none btn-back"><i className="bi bi-arrow-left"></i> Back</a>
                <h1 className=" mb-4 fw-bold ">{project.title}</h1>
                <div className="row">
                    <div className="col-md-6 bg-primay mb-5">
                        <Suspense fallback={<LoadSlider/>}>
                            <SliderProject settings={settings} images={project.image} />
                        </Suspense>
                    </div>
                    <div className="col-md-6 ps-md-5 pe-md-5">
                        <p className="desc-project">{project.desc}</p>
                        <div className="project-build mb-3">
                            {
                                project.build.map((b,index)=>(
                                    <span className="d-inline" key={index}>#{b}</span>
                                ))
                            }
                        
                        </div>
                        <a href={project.link} target="__blank" className="text-decoration-none btn-visit bg-warning"><i className="bi bi-box-arrow-up-left"></i> Visit</a>
                    </div>
                </div>

            </div>
            
        </>
    )
} 

export default SingleProject