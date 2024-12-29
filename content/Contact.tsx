import { h, Fragment } from "preact";

export default () => (
  <>
    <h2>Contact</h2>
    <h3>
      Ready to discuss your project? Please reach out and I’ll get in touch with
      you soon!
    </h3>
    <form method="POST" name="contact">
      <input type="hidden" name="form-name" value="contact" />

      <label>
        <span>Your Name</span> <input type="text" name="name" />
      </label>

      <label>
        <span>Your Email</span> <input type="email" name="email" />
      </label>

      <label>
        <span>Message</span> <textarea name="message"></textarea>
      </label>

      <button type="submit">Send</button>
    </form>
  </>
);
