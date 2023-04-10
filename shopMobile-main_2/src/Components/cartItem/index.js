import {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Dimensions, Image} from 'react-native'
import config from '../../Config'

const windowWidth = Dimensions.get('window').width;

export default function CartItem({item}) {
    const [counter, setCounter] = useState(1);
    
    const IncreaseNum = () => {
        setCounter((pre)=>pre+1)
    }
    const DecreaseNum = () => {
        setCounter((pre)=>pre > 1 ? pre-1:pre)
    }

    return (
        <View style={styles.item}>
          <View style={styles.itemContent}>
            <View>
              <Image 
                resizeMode='cover'
                style={styles.productImg}
                source={{uri: `${config.public}${item.picture}`}} 
              />
              <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            </View>
            <View style={styles.itemFooter}>
              <Text>{item.price} {item.currency}</Text>
            <View style={styles.addButtonWrapper}>
            <TouchableOpacity style={styles.addButton} onPress={IncreaseNum}><Text>+</Text></TouchableOpacity>
            <Text>{counter}</Text>
            <TouchableOpacity style={styles.addButton} onPress={DecreaseNum}><Text>-</Text></TouchableOpacity>
            </View>
            </View>
          </View> 
        </View> 
      )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f1f1f1',
      padding: 10,
      borderRadius: 10,
      flex:1,
    },
    addButtonWrapper: {
        width: 100,
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    addButton: {
        width: 30,
        height: 30,
        color: '#fff',
        backgroundColor: 'gray',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContent:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    itemFooter:{
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    productImg: {
      height: 200,
      width: '100%'
    },
    title: {
      fontSize: windowWidth * .03,
      color: '#000'
    },
  });