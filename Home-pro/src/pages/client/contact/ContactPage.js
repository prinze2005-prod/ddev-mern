import { Contact } from "../../../components";
import { useHistory } from "react-router-dom";

function ContactPage() {
  const history = useHistory();
  function addInquiryHandler(inquiryData) {
    fetch("https://home-pro-f5421-default-rtdb.firebaseio.com/inquiries.json", {
      method: "POST",
      body: JSON.stringify(inquiryData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <main>
      <Contact onAddInquiry={addInquiryHandler}></Contact>
    </main>
  );
}

export default ContactPage;
