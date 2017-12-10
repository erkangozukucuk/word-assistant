import React from "react";
import { TextInput } from "react-native";

export default class LetterBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
  }

  render() {
    return (
      <TextInput
        style={{
          padding: 10,
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 10,
          fontSize: 20,
          textAlign: "center",
          margin: 5
        }}
        placeholder="*"
        textAlign="center"
        onFocus={() => this.setState({ text: null })}
        onChangeText={newValue => {
          if (this.state.text === null) {
            this.setState({ text: newValue });
          } else {
            return;
          }
        }}
        value={this.state.text}
      />
    );
  }
}
