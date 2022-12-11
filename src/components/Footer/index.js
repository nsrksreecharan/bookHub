import {GrGoogle, GrTwitter, GrInstagram, GrYoutube} from 'react-icons/gr'
import './index.css'

const Footer = () => (
  <div className="Footer">
    <div className="iconsContainerFooter">
      <GrGoogle className="icons" />
      <GrTwitter className="icons" />
      <GrInstagram className="icons" />
      <GrYoutube className="icons" />
    </div>

    <p>Contact us</p>
  </div>
)

export default Footer
