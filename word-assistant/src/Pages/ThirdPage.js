import React from "react";
import { View, Button, StyleSheet, Image, TextInput } from "react-native";
import Header from "../Components/Common/Header";

class ThirdPage extends React.Component {
  static navigationOptions = {
    tabBarLabel: "3"
  };

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      deleteItem: ""
    };
  }
  add(text, successCallback) {
    this.props.screenProps.db.transaction(
      tx => {
        tx.executeSql("insert into words (word) values (?)", [text]);
        tx.executeSql("select * from words", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      err => console.log(err),
      succ => successCallback()
    );
  }

  delete(text, successCallback) {
    this.props.screenProps.db.transaction(
      tx => {
        tx.executeSql("delete from Words where word = (?)", [text]);
      },
      err => console.log(err),
      succ => successCallback()
    );
  }

  deleteTables() {
    this.props.screenProps.db.transaction(
      tx => {
        tx.executeSql("drop table words");
      },
      err => console.log(err),
      succ => console.log("basarılı silindi")
    );
  }

  getAll() {
    console.log(this.props.screenProps.db);
    this.props.screenProps.db.transaction(
      tx => {
        tx.executeSql(
          "select count(*) as count from words",
          [],
          (_, results) => {
            console.log(JSON.stringify(results.rows));
            this.setState({ wordCount: results.rows });
          }
        );
        tx.executeSql("select * from words", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      err => console.log(err)
    );
  }

  render() {
    return (
      <View>
        <Header headerText="Üçüncü Sayfa" />
        <TextInput
          onChangeText={val => this.setState({ newItem: val })}
          value={this.state.newItem}
        />
        <Button
          onPress={() =>
            this.add(this.state.newItem, () => this.setState({ newItem: "" }))
          }
          title="ekle"
        />
        <Button onPress={() => this.getAll()} title="getAll" />
        <TextInput
          onChangeText={val => this.setState({ deleteItem: val })}
          value={this.state.deleteItem}
        />
        <Button
          onPress={() =>
            this.delete(this.state.deleteItem, () =>
              this.setState({ deleteItem: "" })
            )
          }
          title=" delete item"
        />
      </View>
    );
  }
}

export default ThirdPage;
