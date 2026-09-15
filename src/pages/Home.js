import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput, Text, View } from "react-native";

import { useState } from "react";

const dadosForm={
    nome:'',
    idade:'',
    senha:'',
    maisInfos:''
}

export default function Home(){

 const [nomeestado, setNomeestado] = useState('')
    
    function aoDigitar(textoDigitado){
        console.log(`Texto Digitado: ${textoDigitado}`)
        setNomeestado(textoDigitado)
        dadosForm.nome = nomeestado
    }

    function aoEnviar(){
        //Destructuring do objeto
        const{nome, idade, senha, maisInfos} = dadosForm
        console.log( 'Formulário enviado!', {
            nome, 
            idade, 
            senha:'*'.repeat(senha.length), 
            maisInfos})
    }
    
    return(
        <View style={estilo.container}>
            <Text style={estilo.textao}>{nomeestado}</Text>
         <View style={estilo.containerInput}>

           <Text style={estilo.label}> Nome </Text>
           <TextInput
                placeholder="Digite o seu nome"
                style={estilo.input} 
                onChangeText={aoDigitar}
                value={nomeestado}
            />
         </View>

           <View style={estilo.containerInput}>
                <Text style={estilo.label}> Idade </Text>
                <TextInput
                    style={estilo.input} 
                    placeholder="Digite a sua idade"
                    keyboardType="numeric"
                    onChangeText={(texto) => (dadosForm.idade = texto)}
                />
            </View>

            <View style={estilo.containerInput}>
            <Text style={estilo.label}> Senha </Text>
                <TextInput
                    style={estilo.input} 
                    placeholder="Digite a sua idade"
                    onChangeText={(texto) => (dadosForm.senha = texto)}
                    secureTextEntry
                />             
            </View>
              
            <View style={estilo.containerInput}>
                <Text style={estilo.label}> Diga mais sobre você </Text>
                <TextInput
                    style={estilo.input} 
                    placeholder="Conte mais sobre você"
                    onChangeText={(texto) => (dadosForm.maisInfos = texto)}
                    multiline
                    maxLength={50}
                />

            </View>
            <Button
            title="Enviar"
            color=""
            onPress={aoEnviar}

            />
            
        </View>
        
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        color:'bold',
        flexDirection: 'column',
        gap: 8, //espaço entre componentes
        marginStart: 6
    },
    input:{
        borderWidth: 1,
        borderColor:'#000',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: '10',
        backgroundColor: '#ffffff'

    },
    label:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    containerInput:{
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginBottom: 12
    },
    textao: {
        fontSize: 30,
        backgroundColor: '#3f99ff',
        color: '#ffffff',
        borderRadius: 8
    
    }
})
