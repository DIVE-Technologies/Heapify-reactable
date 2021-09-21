import React, { useState } from "react";
import Btn from "../../Components/Btn";
import Input from "../../Components/Input";
import Fetch from "../../Utils/Fetch";
import styles from "./homepage.module.css";

const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = () => {
    const expression = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return !expression.test(email);
  };

  const validate = () => {
    setError("");
    if (!name) {
      setError("Name is required!");
      return false;
    } else if (!email) {
      setError("Email is required!");
      return false;
    } else if (validateEmail()) {
      setError("Invalid email!!");
      return false;
    } else if (!message) {
      setError("Please enter the message!!");
      return false;
    }
    return true;
  };

  const submitForm = async () => {
    if (validate()) {
      const data = { name, email, message };
      setLoading(true);

      const response = await Fetch("query/contactUs", "POST", data);
      const result = await response.json();
      setLoading(false);

      if (response.status === 200 || response.status === 201) {
        setSuccess(result.message);
      } else {
        setError(result.message);
      }

      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 4000);
    }
  };

  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <div className={`${styles.heading} text-center`}>Contact us</div>
          <div className={`${styles.subHeading} p-3`}>
            Ad occaecat exercitation eu exercitation sint esse cillum dolore
            duis occaecat mollit. Laborum elit et nulla ex voluptate est minim
            ea nostrud voluptate quis duis pariatur exercitation. Nostrud
            excepteur sint velit pariatur excepteur qui voluptate occaecat ut
            aute dolore aliqua.
          </div>
        </div>
        <div className="col-12 col-md-6">
          <form type="submit" onSubmit={submitForm}>
            <Input
              title="Name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              height={50}
            />
            <Input
              title="Email"
              type="email"
              placeholder="youremail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              height={50}
            />
            <Input
              title="Message"
              type="text"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              textarea={true}
              height={200}
            />
            {error ? (
              <div className="alert alert-danger mt-4">{error}</div>
            ) : null}
            {success ? (
              <div class="alert alert-success mt-4">{success}</div>
            ) : null}
            <div className="mt-4" style={{ textAlign: "right" }}>
              <Btn loading={loading} onClick={submitForm} title="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
