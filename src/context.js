import React, { useState, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { useCallback } from 'react';
import { useApi } from './hooks/useApi';
// IMport loading whereever the heck it goes maby here

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const request = useApi();
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState([]);

  const fetchProduct = useCallback(async () => {
    setLoading(true);
    try {
      const response = await request.get('products');
      const data = await response.data;
      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };
  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    //8239158e-70b3-4f55-8ed4-e640c390983e test cart
    const response = await request.get('carts/8239158e-70b3-4f55-8ed4-e640c390983e');
    const cart = await response.data.products;
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  };
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  const categoryKey = 'category';

  const categoryArray = [...new Map(products.map((item) => [item[categoryKey], item])).values()];

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
        loading,
        // cartItems,
        setProducts,
        products,
        categoryArray,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
