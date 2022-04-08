import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function index() {
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText] = useState("");

    const translate = () => {
        axios({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: "GET",
            url: "http://google-translate-api-tugas.herokuapp.com/api/en/id/".concat(text),
        }).then(result => {
            setTranslatedText(result["data"]["trans"]);
        })
    }

    return (
        <View>
            <Text style={styles.title}> Simple Translator App </Text>
            <Text> English word / sentences : </Text>
            <TextInput
                style={styles.inputan}
                onChangeText={setText}
                value={text}
                placeholder="Masukkan text Bahasa Inggris disini..."
                multiline={true}
                numberOfLines={4}
            />
            <Button title='Translate' onPress={() => translate(text)}>
            </Button>
            <Text>  In Indonesia is : </Text>
            <TextInput
                style={styles.inputan}
                value={translatedText}
                placeholder="Text dalam Bahasa Indonesia akan muncul disini..."
                multiline={true}
                numberOfLines={4}
                editable={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputan: {
        borderColor: 'black',
        color: 'black',
        borderWidth: 1,
        padding: 5,
        marginTop: 10
    },
});
