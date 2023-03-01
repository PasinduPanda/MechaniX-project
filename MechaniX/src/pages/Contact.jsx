import React from "react";

function Contact() {
  return (
    // <>
    //   <section className="hero-section-contact">
    //     <p>Welcome to </p>
    //     <h1 className="h1-contact">The MechnicX Contact Page</h1>
    //   </section>
    // </>
    <div className="div-contact">
      <h1 className="h1-contact">The MechnicX Contact Page</h1>
      <form>
        <h1>Contact Us.</h1><br></br>
        <input type='text' name="Name" id="" placeholder="Enter Your Name : " required></input><br></br>
        <input type='email' name="Email" id="" placeholder="example@gmail.com" required></input><br></br>
        <input type='phone' name="Phone" id="" placeholder="+94 77 2 588 588" required></input><br></br>
        <textarea name="message" id="" cols='80' rows='10' placeholder="Type Here..." ></textarea><br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
