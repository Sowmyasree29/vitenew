import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomRectangleCard({updated}) {
  return (
    <Card style={{ width: '18rem', display: "grid", gap: "10px", gridTemplateColumns: '2fr repeat(4, 1fr)' }}>

      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        {/* <Card.Title></Card.Title> */}
        <Card.Text>
          {updated}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CustomRectangleCard;