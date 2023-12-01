// chatGPT assisted with the gallery, beasts came from lab 1 assignment
import React, { useState } from "react";
import HornedBeast from "../hornedBeast/HornedBeast.jsx";
import beasts from "../beastList/beasts.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';

// console.log(beasts);
// gpt assisted with different aspect of this component

const Gallery = ({ beasts, onSelectBeast }) => {
  const [selectedHorns, setSelectedHorns] = useState(null);
  const [displayBeasts, setDisplayBeasts] = useState(beasts);

  const handleFilterChange = (e) => {
    const hornsFilter = e.target.value;
    setSelectedHorns(hornsFilter);

   
    const filteredBeasts = beasts.filter(beast => {
      if (hornsFilter === 'all') {
        return true; 
      } else if (hornsFilter === '3ormore') {
        return beast.horns >= 3; 
      } else {
        return beast.horns === parseInt(hornsFilter, 10); 
      }
    });

    setDisplayBeasts(filteredBeasts);
  };

  return (
    <Container>
      
      <Form>
        <Form.Group controlId="filterByHorns">
          <Form.Label>Filter by Number of Horns:</Form.Label>
          <Form.Control
            as="select"
            value={selectedHorns || 'all'}
            onChange={handleFilterChange}
          >
            <option value="all">All Horns</option>
            <option value="1">One Horn</option>
            <option value="2">Two Horns</option>
            <option value="3ormore">Three or More Horns</option>
          </Form.Control>
        </Form.Group>
      </Form>

      
      <Row>
        {displayBeasts.map((beast) => (
          <Col key={beast._id} xs={12} sm={6} md={4} lg={3}>
            <HornedBeast
              title={beast.title}
              image={beast.image_url}
              description={beast.description}
              onSelect={onSelectBeast}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};


// 1-3 horns, two have 100

export default Gallery;

// const Gallery = () => {
//     const beasts =  [
//     {
//       "_id": 1,
//       "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//       "title": "UniWhal",
//       "description": "A unicorn and a narwhal nuzzling their horns",
//       "keyword": "narwhal",
//       "horns": 1
//     },
//     {
//       "_id": 2,
//       "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
//       "title": "Rhino Family",
//       "description": "Parent rhino with two babies",
//       "keyword": "rhino",
//       "horns": 2
//     },
//     {
//       "_id": 3,
//       "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
//       "title": "Unicorn Head",
//       "description": "Someone wearing a very silly unicorn head mask",
//       "keyword": "unicorn",
//       "horns": 1
//     },
//   ];

//    return (
//     <div>
//       <HornedBeast
//         title={beasts[0].title}
//         imageUrl={beasts[0].image_url}
//         description={beasts[0].description}
//       />
//       <HornedBeast
//         title={beasts[1].title}
//         imageUrl={beasts[1].image_url}
//         description={beasts[1].description}
//       />
//       <HornedBeast
//         title={beasts[2].title}
//         imageUrl={beasts[2].image_url}
//         description={beasts[2].description}
//       />
//     </div>
//   );

// };
