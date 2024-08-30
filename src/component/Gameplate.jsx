import React from "react";

const Gameplate = (props) => {
  const { round, setRound, winner, setWinner } = props;

  // 設定按鈕
  const Clicked = (event) => {
    // 確認是否重複click
    if (event.currentTarget.classList.length === 3) {
      return;
    }

    // 回合預設0 按下開始為1 判斷圈差
    if (round % 2 !== 0) {
      // 圈 noughts
      event.currentTarget.classList.add("n");
    } else {
      // 叉 cross
      event.currentTarget.classList.add("c");
    }
    rowWinnerCheck();
    columnWinnerCheck();
    diagonalcheck();
    setRound(round + 1);

    // 橫排檢驗
    function rowWinnerCheck() {
      // 取得橫排的名單
      let check_list = document.querySelector("div.BigBox").children;
      for (let o = 0; o < check_list.length; o++) {
        // 設定子node
        let box_lst = check_list[o];
        // 依序抽查子節點進行加分
        let count = 0;
        for (let i = 0; i < box_lst.children.length; i++) {
          if (box_lst.children[i].classList[2] === "n") {
            count += 1;
          }
          if (box_lst.children[i].classList[2] === "c") {
            count += 4;
          }
          // 宣告勝負
          if (count === 3) {
            setWinner("圈圈");
          }
          if (count === 12) {
            setWinner("叉叉");
          }
        }
      }
    }

    // 直排檢驗
    function columnWinnerCheck() {
      // 取得名單
      let lst = [1, 4, 7];
      let s = 0; //用來跌代
      // 調整index
      for (let i = 0; i < 3; i++) {
        // 計分器
        let c_count = 0;
        // 執行操作
        for (let p = 0; p < lst.length; p++) {
          let index = "div.SmallBox" + (lst[p] + s).toString();
          let query = document.querySelector(index);

          // 判斷OX與計分
          if (query.classList[2] === "n") {
            c_count += 1;
          }
          if (query.classList[2] === "c") {
            c_count += 4;
          }
          // 宣告勝負
          if (c_count === 3) {
            setWinner("圈圈");
          }
          if (c_count === 12) {
            setWinner("叉叉");
          }
        }
        s += 1;
      }
    }

    // 斜向檢驗
    function diagonalcheck() {
      let dc_total = [
        [1, 5, 9],
        [3, 5, 7],
      ];
      // 檢驗斜角
      // 載入清單
      for (let o = 0; o < 2; o++) {
        // 執行搜索
        let dc = dc_total[o];
        let d_count = 0;
        for (let p = 0; p < 3; p++) {
          let ind = "div.SmallBox" + dc[p].toString();
          let query = document.querySelector(ind);
          // 判斷OX與計分
          if (query.classList[2] === "n") {
            d_count += 1;
          }
          if (query.classList[2] === "c") {
            d_count += 4;
          }
          // 宣告勝負
          if (d_count === 3) {
            setWinner("圈圈");
          }
          if (d_count === 12) {
            setWinner("叉叉");
          }
        }
      }
    }
  };

  return (
    <div className="BigBox">
      <div className="line line1">
        <div className="SmallBox1 BoxBorder" onClick={Clicked}></div>
        <div className="SmallBox2 BoxBorder" onClick={Clicked}></div>
        <div className="SmallBox3 BoxBorder" onClick={Clicked}></div>
      </div>
      <div className="line line2">
        <div className="SmallBox4 BoxBorder" onClick={Clicked}></div>
        <div className="SmallBox5 BoxBorder" onClick={Clicked}></div>
        <div className="SmallBox6 BoxBorder" onClick={Clicked}></div>
      </div>
      <div className="line line3">
        <div className="SmallBox7 BoxBorder" onClick={Clicked}></div>
        <div className="SmallBox8 BoxBorder" onClick={Clicked}></div>
        <div className="SmallBox9 BoxBorder" onClick={Clicked}></div>
      </div>
      <script src="./funcs/"></script>
    </div>
  );
};

export default Gameplate;
