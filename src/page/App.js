import "./styles.css";
import Header from '../Components/Header';
import TeachCard from '../Components/Cards'
import Sidebar from '../Components/sidebar'
import Footer from '../Components/footer'

export default function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <TeachCard/>
      <Footer/>
    </div>
  );
}