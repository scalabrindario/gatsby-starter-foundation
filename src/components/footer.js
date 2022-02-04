/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>&copy; {new Date().getFullYear()} &bull; Made with <span role="img" aria-label="love">❤️</span> by <a href="https://www.linkedin.com/in/scalabrindario/">Dario Scalabrin</a></p>
      
    </div>
  </footer>
)

export default Footer
