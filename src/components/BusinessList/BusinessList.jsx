import Business from '../Business/Business';
import './BusinessList.css';

function BusinessList({ businesses }) {
    return (
        <div>
            {businesses.map(business => (
                <Business key={business.id} business={business} />
            ))}
        </div>
    );
}

export default BusinessList;