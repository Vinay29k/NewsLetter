import React from 'react'

const Newsitems=(props)=> {
    
        let {title,description,imageurl,url,author,date}=props;
        return (
            <div>
                <div>

                    <div className="card" >
                        <img className="card-img-top" src={imageurl} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small class="text-muted">By {!author?'Unknown':author} on {date}</small></p>
                            <a rel="noreferrer" href={url} target ="_blank" className="btn btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default Newsitems
