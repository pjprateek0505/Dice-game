import './styles.css';
const RollDice = ({currentDice,rollDice}) => {
    
  return (
    
    <div >
        <div className='dice-top'>
            <img 
            onClick={rollDice}
            className='dice-img' src={`/Images/dice_${currentDice}.png`} alt="dice_1" />
            <p className='dice-img1'>Click On die to roll</p>
        </div>
    </div>
  )
}

export default RollDice