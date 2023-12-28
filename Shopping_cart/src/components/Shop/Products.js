import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PROUCTS = [
  {
    id : 1,
    price:10,
    title:'Sports book',
    description: "This is a sports book"
  },
  {
    id : 2,
    price:15,
    title:'Investing book',
    description: "This is a investing book"
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PROUCTS.map( (product) =>   <ProductItem
          key = {product.id}
          id = {product.id}
          title = {product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
