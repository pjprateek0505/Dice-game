import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice";
import './styles.css';
import { useState } from "react";
import RulesContainer from "./RulesContainer";

const GamePlay = () => {
  const [score,setScore] = useState(0);
  const [select,setSelect] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [error,setError] = useState("");
  const [showRules,setShowRules] = useState(false);

  const GenerateRandom = (min,max) => {
    return (Math.floor(Math.random() * (max-min) + min));
  };
  const resetScore = () => {
    setScore(0);
  }
  const rollDice = () =>{
    if(!select) {
      setError("Number is not selected");
      return;
    }
    setError("");
      const random = GenerateRandom(1,7);
      setCurrentDice((prev) => random);
      
      if(select === random){
        setScore((prev) => prev + 2);
      }
      else{
        setScore((prev) => prev-1);
      }
      setSelect(undefined);
  }
  return (
    <div className="top-div">
      <div>
          <div className="nav">
            <TotalScore score={score}/>
            <NumberSelector select={select} setSelect={setSelect} error={error}/>
          </div>
          <div className="roll">
            <RollDice currentDice={currentDice} rollDice={rollDice}/>
          </div>
          <div className="reset">
            <button onClick={resetScore} className="button">Reset</button>
            <br />
          </div>
          <div className="reset">
            <button onClick={() => setShowRules((prev) => !prev)} className="button">{showRules ? "Hide" : "Show"} Rules</button>
          </div>
          {showRules && <RulesContainer />}
        </div>
    </div>
    
  )
}

export default GamePlay