import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../Config';

const addToCartFunc = async (item) => {
    const cart = await AsyncStorage.getItem('Cart');

    if(cart) {
        const parsedCart = JSON.parse(cart);
        parsedCart.push(item);
        await AsyncStorage.setItem('Cart',JSON.stringify(parsedCart));
    } else {
        const cart = await AsyncStorage.setItem('Cart', JSON.stringify([item]));
    }
}

const getCartProducts = async () => {
    const cart = await AsyncStorage.getItem('Cart');
    return cart ? JSON.parse(cart) : [];
}

export {addToCartFunc, getCartProducts};