import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiPlus, FiX } from "react-icons/fi";
import { SiCreatereactapp } from "react-icons/si";

// ✅ Move the faqs array above the Contact function
const faqs = [
  {
    question: "WHAT SERVICE DO YOU OFFER?",
    answer:
      "We specialize in UI/UX design, product design, web development, and creating user-friendly digital experiences tailored to meet client needs. We also offer consultations and custom design solutions.",
  },
  {
    question: "HOW LONG DOES IT TAKE TO COMPLETE A PROJECT?",
    answer:
      "The timeline depends on the complexity of the project. Typically, a standard website design or redesign takes 4-6 weeks, while larger projects may require more time. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "HOW DO I GET STARTED WITH A PROJECT?",
    answer:
      "Simply reach out via our contact form or email, and we’ll schedule a consultation to discuss your project goals, budget, and timeline. From there, we’ll create a custom proposal for you.",
  },
  {
    question: "DO YOU OFFER ONGOING SUPPORT AFTER THE PROJECT IS COMPLETE?",
    answer:
      "Yes! We offer various support packages, including ongoing maintenance, updates, and troubleshooting to ensure your website or product continues to perform optimally.",
  },
  {
    question: "DO YOU REQUIRE A DEPOSIT BEFORE STARTING THE PROJECT?",
    answer:
      "Yes, we require a 50% deposit to begin work on most projects. The remaining balance is due upon completion and approval of the final deliverables.",
  },
  {
    question: "DO YOU INTEGRATE THIRD-PARTY TOOLS?",
    answer:
      "Yes, we can integrate various third-party tools and APIs, including payment gateways, social media platforms, and analytics tools, to enhance your website’s functionality.",
  },
];

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Form Submitted Successfully!");
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="contact-container">
      {/* Contact Information Section */}
      <div className="contact-wrapper">
        <h2>Contact me and Let's build something incredible</h2>
        <span className="contact-link">
          <a href="https://web.facebook.com/hejidev/" className="face">Facebook</a>
          <a href="https://x.com/hejidev" className="twit">Twitter</a>
          <a href="" className="insta">Instagram</a>
          <a href="wa.me/2348130693571" className="what">Whatsapp</a>
        </span>
      </div>

      {/* Address Section */}
      <div className="address-wrapper">
        <div className="address-con">
          <span>
            <h5>Address</h5>
            <p>Olobo Street, Ayekale Area Osogbo, Osun State, 230281 </p>
          </span>
          <span>
            <h5>Email:</h5>
            <a href="mailto:hejidev19@gmail.com">hejidev19@gmail.com</a>
            <a href="mailto:haryomidey15@gmail.com">haryomidey15@gmail.com</a>
          </span>
          <span>
            <h5>Phone:</h5>
            <a href="tel:+2348130693571">+(234) 813 069 3571</a>
            <a href="tel:+2347011560069">+(234) 701 156 0069</a>
          </span>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <div className="form-wrapper">
            <div className="form-input">
              <label>First Name</label>
              <input type="text" {...register("firstName", { required: "First name is required" })} />
              {errors.firstName && <p className="error-text">{errors.firstName.message}</p>}
            </div>

            <div className="form-input">
              <label>Last Name</label>
              <input type="text" {...register("lastName", { required: "Last name is required" })} />
              {errors.lastName && <p className="error-text">{errors.lastName.message}</p>}
            </div>

            <div className="form-input">
              <label>Email</label>
              <input type="email" {...register("email", { required: "Email is required" })} />
              {errors.email && <p className="error-text">{errors.email.message}</p>}
            </div>

            <div className="form-input">
              <label>Phone</label>
              <input type="tel" {...register("phone", { required: "Phone number is required" })} />
              {errors.phone && <p className="error-text">{errors.phone.message}</p>}
            </div>

            <div className="form-input">
              <label>Service Required</label>
              <select {...register("service", { required: "Please select a service" })}>
                <option value="">Select a service</option>
                <option value="Website Development">Website Development</option>
                <option value="Branding">Branding</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Mobile Responsiveness">Mobile Responsiveness</option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="E-commerce Solutions">E-commerce Solutions</option>
              </select>
              {errors.service && <p className="error-text">{errors.service.message}</p>}
            </div>

            <div className="form-input">
              <label>Do you have a budget?</label>
              <div className="check-con">
                <label>
                  <input type="radio" value="Yes" {...register("budget", { required: "Please select an option" })} /> Yes
                </label>
                <label>
                  <input type="radio" value="No" {...register("budget", { required: "Please select an option" })} /> No
                </label>
              </div>
              {errors.budget && <p className="error-text">{errors.budget.message}</p>}
            </div>
          </div>

          <div className="textarea-con">
            <label>Write a Message</label>
            <textarea {...register("message", { required: "Message is required" })}></textarea>
            {errors.message && <p className="error-text">{errors.message.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="faq-container">
        <span>
        <SiCreatereactapp className='faqs-icon'/>
          <h5>FAQS</h5>
        </span>
      <h2>Have Any Questions ?</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}>
                {activeIndex === index ? <FiX /> : <FiPlus />}
              </span>
              <p>{faq.question}</p>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Contact;
