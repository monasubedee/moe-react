
import Fade from 'react-reveal/Fade';


const Header = () => {
    return(
        <div id='main'>
            <div className='main-wrapper'>
         {/* <ReactPlayer className='video-player' width='100%' height="100%" muted={true} 
             url='https://fb.watch/9sAlwNM_Gb/' playing={true} loop={true} />  */}
              <div className='main-bg'>
             <img style={{display:'block'}} src='https://myanmaronlineentrepreneur.com/wp-content/uploads/2021/11/58689367_2316966708631164_6371835423886409728_n.jpg' alt='main-bg' />

             </div> 
            
            <div className="text-overlay">
            <Fade right>
                <h2>MYANMAR ONLINE ENTREPRENEUR</h2>
                </Fade>
            </div>
            
            </div>    
        </div>
    )
}



export default Header;