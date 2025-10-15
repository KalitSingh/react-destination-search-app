import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  destinationsList = this.props

  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    console.log(destinationsList)

    const filteredDestinationList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(filteredDestinationList)
    return (
      <>
        <div className="destination-bgContainer">
          <h1>Destination Search</h1>
          <div className="searchBox-cont">
            <input
              onChange={this.onChangeSearchInput}
              className="search-ele"
              type="Search"
              value={searchInput}
            />
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>

          <ul className="destinationItems-container">
            {filteredDestinationList.map(eachItem => (
              <DestinationItem cardsDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default DestinationSearch
