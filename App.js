import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  
  /* STATE */
  constructor (props){

    super(props)

      this.state = {
        endereco : ''
    }

  }

  componentDidMount() {
    axios
    .get('https://viacep.com.br/ws/06608430/json/')
    .then(response => {

  /* ATRIBUINDO VALOR A STATE - MÉTODO this.setState */
  this.setState({ 
        
        endereco: response.data

      })
    })    

  }

  render() {
    return (
      //{
        //"cep": "06608-430",
        //"logradouro": "Rua Maria Aparecida Pedrosa",
        //"complemento": "",
        //"bairro": "Jardim Rosa Emília",
        //"localidade": "Jandira",
        //"uf": "SP",
        //"ibge": "3525003",
        //"gia": "3980",
        //"ddd": "11",
        // "siafi": "6601"
      //}

      <View style={styles.container}>
        <Text> CEP: { this.state.endereco.cep} </Text>
        <Text> LOGRADOURO: { this.state.endereco.logradouro} </Text>
        <Text> COMPLEMENTO: { this.state.endereco.complemento} </Text>
        <Text> BAIRRO: { this.state.endereco.bairro} </Text>
        <Text> LOCALIDADE: { this.state.endereco.localidade} </Text>
        <Text> UF: { this.state.endereco.uf} </Text>
        <Text> IBGE: { this.state.endereco.ibge} </Text>
        <Text> GIA: { this.state.endereco.gia} </Text>
        <Text> DDD: { this.state.endereco.ddd} </Text>
        <Text> SAFI: { this.state.endereco.siafi} </Text>
      </View>

);  
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },



});
