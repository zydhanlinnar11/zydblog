import '../css/footer.css'
import blogConfig from '../utilities/config'

const Footer = () => {
  return (
    <footer>
      <div className="horizontal-line" />
      <div className="footer-inner-container">
        <h4 className="footer-text">{blogConfig.getBlogName()}</h4>
        <div className="vertical-line" />
        <h4 className="footer-text">{blogConfig.getRightFooterText()}</h4>
      </div>
    </footer>
  )
}

export default Footer
