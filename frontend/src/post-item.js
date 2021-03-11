import './post-item.css'
import Button from '@material-ui/core/Button'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const noPaddingTextButton = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        padding: '0',
        color: 'var(--main-font-color)',
        transition: 'color var(--transition-delay)',
      },
      root: {
        background: 'var(--card-background)',
      },
    },
  },
})

function PostItem({ postTitle, postDate, postDesc, postPic }) {
  return (
    <ThemeProvider theme={noPaddingTextButton}>
      <Button style={{ width: '100%' }} className="post-item-container">
        <img src={postPic} alt={`${postTitle}-thumbnail`} />
        <div className="right-container">
          <h2 className="post-title">{postTitle}</h2>
          <h3 className="post-date">{new Date(postDate).toLocaleString()}</h3>
          <p className="post-desc">{postDesc}</p>
        </div>
      </Button>
    </ThemeProvider>
  )
}

export default PostItem
