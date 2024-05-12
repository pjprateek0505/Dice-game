import Image from '/public/Images/dices 1.png'
import './styles.css';
const Start = ({toggle}) => {
  return (
    <div className='start'>
        <div>
            <img className='dice' src={Image} alt="" />
        </div>
        <div className='abc'>
            <h1 className='heading'>Dice Game</h1>
            <button onClick = {toggle} className='button' >Play Now</button>
        </div>
    </div>
  )
}

export default Start