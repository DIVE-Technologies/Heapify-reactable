import React from 'react';
import { Container } from 'react-bootstrap';

const Image = (props) => {
    return (
        <Container className='text-center mt-3 mb-3'>
            <img src={props.src} alt={props.alt} />
        </Container>
    )
}

export default Image
