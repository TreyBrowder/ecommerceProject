import { Grid } from '@material-ui/core';
import Product from './Product/Product'
import React from 'react';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://lh3.googleusercontent.com/-kfptSZIKctA/YVMkBifRLNI/AAAAAAACPJ4/dcKSTTAz6GohZFRr1rQwj_akt1CmCElkgCNcBGAsYHQ/w547-h410/IMG_2396.jpg'},
    {id: 2, name: 'MacBook', description: 'Apple MacBook Computer', price: '$10', image: 'https://photos5.appleinsider.com/gallery/26909-39215-macbook-pro-13-inch-touch-bar-review00017-xl.jpg'},
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