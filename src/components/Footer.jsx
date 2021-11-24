import { Book, LibraryBooks,  Email, Home, LocationOnOutlined, Person, PhoneIphoneOutlined } from "@material-ui/icons";
import Jump from 'react-reveal/Jump';
import LightSpeed from 'react-reveal/LightSpeed';
import Jello from 'react-reveal/Jello';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Footer = ({customFooter}) => {
    return(
        <div>
        <div className='shape-wrapper' >
       <div class="custom-shape">
    <svg className='divider' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class={customFooter ? 'no-fill' : 'shape-fill'}></path>
    </svg>
    <div className='footer-container'>
        <div className='footer-wrapper'>
            <div className='support'>
                <div className='support-menu'>
                <LightSpeed top>
                <h2>Support Menu</h2>
                </LightSpeed>
               
               </div>
                <div className='support-text'>
                    <p>About Moe</p>
                    <p>Contact Us</p>
                    <p>My account</p>
                    <p>Terms & Condition</p>
                </div>
            </div>
            <div className='recent'>
            <div className='support-menu'>
            <Jump>
                <h2>Recent Blogs</h2>
                </Jump>
              
               </div>
                <div className='recent-text'>
                    <p>Channel Management – ဝယ်သူသို့</p>
                        <p className='add-border'>ရောက်မည့် လမ်းကြောင်းကို စီမံခန့်ခွဲခြင်း
                            </p>
                    
                    <p>Market Segmentation – ဈေးကွက်၏ </p>
                        <p className='add-border'>
                            ပိုင်းခြားသတ်မှတ် ခြားနားချက်များ
                    </p>
                    <p >စိတ်ဓာတ်ကြံ့ခိုင်သော စွန့်ဦးတီထွင်သူတွေ
                        </p><p className='add-border'> ရှောင်ရှားတဲ့ အလေ့အကျင့် ၁၀ ခု
                    </p>
                    <p>Facebook မှာ အရင်ကလောက် like တွေမရ
                        </p><p className='add-border'>တော့ဘူး ဖြစ်နေပါသလား?
                    </p>
                    <p>
                    Online စီးပွားရေးတစ်ခု စတဲ့အချိန်မှာ </p><p className='add-border'>သတိထားရှောင်ရှားသင့်တဲ့အမှား (၁၀) ခု
                    </p>
                </div>
            </div>
            <div className='contact'>
            <div className='support-menu'>
                <Jello>
                <h2>Contact Information</h2>
                </Jello>
               </div>
               <div className='contact-info'>
                   <div className='icon'>
                       <Fade left>
                       <LocationOnOutlined />
                       </Fade>
                   </div>
                   <div className='icon-right'>
                       <h3>Address</h3>
                       <p>No. 1186, Pin Lon Road,</p>
                        <p> North-Dagon Township, Yangon</p>
                   
                   </div>
               </div>

               <div className='contact-info'>
                   <div className='icon'>
                       <Fade right>
                      <PhoneIphoneOutlined />
                      </Fade>
                   </div>
                   <div className='icon-right'>
                       <h3>Phone Number</h3>
                       <p>(+95) 09 880 578482
                    </p>
                   </div>
               </div>

               <div className='contact-info'>
                   <div className='icon'>
                       <Fade bottom>
                       <Email />
                       </Fade>
                   </div>
                   <div className='icon-right'>
                       <h3>E-Mail Address</h3>
                       <p>moeonlinetraining@gmail.com,</p>
                          
                           <p className='support-footer'>
                    support@myanmaronlineentrepreneur.com
                    </p>
                   </div>
               </div>

            </div>
        </div>
      
    </div>
    <div className='moe-footer-container'>
        <p>©Myanmar Online Entrepreneur. 2021 All Right Reserved. Powered by MISL</p>
    </div>
    {/* <div className='moe-footer-container'>
    <div className='moe-footer'>
        <div>
          <p className='copy'>©Myanmar Online Entrepreneur. 2021 All Right Reserved. Powered by MISL</p>
          <div className='social-icons'>
            <Facebook fontSize='large' />
            <Instagram fontSize='large' />
            <YouTube fontSize='large' />
        </div>
        </div>
        
    </div>
    </div> */}
    <div className='fixed-footer'>
        <div className='sticky-icon'>
            <Link to='/'>
            <Home style={{color:'white'}}  />
            <p style={{color:'white'}}>HOME</p>
            </Link>
        </div>
        <div className='sticky-icon'>
            <Link to='/Course'>
            <Book style={{color:'white'}}/>
            <p style={{color:'white'}}>COURSES</p>
            </Link>
        </div>
        <div className='sticky-icon'>
            <Link to='/Book'>
            <LibraryBooks style={{color:'white'}} />
                <p style={{color:'white'}}>BOOK</p>
                </Link>
        </div>
        <div className='sticky-icon'>
            <Person />
            <p>ACCOUNT</p>
        </div>
    </div>
   
</div>
 </div>
 </div>

    )
}


export default Footer;