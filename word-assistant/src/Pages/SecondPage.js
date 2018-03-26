import React from 'react';
import { View, Button, StyleSheet, Image, TextInput } from 'react-native';
import _ from 'lodash';
import Header from '../Components/Common/Header';
import Page from '../Components/Common/Page';
import LetterBoxes from '../Components/Common/LetterBoxes';

class SecondPage extends React.Component {
	static navigationOptions = {
		tabBarLabel: '2'
	};
	constructor(props) {
		super(props);
		this.state = {
			numberOfLetter: null,
			letters: []
		};
	}

	renderBox() {
		return this.state.letters.map(letter => {
			return <LetterBoxes key={letter.id} />;
		});
	}

	renderLetterBoxes() {
		return <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginTop: 10 }}>{this.renderBox()}</View>;
	}

	onChangeText(value) {
		if (_.isNumber(_.toNumber(value))) {
			this.setState({ numberOfLetter: value });
			var letters = [];
			for (var i = 0; i < value; i++) {
				letters.push({ id: i, letter: null });
			}
			this.setState({ letters: letters });
		}
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header headerText="İkinci Sayfa" />
				<Page style={{ flex: 1 }}>
					<TextInput
						style={{
							borderColor: 'black',
							borderRadius: 10,
							borderWidth: 1,
							padding: 10
						}}
						keyboardType="numeric"
						placeholder="Harf sayısı"
						onFocus={() => {
							if (this.state.numberOfLetter) {
								this.setState({ numberOfLetter: null });
							}
						}}
						onChangeText={newValue => this.onChangeText(newValue)}
						value={this.state.numberOfLetter}
					/>
					{this.renderLetterBoxes()}
				</Page>
			</View>
		);
	}
}

export default SecondPage;
