import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
    photo: null,
  });

  const [status, setStatus] = useState(""); // track success/error message

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else if (name === "whatsapp") {
      // only digits allowed
      const onlyNums = value.replace(/\D/g, "");
      setFormData({ ...formData, whatsapp: onlyNums });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // reset message

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Photo = formData.photo ? reader.result : "";

      const payload = {
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        message: formData.message,
        photo: base64Photo,
      };

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxHK2N39UzhKRxzBKbFxIYwqcILHS0dUZTvzsgol8AaqUK1XriBxB8885LHMfR1oInh_A/exec",
          {
            method: "POST",
            body: JSON.stringify(payload),
          }
        );

        if (response.ok) {
          setStatus("success");
          setFormData({
            name: "",
            email: "",
            whatsapp: "",
            message: "",
            photo: null,
          });
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Error:", error);
        setStatus("error");
      }
    };

    if (formData.photo) {
      reader.readAsDataURL(formData.photo);
    } else {
      reader.onloadend();
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>WhatsApp:</label>
        <input
          type="tel"
          name="whatsapp"
          pattern="[0-9]{10,15}"
          value={formData.whatsapp}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Photo (optional):</label>
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />
      </div>

      <button type="submit" className="btn">Send</button>

      {status === "success" && (
        <p className="text-green-600 mt-2">✅ Thankyou For Contacting Us We Contact You Via Email & Whatsapp</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-2">❌ Error submitting form. Try again.</p>
      )}
    </form>
  );
};

export default ContactForm;
