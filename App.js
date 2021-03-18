import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// importando o slider que foi baixado
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard'


// variavel para criar as senhas aleatorias
let charset = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&';

export default function App() {

  // unsando o UseState
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(10)

  // funcao de gerara a senha quando clicar no botao
  function generatePass() {

    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass)
  }


  // funcao para copiar a senha
  function copyPass() {
    Clipboard.setString(password)
    alert('Senha copiada com sucesso')
  }

  return (
    <View style={styles.container}>


      {/* imagem do cadeado */}
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />



      {/* Text principal */}
      <Text style={styles.title}> {size} caracteres</Text>



      {/* input para definir a quantidade de caracteres */}
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor='#ff0000'
          maximumTrackTintColor='#000'
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>



      {/* botao para gerar a senha */}
      <TouchableOpacity style={styles.button} onPress={generatePass}>

        <Text style={styles.buttonText}>Gerar senha</Text>

      </TouchableOpacity>


      {password !== '' && (
        // coloca a senha aleatoria caso password seja diferente de vazio
        < View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}> {password} </Text>
        </View>
      )
      }




    </View >
  )
}


// todos estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3ff',
  },

  logo: {
    marginBottom: 60
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 7
  },

  button: {
    backgroundColor: '#ffa200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },

  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }

})