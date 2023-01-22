import axios from "axios";
import { useEffect, } from "react";
import {useDispatch, useSelector} from 'react-redux'
function ReviewFeedback(){

    const dispatch = useDispatch();

    const reviewInProgress = useSelector((store) => store.reviewInProgress)

    console.log(reviewInProgress);
    // useEffect(() => {
    //     getAllReviewData();
    // }, [])

    // //NEEDS to go in a use effect to render on the DOM
    // const getAllReviewData = () => {
    //     axios({
    //         method: 'GET',
    //         url: '/reviews'
    //     }).then((response) => {
    //         dispatch({
    //             type: 'SET_REVIEW_LIST',
    //             payload: response.data // 👈 this is array of book objects!
    //           })
    //     }).catch((err) => {
    //         console.error('BookList useEffect fail:', err)
    //     })
    // }


    const handleOnSubmit = () => {
        axios({
            method: 'POST',
            url: '/reviews',
            data: reviewInProgress
          }).then((response) => {
            
          }).catch((err) => {
            console.error('handleSubmit fail:', err)
          })
        console.log(reviewInProgress.feelings);
    }

    return (
        <>
            <p>Feeling:{reviewInProgress.feeling}</p>
            <p>understanding:{reviewInProgress.understanding}</p>
            <p>support:{reviewInProgress.support}</p>
            <p>comments:{reviewInProgress.comments}</p>
            <form onSubmit={handleOnSubmit}>
                <button type="submit"></button>
            </form>
        </>
    )
}

export default ReviewFeedback;