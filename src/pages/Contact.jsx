import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-container">

        <h1>Let's Connect</h1>

        <p className="contact-intro">
          Have a thought to share, a story to tell,
          or simply want to say hello?
          <br />
          I'd love to hear from you. 🌷
        </p>

        {/* Email Section */}

        <div className="email-section">

          <h2>Write to Ink & Soul</h2>

          <p>
            For any queries, thoughts, feedback, or simply to say hello,
            feel free to reach out to me.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=inkandsoul752@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-email"
          >
            📧 inkandsoul752@gmail.com
          </a>

        </div>

        {/* Writing Submission */}

        <div className="story-message">

          <p>
            Have something you've written and would like to share?
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=inkandsoul752@gmail.com&su=Writing%20Submission%20for%20Ink%20%26%20Soul"
            target="_blank"
            rel="noopener noreferrer"
            className="submit-writing-button"
          >
            ✍️ Send Your Writing
          </a>

        </div>

        <p className="contact-footer">
          Thank you for being a part of Ink & Soul. 🌷
        </p>

      </div>

    </div>
  );
}

export default Contact;