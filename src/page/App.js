import "./styles.css";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import Sidebar from "../Components/sidebar";
import Footer from "../Components/footer";
import TeachCards from "../Components/TeacherCard";
import TeachCardsApi from "../Components/TeacherCardApi";
export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
        <TeachCardsApi />
        <Footer />
      </div>
    </div>
  );
}
