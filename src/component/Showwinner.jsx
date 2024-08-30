import React from "react";

const Showwinner = (props) => {
  const { winner, setWinner, restart } = props;
  return (
    <div>
      {winner && (
        <div className="winner">
          <div className="winnermsgbox">
            <h3>恭喜{winner}獲得本次勝利!</h3>
            <button className="restart" onClick={restart}>
              開始新遊戲
            </button>
          </div>

          <div className="fwbox">
            <div class="fireworks">
              <div class="firework">
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
              </div>
              <div class="firework" style={{ marginTop: "-70px" }}>
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
              </div>
              <div class="firework">
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
              </div>
              <div class="firework" style={{ marginTop: "-70px" }}>
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
              </div>
              <div class="firework">
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
              </div>
              <div class="firework" style={{ marginTop: "-70px" }}>
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
              </div>
              <div class="firework">
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark red"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
                <div class="explosion">
                  <div class="spark blue"></div>
                </div>
                <div class="explosion">
                  <div class="spark green"></div>
                </div>
                <div class="explosion">
                  <div class="spark yellow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showwinner;
