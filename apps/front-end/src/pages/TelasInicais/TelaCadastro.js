import React, { useState } from "react";
import config from "../../config/URLnode.json";
import { TextInput } from 'react-native-paper';
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Container, { Toast } from 'toastify-react-native'

import DefaultButton from "../../components/DefaultButton/DefaultButton";



export default function Cadastro() {
  const navigation = useNavigation();
  const [input, setInput] = useState(null); //aqui fica o valor que o setInput e o nome que e input então fica assim 'input = setInput'
  const [nome, setNome] = useState(null);
  const [hidePass, setHidepass] = useState(true);
  const [input2, setInput2] = useState(null); //aqui fica o valor que o setInput2 e o nome que e input2 então fica assim 'input2 = setInput2'
  const [confirmar, setConfirmar] = useState(null);
  const [hidePass2, setHidepass2] = useState(true);

  const NavigationSistema = () => {
    navigation.navigate("TelaLogin");
  };


  //Envia os dados do formulario para o banco 
  async function registerUser() 
  {
    let  reqs = await fetch( config.urlRootNode +'create', {
      method: 'POST',


      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        email: input.replace(/\s/g, ''),
        senha: input2.replace(/\s/g, ''),
        confirmars: confirmar.replace(/\s/g, '')
      })
    }).then( res => res.json()).then(res => res)

    console.log(reqs);
    if (reqs.status === "OK") {
        navigation.navigate("TelaLogin")
    } else{
      Toast.error(reqs.msg)
    }


  }
  

  return (
    // Esse view vai ser a logo
    
    <View style={{ flex: 1 }}> 
  <Container position="top"/>
      <ImageBackground source={require('../../../public/assets/fundoTelaLogin.png')}
        resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>

        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../../public/assets/logoSpaceCine.png')} />

        </View>

        {/* Esse view e a barra do email */}
        <View style={styles.container}>
          <TextInput
            backgroundColor="#000000"
            underlineColor="#B6B6B6"
            activeUnderlineColor="#B6B6B6"
            onChangeText={(texto) => setNome(texto)}
            Value={nome}
            textColor="#fff"
            label="Nome"
          />
          <TextInput
            backgroundColor="#000000"
            underlineColor="#B6B6B6"
            activeUnderlineColor="#B6B6B6"
            onChangeText={(texto) => setInput(texto)}
            Value={input}
            textColor="#fff"
            label="Email"
          />
          {/* Esse view e a barra da senha */}
          <View style={styles.senha}>
            <TextInput
              backgroundColor="#000000"
              underlineColor="#B6B6B6"
              activeUnderlineColor="#B6B6B6"
              textColor="#fff"
              secureTextEntry={hidePass}
              style={styles.input}
              value={input2}
              onChangeText={(texto) => setInput2(texto)}
              label="Senha"
            />
            
            {/* Aqui e o botão que chama a função para mudar o valor do olho e esconder o texto   */}
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidepass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" size={25} color="gray" />
              ) : (
                <Ionicons name="eye-off" size={25} color="gray" />
              )}
            </TouchableOpacity>
          </View>
          {/* Esse view e a barra da CORFIRMAR SENHA */}
{/* Esse view e a barra da senha */}
<View style={styles.senha}>
            
            <TextInput
              backgroundColor="#000000"
              underlineColor="#B6B6B6"
              activeUnderlineColor="#B6B6B6"
              textColor="#fff"
              secureTextEntry={hidePass}
              style={styles.input}
              value={confirmar}
              onChangeText={(texto) => setConfirmar(texto)}
              label="Confirmar senha"
            />
            {/* Aqui e o botão que chama a função para mudar o valor do olho e esconder o texto   */}
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidepass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" size={25} color="gray" />
              ) : (
                <Ionicons name="eye-off" size={25} color="gray" />
              )}
            </TouchableOpacity>
          </View>
          {/* vai ficar o nome "Já tem uma conta?" */}
          <View style={{ alignSelf: "flex-end", paddingRight: 10 }}>
          <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('TelaLogin')}
        >
          <Text style={styles.registerText}>Já possui uma conta? Faça login</Text>
        </TouchableOpacity>
          </View>
        </View>
        {/* Aqui e o botão cadastrar */}
        {/* aqui tem duas opções para fazer mudar a função DefaultButton ou colocar */}
        <View style={{ alignItems: "center" }}>
          <DefaultButton
            buttonText={"Cadastrar"}
            backgroundColor={"#000000"}
            marginTop={14}
            click={registerUser}
            width={"70%"}
            height={50}
          />
        </View>

       
      </ImageBackground>
    </View>


  );
}
// Aqui fica os estilos.
const styles = StyleSheet.create({
  senha: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 5,
    height: 70,
    alignItems: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 20,
  },

  input: {
    width: "85%",
    height: 50,
    pedding: 8,
  },

  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    backgroundColor: "#000000",
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },
  logo: {
    width: 400,
    height: 50,

    alignItems: "center",
  },

  texto: {
    fontSize: 15,
    color: "#FFFFFF",
    fontSize: 18,
  },

  registerText: {
    color: '#a1a1a1',
  },
  
  buttonLogin: {
    marginTop: 14,
    alignSelf: 'center',
  },
});
