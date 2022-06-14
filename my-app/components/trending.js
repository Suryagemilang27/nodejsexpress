import { Card, Col, Container, Row,Image } from 'react-bootstrap';
// import imageXmen from "../assets/images/x-men.jpeg"

const Trending = () => {
   return(
<Container>
   <Row>
   <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/CROWSZERO.jpg" alt="card image"  max height="550vh"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>CROWS ZERO (GENJIEH) </Card.Text>
         <Card.Text>GOOD 4.0/4.0</Card.Text>
         </div>
       </Card>
       </Col>
       
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/x-men.jpeg" alt="card image"  max height="550vh"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>X-Men : Days of Future Past</Card.Text>
         <Card.Text>GOOD 3.8/4.0</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/logan1.jpg" alt="card image"  max height="550vh"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>LOGAN</Card.Text>
         <Card.Text>GOOD 3.9/4.0</Card.Text>
         </div>
         </Card>
       </Col>
       </Row>
       
       <Row>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/spiderman-no way home.jpg" alt="card image"  max height="550vh"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Spiderman : No Way Home</Card.Text>
         <Card.Text>GOOD 3.7/4.0</Card.Text>
         </div>
       </Card>
       </Col>
    
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/TheLastNarutomovie.jpg" alt="card image"  max height="550vh"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Naruto : The Last</Card.Text>
         <Card.Text>GOOD 3.9/4.0</Card.Text>
         </div>
       </Card>
       </Col>

   <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/drstrange.jpg" alt="card image"  max height="550vh"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>DR STRANGE</Card.Text>
         <Card.Text>GOOD 3.8/4.0</Card.Text>
         </div>
       </Card>
       </Col>
       </Row>

       <Row>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/civilwar.jpg" alt="card image"  max height="550vh"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>CIVIL WAR</Card.Text>
         <Card.Text>GOOD 3.9/4.0</Card.Text>
         </div>
       </Card>
       </Col>
   
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/Deadpool.jpg" alt="card image"  max height="550vh"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>DEAD POOL</Card.Text>
         <Card.Text>GOOD 3.9/4.0</Card.Text>
         </div>
       </Card>
       </Col>

       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/ironman.jpg" alt="card image"  max height="550vh"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>IRONMAN</Card.Text>
         <Card.Text>GOOD 3.9/4.0</Card.Text>
         </div>
       </Card>
       </Col>
       </Row>

</Container>

   )
}

export default Trending