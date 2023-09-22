import TypeIt from "typeit-react";

const Home = ()=>{
    
    return(
        <>
        <div className="front mb-5">
                <div className="desc p-5">
                    <h1 className="fw-bold">
                    <TypeIt element={"h1"}
                        getBeforeInit={(instance) => {
                            instance.type("Muhammad yus").pause(750).delete(3).pause(500).type("YUS").pause(750).delete(3).pause(500).type("Yufus").pause(750).delete(3).pause(500).type("Suf").pause(750).move(-2).pause(700).delete(1).pause(500).type('s').move(2).pause(500).type(':)').pause(900).delete(2)
                            return instance;
                        }}
                        />
                    </h1>
                    <p>Undergraduate Student of<a href="https://iti.ac.id/" target="__blank" className="education">Institut Teknologi Indonesia. </a><br /> Your life doesn't get better by chance. It gets better by a change..</p> 
                    <br />
                    <br />
                    <a href="https://www.linkedin.com/in/muhammad-yusuf-957651240/" target="_blank" className="text-decoration-none">
                        <i className="bi bi-linkedin"></i> My LinkedIn
                    </a>
                </div>
        </div>
        <div className="row p-2 core-values mb-5">
            <div className="col-md-4 mb-5 overflow-hidden card-img-home position-relative" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <img
                    src='img/muhammad yusuf laptop.png'
                    alt="Muhammad Yusuf"
                    className="w-100 img-home"
                />
            </div>
            <div className="col-md-8">
                <div className="row ps-2">
                    <div className="col-md-6 card-values mb-3">
                        <p className="fw-bold p-2 icon-values">
                            <i className="bi bi-person"></i>
                        </p>
                        <p className="fw-bold">Professionalism</p>
                        <p className="desc-values">Tetap lakukan yang terbaik yang kita mampu. karena dalam lomba lari, diam sama dengan mundur.</p>
                </div>
                <div className="col-md-6 card-values mb-3">
                    <p className="fw-bold p-2 icon-values">
                        <i className="bi bi-lightbulb"></i>
                    </p>
                    <p className="fw-bold">Innovation</p>
                    <p className="desc-values">
                        Membuat hal baru itu sulit, namun tidak lebih sulit daripada
                        bertahan dalam situasi.
                    </p>
                </div>
                <div className="col-md-6 card-values mb-3">
                    <p className="fw-bold p-2 icon-values">
                        <i className="bi bi-book"></i>
                    </p>
                    <p className="fw-bold">Learning Ability</p>
                    <p className="desc-values">
                        Hidup adalah belajar. Mau tidak mau, kita akan selalu belajar,
                        baik dengan kerelaan hati ataupun paksaan dari lingkungan.
                    </p>
                </div>
                <div className="col-md-6 card-values mb-3">
                    <p className="fw-bold p-2 icon-values">
                        <i className="bi bi-people"></i>
                    </p>
                    <p className="fw-bold">Team Work</p>
                    <p className="desc-values">
                        Hanya sedikit pekerjaan yang bisa dilakukan sendirian. Namun
                        bersama-sama bisa kerjakan banyak hal.
                    </p>
                </div>
            </div>
        </div>
    </div>
        
        {/* modal */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content modal-home">
                    <div className="modal-header border-0 ">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"><i className="bi bi-info-circle-fill"></i> About Me</h1>
                        <hr />
                        <p className="mb-3">A content creator and a third-year with a degree in Informatics Engineering. Skilled in programming (Javascript, PHP, Html, Css, Python, Bootstrap, Mysql, React js, Laravel, MERN Stack, Vb.Net),  data analysis, and editing.</p>
                        <h1 className="fs-5 mb-3"><i className="bi bi-mortarboard-fill"></i> My Education</h1>
                        <hr />
                        <p>My education has been one of the primary foundations in my journey towards personal and professional development. Here are some stages of my education:</p>
                        <ul>
                            <li>
                                <h6>Institut Teknologi Indonesia</h6>
                                <p>I am a third-year with a degree in Informatics Engineering</p>
                            </li>
                            <li>
                                <h6>Daarul Falah Islamic Boarding School</h6>
                                <p>I am a high school graduate of Daarul Falah Islamic Boarding School</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home