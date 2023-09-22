import { lazy, Suspense, useState, useEffect } from "react";
import dataProject from "../utils/projects.json"


const CardProject =  lazy(()=> import('../components/CardProject'))


const LoadingProject = ()=>{
    return(
        <div className="col-md-6 p-2 loading-project">
            <div className="p-3 w-100 h-100 rounded">

            </div>
        </div>
    )
}




function Projects() {
    const [dropId, setDropId] = useState(null)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.className.includes('btn-drop') && !e.target.className.includes('drop-link')) {
                setDropId(null);
                // console.log(e.target.className);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);




    const dropdownClick = (projectId) => {
        if(projectId==dropId){
            setDropId(null)
        }else{
            setDropId(projectId)
        }
    };




    return (
        <>
        <div className="container project text-white mb-5">
            <div className="row">
            
                {
                    dataProject.map((project)=>(
                        <Suspense key={project.id} fallback={<LoadingProject/>}>
                            <CardProject  p={project}   dropdownClick={dropdownClick}  dropId={dropId} />
                        </Suspense>

                    ))
                }




            </div>
        </div>
        </>
    );
}


export default Projects;


