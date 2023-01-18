import { Button } from 'react-bootstrap'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroImg from '../../../src/assets/images/learning.jpg'
import './Home.css'
const Home = () => {
  return (
   <section className='py-5' >
    <Container style={{height:'100%'}}>
        <Row>
        <Row >
            <Col md={7} className="d-flex flex-column justify-content-center align-items-start">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum sint voluptas delectus dolorum asperiores obcaecati consequatur dolor hic amet!</p>
                <div><Button variant="info">Enroll Now</Button></div>
            </Col>
            <Col md={5}>
                <div className='py-4'>
                <img src={heroImg} alt="pic" className='heroImg' height="300px" width="100%" style={{objectFit:'cover'}}/>
                </div>
            </Col>
        </Row>
        <Row>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam delectus molestias molestiae perspiciatis corporis vero maiores. Perspiciatis repudiandae hic expedita porro nostrum! Nihil, sit. Veritatis placeat reiciendis numquam! Commodi consequatur hic officiis delectus, impedit eius saepe nihil aspernatur nostrum, iure esse. Iste sapiente odio ducimus qui hic veritatis repellat ratione fugiat sed autem. Impedit ut labore corrupti dolorum eius? Facilis eos natus eius quia tempore nulla, neque repellendus recusandae exercitationem laboriosam deleniti officia quis optio voluptate possimus voluptatibus? Placeat ducimus architecto repudiandae, ut quia aliquam. Eos ducimus totam fugiat fugit, laudantium beatae, quisquam, officia in nisi sequi et quod facere maxime soluta fuga neque quibusdam dolorum odio. Autem asperiores nobis iste porro similique a cupiditate quam eveniet obcaecati. Alias fugit nulla quod, voluptas fugiat quis repellat, nisi dolorum maxime perferendis in error minus voluptatem quia aspernatur ipsam voluptatum expedita cumque ipsum quo culpa delectus, excepturi accusantium? Esse possimus sed nulla perferendis porro tenetur harum minus quia error aliquid, ratione ut consequuntur nobis quidem nam facilis recusandae, fugiat a deleniti aliquam explicabo laudantium sit. Aliquid nisi iure possimus suscipit quae voluptatem fugiat dolorem reprehenderit officiis non molestiae asperiores, hic vero dolore corporis laudantium labore nam ut eaque. Ullam molestias magnam quam totam. Laborum unde corrupti quidem, architecto culpa impedit tenetur amet dolorum quia a earum maxime, voluptates optio minima quisquam voluptatibus alias quaerat doloribus laboriosam eveniet voluptatem consectetur nam. Commodi.</p>
        </Row>
        </Row>
  
    </Container>


   </section>
  )
}

export default Home
