import React from "react";

import LanguageList from "../components/LanguageList";

class WordsList extends React.Component {
  state = {
    selectedDisplayLanguage: "",
    selectedDisplayWords: [],
    isLoading: true,
  };

  handleLanguageClick = (event) => {
    const {
      target: { value },
    } = event;

    const {
      words: { German, French, Spanish },
    } = this.props;
    console.log(value);
    if (value === "German")
      this.setState({
        selectedDisplayLanguage: value,
        selectedDisplayWords: German,
      });
    else if (value === "French")
      this.setState({
        selectedDisplayLanguage: value,
        selectedDisplayWords: French,
      });
    else if (value === "Spanish")
      this.setState({
        selectedDisplayLanguage: value,
        selectedDisplayWords: Spanish,
      });
    console.log(this.state);
  };

  render() {
    const { isLoggedIn } = this.props;
    const { selectedDisplayLanguage, selectedDisplayWords } = this.state;
    if (!isLoggedIn) return <h4>Please log in</h4>;
    return (
      <section>
        <h3>Words List</h3>
        <button onClick={this.handleLanguageClick} value="German">
          German
        </button>
        <button onClick={this.handleLanguageClick} value="French">
          French
        </button>
        <button onClick={this.handleLanguageClick} value="Spanish">
          Spanish
        </button>
        <LanguageList
          selectedDisplayLanguage={selectedDisplayLanguage}
          selectedDisplayWords={selectedDisplayWords}
        />
      </section>
    );
  }
}

export default WordsList;

// German button, onClick, display german words
// Spanish button, onClick, display spanish words
// French button, onClick, display french words

/* <ul>
  {German.map((wordObject, index) => {
    return (
      <li key={index}>{`${Object.keys(wordObject)} - ${Object.values(
        wordObject
      )}`}</li>
    );
  })}
</ul> */