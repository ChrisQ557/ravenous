import './Business.css';
function Business() {
    return (
        <div className="Business">
            <div className="image-container">
                <img src="https://picsum.photos/200" alt="restaurant" />
            </div>
            <h2>Restaurant Name</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>123 Main Street</p>
                    <p>New York City, NY</p> 
                    <p>10001</p>
                </div>
                <div className="Business-reviews">
                    <h3 className="category">Sushi</h3>
                    <h3 className="rating">4 stars</h3>
                    <p>200 reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business;