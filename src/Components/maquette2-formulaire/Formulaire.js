import Footerform from "./Footer-formulaire";
import Headerform from "./Header-formulaire";
import FormContenu from "./Content-form";
import Sidebarform from "./Sidebar-formulaire";

export default function Formulaire() {
  return (
    <div className="Formulaire">
      <Sidebarform />
      <div className="content">
        <Headerform />
        <FormContenu />
        <Footerform />
      </div>
    </div>
  );
}
