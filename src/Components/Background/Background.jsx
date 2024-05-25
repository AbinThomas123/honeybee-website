import './Background.css'
import Video1 from '../../assets/video1.mp4'
import Image1 from '../../assets/image1.jpg'
import Image2 from '../../assets/image2.jpg'
import Image3 from '../../assets/image3.jpg'
import Image4 from '../../assets/image4.jpg'

export const Background = ({playStatus,heroCount}) => {
  

    if(playStatus){
        return (
            <video className='background' autoPlay loop muted >
                <source src={Video1} type='video/mp4' />
            </video>
        )
    }
    else if(heroCount===0)
        {
            return<img src={Image1} className='background fade-in' alt="" />
        }
        else if(heroCount===1)
            {
                return<img src={Image2} className='background fade-in' alt="" />
            }
            else if(heroCount===2)
                {
                    return<img src={Image3} className='background fade-in' alt="" />
                }
                else if(heroCount===3)
                    {
                        return<img src={Image4} className='background fade-in' alt="" />
                    }


}