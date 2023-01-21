import { useHistory } from 'react-router-dom';

function CommentsForm(){

    return(
        <>
            <button onClick={() => {history.push('/ReviewFeedback')}}>Finish</button>
        </>
    )

}

export default CommentsForm;