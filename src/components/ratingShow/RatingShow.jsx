import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

function RatingShow(props) {
    const [stars, setStars] = useState([])
    useEffect(() => {
        console.log(props.rating)
        const tempStars = [false, false, false, false, false];
        const ratingValue = Number(props.rating) || 0;
        for (let i = 0; i < Math.floor(ratingValue); i++) {
            tempStars[i] = true;
        }


        console.log(tempStars)
        setStars(tempStars)

    }, [])

    return (
        <div className='flex items-center text-lg  lg:text-xl'>
            Rating:&nbsp;
            {

                stars.map((filled, index) => (
                    <FaStar
                        key={index}
                        className={filled ? 'text-yellow-500' : 'text-gray-300'}
                    />
                ))}
        </div>
    );
}

export default RatingShow;
