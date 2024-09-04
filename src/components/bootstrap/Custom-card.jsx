import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomRectangleCard({title,img,desc}) {
  return (
    <Card style={{ width: '18rem', display: "grid", gap: "10px", gridTemplateColumns: '2fr repeat(4, 1fr)' }}>

      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        {/* <Card.Title></Card.Title> */}
        <Card.Text>
          {title}
        </Card.Text>
        <Card.Text>
          <img src={img} height={100} width={100} alt="" />
        </Card.Text>
        <Card.Text>
          {desc}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CustomRectangleCard;