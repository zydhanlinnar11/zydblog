import '../css/footer.css'
import blogConfig from '../utilities/config'

const Footer = () => {
  const customFooterText = blogConfig.getCustomFooterText()
  const isCustomFooterTextDeclared = typeof customFooterText === 'string'
  return (
    <footer>
      <div className="horizontal-line" />
      <div className="footer-inner-container">
        <h4 className="footer-text">{blogConfig.getBlogName()}</h4>
        <div className="vertical-line" />
        <h4 className="footer-text">
          {isCustomFooterTextDeclared ? customFooterText : 'Created with React'}
        </h4>
      </div>
    </footer>
  )
}

export default Footer
