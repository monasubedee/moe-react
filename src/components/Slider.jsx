import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';


const Slide = () => {

    const settings = {
        dots: false,
        infinite: true,
        fade:true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
       
      };
    return(
        <div  className='slider'>
        <Slider {...settings}>
            <div className='slide-container'>
         <div className='slide-wrapper'>
            
             <div className='slide'>
             <Roll bottom>
             <div className='slide-image-wrapper'>
             <img className='slide-image' style={{display:'flex'}} src='https://myanmaronlineentrepreneur.com/wp-content/uploads/2021/09/sample1.jpg' alt='review' />
             </div>
             </Roll>
             <Fade right>
             <div className='slide-body'>
                <h4>Htet Htet Oo</h4>
                <p>“ပြုပြင်ရမယ့်အရာတွေ အများကြီးသိလိုက်တယ်၊ အသေးစိတ် စိတ်ရှည်စွာ ပြောပြပေးတယ်၊ Page ဖွင့်ထားပြီနားမလည်သူတွေအတွက် MOE Page အကြံပေးက အများကြီးတန်ဖိုးရှိပါတယ်။ ၃သောင်းမကတန်လွန်းပါတယ်။”</p>
             </div>
             </Fade>
             </div>

         </div>
         </div>

         <div className='slide-container'>
         <div className='slide-wrapper'>
             <div className='slide'>
                 <Zoom>
             <div className='slide-image-wrapper'>
             <img className='slide-image' src='	https://myanmaronlineentrepreneur.com/wp-content/uploads/2021/09/sample2.jpg' alt='review' />
             </div>
             </Zoom>
             <Fade right>
             <div className='slide-body'>
                <h4>Boom Product By Htet Htet Oo</h4>
                <p>“ပြုပြင်ရမယ့်အရာတွေ အများကြီးသိလိုက်တယ်၊ အသေးစိတ် စိတ်ရှည်စွာ ပြောပြပေးတယ်၊ Page ဖွင့်ထားပြီနားမလည်သူတွေအတွက် MOE Page အကြံပေးက အများကြီးတန်ဖိုးရှိပါတယ်။ ၃သောင်းမကတန်လွန်းပါတယ်။”</p>
             </div>
             </Fade>
             </div>

         </div>
         </div>
        </Slider>
        </div>
    )
}

export default Slide;