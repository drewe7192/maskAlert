import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import { Main } from './components/Main'
import { Footer } from './components/Footer'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: "#fff",
  }
})

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main/>
      <Footer/>
    </View>
  );
}

