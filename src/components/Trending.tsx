import { Link } from "react-router-dom";
function Trending({img, header, para, artiseid}:any) {
    return ( 
        <Link to={`artise/${artiseid}`}>
            <div className="trending">
                <img src={img} alt="artists-img" />
                <div className="desc">
                    <h2>{header}</h2>
                    <p>{para}</p>
                </div>
            </div>
        </Link>
        
     );
}

export default Trending;