import React, { useState} from 'react';
import config from "../../config/URLnode.json";
import { Text, Image, View, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons  } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import { Toast } from 'toastify-react-native';

export default function Login(){
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [inputs, setInputs] = useState('');
  const [ocultarSenha, setOcultarsenha] = useState(true);

  const NavigationLogin = () => {
    navigation.navigate("SistemaNavigator");
  };

//Envia os dados do formulario para o banco 
async function Login() 
{
  console.log("chegou");
   let reqs = await fetch(config.urlRootNode + 'login', {
     method: 'POST',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json'
     },
     body: JSON.stringify({
      email: email.replace(/\s/g, ''),
      senha: inputs.replace(/\s/g, '')
     })


  }).then( res => res.json()).then( res => res)
console.log(reqs)
if (reqs.status === "OK") {
  navigation.navigate("SistemaNavigator")
} else if(reqs.status ==="senha err"){
  Toast.error(reqs.msg)
}else{
  Toast.error(reqs.msg)
}
return
}

  return(
    <View style={{flex: 1}}>

      <ImageBackground source={require('../../../public/assets/fundoTelaLogin.png')} 
        resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>

        <View style={{alignItems: 'center'}}>
          <Image source={require('../../../public/assets/logoSpaceCine.png')} />

        </View>

        <View style={styles.back}>
          <TextInput
              backgroundColor="#000000"
              underlineColor="#B6B6B6"
              activeUnderlineColor="#B6B6B6"
               value={email}
              onChangeText={ (texto) => setEmail(texto)}
              style={styles.email}
              textColor="#fff"
              label="Email"
            />
            
          <View style={styles.campoSenha}>
            <TextInput
              backgroundColor="#000000"
              secureTextEntry={ocultarSenha}
              value={inputs}
              onChangeText={ (texto) => setInputs(texto)}
              underlineColor="#B6B6B6"
              activeUnderlineColor="#B6B6B6"
              textColor="#fff"
              style={styles.inputs}
              label="Senha"
            />

            <TouchableOpacity style={styles.icone} onPress={ () => setOcultarsenha(!ocultarSenha)}>
              {ocultarSenha ? 
                <Ionicons name="eye" size={25} color='gray'/>
                :
                <Ionicons name="eye-off" size={25} color='gray'/>
              }
            </TouchableOpacity>    
          </View>

          <View style={{alignSelf: 'flex-end', paddingRight: 10}}>
          <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('TelaCadastro')}
        >
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
          </View>
        </View>
          
        <View style={{alignItems: 'center'}}>
          <DefaultButton
            buttonText={'Acessar'}
            backgroundColor={'#000000'}
            marginTop={14}
            click={Login}
            width={200}
            height={50}
          />
        </View>
        
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  campoSenha:{
    flexDirection:"row",
    width: '100%',
    backgroundColor:'#000000',
    borderRadius: 5,
    height:70,
    alignItems: 'center',
  },

  inputs: {
    width: '85%',
    height:50,
  },

  icone:{
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  back: {
    backgroundColor: '#000000',
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },

  texto: {
    fontSize: 15,
    color: '#000000',
    fontSize: 18,
  },

  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  
  registerText: {
    color: '#a1a1a1',
  },
});