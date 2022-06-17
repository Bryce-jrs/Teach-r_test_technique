import Header from "./Header";
import Cards from "./Cards";
import Sidebar from "./sidebar";
import Footer from "./footer";
import TeachCards from "./TeacherCard";
import TeachCardsApi from "./TeacherCardApi";

export default function Offer() {
  return (
    <div className="Offer">
      <Sidebar />
      <div className="content">
        <Header />
        <TeachCardsApi />
        <Footer />
      </div>
    </div>
  );
}
