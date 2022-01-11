import {useState,useEffect} from 'react'
import CarouselItem from './CarouselItem'
import CarouselBtn from './CarouselBtn'
import './carousel.css'

const Carousel = ({dll, amt}) => {
    const [head,setHead] = useState(null)
    const [isSliding,setIsSliding] = useState('')

    const handleRotation = (e) => {
        setIsSliding(e.target.id)
    }

    useEffect(() => {
        dll && setHead(dll.tail)
    },[dll])

    useEffect(() => {
        if(isSliding){
            setTimeout(() => {
                setIsSliding('')
                isSliding === "left" ? setHead(head.prev) : setHead(head.next)
            },500)
        }
    },[isSliding])

    return (
        <div className="carousel" style={{'--amt':amt+2}}>
            <CarouselBtn direction="left" handleClick={handleRotation}/>
            <CarouselBtn direction="right" handleClick={handleRotation}/>
            <div className={`carousel-list ${isSliding}`}>
            {head && head.getNext(amt+2).map((item,i) => <CarouselItem key={i} data={item}/>)}
            </div>
        </div>
    )
}
export default Carousel