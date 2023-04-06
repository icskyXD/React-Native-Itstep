import React, {useState} from 'react';
import {View, FlatList, Image, StyleSheet, Text} from 'react-native';
import { 
  useQuery,
  useLazyQuery
} from '@apollo/client';
import { productsGQL } from '../../Services/gqls';
import { getProducts, addToCart } from './actions'
import config from '../../Config'
import { TouchableOpacity } from 'react-native';
import { addToCartFunc } from '../../Services/storage'
import ItemProduct from '../../Components/ItemProduct/ItemProduct';



const Products = ({navigation})=>{
  const [products, setProducts] = useState([])

  useQuery(productsGQL.getProducts, getProducts(setProducts));

  const Item = ({item}) => (
    // <ItemProduct item={item} />
    <ItemProduct item={item}/>
  );
  console.log("PRODUCTS", products)
  return(
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.listWraper}
        horizontal={false}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item._id}
      />
  )
}
const styles = StyleSheet.create({
  listWraper: {
    gap: 10, 
    backgroundColor: '#fff',
    paddingVertical: 5, 
    paddingHorizontal: 10
  }
});
export default Products