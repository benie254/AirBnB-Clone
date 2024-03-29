import Star from '../../../public/assets/star.png'

export default function Card(props) {
  let badgeText 
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if(props.location === "Online"){
    badgeText = "ONLINE"
  }
    return (
        <div className='my-card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <div className='my-card-img'>
                <img src={`/assets/${props.coverImg}`} alt="" />
            </div>
            <div className='my-card-body'>
              <div className='my-card-muted'>
                <small className="gray">
                    <span><img className="star" src={Star} alt="" /></span> <span><small className='rating'>{props.stats.rating} ({props.stats.reviewCount}) &#8226; {props.location}</small></span>
                </small>
              </div>

              <div className='my-card-des'>
                <p>{props.title} 
                    <br /> 
                   <strong>From ${props.price}</strong> / person
                </p>
              </div>
            </div>
        </div>
    )
}