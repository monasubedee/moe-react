
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer';
import RubberBand from 'react-reveal/RubberBand';
import LightSpeed from 'react-reveal/LightSpeed';

const Book = () => {
    return(
        <div className='my-courses'>
            <div className='upcoming-wrapper'>
            <div className='upcoming-book'>
                <Fade top>
                <h1 className='upcoming-title' >UPCOMING BOOK!</h1>
                </Fade>

                <hr className='border' />
                <RubberBand>
                <h2 className='book-name' >UPCOMING BOOK </h2>
                <h2 className='book-name'>NAME</h2>
                </RubberBand>
                <LightSpeed bottom>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </LightSpeed>

                <div className='pre-wrapper' >
                <button className='pre-btn'>
                    Pre-order Now
                </button>
                </div>              
            </div>
            <div className='book-image'>
                    <img src='https://myanmaronlineentrepreneur.com/wp-content/uploads/2021/08/book-sample-img.png' alt='book' />
                </div>
                 
                 </div>
                 <div>
                 <div className='align' >
                     <p className='all-books' >All Books</p>
                 </div>
                 <div className='books-container'>
                <div className='books-wrapper'>
                    <div className='book'>
                        <Zoom>
                        <div className='image'>
                        <img src='https://myanmaronlineentrepreneur.com/wp-content/uploads/2021/08/fb-book.jpg' alt='book' />
                        </div>
                        </Zoom>
                        
                        <div className='book-body'>
                            <h3>100 Target book</h3>
                            <p>အခြေခံ Page ထောင်နည်းမပါပါ။ Audience ချိန်နည်း သီးသန့်ပဲ ပါပါမယ်။ Audience ရွေ�</p>
                            <p className='price-value'>Ks 11</p>
                            <div style={{paddingTop:'10px'}}>
                                <button className='moe-btn'>
                            Learn More
                            </button>
                            </div>
                        </div>
                    </div>

                    <div className='book'>
                        <Fade left>
                        <div className='image'>
                        <img src='https://myanmaronlineentrepreneur.com/wp-content/uploads/2021/08/fb-book.jpg' alt='book' />
                        </div>
                        </Fade>
                        
                        <div className='book-body'>
                            <h3>100 Target book</h3>
                            <p>အခြေခံ Page ထောင်နည်းမပါပါ။ Audience ချိန်နည်း သီးသန့်ပဲ ပါပါမယ်။ Audience ရွေ�</p>
                            <p className='price-value'>Ks 11</p>
                            <div style={{paddingTop:'10px'}}>
                                <button className='moe-btn'>
                            Learn More
                            </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                 </div>
                <Footer customFooter={true} />
        </div>
    )
}



export default Book;