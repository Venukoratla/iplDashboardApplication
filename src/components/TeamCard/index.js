// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <li key={id} className="team-container">
      <Link to={`/team-matches/${id}`}>
        <div>
          <img src={teamImageUrl} alt={name} className="image" />
          <p>{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
