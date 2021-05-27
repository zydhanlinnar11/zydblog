interface IBlogConfig {
  blogName: string
  customFooterText?: string
}

const blogConfig: IBlogConfig = {
  blogName: "Zydhan's Blog",
}

const getBlogName = () => blogConfig.blogName
const getCustomFooterText = () => blogConfig.customFooterText

export default { getBlogName, getCustomFooterText }
