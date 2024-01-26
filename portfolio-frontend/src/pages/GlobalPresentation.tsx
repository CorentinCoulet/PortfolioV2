import BorderProfile from "../components/BorderProfile";
import JobProfile from "../components/JobProfile";
import '../styles/globalPresentation.scss';

const GlobalPresentation = () => {

    return (
        <div className="globalPresentation">
            <BorderProfile />
            <h1>Corentin Coulet</h1>
            <JobProfile />
            <button>CONTACTEZ MOI</button>
        </div>   
    );
}

export default GlobalPresentation;