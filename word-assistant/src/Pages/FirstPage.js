import React from "react";
import { View, TextInput, FlatList, Text, Switch, Button } from "react-native";
import Header from "../Components/Common/Header";
import Page from "../Components/Common/Page";

let words = [];

class FirstPage extends React.Component {
  static navigationOptions = {
    tabBarLabel: "1"
  };

  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      filteredWords: null,
      allWords: null,
      onlyThisChars: true,
      includeThisChars: false
    };
  }

  componentDidMount() {
    this.props.screenProps.db.transaction(
      tx => {
        tx.executeSql("select * from words", [], (_, { rows }) => {
          console.log(JSON.stringify(rows["_array"]));
          rows["_array"].forEach(element => {
            words.push(element);
          });
          console.log(words);
          this.setState({ allWords: words });
        });
      },
      err => console.log(err)
    );
  }

  onValueChange(text) {
    var a = this.state.allWords.filter(item => item.word.includes(text));
    this.setState({ filteredWords: a });
  }

  render() {
    let i = 0;
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Birinci Sayfa" />
        <Page>
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "black",
              paddingLeft: 10,
              fontSize: 20
            }}
            underlineColorAndroid="transparent"
            onChangeText={text => {
              this.setState({
                searchText: text
              });
              this.onValueChange(text);
            }}
            value={this.state.searchText}
          />
          <View style={{ flex: 1, alignItems: "flex-start", marginTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Switch
                style={{ marginRight: 10 }}
                value={this.state.onlyThisChars}
                onValueChange={newValue =>
                  this.setState({
                    onlyThisChars: newValue,
                    includeThisChars: !newValue
                  })
                }
                onTintColor="black"
                thumbTintColor="#FF4E40"
              />
              <Text
                style={{
                  textAlign: "center",
                  color: this.state.onlyThisChars ? "black" : "gray"
                }}
              >
                Sadece bu harfler.
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Switch
                style={{ marginRight: 10 }}
                value={this.state.includeThisChars}
                onValueChange={newValue =>
                  this.setState({
                    includeThisChars: newValue,
                    onlyThisChars: !newValue
                  })
                }
                onTintColor="black"
                thumbTintColor="#FF4E40"
              />
              <Text
                style={{
                  textAlign: "center",
                  color: this.state.includeThisChars ? "black" : "gray"
                }}
              >
                Bu harfleri içeren.
              </Text>
            </View>
          </View>
          <View style={{ flex: 6 }}>
            <FlatList
              data={this.state.filteredWords || this.state.allWords}
              renderItem={({ item }) => (
                <Text
                  style={{
                    textShadowRadius: 20,
                    fontSize: 18,
                    color: item.id % 2 === 0 ? "black" : "orange"
                  }}
                >
                  {item.word}
                </Text>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </Page>
      </View>
    );
  }
}

export default FirstPage;
