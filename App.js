import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/1.png') },
  { id: 2, imgSource: require('./assets/2.png') },
  { id: 3, imgSource: require('./assets/3.png') },
  { id: 4, imgSource: require('./assets/4.png') },
  { id: 5, imgSource: require('./assets/5.png') },
  { id: 6, imgSource: require('./assets/7.png') },
  { id: 7, imgSource: require('./assets/7.png') }
];

export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);

  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <View style={styles.avartwapper}>
          <Image
            style={styles.avatar}
            source={require('./assets/hinh.png')}
          />
        </View>
        <View style={styles.userinFor}>
          <Text>Phương Hý</Text>
          <Text>Deverloper</Text>
          <View style={styles.btnwapper}>
            <TouchableOpacity>
              <View style={[styles.btn, styles.followButtun]}>
                <Text style={styles.btnlable}>Follow</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.btn, styles.sendButtn]}>
                <MaterialIcons name='send'/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.countArea}>
        <View>
          <Text style={styles.countText}>777</Text>
          <Text style={styles.countlabelText}>Photos</Text>
        </View>
        <View>
          <Text style={styles.countText}>25k</Text>
          <Text style={styles.countlabelText}>Followers</Text>
        </View>
        <View>
          <Text style={styles.countText}>1007</Text>
          <Text style={styles.countlabelText}>Following</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.imageArea}>
        <View>
          { imgData.slice(0,centerImgData).map(item =>{
            return <Image style={styles.image} source={item.imgSource} key={item.id}/>
          })}
        </View>
        <View>
          { imgData.slice(centerImgData).map(item =>{
            return <Image style={styles.image} source={item.imgSource} key={item.id}/>
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex:0.25,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  avartwapper:{
    flex:0.4,
    justifyContent:'center',
    alignItems:'center',
  },
  userinFor:{
    flex:0.6,
    justifyContent:'center'
    
  },
  btn:{
    height:30,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  btnwapper:{
    flexDirection:'row',
    marginTop:10,
  },
  followButtun:{
    width:120,
    backgroundColor:POLO_BLUE_COLOR,
  },
  btnlable:{
    color:'white'
  },
  sendButtn:{
    width:40,
    backgroundColor:SEND_MESSAGE_COLOR,
    marginLeft:10,
  },
  countArea: {
    flex:0.15,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'  
  },
  countText:{
    fontSize:20,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:15
  },
  countlabelText:{
    fontSize:16,
    fontWeight:'200',
    marginTop:10
  },
  imageArea: {
    flex:0.6,
    flexDirection:'row',
    justifyContent:'center'
  },
  avatar:{
    width:120,
    height:120,
  },
  image:{
    width:150,
    height:150
  },

});
