import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import ContactForm from "./ContactForm";
export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "50vh",

          overflow: "hidden",
        }}
      >
        <ContactForm />
      </div>
      <div className="contacts">
        <div>
          <a href="souravdekad@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:souravdekad@gmail.com">souravdekad@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919630576848">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+917896651958">(+91) 7896651958</a>
        </div>
      </div>
    </Container>
  );
}
