// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {matchList: [], isLoading: true}

  componentDidMount() {
    this.getMatchList()
  }

  getMatchList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    const {isLoading} = this.state
    this.setState({matchList: updatedData, isLoading: !isLoading})
  }

  render() {
    const {matchList, isLoading} = this.state
    console.log(matchList)

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="bg-image">
            <div className="page-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <div>
              <ul>
                {matchList.map(eachItem => (
                  <TeamCard details={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default Home
