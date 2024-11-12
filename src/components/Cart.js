import React, { useState } from 'react'; // Import React and useState hook for local state management
import { useSelector, useDispatch } from 'react-redux'; // Import Redux hooks for state management and dispatching actions
import { removeFromCart, updateQuantity } from '../redux/features/cart/cartSlice'; // Import Redux actions to modify cart state
import { Button, Card, Modal } from 'react-bootstrap'; // Import React Bootstrap components for styling
import { Link } from 'react-router-dom'; // Import Link component for navigation
import { FaShoppingCart } from 'react-icons/fa'; // Import shopping cart icon from React Icons
import '../App.css'; // Import custom CSS styles

const Cart = () => {
  // Use Redux to access cart items and dispatch actions
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Local state hooks for managing shipping and modal visibility
  const [shippingMethod, setShippingMethod] = useState('Standard Shipping');
  const [shippingCost, setShippingCost] = useState(5.00); // Default shipping cost
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to handle removal of an item from the cart
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Function to handle change in item quantity
  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  // Function to handle change in shipping method and update shipping cost accordingly
  const handleShippingChange = (e) => {
    const selectedMethod = e.target.value;
    setShippingMethod(selectedMethod);

    // Update shipping cost based on selection
    if (selectedMethod === 'Standard Shipping') {
      setShippingCost(5.00);
    } else if (selectedMethod === 'Express Shipping') {
      setShippingCost(10.00);
    } else if (selectedMethod === 'Overnight Shipping') {
      setShippingCost(20.00);
    }
  };

  // Functions to handle modal visibility
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Calculate the total price of items in the cart, including shipping
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + shippingCost;

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        // Display this when cart is empty
        <div className="cart-empty-container">
          <FaShoppingCart size={50} className="shopping-cart-icon" /> {/* Cart icon */}
          <p className="cart-message">Add items to your cart</p>
          <Link to="/shop">
            <Button className="go-to-shop-button">Go to Shop</Button> {/* Button to navigate to the shop */}
          </Link>
        </div>
      ) : (
        // Display cart items and order summary when the cart is not empty
        <>
          <div className="cart-container">
            <h4>Your Cart</h4>
            <hr className="cart-divider" />
            {cartItems.map((item) => (
              <Card key={item.id} className="cart-item-card">
                <Card.Body className="cart-item-body">
                  <div className="cart-item-image-container">
                    <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
                  </div>
                  <div className="cart-item-details">
                    <h5>{item.title}</h5>
                    <p>{item.selectedOption}</p>
                    <p style={{ fontWeight: "bold", color: "#000000" }}>Price: £{item.price.toFixed(2)}</p>
                    <p>
                      Quantity:
                      <input 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
                        min="1"
                        className="quantity-input" 
                      />
                    </p>
                    <div className="remove-button-container">
                      <Button onClick={() => handleRemove(item.id)} className="remove-button">Remove from cart</Button> {/* Remove item from cart */}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
            <h4 style={{ marginTop: "100px" }}>Order Summary</h4>
            <hr className="cart-divider" />

            {/* Shipping Method Dropdown */}
            <div className="shipping-container">
              <label htmlFor="shipping-method">Choose Shipping Method:</label>
              <select 
                id="shipping-method" 
                value={shippingMethod} 
                onChange={handleShippingChange} 
                className="shipping-dropdown"
              >
                {/* Shipping options */}
                <option value="Standard Shipping">Standard Delivery - £5.00</option>
                <option value="Express Shipping">Next Day Delivery - £10.00</option>
                <option value="Overnight Shipping">Nominated Day - £12.00</option>
              </select>
              <Button variant="link" onClick={handleShowModal} className="help-button">
                Need Help?
              </Button> {/* Button to open help modal */}
            </div>

            {/* Total Price Section */}
            <div className="total-price-container">
              <h5>Total (including shipping): £{totalPrice.toFixed(2)}</h5>
            </div>
          </div>
          
          {/* Help Modal */}
          <Modal show={showModal} onHide={handleCloseModal} className="shipping-modal">
            <Modal.Header closeButton>
              <Modal.Title>Shipping Options</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Modal content explaining shipping options */}
              <p>Please note that we only ship within the UK and charge a flat rate for all delivery options.</p>
              <h5>Standard Shipping</h5>
              <p>Standard Delivery - Typically within 3-5 working days</p>
              <h5>Express Shipping</h5>
              <p>Next Day Delivery - Arrives the next working day</p>
              <h5>Overnight Shipping</h5>
              <p>Same Day Delivery - Place your order before 12pm and get it the same day (available only within the Gower)</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className="close-button" onClick={handleCloseModal}>
                Close
              </Button> {/* Button to close the modal */}
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Cart;
