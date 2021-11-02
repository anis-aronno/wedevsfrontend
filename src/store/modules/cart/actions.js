export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CART', { product, quantity });


}



export const removeProductFromCart = ({ commit }, product) => {
    commit('REMOVE_PRODUCT_FROM_CART', product);
  
}

export const clearCartItems = ({ commit }) => {
    commit('CLEAR_CART_ITEMS');

}