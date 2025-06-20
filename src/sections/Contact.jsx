import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { HeadTitle } from "../components/HeadTitle";
import { ContactModel } from "../components/contactModel";

export const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log('here')
      setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setMessage('your message sent')
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("email can not send ", error);
    } finally {
      setLoading(false); 
    }
  }

  return (
    <section
      id="contact"
      className="flex-center section-padding  md:mt-40 mt-20"
    >
      <div className="w-full h-full md:px-10 px-5">
        <HeadTitle
          title="Let’s Connect and Collaborate"
          subTitle="💬 Got a project or idea? I’d love to hear from you! 🚀"
        />

        <div className="flex flex-col justify-center items-center gap-5 ">
          <ContactModel />

          <div className="w-[400px] border border-black-50 bg-black-100 rounded-xl p-5">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-5"
            >
              <div>
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What’s your good name?"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What’s your email address?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="5"
                  required
                />
              </div>

              <button type="submit" disabled={loading}>
                <div className="custom-button group">
                  <div className="bg-circle" />
                  <p className="text">
                    {loading ? "Sending..." : "Send Message"}
                  </p>
                  <div className="arrow">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
              <p className="text-green-600 "> {message}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
