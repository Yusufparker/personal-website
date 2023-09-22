

import Slider from "react-slick"

const SliderProject =({settings, images})=> {
    return (
        <Slider {...settings}>
                            {
                images.map((img, index)=>(
                    <div key={index} className="w-100">
                        <img src={`../${img}`} alt='' className="img-fluid" />
                    </div>
                ))
            }
        </Slider>
)
}

export default SliderProject
