import PhotoGrid from '../../assets/photo-grid.png'

export default function Grid() {
    return(
        <div className="intro">
            <img src={PhotoGrid} alt="" />
            <h1 className='title'>Online Experiences</h1>
            <p className='description'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}