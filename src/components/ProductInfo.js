import React, { useState } from 'react';
import { Card, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cart/cartSlice'; // Import Redux action
import '../App.css'; // Import custom styles

function ProductInfo({ id, title, text, imageUrl, options = [], prices = [] }) {
  // State to manage the selected option and corresponding price
  const [selectedOption, setSelectedOption] = useState(options.length > 0 ? options[0] : 'Default Option');
  const [price, setPrice] = useState(prices.length > 0 ? prices[0] : 0);

  // Dispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Handle option selection
  const handleSelect = (option, index) => {
    setSelectedOption(option);  // Update selected option
    setPrice(prices[index]);    // Update the price corresponding to the selected option
  };

  // Handle the add to cart action
  const handleAddToCart = () => {
    // Dispatch the action to add the item to the cart
    dispatch(addToCart({
      id,  // Pass the unique id
      title,
      price,
      imageUrl,
      selectedOption
    }));
  };

  return (
    <Card className="product-card">
      {/* Display product image */}
      <div className="product-image-container">
        <Card.Img variant="top" src={imageUrl} className="img-fluid product-image" />
      </div>

      {/* Card Body containing the product title, description, options dropdown, and price */}
      <Card.Body className="product-body">
        <Card.Title className="product-title">{title}</Card.Title>
        <Card.Text className="product-text">{text}</Card.Text>

        {/* Dropdown button to select product options */}
        <DropdownButton
          title={selectedOption}  // Title of the dropdown is the selected option
          onSelect={(selectedKey) => handleSelect(options[selectedKey], selectedKey)} // Handle option selection
          variant="light"
        >
          {options.length > 0 ? (
            // Render options dynamically
            options.map((option, index) => (
              <Dropdown.Item key={index} eventKey={index}>
                {option}  {/* Option text */}
              </Dropdown.Item>
            ))
          ) : (
            // If no options are available, disable the dropdown item
            <Dropdown.Item disabled>No options available</Dropdown.Item>
          )}
        </DropdownButton>

        {/* Display price */}
        <div className="price-display">
          <strong>£{price.toFixed(2)}</strong> {/* Price formatted to two decimal places */}
        </div>

        {/* Add to Cart button */}
        <Button
          className="add-button"
          onClick={handleAddToCart} // Trigger add to cart action on click
        >
          ADD
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductInfo;
