import React, {useEffect, useState} from 'react'
import {Dimensions, Image, View, Text, StyleSheet, FlatList} from 'react-native'
import {storeCart} from '../../Services/store'
import CartItem from '../../Components/cartItem';
  
const windowWidth = Dimensions.get('window').width;


const Cart = ({navigation})=>{
  const [cartList, setCartList] = useState(null)

  const updateList = async()=>{
    setCartList(await storeCart.get_cart_list())
  }

  useEffect(()=>{
    updateList()
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      updateList()
    });
    return unsubscribe;
  },[navigation])

  return(
    <FlatList
      data={cartList}
      // numColumns={2}
      // columnWrapperStyle={styles.listWraper}
      // horizontal={false}
      renderItem={({item}) => <CartItem item={item} navigation={navigation} />}
      keyExtractor={item => item._id}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    flex:1,
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
  listWraper: {
    gap: 10, 
    backgroundColor: '#fff',
    paddingVertical: 5, 
    paddingHorizontal: 10
  },
});

export default Cart