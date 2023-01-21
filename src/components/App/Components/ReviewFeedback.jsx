import axios from "axios";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
function ReviewFeedback(){

    const dispatch = useDispatch();

    const reviewList = useSelector((store) => store.reviewList)

    useEffect(() => {
        getAllReviewData();
    }, [])

    //NEEDS to go in a use effect to render on the DOM
    const getAllReviewData = () => {
        axios({
            method: 'GET',
            url: '/reviews'
        }).then((response) => {
            dispatch({
                type: 'SET_REVIEW_LIST',
                payload: response.data // 👈 this is array of book objects!
              })
        }).catch((err) => {
            console.error('BookList useEffect fail:', err)
        })
    }

    return (
        <>
            {
                reviewList.map((review)=> {
                    return <p>{review.feeling}{review.understanding}{review.support}{review.comments}</p>
                })
            }
        </>
    )
}

export default ReviewFeedback;