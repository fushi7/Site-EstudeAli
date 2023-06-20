import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, TextInput, Linking } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View>
        <View style={{ backgroundColor: '#44E690', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 40 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{}}>
              <View style={{ borderRadius: 50 }}>
                <Image source={require('./assets/user.jpg')} style={{ width: 30, height: 30, borderRadius: 25, marginBottom: 40 }} />
              </View>
              <View>
                <Image source={require('./assets/logofigma.png')} style={{ width: 10, height: 10, paddingLeft: 110, paddingTop: 20, position: 'absolute', bottom: 45, left: 25, marginLeft: 100 }} />
              </View>
              <TouchableOpacity onPress={() => { }}>
                <Image source={require('./assets/1077035.png')} style={{ width: 25, height: 25, position: 'absolute', left: 340, bottom: 40 }} />
              </TouchableOpacity>
              <View>
                <TextInput style={{ backgroundColor: '#fff', borderRadius: 10, width: 350, height: 45, position: 'absolute', left: 3, top: -25 }} placeholder="Pesquisar por cursos" />
              </View>
              <View style={{ backgroundColor: "#4461E6", width: 500, height: 15, position: 'absolute', top: 110, left: -30 }}>
                <Text >

                </Text>
              </View>
            </View>
          </View>

        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.quadrado}>
          <View style={styles.quadrado2}>
            <View style={styles.quadrado3}>
              <View>
                <Image source={require('../cursoselecionado/assets/ps.jpg')} style={{ width: 320, height: 160, borderRadius: 10, }}></Image>
              </View>
            </View>
            <Text style={styles.titulocurso}>Curso Completo de Photoshop 100% Gratuito</Text>
            <Text style={styles.subtitulocurso}>Um curso completo de Photoshop do básico ao avançado e 100% gratuito para você chamar de seu.</Text>
            <View style={styles.linha1}>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('https://www.youtube.com/playlist?list=PL36fy0HIN6VrzMqqsa8I6q3zYR7nSDZmK') }}>
              <Text style={styles.buttonText}>Assistir</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.quadrado4}>
            <Text style={styles.avaliac}>Avaliações</Text>
            <View style={styles.linha2}>
            </View>
            <TouchableOpacity style={styles.button2} >
              <Text style={styles.buttonText2}>Avaliar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer} >
        <TouchableOpacity style={styles.buttonText10}>
          <Text style={styles.buttonText10}>Sobre Nós</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  quadrado: {
    width: 350,
    height: 410,
    marginTop: 50,
    backgroundColor: 'rgba(68, 230, 144, 0.46)',

    alignItems: 'center',
  },
  quadrado2: {
    width: 335,
    height: 320,
    borderRadius: 16,
    marginTop: 10,
    backgroundColor: '#44E690',
  },
  quadrado3: {
    width: 320,
    height: 160,
    backgroundColor: '#D7F8F9',
    borderRadius: 16,
    marginTop: 10,
    marginLeft: 8,
  },

  titulocurso: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 25,

    fontWeight: 'bold'
  },

  subtitulocurso: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold'
  },

  linha1: {
    width: 335,
    height: 2,
    marginTop: 30,
    backgroundColor: 'grey',
  },

  button: {
    borderWidth: 0,
    backgroundColor: '#ffd646',
    borderRadius: 15,
    width: 140,
    height: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    marginTop: 15,
    marginLeft: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
  },

  container2: {
    flex: 1,
    alignItems: 'center',
  },
  quadrado4: {
    width: 350,
    height: 410,
    marginTop: 40,
    backgroundColor: 'rgba(68, 97, 230, 0.45)',

    alignItems: 'center',
  },

  avaliac: {
    right: 110,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },

  linha2: {
    width: 335,
    height: 2,
    marginTop: 310,
    backgroundColor: 'grey',
  },

  button2: {
    borderWidth: 0,
    backgroundColor: '#ffd646',
    borderRadius: 15,
    width: 140,
    height: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    marginTop: 15,
    marginLeft: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText2: {
    color: '#000',
  },

  footer: {
    backgroundColor: '#44E690',
    padding: 10,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },

  button10: {
    borderWidth: 0,
    backgroundColor: '#ffd646',
    borderRadius: 15,
    width: 140,
    height: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    marginTop: 15,
    marginLeft: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText10: {
    color: '#000',
  },

});

export default App;