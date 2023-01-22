import { useHistory } from 'react-router-dom';

function HomePage() {
    
    const history = useHistory()

    return (
        <>
            <h1> Ready to Begin Your Review?</h1>
            <button onClick={() => {history.push('/FeelingsForm')}}> Begin Review! </button>
        </>
    )
}

export default HomePage