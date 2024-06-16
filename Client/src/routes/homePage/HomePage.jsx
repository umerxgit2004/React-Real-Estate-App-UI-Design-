import SearchBar from "../../components/searchBar/SearchBar"
import "./homepage.scss"
const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
        <h1 className="title">Find Real Estate & Get  Your Dream Place</h1>
        <p>
        Discover the future of real estate with UmerEstate, your trusted partner in finding the perfect home. Explore our curated listings, connect with experienced agents, and embark on a seamless journey to your dream property.
        </p>
        <SearchBar/>
        <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of experience</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Awards Gained</h2>
            </div>
            <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
            </div>
        </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage
