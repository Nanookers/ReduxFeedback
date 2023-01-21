import { useHistory } from 'react-router-dom';

function SupportForm(){

    const history = useHistory();

    return(
        <>
            <button onClick={() => {history.push('/CommentsForm')}}>Next</button>
        </>
    )

}

export default SupportForm;