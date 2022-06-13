import "./styles.css";
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Sidebar from '../Components/sidebar';
import Footer from '../Components/footer';

export default function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className="content">
      <Header/>
      <Cards/>
      <Footer/>
        </div>
    </div>
  );
}