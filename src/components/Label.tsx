function Label({img, text}:any) {
    return ( 
        <div className="label">
            <div className="label-img">
                <img src={img} width='100%' height='100%' alt="" />
            </div>
            <p>{text}</p>
        </div>
     );
}

export default Label;