import "./navbar.scss"

const Navbar = () => {
  return (
    <nav className="">
      <div className="left">
        <a href="/">
          <img src ="/logo.png"/>
          <span>UmerEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
      <a href="/">Sign in</a>
      <a href="/">Sign up</a>
      </div>
    </nav>
  )
}

export default Navbar
