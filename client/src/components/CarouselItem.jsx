const CarouselItem = ({data}) => {
    return (
        <div className="carousel-item">
            <p>{data.name}</p>
        </div>
    )
}
export default CarouselItem