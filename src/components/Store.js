import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Product from './shared/Product';

// Redux
import fetchProducts from '../redux/products/productsAction';

// Style
import styles from "./Store.module.css";

const Store = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className={styles.container} >
            {
                productsState.loading
                    ? <h2>loading ...</h2>
                    : productsState.error
                        ? <p>something is wrong!</p>
                        : productsState.Products.map(product =>
                            <Product
                                key={productsState.id}
                                productData={product}
                            />
                        )
            }
        </div>
    );
};

export default Store;