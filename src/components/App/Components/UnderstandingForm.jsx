import { useHistory } from 'react-router-dom';

function UnderstandingForm(){

    return(
        <>
            <button onClick={() => {history.push('/SupportForm')}}>Next</button>
        </>
    )

}

export default UnderstandingForm;