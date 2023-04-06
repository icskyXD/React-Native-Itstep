const getProducts = (setProductList, query = {})=>{
  return {
    variables:{
      query
    },
    //fetchPolicy: 'network-only',
    onCompleted: ({getProducts})=>{
      console.log('PRODUCTS_HOME', getProducts)
      setProductList(getProducts)
      },
    onError: (err)=>{
      console.log('PRODUCTS_HOME', err)
    }
  }
};

const addToCart = (setCartProduct, query = {}) => {
  return {
    variables:{
      query
    },
    onCompleted: ({addToCart}) => {
      console.log('CART_HOME', addToCart); 
      setCartProduct(addToCart)
    },
    onError: (err) => {
      console.log('CART_HOME', err);
    }
  }
}

export { getProducts, addToCart }
