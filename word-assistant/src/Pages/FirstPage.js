import React from "react";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  Switch,
  Button
} from "react-native";
import Header from "../Components/Common/Header";
import Page from "../Components/Common/Page";

class FirstPage extends React.Component {
  static navigationOptions = {
    tabBarLabel: "1"
  };

  constructor(props) {
    super(props);
    this.state = {
      wordCount: 0
    };
  }

  render() {
    let i = 0;
    return (
      <View style={{ flex: 1, backgroundColor: "#FAF8F8" }}>
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
          />
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Switch value={true} onTintColor="#0072C4" tintColor="#0072C4" />
            <Switch />
          </View>
          <View style={{ flex: 6 }}>
            <ScrollView>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>fbklgfbmfglkbmlfkgmb</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
              <Text>asdasdasdad</Text>
            </ScrollView>
          </View>
        </Page>
      </View>
    );
  }
}

export default FirstPage;
