import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        customPaging: function (i) {
            return (
                <div
                    style={{
                        width: "20px", // change the width of the dot
                        height: "20px", // change the height of the dot
                        borderRadius: "50%",
                        background: "gray"
                    }}
                ></div>
            );
        }
    };

    return (
        <div>
            <Slider {...settings}>
                {images?.map((image, index) => (
                    <div key={index}>
                        <center>
                            <img src={image} width="600" height="600" alt={`carousel-image-${index}`}/>
                        </center>
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default Carousel;
