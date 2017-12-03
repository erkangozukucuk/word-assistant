import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { SQLite } from "expo";

import { TabNavigator } from "react-navigation";
import FirstPage from "./src/Pages/FirstPage";
import SecondPage from "./src/Pages/SecondPage";
import ThirdPage from "./src/Pages/ThirdPage";

import { InitialInsertValueQuery } from "./src/DatabaseOperations/InitialInsertValueQuery";

const db = SQLite.openDatabase("WordAssistant");

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
    db.transaction(
      tx => {
        tx.executeSql(
          "create table if not exists Words (id integer primary key autoincrement not null, word text);"
        );
      },
      err => console.log("******app fail: " + err),
      succ => {
        console.log("******app succ: " + succ);
      }
    );
  }

  render() {
    return <MyApp screenProps={{ db: db }} />;
  }
}

const MyApp = TabNavigator(
  {
    First: {
      screen: FirstPage
    },
    Second: {
      screen: SecondPage
    },
    Third: {
      screen: ThirdPage
    }
  },
  {
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarOptions: {
      activeBackgroundColor: "red",
      inactiveBackgroundColor: "#EFEFEF",
      activeTintColor: "white",
      inactiveTintColor: "black",
      labelStyle: {
        fontSize: 16
      },
      style: {
        backgroundColor: "#FF4E40"
      },
      indicatorStyle: {
        backgroundColor: "white"
      }
    }
  }
);
