import ReactPlayer from "react-player";
import Fade from 'react-reveal/Fade';


const Header = () => {
    return(
        <div id='main'>
            <div className='video-wrapper'>
            <ReactPlayer className='video-player' width='100%' height="75vh" muted={true} url='https://www.youtube.com/watch?v=oJ40hUbDohE' playing={true} loop={true} />
           
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