import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import SingleStat from "./SingleStat";

function Stats({
  areStatsVisible,
  constantTimerValue,
  // from statsReducer
  currentStatsKey,
  

  setCurrentStatsKey,
  currentStats,
  deleteCurrentStatsArr,
  five_s,
  thirty_s,
  one_min,
  two_min,
  five_min
}) {
 

  // inverted version of  changeCurrentStatsKey from resultsAndTimerReducer
  function changeCurrentStatsKey(payload) {
    switch (payload) {
      case "five_s":
        return "5";
        // setCurrentStatsArr(five_s);
        // break;
      case "thirty_s":
        // setCurrentStatsArr(thirty_s);
        return "30";
        // break;
      case "one_min":
        // setCurrentStatsArr(one_min);
        return "60";
        // break;
      case "two_min":
        // setCurrentStatsArr(two_min);
        return "120";
        break;
      case "five_min":
        return "300";
        // setCurrentStatsArr(five_min);
        // break;

      default:
        return "60";
    }
    // setCurrentStatsArr(e.target.value)
  }

  return (
    <div
      className="stats"
      style={{
        visibility: `${areStatsVisible ? "visible" : "hidden"}`
      }}
    >
      <div className="inner-stats container">
        <div className="top-score-main">
          <p className="top-score-title">Top score</p>
          <div className="top-score-select-div">
            <p>timer length:&nbsp;</p>
            <select
              className="control-item timer-select top-score-timer-select"
              // onChange={props.setTimerOnSelect}
              // onChange={(e) => {
                // setCurrentStatsKey(e.target.value)
                // }}

              // ref={props.isDisabled}
              // defaultValue="60"
              // defaultValue={constantTimerValue.toString()}
              value={constantTimerValue.toString()}
            >
              <option value="5">00:05</option>
              <option value="30">00:30</option>
              <option value="60">01:00</option>
              <option value="120">02:00</option>
              <option value="300">05:00</option>
            </select>
          </div>
        </div>

        <ul className="top-score-list container">
        {/* !! [] not . */}
          {currentStats[currentStatsKey].map((el, i) => {
            if (i > 9) {
              return null;
            } else {
              return <SingleStat speed={el[0]} accuracy={el[1]} key={i} />;
            }
          })}
        </ul>
        
        <div className="delete-top-score-div">
        <span className="delete-top-score-text">
          {/* Delete top score for selected timer length -&nbsp; */}
          Delete top score for selected timer length&nbsp;&nbsp;
        </span>
        <button
          className="btn btn-control control-item btn-reset btn-delete-stats"
          onClick={
             deleteCurrentStatsArr
           }
        >
          x
        </button>
        </div>

     
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentStatsKey: state.resultsAndTimerState.stats.currentStatsKey,
    currentStats: state.resultsAndTimerState.stats,
    constantTimerValue: state.resultsAndTimerState.counter.constantTimerValue

  };
};


const mapDispatchToProps = dispatch => {
  return {
    setCurrentStatsKey: (data) => dispatch({ type: "SET_CURRENT_STATS", payload: data }),
    deleteCurrentStatsArr: () => dispatch({ type: "DELETE_CURRENT_STATS" }),
   
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // Your component will receive dispatch by default, i.e., when you do not supply a second parameter to connect():
)(Stats);
