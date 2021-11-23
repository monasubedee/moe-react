
import Swing from 'react-reveal/Swing';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Books = () => {
    return(
        <div>
            <div className='books'>
                <Swing>
                <p>
                    Our Latest Books
                </p>
                </Swing>
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

            <div className='more-container'>
                                <button className='moe-btn'>
                            More Books
                            </button>
                            </div>

        </div>
    )
}


export default Books;