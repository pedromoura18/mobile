import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Product } from "./components/Product"

export function Home(){

  function handleProductRemove(name: string){
    console.log("Você clicou no botão de remover Produto + $(name)")
  }
  return (
    <View style={style.container}>
      <Text style={style.title}>Lista de Compras</Text>
      <Text style={style.todaysDate}>Quarta-Feira, 17 de Julho de 2025</Text>
        <View style={style.form}>
          <TextInput 
          style = {style.input}
          placeholder="Nome do Produto"
          placeholderTextColor= "#BDBABA"
          keyboardType="default"
          />

          <TouchableOpacity style={style.button} onPress={handleProductRemove}>
            <Text style={style.textButton}>+</Text>
          </TouchableOpacity>
      </View> 

      <Text style={style.listTitle}>Compras Pendentes</Text>

     <View style={style.list}> 

      {/*<Text style={style.listEmptyText}>Comprou todos os produtos? Adicione produtos a sua lista de compras</Text>*/}

      <Product name="iPhone" onRemove={() => handleProductRemove("iPhone")}/>

      </View>
    </View>           
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#EAEAEA",
      padding: 24, 
    },
    title:{
      color: "#000",
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 28.8,
      marginTop: 48,
    },
    todaysDate:{
      color: "#000",
      fontSize: 16,
      fontWeight: "normal",
      lineHeight: 28.8,
    },

    input: {
      flex: 1,
      height: 56,
      padding: 16,
      backgroundColor: "#FFF",
      borderRadius: 5,
      marginRight: 16, 
    },
    form:{
      width: "100%",
      flexDirection: "row",
      marginTop: 18,

      marginBottom: 36,
    },
    button: {
      width: 56,
      height: 56,
      backgroundColor: "#31C667",
      borderRadius: 5,

      alignItems: "center",
      justifyContent: "center"
    },
    textButton: {
      color: "#FFF",
      fontSize: 24,
    },
    listTitle: {
      fontSize: 20,
      fontWeight: "bold",
      lineHeight: 24,
      marginBottom: 16,
      fontFamily: "inter", 
    },
    listEmptyText:{
      fontSize: 16,
      fontWeight: "normal",
      lineHeight: 19.2,
      textAlign: "center"
    //  flexWrap: "wrap", 
    //  textTransform:"none",
    },
    list:{
      flex: 1,
      justifyContent:"center",
    }
});