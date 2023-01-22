import axios from "axios";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
function ReviewFeedback(){

    const dispatch = useDispatch();

    const history = useHistory();

    const reviewInProgress = useSelector((store) => store.reviewInProgress)

    const handleOnSubmit = () => {

        
        axios({
            method: 'POST',
            url: '/reviews',
            data: reviewInProgress
          }).then((response) => {
            
          }).catch((err) => {
            console.error('handleSubmit fail:', err)
          })

        history.push({
            pathname: '/ReviewComplete',
        });
    }

    return (
        <>
            <p>Feeling: {reviewInProgress.feeling}</p>
            <p>Understanding: {reviewInProgress.understanding}</p>
            <p>Support: {reviewInProgress.support}</p>
            <p>Comments: {reviewInProgress.comments}</p>
            <form onClick={handleOnSubmit}>
                <button type="button">Submit Review</button>
            </form>
        </>
    )
}

export default ReviewFeedback;