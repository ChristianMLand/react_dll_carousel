const CarouselBtn = ({direction,handleClick}) => {

    return (
        <button 
            id={direction} 
            className="carousel-btn" 
            onClick={handleClick}
        >{direction === 'left' ? '<' : '>'}</button>
    )
}
export default CarouselBtn