import { useHistory } from 'react-router-dom';

function CommentsForm(){

    const history = useHistory();

    return(
        <>
            <button onClick={() => {history.push('/ReviewFeedback')}}>Finish</button>
        </>
    )

}

export default CommentsForm;