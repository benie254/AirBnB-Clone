import Katie from '../../assets/katie-zaferes.png'
import Star from '../../assets/star.png'

export default function Card() {
    return (
        <div className='my-card'>
            <div className='my-card-img'>
                <img src={Katie} alt="" />
            </div>
            <div className='my-card-body'>
              <div className='my-card-muted'>
                <small className="gray">
                    <span><img className="star" src={Star} alt="" /></span> <span><small className='rating'>5.0 (6)  USA</small></span>
                </small>
              </div>

              <div className='my-card-des'>
                <p>Life lessons with Katie Zaferes 
                    <br /> 
                   <strong>From $136</strong> / person
                </p>
              </div>
            </div>
        </div>
    )
}