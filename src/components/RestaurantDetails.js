import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import  Rating from './Rating'
import { useSelector } from 'react-redux'
function RestaurantDetails() {

    const { id } = useParams()
 
    const restaurantReducer=useSelector(state=>state.restaurantReducer)

    const{restaurant}=restaurantReducer

    // const [details, setDetails] = useState([])
   
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await fetch('/restaurants.json')
    //             .then((res) => res.json())
    //             .then((data) => setDetails(data.restaurants))
    //     }
    //     fetchData()
    // }, [])
    const restaurantData = restaurant.find(item => item.id == id)
console.log("sreeragetta",restaurant);

    return (
        <>
            <Link className='btn btn-dark' to='/'>Back</Link>

            {restaurantData ? (
                <Row className='my-3'>

                    <Col md={3} >
                        <Image src={restaurantData.photograph} alt={restaurantData.name} fluid />
                    </Col>

                    <Col md={4}>

                        <ListGroup.Item>
                            <h2>{restaurantData.name}</h2>
                            <p>{restaurantData.neighbourhood}</p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <p>Cuisine Type :{restaurantData.cuisine_type}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>Address :{restaurantData.address}</p>
                        </ListGroup.Item>


                    </Col>
                    <Col md={4}>
                        <ListGroup.Item>
                            <h4>Operating hours :</h4>
                            <p>Monday :{restaurantData.operating_hours.Monday}</p>
                            <p>Tuesday :{restaurantData.operating_hours.Tuesday}</p>
                            <p>Wednesday :{restaurantData.operating_hours.Monday}</p>
                            <p>Thursday :{restaurantData.operating_hours.Monday}</p>
                            <p>Friday :{restaurantData.operating_hours.Monday}</p>
                            <p>Saturday :{restaurantData.operating_hours.Saturday}</p>
                            <p>Sunday :{restaurantData.operating_hours.Sunday}</p>

                        </ListGroup.Item>
                    </Col>
                    <Row className='my-3 mx-3'>
                        <Rating data={restaurantData.reviews}></Rating>
                    </Row>

                </Row>
            ) : 'no data sorry mhann kittunnillla'}


        </>
    )
}

export default RestaurantDetails