import { useHistory } from 'react-router-dom';

function SupportForm(){

    return(
        <>
            <button onClick={() => {history.push('/CommentsForm')}}>Next</button>
        </>
    )

}

export default SupportForm;