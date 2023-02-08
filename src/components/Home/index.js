// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="about-container">
    <Header />
    <h1 className="about ">Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
