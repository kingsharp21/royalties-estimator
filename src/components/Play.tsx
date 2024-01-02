

const logo =  require("../assets/img/logo.png")

function Play() {
    return ( 
        <div className="play-music">
            <div className="play-music-wrapper">
                <div className="logo">
                    <img src={logo} width={60}  alt="logo" />
                </div>
                <h1>kingsharp</h1>
                <h1>kingsharp</h1>
            </div>
        </div>
     );
}

export default Play;