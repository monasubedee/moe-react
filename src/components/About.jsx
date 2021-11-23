import Typewriter from 'typewriter-effect';
import Jump from 'react-reveal/Jump';

const About = () => {
    return(
        <div id='about-us'>
            <div className='about-moe'>
                <Jump>
                <p>About Us</p>
                </Jump>
            </div>
            <div className='moe-wrapper'>
            <div className="about-container" >
               <Typewriter 
                    options={{
                        strings:['WELCOME TO MOE'],
                        autoStart:true,
                        loop:true
                    }}
               />
            </div>
            <div className='moe-text'>
                <p>
                ၆လအတွင်း ရောင်းအား (၂)ဆ တိုးတက်ချင်တဲ့ လုပ်ငန်းရှင်များကို ကူညီပေးနေတဲ့ နေရာလေးပါ။
                <br />
                သင်တန်းသားပေါင်း ၁၀,၀၀၀ ကျော်သင်ကြားပေးခဲ့ပြီး၊ သင်တန်းသက်တမ်း (၄)နှစ်ကျော်ခဲ့ပါပြီ။
                </p>
            </div>
            <div className='times'>
                <h2>
                    ၆လ ၂ဆ   
                </h2>
            </div>
            <div>
                <button className='moe-btn'>
               MOE အကြောင်:
               </button>
            </div>
            </div>
           
        </div>
    )
}


export default About;