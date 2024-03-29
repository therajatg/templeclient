import "./App.css";
import { Privacy } from "./Privacy";
import { Route, Routes } from "react-router-dom";

function App() {
  const styles = {
    container: {
      padding: "2rem",
      fontFamily: "sans-serif",
      lineHeight: "1.5",
    },
    heading1: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    paragraph: {
      marginBottom: "1rem",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Privacy Policy</h1>
      <p>Last Updated: March 29, 2024</p>
      <p>
        This Privacy Policy describes our policies regarding the collection,
        use, and disclosure of your information when you use our Shashwat
        Android application (the "Service") and the choices you have associated
        with that information.
      </p>
      <p>
        Located in Jaipur, Rajasthan, India, we operate under the data privacy
        laws and regulations of India.
      </p>
      <h2>We Don't Collect User Data</h2>
      <p>
        The Shashwat application does not collect any personal information from
        users. This means we don't collect data such as name, email address,
        location, contacts, or any other information that could be used to
        identify you.
      </p>
      <h2>Changes to this Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time to reflect changes in
        our practices or for other operational, legal, or regulatory reasons.
        Any changes will be effective immediately upon posting the revised
        Privacy Policy in the app. We encourage you to review this Privacy
        Policy periodically for any updates.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy or the
        Shashwat app, you can contact us via email at dguptarajat@gmail.com. We
        are located in Jaipur, Rajasthan, India.
      </p>
      <h2>Your Consent</h2>
      <p>
        By using the Shashwat application, you consent to our Privacy Policy.
      </p>
    </div>
    // <>
    //   xsacwwfewf2
    //   <Routes>
    //     <Route path="/privacy" element={<Privacy />} />
    //   </Routes>
    // </>
  );
}

export default App;
