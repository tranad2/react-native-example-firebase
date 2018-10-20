import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from '@firebase/app';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }
    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBLqgasRyIciUMz6rGueEeoUMrSjyS0g58',
            authDomain: 'auth-9b816.firebaseapp.com',
            databaseURL: 'https://auth-9b816.firebaseio.com',
            projectId: 'auth-9b816',
            storageBucket: 'auth-9b816.appspot.com',
            messagingSenderId: '204081789738'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={{flexDirection: 'row', paddingTop: 10}}>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={{flexDirection: 'row', paddingTop: 10}}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
        <View>
            <Header headerText="Authentication" />
            {this.renderContent()}
        </View>
        );
    }
}

export default App;
