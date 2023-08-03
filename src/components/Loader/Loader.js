import { Spinner } from "react-bootstrap"

const Loader = ({show}) => {
    return (
        show ?
        (
            <div className="Loader-full-size">
                <div className="Loader-spinner">
                    <Spinner animation="border" variant="light" />
                </div>
            </div>
        ) : 
        (<></>)
    )
}

export default Loader