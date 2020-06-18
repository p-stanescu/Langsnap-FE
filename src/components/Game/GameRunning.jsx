import React from "react";
import Loading from "../Loading";

export default function GameRunning({
  isLoading,
  transWord,
  associatedWords,
  playGame,
  resetIsStarted,
  openAlert,
  alertMessage,
}) {
  return (
    <main className="pageContainer">
      <section className="titleBackground">
        <div className="titleContainer">
          <h1 className="titleHeader">Test</h1>
        </div>
      </section>

      <section className="contentBackground">
        <div className="contentContainer">
          <div className="gameLabelContainer">
            <p>{transWord}</p>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {openAlert && <h3 className="alertPrimary">{alertMessage}</h3>}
              {associatedWords.map((wordObj) => {
                return (
                  <div key={wordObj} className="gameRunningContainer">
                    <input
                      type="radio"
                      id={wordObj}
                      name={wordObj}
                      value={wordObj}
                      onClick={(event) => playGame(event)}
                      className="gameInputRadio"
                    />
                    <p className="gameSpan">{wordObj}</p>
                  </div>
                );
              })}
            </>
          )}
          <br />
          <button
            onClick={(event) => resetIsStarted(event)}
            className="selectLanguageButton"
          >
            {`◀ Select Language`}
          </button>
        </div>
      </section>
    </main>
  );
}
