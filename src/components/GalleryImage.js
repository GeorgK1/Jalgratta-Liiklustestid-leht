const GalleryImage = (props) => {
    return (
    <div className="gallery-image-class">
        <img className="gallery-art-image" src={props.src}></img>
    </div>
  )
}

export default GalleryImage