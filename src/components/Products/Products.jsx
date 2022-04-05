import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://cdn.runrepeat.com/storage/gallery/product_primary/37483/adidas-adizero-adios-pro-20-hero-2-15915079-960.jpg'},
    {id: 2, name: 'MacBook', description: 'Apple MacBook Computer', price: '$10', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmacbook-pro&psig=AOvVaw2JSnLT389sIxcqAvuqHOs7&ust=1649273203674000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMiwz83T_fYCFQAAAAAdAAAAABAD'},
];

const Products = () => {
    return (
        <main> 
        <Grid container justify="center" spacing={4}>
             {products.map((product) => (
                 <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                     <Product product={product} />
                 </Grid>
             ))}
        </Grid>
    </main>
    )
   
}

export default Products;