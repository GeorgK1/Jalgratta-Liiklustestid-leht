const HeroImage = (props) => {
    return (
    <div className="feature-art-image-class">
        <img className="feature-art-image" src={props.src}></img>
    </div>
  )
}

export default HeroImage