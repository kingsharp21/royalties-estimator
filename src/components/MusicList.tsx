import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const thumb =  require("../assets/img/avatar.avif")

function MusicList({num,title,artise,time}:any) {
    return ( 
        <div className="music">
            <div className="left-side">
                <p className="number">{num}</p>
                <img src={thumb} width={55} alt="music-logo" />
                <div className="desc">
                    <h3 className="title">{title}</h3>
                    <span>{artise}</span>
                </div>
            </div>
            <div className="right-side">
                <FavoriteBorderIcon/>
                <h4 className="music-time">{time}</h4>
                <MoreHorizIcon/>
            </div>
        </div>
     );
}

export default MusicList;