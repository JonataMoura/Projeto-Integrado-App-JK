
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

import TelaInicial from './pages/TelasInicais/TelaInicial';
import TelaLogin from  './pages/TelasInicais/TelaLogin';
import TelaCadastro from './pages/TelasInicais/TelaCadastro';
import SistemaNavigator from './pages/SistemaNavigator';

import Detalhes from './pages/Sistema/Detalhes';
import Favoritos from './pages/Sistema/Favoritos';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          title: '',
          statusBarColor: '#26034D',
          statusBarStyle: 'light',
          headerTransparent: true,
          headerShown: false,
        }}
        name='TelaInicial' 
        component={TelaInicial}>
        </Stack.Screen>

         <Stack.Screen 
        options={{
          title: '',
          statusBarColor: '#26034D',
          statusBarStyle: 'light',
          headerTransparent: true,
          headerShown: false,
        }}
        name='TelaLogin' 
        component={TelaLogin}>
        </Stack.Screen> 

        <Stack.Screen 
        options={{
          title: '',
          statusBarColor: '#26034D',
          statusBarStyle: 'light',
          headerTransparent: true,
          headerShown: false,
        }}
        name='TelaCadastro' 
        component={TelaCadastro}>
        </Stack.Screen>

        <Stack.Screen 
        options={{
          title: '',
          statusBarColor: '#26034D',
          statusBarStyle: 'light',
          headerTransparent: true,
          headerShown: false,
        }}
        name='SistemaNavigator' 
        component={SistemaNavigator}>
        </Stack.Screen>

        <Stack.Screen 
        options={{
          title: 'Detalhes',
          headerStyle: { backgroundColor: '#26034D' },
          headerTintColor: 'white',
          headerTransparent: false,
          headerShown: true,
          statusBarColor: '#26034D',
          statusBarStyle: 'light',
          headerTitleAlign:'center'
        }}
        name='Detalhes' 
        component={Detalhes}>
        </Stack.Screen>

        <Stack.Screen 
        options={{
          title: 'Favoritos',
          headerTintColor: 'white',
          headerStyle:{backgroundColor: '#26034D'},
          headerTransparent: false,
          headerShown: true,
          statusBarColor: '#26034D',
          statusBarStyle: 'light',
          headerTitleAlign:'center'
        }}
        name='Favoritos' 
        component={Favoritos}>
        </Stack.Screen> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

