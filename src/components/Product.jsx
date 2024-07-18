import PropTypes from 'prop-types';

export const Product = ({ name, imgUrl, price }) => {


  return (
    <div>
      <h2>{name}</h2>
			<img src={imgUrl} alt={name} width="640" />
      <p>Price: {price} credits</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;