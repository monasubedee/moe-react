
import Rotate from 'react-reveal/Rotate';

const Blogs = () => {
    return(
        <div>
           
             <div className='about-moe'>
             <Rotate top left>
                <p>Our Latest Blogs</p>
                </Rotate>
            </div>
        

            <div className='courses'>
            <div className='course-container'>
            <div className='course-wrapper'>
                <div className='course'>
                    <div className='image-wrapper'>
                        <img src='https://myanmaronlineentrepreneur.com/wp-content/uploads/2021/08/4.png' alt='' />
                        
                    </div>
                    <div className='course-footer'>
                        <div className='footer-title'>
                            <h3  style={{textAlign:'left'}}>
                            Channel Management – ဝယ်သူသို့ရောက်မည့် လမ်းကြောင်းကို စီမံခန့်ခွဲခြင်း
                            </h3>
                            <p className='business'>Business and Economic Knowledge</p>
                            <p>
                            အပြောင်းအလဲမြန်ဆန်လှတဲ့ ဒီနေ့ခေတ်အချိန်အခါမှာ နှေးနေလို့မဖြစ်ပဲ မိမိကပါ...
                            </p>
                            <p className='read-more'>Read More</p>
                        </div>
                    </div>
                </div>

                <div className='course'>
                    <div className='image-wrapper'>
                        <img src='https://myanmaronlineentrepreneur.com/wp-content/uploads/2021/08/lead-generation-300x205-1.jpg' alt='' />
                       
                    </div>
                    <div className='course-footer'>
                        <div className='footer-title'>
                            <h3 style={{textAlign:'left'}}>
                            Market Segmentation – ဈေးကွက်၏ ပိုင်းခြားသတ်မှတ် ခြားနားချက်များ
                            </h3>
                            <p className='business'>Business and Economic Knowledge</p>
                           
                            <p>
                            ဈေးကွက်တစ်ခုလုံးကို ပစ်မှတ်ထားမည့်အစား တိကျသောဈေးကွက် အစိတ်အပိုင်းကို ဦးတည်ခြင်းလူနေမှုပုံစံက...
                            </p>
                            <p className='read-more'>Read More</p>
                        </div>
                    </div>
                </div>

                <div className='course'>
                    <div className='image-wrapper'>
                        <img src='https://myanmaronlineentrepreneur.com/wp-content/uploads/2021/08/3.png' alt='' />
                       
                    </div>
                    <div className='course-footer'>
                        <div className='footer-title'>
                            <h3 style={{textAlign:'left'}}>
                            စိတ်ဓာတ်ကြံ့ခိုင်သော စွန့်ဦးတီထွင်သူတွေ ရှောင်ရှားတဲ့ အလေ့အကျင့် ၁၀ ခု
                            </h3>
                            <p className='business'>Entrepreneur, Self-help</p>
                           
                            <p>
                            လက်ရှိကမ္ဘာပေါ်မှာ အောင်မြင်တဲ့ စီးပွားရေးသမားတွေ၊ နည်းပညာရှင်တွေနဲ့ ကဏ္ဍအသီးသီးက...
                            </p>
                            <p className='read-more'>Read More</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
               
                </div>
                <div className='more-container'>
        <button className='more-courses'>
               More Blogs
               </button>
        </div>
        <div className='register-now'>
             <Rotate top left>
                <p>To Enroll Our Free & Paid Courses!</p>
                </Rotate>
                <div >
                    <button  className='register-btn'>Register Now</button>
                </div>
            </div>
            
        </div>
    )
}


export default Blogs;