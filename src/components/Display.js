import React from "react";
import { useState, useEffect, useRef } from "react";
import SingleLetter from "./SingleLetter.js";

function Display(props) {
  let myText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ENIM ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna ALIQua.`;

  let lengthOfSinglePart = 362;
  let myTextToArr = myText.split("");
  let roundedTextDividedByLength = Math.round(
    myTextToArr.length / lengthOfSinglePart
  );

  let arrOfPartialText = makeArrOfPartialText(lengthOfSinglePart, myTextToArr);

  //362 text length fits
  //console.log(myText.length);

  const [indexOfPartialTextArr, setIndexOfPartialTextArr] = useState(0);

  //const [textToRender, setTextToRender] = useState(arrOfPartialText[0]);
  const textToRender = arrOfPartialText[indexOfPartialTextArr];

  let arrOutOfText = textToRender.split("");

  const [colorForEachLetter, setColorForEachLetter] = useState(
    makeColoredLetters()
  );

  const [textAreaValue, setTextAreaValue] = useState("");
  const [prevTextAreaValue, setPrevTextAreaValue] = useState("");

  let arrOutOfTextValue = textAreaValue.split("");

  //coloring letters in display according to errors or no
  //  + counting entries!!

  useEffect(() => {
    let arrOfColors = [...colorForEachLetter];

    //console.log(arrOfColors.length);

    for (let i = 0; i < textAreaValue.length; i++) {
      if (arrOutOfTextValue[i] !== arrOutOfText[i]) {
        arrOfColors[i] = "red";
      }

      if (arrOutOfTextValue[i] === arrOutOfText[i]) {
        arrOfColors[i] = "LimeGreen";
      }
    }

    for (let i = 0; i < arrOutOfText.length; i++) {
      if (arrOutOfTextValue[i] == null) {
        arrOfColors[i] = "black";
      }
    }

    setColorForEachLetter(arrOfColors);
    // for counting

    if (textAreaValue.length < prevTextAreaValue.length) {
        props.setResultsCorrected(props.resultsCorrected+1)
    }

    // for correct, incorrect, allEntries
    if (textAreaValue.length > prevTextAreaValue.length) {
      props.setResultsNoPenalty(props.resultsNoPenalty + 1);

      console.log(textAreaValue.length);

      if (arrOfColors[textAreaValue.length - 1] === "LimeGreen") {
        props.setResultsCorrect(props.resultsCorrect + 1);
      }

      if (arrOfColors[textAreaValue.length - 1] === "red") {
        props.setResultsIncorrect(props.resultsIncorrect + 1);
      }
    }
    setPrevTextAreaValue(textAreaValue);
  }, [textAreaValue]);

  // reseting display

  useEffect(() => {
    if (props.toReset) {
      resetDisplay();
    }
  }, [props.toReset]);

  // displaying next part of text to display
  const arrToRender = makeArrayToRender();

  function makeArrOfPartialText(lengthOfSinglePart, myTextToArr) {
    let arrOfPartialText = [];
    //let myTextToArr = text.split("");

    for (let i = 0; i < roundedTextDividedByLength; i++) {
      let newArr = [];
      for (
        let j = 0 + i * (lengthOfSinglePart + 1);
        j < lengthOfSinglePart + i * lengthOfSinglePart;
        j++
      ) {
        newArr.push(myTextToArr[j]);
      }

      let joinedNewArr = newArr.join("");

      arrOfPartialText.push(joinedNewArr);
    }

    //console.log(arrOfPartialText);
    return arrOfPartialText;
  }

  function makeColoredLetters() {
    let arrToReturn = [];
    for (let i = 0; i < arrOutOfText.length; i++) {
      arrToReturn.push("black");
    }
    return arrToReturn;
  }

  function makeArrayToRender() {
    let arrToSet = [];
    for (let i = 0; i < arrOutOfText.length; i++) {
      let newArr = [];
      newArr.push(arrOutOfText[i]);
      newArr.push(colorForEachLetter[i]);
      arrToSet.push(newArr);
    }

    return arrToSet;
  }

  function changeTextAreaValue(e) {
    //console.log();

    if (e.target.value.length === textToRender.length) {
      e.target.value = "";
      setTextAreaValue("");

      if (indexOfPartialTextArr < roundedTextDividedByLength - 1) {
        setIndexOfPartialTextArr(
          indexOfPartialTextArr => indexOfPartialTextArr + 1
        );
      } else {
        setIndexOfPartialTextArr(0);
      }
    }

    setTextAreaValue(e.target.value);
  }

  function resetDisplay() {
    setTextAreaValue("");
    setIndexOfPartialTextArr(0);
    setColorForEachLetter(makeColoredLetters());
  }

  function preventArrowKeys(event) {
    let arrowKeysArr = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    if (arrowKeysArr.indexOf(event.key) !== -1) {
      event.preventDefault();
    }
  }

  function focusOnlyOnClick(event) {
    //props.putFocusOnTextArea()
    let myTarget = event.target;
    myTarget.setSelectionRange(myTarget.value.length, myTarget.value.length);
  }

  return (
    <div className="outer-container">
      <div
        className="hints"
        style={{
          visibility: `${props.areHintsVisible ? "visible" : "hidden"}`
        }}
      >
        <div className="inner-hints container">
          <p className="hints-title">Hints</p>
          <ul>
            <li>Change the timer value (optional)</li>
            <li>Type in typing area to start/resume</li>
            <li>
              Press <b>Tab</b> to pause, <b>Enter</b> to resume
            </li>
            <li>
              Press <b>Shift+Delete</b> to reset
            </li>
            <li>Mouse over result labels for more information</li>
          </ul>
        </div>
      </div>
      <h3 className="title">Typing App</h3>
      <div className="main-square">
        <div className="upper-ui container">
          <p className="counter ">{props.timerValue}</p>
          <button
            className="btn btn-display-hints"
            onClick={props.toggleHints}
            style={{
              backgroundColor: `${props.areHintsVisible ? "black" : "green"}`
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = `${
                props.areHintsVisible ? "green" : "black"
              }`;
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = `${
                props.areHintsVisible ? "black" : "green"
              }`;
            }}
          >
            ?
          </button>
        </div>
        <div className="wiki-display container">
          {arrToRender.map((el, i) => {
            return (
              <SingleLetter letterToRender={el[0]} color={el[1]} key={i} />
            );
          })}
        </div>

        <textarea
          className="typing-display container"
          onChange={e => {
            changeTextAreaValue(e);

            if (!props.isActive) {
              props.toggleTimer();
            }
          }}
          autoFocus
          // crucial for two-way binding! reset button
          value={textAreaValue}
          ref={props.focusTextArea}
          onPaste={e => {
            e.preventDefault();
          }}
          onKeyDown={preventArrowKeys}
          onClick={focusOnlyOnClick}

          //onBlur={props.toggleTimer}
        ></textarea>

        <div className="control-buttons-row container">
          <div className="column-left">
            <button
              className="btn btn-control control-item"
              onClick={() => props.toggleTimer()}
            >
              {props.isActive ? "Pause" : "Start"}
            </button>
            <select
              className="control-item"
              onChange={props.setTimerOnSelect}
              // ref={composeRefs(focusElement, props.isDisabled)}
              ref={props.isDisabled}
            >
              <option value="5">00:05</option>
              <option value="30">00:30</option>
              <option value="60">01:00</option>
            </select>
          </div>

          <div className="column-right">
            <button
              className="btn btn-control control-item btn-reset"
              onClick={event => {
                props.resetTimer();
                props.putFocusOnTextArea();

                //resetDisplay();
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="results-buttons-row container">
          <button
            className="btn btn-control btn-results"
            onClick={props.toggleResults}
            style={{
              backgroundColor: `${
                props.areResultsVisible ? "black" : "steelblue"
              }`
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = `${
                props.areResultsVisible ? "steelblue" : "black"
              }`;
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = `${
                props.areResultsVisible ? "black" : "steelblue"
              }`;
            }}
            ref={props.focusElement}
          >
            Show<span style={{ margin: "auto 0.05em" }}>|</span>Hide Results
          </button>
        </div>
      </div>
      <div
        className="results"
        style={{
          visibility: `${props.areResultsVisible ? "visible" : "hidden"}`
        }}
      >
        <div className="inner-results container">
          <p className="results-title">Results</p>
          <ul>
            <li>Speed: {props.resultsObj.speed} KPM</li>
            <li>Accuracy: {props.resultsObj.accuracy}%</li>

            <li>Correct Entries: {props.resultsObj.correct}</li>
            <li>Incorrect Entries: {props.resultsObj.incorrect}</li>
            <li>KPM no penalties: {props.resultsObj.noPenalty}</li>
            <li>Corrected Entries: {props.resultsObj.corrected}</li>

            <li>Timer length: {props.resultsObj["timer length"]}</li>
            <li>Date: {props.resultsObj.date}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Display;