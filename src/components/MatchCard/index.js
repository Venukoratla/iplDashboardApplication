// Write your code here
const MatchCard = props => {
  const {details} = props
  const newData = {
    id: details.id,
    competingTeam: details.competing_team,
    competingLogo: details.competing_team_logo,
    result: details.result,
    matchStatus: details.match_status,
  }

  const {id, matchStatus, competingLogo, competingTeam, result} = newData
  return (
    <li key={id}>
      <img src={competingLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
