import { Link } from 'react-router-dom'
import careLogo from '../assets/journalentryimage.png'

export default function Entry() {
    return (
        <>
            <div className="card"> 
            </div>

            <div>
                <Link to='./MainPage'><img src={careLogo} className="logo" alt="CARE logo" /></Link>
            </div>


        </>
    )
}