import { Link } from 'react-router-dom';
import { Carousel, Image, } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';

import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel fade className= "mb-4" style={{ backgroundColor: 'white' }}>
      {products.map((product) => (
        <Carousel.Item 
        key={product._id} 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '31rem'  
        }}
      >
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2>
                {product.name} (£{product.price})
              </h2>
              
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
