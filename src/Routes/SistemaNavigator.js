import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Inicio from '../pages/Sistema/Inicio';
import Config from '../pages/Sistema/Config';
import Perfil from '../pages/Sistema/Perfil';
import Lista from '../pages/Sistema/ListaFilmes';

import EditDrawer from './EditDrawer';

const Drawer = createDrawerNavigator();

export default function SistemaNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <EditDrawer{...props}/>}
            screenOptions={{
            drawerActiveBackgroundColor: '#112632',
            drawerActiveTintColor: '#FFFFFF',
            drawerInactiveTintColor: '#FFFFFF',
            drawerLabelStyle: {marginLeft: -25, fontSize: 16}}} >

            <Drawer.Screen name="Inicio" component={Inicio} 
                options={{headerStyle: 
                {backgroundColor: '#000000'}, headerTitle: '' ,
                headerTintColor: '#fff', headerTitleAlign: 'center',
                drawerIcon: ({color}) => (
                <Ionicons name='planet-outline' size={22} color={color} />
            )}}
            />

             <Drawer.Screen name="Lista de Filmes" component={Lista} 
                options={{headerStyle: 
                {backgroundColor: '#000000'},
                headerTintColor: '#fff', headerTitleAlign: 'center',
                drawerIcon: ({color}) => (
                <Ionicons name='list-outline' size={22} color={color} />
            )}}
            />
            
            <Drawer.Screen name="Favoritos" component={Favoritos} 
                options={{headerStyle: 
                {backgroundColor: '#000000'},
                headerTintColor: '#fff', headerTitleAlign: 'center',
                drawerIcon: ({color}) => (
                <Ionicons name='list-outline' size={22} color={color} />
            )}}
            />

            <Drawer.Screen name="Perfil" component={Perfil} 
                options={{headerStyle: 
                {backgroundColor: '#000000'},
                headerTintColor: '#fff', headerTitleAlign: 'center',
                drawerIcon: ({color}) => (
                <Ionicons name='person-outline' size={22} color={color} />
            )}}
            />
            
            <Drawer.Screen name="Configurações" component={Config} 
                options={{headerStyle: 
                {backgroundColor: '#000000'},
                headerTintColor: '#fff', headerTitleAlign: 'center',
                drawerIcon: ({color}) => (
                <Ionicons name='settings-outline' size={22} color={color} />
            )}}
            />
        </Drawer.Navigator>
    );    
}