import Rules from "./component/Rules";
import Gameplate from "./component/Gameplate";
import Startside from "./component/Startside";
import Showwinner from "./component/Showwinner";
import { useState } from "react";

function App() {
  // States
  const [round, setRound] = useState(0);
  const [open, setOpen] = useState(true);
  const [winner, setWinner] = useState(null);

  // 重新啟動
  const restart = () => {
    // 重製回合以及開始頁面
    setRound(0);
    setOpen(true);
    setWinner(null);
    // 清空class
    let nodes = document.querySelectorAll("div.BoxBorder");
    // 每格有獨立的class
    for (let q = 0; q < nodes.length; q++) {
      // 清空class
      nodes[q].classList.remove("c");
      nodes[q].classList.remove("n");
    }
  };

  return (
    <div className="App">
      <Startside
        open={open}
        setOpen={setOpen}
        round={round}
        setRound={setRound}
        setWinner={setWinner}
      />
      <Showwinner winner={winner} setWinner={setWinner} restart={restart} />
      <Rules round={round} setRound={setRound} open={open} setOpen={setOpen} />
      <Gameplate
        round={round}
        setRound={setRound}
        winner={winner}
        setWinner={setWinner}
      />
    </div>
  );
}

export default App;
