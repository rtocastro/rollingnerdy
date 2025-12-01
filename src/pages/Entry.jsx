import { Link } from 'react-router-dom'
import careLogo from '../assets/journalentryimage.png'

export default function Entry() {
  return (
    <>
this is the entry page
<div>
     <Link to='./MainPage'><img src={careLogo} className="logo" alt="CARE logo"/></Link> 
          
</div>

   <div className="card"> <h3>CARE Journal </h3>
      </div>
 
    </>
  )
}