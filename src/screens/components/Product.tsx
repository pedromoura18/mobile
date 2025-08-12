import {StyleSheet, Text, TouchableOpacity, View} from "react-native";


interface Props{
    name: String; 
    onRemove: () => void;
}

export function Product(props: Props){
    function handleRemoveProduct(){

    }

    return(
        <View style={styles.container}>
           <Text style={styles.name}>{props.name}</Text> 

           <TouchableOpacity 
           style={styles.button} 
           onPress={props.onRemove}>
            
            <Text style={styles.buttonText}>-</Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
        flexDirection:"row",
        alignItems: "center",
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5, 
    },
    name:{
        flex: 1,
        fontSize: 16,
        lineHeight: 19.2,
        marginLeft: 16,
        marginRight: 16,
    },
    buttonText:{
      fontSize: 24,
      color: "white",  
    },
    button:{
        width: 56,
        height: 56,
        backgroundColor: "#E23C44",
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    }
})