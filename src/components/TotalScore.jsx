
import './styles.css'
const TotalScore = ({score}) => {
  return (
    <div>
        <div className="">
            <h1 className="heading-0">{score}</h1>
            <p className="Score">Total Score</p>
        </div>
    </div>
  )
}

export default TotalScore