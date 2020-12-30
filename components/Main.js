import React, { useState } from "react"
import { Text, StyleSheet, View, TouchableOpacity } from "react-native"

export const Main = () => {
  const styles = StyleSheet.create({
    content: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    mainButton: {
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      alignItems: "center",
      justifyContent: "center",
      width: 200,
      height: 200,
      backgroundColor: "crimson",
      borderRadius: 100,
    },
    
    Text: {
        background: 'crimson',
        backgroundColor: "crimson",
        color: 'ghostwhite',
        fontSize: '15px',
        fontWeight: 'bolder'
    }
  })

  const [ButtonTitle, ChangeButtonTitle] = useState("Drew Not Clicked");
  const clickHandler = () => {
    ChangeButtonTitle("Drews Button Clicked")
    setTimeout(() => {
        ChangeButtonTitle("Drew Not Clicked")
    }, 3000)
  }


  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.mainButton} onPress={clickHandler}>
        <Text style={styles.Text}>{ButtonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};
