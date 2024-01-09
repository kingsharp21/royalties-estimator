import { useState, useEffect } from "react";


// const thumb1 =  require("../assets/img/four.avif")
// const thumb2 =  require("../assets/img/two.avif")
// const thumb3 =  require("../assets/img/three.avif")
import Label from "../components/Label";
import Trending from "../components/Trending";

import { getArtises } from '../service/artiseService'


const thumb =  require("../assets/img/avatar.avif")

function HomePage(props:any) {
    const[trends, setTrends] = useState<any[]>([])

    
    

    useEffect(() => {
        let data = getArtises()
        data.then((result)=>{setTrends(result)})
        // console.log(data);
      }, []);
    return ( 
        <div className="content-wrapper">
            <div className="greeting">
                <h1>Good Evening, Kingsharp</h1>
                <div className="label-preview">
                {trends.map((ele:any)=>{
                    return <Label img={ele.md_img} text={ele.name}/>
                })}
                    {/* <Label img={thumb} text='kingsharp'/>
                    <Label img={thumb} text='nkansah'/>
                    <Label img={thumb} text='ampedu'/>
                    <Label img={thumb} text='kofi'/>
                    <Label img={thumb} text='zeddicus'/>
                    <Label img={thumb} text='nana'/> */}
                </div>
            </div>

            <div className="trending">
                <h1>Trending Artists</h1>

                <div className="trending-artists">
                    {trends.map((ele:any)=>{
                        return <Trending img={ele.md_img} header={ele.name} para='Artist' artiseid={ele.id}/>
                    })}
                </div>
                
            </div>
           
           
        </div>

     );
}

export default HomePage;