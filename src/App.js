import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from '@firebase/app';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBLqgasRyIciUMz6rGueEeoUMrSjyS0g58',
            authDomain: 'auth-9b816.firebaseapp.com',
            databaseURL: 'https://auth-9b816.firebaseio.com',
            projectId: 'auth-9b816',
            storageBucket: 'auth-9b816.appspot.com',
            messagingSenderId: '204081789738'
        });
    }

    render() {
        return (
        <View>
            <Header headerText="Authentication" />
            <LoginForm />
        </View>
        );
    }
}

export default App;
