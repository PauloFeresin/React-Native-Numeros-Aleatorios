import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';





const App = () => {

    const [numero, setNumero] = useState(0)

    function handleNumero(){

        const novoNumero = Math.floor(Math.random() * 10)

        setNumero(novoNumero)
    };

    return(
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} style={style.botao}>
                <Text>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ff0000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    numero: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
    },
    botao: {
        backgroundColor: 'white',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
})




export default App;