import { useState } from 'react'
import {addToCartFunc} from '../../Services/storage';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;


const ItemProduct = ({item})=>{
    const [status, setStatus] = useState(true)
  
    const addToCartStatus = () => {
        if(status) {
            addToCartFunc(item);
        };
    }; 
    
    const Item = ({item}) => (
      <View style={styles.item}>
        <Image 
          resizeMode='cover'
          style={styles.productImg}
          source={{uri: `${config.public}${item.picture}`}} 
        />
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity title='Add to cart' onPress={addToCartStatus} disabled={status}/>
      </View>
    );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    flex:1,
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

export default ItemProduct;