import React from "react";

const Startside = (props) => {
  let { open, setOpen, round, setRound, setWinner } = props;
  const close = () => {
    setOpen(false);
    setRound(1);
    setWinner(null);
  };
  return (
    <div className="alertbox">
      {open && (
        <div className="container">
          <h2>規則說明</h2>

          <div className="talkbox">
            先手方為圈圈，後手方為叉叉，當一方在九宮格的直線中，湊成三個圈或叉的一條線，即為獲勝
          </div>

          <button onClick={close} className="startbt">
            Start
          </button>
        </div>
      )}
    </div>
  );
};
export default Startside;
