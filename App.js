import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react' //allow for use state
import reactDom from 'react-dom';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button,} from 'react-native' //imports all the different functions
import { Modal } from 'react-native-web';

export default function App() {
  const [modalVisable, setModalVisiable] = useState(false) //modal is set not visbale to start with
  const [sugarIntake, setSugarIntake] = useState(0)  //variable suagr intake set to 0
   return (
    
<SafeAreaView style={styles.container}>

<Text style={styles.Head}>Sugar Intake Calculator... 
<Image source={require("./assets/Logo.png")}style={styles.logo}></Image></Text> 
 
  <View
        style={[
          styles.row,
          {
            marginTop: 15,         },        ]}      >

        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 0.52)}>
          <Image source={require("./assets/Cheese_01.jpg")}style={styles.stretch}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 50.5)}>
          <Image source={require("./assets/marsbar_1024x1024.jpg")}style={styles.stretch}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 10.3)}>
          <Image source={require("./assets/istockphoto-185262648-170667a.jpg")} style={styles.stretch}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 6.1)}>
          <Image source={require("./assets/Bagel.jpg")} style={styles.stretch}>
          </Image>
        </TouchableOpacity>

  </View>
      
  <View
        style={[
          styles.row,
          {
            marginTop: 0,         },        ]}      >

        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 3.6)}>
          <Image source={require("./assets/Biscuit.jpeg")} style={styles.stretch}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 5)}>
          <Image source={require("./assets/Walkers.jpg")} style={styles.stretch}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 11)}>
          <Image source={require("./assets/Redbull.jpg")} style={styles.stretch}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 3.7)}>
          <Image source={require("./assets/Sushi.jpg")} style={styles.stretch}>
          </Image>
        </TouchableOpacity>

  </View>

  <View
        style={[
          styles.row,
          {
            marginTop: 0,         },        ]}      >

        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 10)}>
          <Image source={require("./assets/Cereal.jpg")} style={styles.stretch}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 28.8)}>
          <Image source={require("./assets/Mp.jpg")} style={styles.stretch}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 21.8)}>
          <Image source={require("./assets/CheeseCake.jpg")} style={styles.stretch}>
          </Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSugarIntake(sugarIntake + 5.7)}>
          <Image source={require("./assets/Burger.jpg")} style={styles.stretch}>
          </Image>
        </TouchableOpacity>

</View>

<Text style={styles.tex}> {sugarIntake} g</Text>  

<TouchableOpacity onPress={() => setSugarIntake(sugarIntake == 0)}>
          <Image source={require("./assets/Del.png")} style={styles.stretch}>
          </Image>
        </TouchableOpacity> 



        <TouchableOpacity style={styles.button}
          onPress={() => setModalVisiable(true)}>
          <Text style={{ fontSize: 24, fontFamily: "Fantasy" }}>i</Text>
        </TouchableOpacity>

          <Modal visible={modalVisable} animationType="slide" transparent={true}>

          <View style={styles.modal}><Text style={styles.moda}> Welcome To The Sugar Intake Calculator </Text>
            <Text style={styles.moda}> This is to help people monitor thier sugar intake of certain foods they eat throughout the day. Great for people with diabetes </Text>
            <Text style={styles.moda}> To use the application click on the foods and then press plus and then add it to an another food and press Equals to see how much the products have inside them!! </Text>
            <Text style={styles.moda}> (All these sugar values are calculated at a 100g weight)</Text>
            <Button title="Read" onPress={() => setModalVisiable(false)}></Button>
          </View>
          </Modal>
        
</SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  stretch: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },

  small :{
    width: 20,
    height: 20,
  },

  button: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ff0000",
    alignSelf: "flex-end",
    margintop: 5,
    flex: 1,
  },

  modal: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Fantasy",
    color: "#964B00",
    
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  moda: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Fantasy",
    color: "#ff0000",
    fontSize: 18
  },

  tex: {
    fontFamily: "Fantasy",
    fontSize: 40,
    marginTop: 1,
    marginBottom: 1,
  },

  Head: {
fontSize: 50,
color: "#ff0000cc",
fontFamily: "Fantasy",
  },

  logo:{
    width:50,
    height:50
  },
   
});
