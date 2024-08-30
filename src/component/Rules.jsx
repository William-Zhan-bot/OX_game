import React from "react";

const Rules = (props) => {
  const { round, setRound, open, setOpen } = props;

  // 判斷呈現規則還是回合
  let word;
  if (round === 0) {
    let rulesay = "圈圈先手，請點擊方格開始開始!";
    word = <div className="Word">{rulesay}</div>;
  }

  // 告知下一步
  if (round % 2 !== 0) {
    word = <div className="Word">換圈圈下</div>;
  } else {
    word = <div className="Word">換叉叉下</div>;
  }

  // 重新啟動
  const restart = () => {
    // 重製回合以及開始頁面
    setRound(0);
    setOpen(true);

    // 清空class
    let nodes = document.querySelectorAll("div.BoxBorder");

    // 每格有獨立的class
    for (let q = 0; q < nodes.length; q++) {
      // 清空class
      nodes[q].classList.remove("c");
      nodes[q].classList.remove("n");
    }
  };

  // 重啟遊戲
  if (round >= 10) {
    word = (
      <div className="Word">
        <button className="restart" onClick={restart}>
          本局無勝負，按我重新開始
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="Talkbox">{word}</div>
    </div>
  );
};

export default Rules;
