import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProductInfo from './ProductInfo';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cart/cartSlice';  // Import Redux action
import '../App.css';

function Shop() {
  // Product data with image, options, prices
  const cardData = [
    {
      id: "foam-1",  // Unique ID added
      title: "Soft Foam Surfboard",
      text: "Designed to provide maximum buoyancy and stability, this board is ideal for those learning to surf.",
      imageUrl: require("../assets/bluefoamie2.jpg"),
      options: ["7'6\"", "8'0\"", "9'0\""],
      prices: [329.99, 349.99, 359.99],
    },
    {
      id: "carmine-2",
      title: "Carmine Softboard",
      text: "A shorter foam board, perfect as a stepping stone to shortboarding or for just having fun in smaller waves.",
      imageUrl: require("../assets/red copy.jpg"),
      options: ["6'3\"", "6'6\"", "7'0\""],
      prices: [384.95, 394.95, 404.95],
    },
    {
      id: "solar-3",  // Unique ID added
      title: "Solar Fish Surfboard",
      text: "Make a statement with this playful Fish shape shortboard. Fast, fun and able to turn on a dime.",
      imageUrl: require("../assets/yellowfish.jpg"),
      options: ["6'0\"", "6'3\"", "6'6\""],
      prices: [645.00, 655.00, 665.00],
    },
    {
      id: "tidal-4",
      title: "Tidal Stripe Surfboard",
      text: "The perfect board for speed, manouverability, and maximising wave count.",
      imageUrl: require("../assets/long copy.jpg"),
      options: ["6'4\"", "6'6\"", "6'10\""],
      prices: [766.00, 771.00, 776.00],
    },
    {
      id: "Accel-5",
      title: "Accel Swallow Tail Surfboard",
      text: "A dynamic shortboard that offers speed, responsiveness, and easy paddling. .",
      imageUrl: require("../assets/blue copy.jpg"),
      options: ["6'0\"", "6'4\"", "6'6\""],
      prices: [824.00, 834.00, 844.00],
    },
    {
      id: "Vortex-6",
      title: "Vortex Performance Surfboard",
      text: "This high performance board is for seasoned surfers seeking speed and exceptional manouverability.",
      imageUrl: require("../assets/performance2 copy.jpg"),
      options: ["5'8\"", "5'9\"", "5'10\""],
      prices: [925.99, 935.99, 945.99],
    },
    {
      id: "Nitro-7",
      title: "Nitro Children's Shortboard",
      text: "Our first children's board! This is for advanced youngsters able to surf high performance waves.",
      imageUrl: require("../assets/kidshardboard.jpg"),
      options: ["5'0\"", "5'3\"", "5'5\""],
      prices: [739.99, 749.99, 759.99],
    },
    {
      id: "Amethyst-8",
      title: "Amethyst Single Fin Longboard",
      text: "Our newest addition: an elegant single fin, designed for a smooth, classic ride.",
      imageUrl: require("../assets/purple copy.jpg"),
      options: ["8'0\"", "8'6\"", "9'0\""],
      prices: [876.00, 886.00, 896.00],
    },
    {
      id: "Nautic-9",
      title: "Men's Nautic Chest Zip Wetsuit",
      text: "Made of recycled graphene fibres that return heat back to the body, this 5/4mm suit provides incredible heat retention.",
      imageUrl: require("../assets/cold.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [425.00, 425.00, 425.00],
    },
    {
      id: "Triton-10",
      title: "Men's Triton Chest Zip Full Wetsuit",
      text: "4/3mm wetsuit made of featherlight neoprene that compromises nothing on flexibility and warmth.",
      imageUrl: require("../assets/wetsuit copy.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [309.95, 309.95, 309.95],
    },
    {
      id: "Reef-11",
      title: "Men's Reef Full Wetsuit",
      text: "3/2mm full length wetsuit made of super-stretch neoprene, ideal for warmer waters.",
      imageUrl: require("../assets/wetsuit2 copy.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [149.99, 149.99, 149.99],
    },
    {
      id: "Spring-12",
      title: "Men's Spring Back Zip Wetsuit",
      text: "High performance 2mm short wetsuit that offers comfort, breathability and strength.",
      imageUrl: require("../assets/shortsuit.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [450.99, 450.99, 450.99],
    },
    {
      id: "Artex-13",
      title: "Artex Women's 3/4 Zip Onepiece",
      text: "This onepice brings style to your surf session, while the UPF 50+UV sun protection allows you to spend more time safely in the water.",
      imageUrl: require("../assets/onepiece.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [99.95, 99.95, 99.95],
    },
    {
      id: "Meris-14",
      title: "Women's Meris Wetsuit",
      text: "This 3/2mm lightweight aqua suit beings personality to your surfs. Not intended for cold water conditions.",
      imageUrl: require("../assets/aaqua copy.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [144.95, 144.95, 144.95],
    },
    {
      id: "Coral-15",
      title: "Women's Coral Front Zip Wetsuit",
      text: "This water resistent, highly flexibly 4/3mm suit is the choice for spring and autumn surfs.",
      imageUrl: require("../assets/grey.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [299.95, 299.95, 299.95],
    },
    {
      id: "Calor-16",
      title: "Women's Calor Back Zip Wetsuit",
      text: "Windproof and with thermal interior jersey, this 5/4mm suit is designed for warmth and functionality.",
      imageUrl: require("../assets/womensuit copy.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [379.95, 379.95, 379.95],
    },
    {
      id: "leash-black-17",
      title: "Everyday Surfboard Leash - Black",
      text: "A light and comfortable leeash that is ideal for everyday use.",
      imageUrl: require("../assets/leash.jpg"),
      options: ["6'0\"", "7'0\"", "8'0\""],
      prices: [31.50, 32.50, 33.50],
    },
    {
      id: "leash-blue-18",
      title: "Premium Surfboard Leash - Blue",
      text: "A great balance of weightlessness and strength, suitable for small- to medium-sized waves. ",
      imageUrl: require("../assets/leashblue.jpg"),
      options: ["6'0\"", "7'0\"", "8'0\""],
      prices: [35.00, 37.50, 40.00],
    },
    {
      id: "leash-green-19",
      title: "Performance Surfboard Leash - Green",
      text: "This high-quality leash is strong and durable enough to handle heavier waves.",
      imageUrl: require("../assets/leashgreen.jpg"),
      options: ["6'0\"", "7'0\"", "8'0\""],
      prices: [38.00, 40.00, 42.00],
    },
    {
      id: "lotion-20",
      title: "Spray Sun Lotion SPF50",
      text: "High SPF sun protection for long days in the sun. Water and sweat resistant.",
      imageUrl: require("../assets/sunlotion.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [20.00, 25.00, 30.00],
    },
    {
      id: "apres-21",
      title: "Après Surf Beauty Set",
      text: "Complete set to care for your skin after a day catching waves.",
      imageUrl: require("../assets/soot copy.jpg"),
      options: ["One Size"],
      prices: [50.00],
    },
    {
      id: "towel-22",
      title: "Natural Beach Towel - Aqua",
      text: "Made from sustainably sourced cotton, our absorbant beach towel is a beach essential.",
      imageUrl: require("../assets/beachtowel.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [40.00, 45.00, 55.00],
    },
    {
      id: "towel-23",
      title: "Natural Beach Towel - Ecru",
      text: "Made from sustainably sourced cotton, our absorbant beach towel is a beach essential.",
      imageUrl: require("../assets/beachtowel2.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [40.00, 45.00, 55.00],
    },
    {
      id: "towel-24",
      title: "Natural Beach Towel - Stripe",
      text: "Made from sustainably sourced cotton, our absorbant beach towel is a beach essential.",
      imageUrl: require("../assets/beachtowel3.jpg"),
      options: ["Small", "Medium", "Large"],
      prices: [40.00, 45.00, 55.00],
    },
  ];

  // Unique titles for each section
  const sectionTitles = [
    "Surfboard Collection",
    "Wetsuit Collection",
    "Accessories",
  ];

  // Unique descriptions for each section
  const sectionDescriptions = [
    "Discover our collection of surfboards, designed for all levels of experience.",
    "To surf well you need to dress well. Explore our collection of wetsuits.",
    "All the extras you need for a day catching waves."
  ];

  const dispatch = useDispatch();

  // Define a chunk size to divide the products into smaller groups (e.g., 8 products per group)
  const chunkSize = 8;
  const groups = [];

  // Loop through the `cardData` array in increments of the chunk size (8) to create groups
  for (let i = 0; i < cardData.length; i += chunkSize) {
    // Push each group (slice of cardData) into the groups array
    groups.push(cardData.slice(i, i + chunkSize));
  }

  return (
    // Container component to hold all content of the shop
    <Container fluid className="shop-container">
      {/* Map over the groups array to render each group of products */}
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="product-group">
          
          {/* Display a title for each group of products */}
          <h2 className="section-title">
            {sectionTitles[groupIndex] || "Explore our Products"}
          </h2>
          
          {/* Display a description for each group */}
          <p className="section-description">
            {sectionDescriptions[groupIndex] || "Explore a variety of surfboards, wetsuits, and beach accessories."}
          </p>

          {/* Render the product cards within a Bootstrap row */}
          <Row className="g-4">
            {/* For each product in the current group, render a product card */}
            {group.map((card, index) => (
              <Col key={index} lg={3} md={4} sm={6} xs={12}>
                {/* ProductInfo component that displays details of the product */}
                <ProductInfo
                  id={card.id}  // Pass the unique ID of the product
                  title={card.title}  // Product title
                  text={card.text}  // Product description
                  imageUrl={card.imageUrl}  // Product image URL
                  options={card.options}  // Product options (e.g., colors, sizes)
                  prices={card.prices}  // Product prices
                  onAddToCart={() => {
                    // Dispatch the `addToCart` action when the "Add to Cart" button is clicked
                    dispatch(addToCart({
                      id: card.id,  // Include the unique product ID in the cart
                      title: card.title,  // Title of the product
                      price: card.prices[0],  // Price of the product (first option)
                      imageUrl: card.imageUrl,  // Image of the product
                      selectedOption: card.options[0]  // First option selected (e.g., color or size)
                    }));
                  }}
                />
              </Col>
            ))}
          </Row>

          {/* Add a horizontal rule (divider) between groups except after the last group */}
          {groupIndex < 2 && <hr className="shop-divider" />}
        </div>
      ))}
    </Container>
  );
}

export default Shop;