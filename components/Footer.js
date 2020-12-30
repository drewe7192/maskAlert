import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"

export const Footer = () => {

    const styles = StyleSheet.create({
        container: {
          height: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
      });
      

    return <View style={styles.container}>
        <Text>Some Text is displayed here</Text>
    </View>
}