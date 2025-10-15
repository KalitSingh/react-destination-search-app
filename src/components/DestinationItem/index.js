import './index.css'

const DestinationItem = props => {
  const {cardsDetails} = props
  const {name, imgUrl} = cardsDetails

  return (
    <>
      <li className="destination-container">
        <img className="destination-imgs" alt="destinations" src={imgUrl} />
        <p>{name}</p>
      </li>
    </>
  )
}

export default DestinationItem
