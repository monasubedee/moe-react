import Slide from "./Slider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RubberBand from 'react-reveal/RubberBand';


const Review = () => {
    return(
        <div className='review-container'>
            <div className='about-moe'>
                <RubberBand>
                <p>Customers' Review</p>
                </RubberBand>
            </div>
            <div>
                <div className='review-bg'>
                    {/* <img src='https://myanmaronlineentrepreneur.com/wp-content/uploads/2021/09/client-bg.jpg' alt='' /> */}
                    <div>

                    </div>
                </div>
                <Slide />
            </div>
        </div>
    )
}



export default Review;