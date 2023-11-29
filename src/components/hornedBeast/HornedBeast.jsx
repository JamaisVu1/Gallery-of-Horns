import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function HornedBeast(props) {
  const [votes, setVotes] = useState(0);

  const handleVoteClick = () => {
    setVotes(votes + 1);
  };

    const handleCardClick = () => {
    if (props.onSelect) {
      props.onSelect(props);
    }
  };
// gpt assisted with debugging the votes and rezising the images, cards are from bootstrap

  return (
    
      
         <Card
      style={{ width: '18rem', margin: '1em', border: '2px solid #111' }}
      onClick={handleCardClick}
    >
          <Card.Img
            variant="top"
            src={props.image}
            alt={props.title}
            style={{
              height: '200px',
              objectFit: 'cover',
              maxWidth: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
            }}
          />
          <Card.Body>
            <Card.Title>
              <h2>{props.title}</h2>
            </Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Button variant="primary" onClick={handleVoteClick}>
             💗
            </Button>
            <span style={{ marginLeft: '1em' }}>{votes} Votes</span>
          </Card.Body>
        </Card>
      
  );
}



//     return (
//         <li>   
//             <h2>{props.title}</h2>
//             <img src={props.image} alt={props.title} />
//             <p>{props.description}</p>
//         </li>
//     )
// }

export default HornedBeast;