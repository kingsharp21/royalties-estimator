import { useState, useEffect } from "react";
import { useParams } from 'react-router'
import VerifiedIcon from '@mui/icons-material/Verified';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";
import { getArtise } from '../service/artiseService'

import MusicList from "../components/MusicList";

const thumb =  require("../assets/img/two.avif")

function Artise() {
    // const params= useParams();
    let { artiseId } = useParams();
    // params.artiseId
    const[artise, setArtise] = useState<any[]>([])

    useEffect(()=>{
        let data = getArtise(artiseId)
        data.then((result)=>{setArtise(result[0])})
    }, [])
   
    return ( 
        <div className="content-wrapper">
            <div className="artise-over-view" style={{ backgroundImage:`url("${thumb}")`  }}>
                <Link to={'/'}><ArrowBackIosIcon className="prev-icon"/></Link>
                
                <div className="desc">
                    <span className="handle-tag"><VerifiedIcon className="verified-icon"/>@theresaboyer</span>
                    <h1 className="artise-name">{artise.name}</h1>
                    <p className="download-queries">425,855,704 monthly downloads</p>
                </div>
            </div>

            <div className="artise-music">
                <div className="header">
                    <h3>All</h3>
                    <PlayCircleFilledWhiteIcon className="play-icon"/>
                </div>
                <MusicList num={1} title='dnbsjdbs' artise='jsbsjkbfs' time='2:23'/>
                <MusicList num={2} title='dnbsjdbs' artise='jsbsjkbfs' time='2:23'/>
                <MusicList num={3} title='dnbsjdbs' artise='jsbsjkbfs' time='2:23'/>
                <MusicList num={4} title='dnbsjdbs' artise='jsbsjkbfs' time='2:23'/>
                <MusicList num={5} title='dnbsjdbs' artise='jsbsjkbfs' time='2:23'/>
                <MusicList num={6} title='dnbsjdbs' artise='jsbsjkbfs' time='2:23'/>
                <MusicList num={7} title='dnbsjdbs' artise='jsbsjkbfs' time='2:23'/>
                <MusicList num={8} title='dnbsjdbs' artise='jsbsjkbfs' time='2:23'/>
                <MusicList num={9} title='dnbsjdbs' artise='jsbsjkbfs' time='2:23'/>
                
            </div>

        </div>
     );
}

export default Artise;