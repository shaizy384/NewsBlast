import React from 'react'

export default function NewsItem(props) {
  return (
    <div className="my-3">
      <div className="card">
        <div className="d-flex position-absolute end-0">
          <span className="badge rounded-pill bg-danger">{props.source}</span>
        </div>
        <img src={!props.imgUrl ? "https://www.inquirer.com/resizer/1QwFgz7Tw3c5iCLGpWgEX0WCaaU=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/ZSUKDURIOFDC7FPGYPVNKPWP6Y.jpg" : props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className='card-text'><small className='text-muted'>By {!props.author ? 'Unknown' : props.author} on {new Date(props.date).toGMTString()}</small></p>
          <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}