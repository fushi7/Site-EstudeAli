import * as React from 'react';
import { View, StyleSheet, TextInput, Text, Button, Image, TouchableOpacity, useNavigation } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


const statusBarHeight = getStatusBarHeight();

const App = () => {
  return (
    <View style={[styles.container, { marginTop: statusBarHeight }]}>
      <View style={styles.top_box}>
        <View style={styles.logo_area}>
          <Image
            source={require('../assets/logofigma.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.middle_box}>
          <Text style={styles.reg}>Register</Text>
          <Text style={styles.logar_com}>Login with</Text>
        </View>
      </View>
      <View style={styles.container2_0}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signup}>Inscreva-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 280,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_box: {
    alignItems: 'center',
    marginBottom: 100,
    padding: 30,
  },
  middle_box: {
    flexDirection: 'row',
    marginTop: 20,
  },
  reg: {
    marginRight: 10,
  },
  logar_com: {
    marginLeft: 10,
  },
  logo_area: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: "10%"
  },
  logo: {
    width: 0,
    height: 80,
    paddingHorizontal: 195
  },
  container2_0: {
    alignItems: 'center',
  },
  input: {
    borderWidth: 0,
    backgroundColor: '#4462e66e',
    borderRadius: 4,
    width: 250,
    height: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    marginBottom: 20,
    paddingLeft: 5,
  },
  button: {
    borderWidth: 0,
    backgroundColor: '#ffd646',
    borderRadius: 15,
    width: 200,
    height: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
  },
  link: {
    color: '#e6c244',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  signup: {
    color: '#e6c244',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default App;
