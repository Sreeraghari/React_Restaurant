import React from 'react'
import Cards from './Card'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../Actions/restaurantAction'
function Home() {
    const dispatch = useDispatch()
    const restaurantReducer = useSelector((state) => state.restaurantReducer)
    const [filter, setFilter] = useState(" ")
    const { restaurant } = restaurantReducer

    useEffect(() => {
        dispatch(listRestaurants())

    }, [])

    // const [hotels, setHotels] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         await fetch('./restaurants.json')
    //             .then((res) => res.json())
    //             .then((data) => setHotels(data.restaurants))
    //     }
    //     fetchData()

    // }, [])

    console.log(restaurant);

    return (
        <Row>
            <input type="text"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            {restaurant ?

                restaurant.filter(item => {
                    if (filter === " ") {
                        return item
                    }
                    else if (item.cuisine_type.toLowerCase().includes(filter.toLowerCase())) {
                        return item
                    }
                })
                    .map(item => (

                        <Col sm={12} md={8} lg={6} xl={3}>

                            <Cards item={item} />
                        </Col>
                    )) : 'no Da'}
        </Row>
    )
}

export default Home