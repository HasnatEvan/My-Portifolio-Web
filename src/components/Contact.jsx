import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import {
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validateForm = () => {
    const formErrors = {};
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name) formErrors.name = "Name is required";
    if (!email || !emailRegex.test(email)) formErrors.email = "Please enter a valid email";
    if (!message) formErrors.message = "Message cannot be empty";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .sendForm('service_8zdlq5f', 'template_an8vxpj', form.current, '4b_XIrPhrNR6Rctz4')
      .then(
        () => {
          form.current.reset();
          setErrors({});
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Message sent successfully!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          });
        },
        (error) => {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Failed to send message!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          });
          console.error('Error sending email:', error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Get in Touch
          <div className="w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full" />
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p>Chittagong, Bangladesh</p>

            <div className="mt-6 space-y-3 text-gray-800">
              <div className="flex items-center">
                <FaPhoneAlt className="text-green-600 mr-2" />
                <span>01814197707</span>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-green-600 mr-2" />
                <span>+8801824481881</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-green-600 mr-2" />
                <span>hasnatevan59@gmail.com</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-2">Follow Me</h3>
            <div className="flex space-x-6 text-2xl text-gray-600">
              <a href="https://github.com/HasnatEvan" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/hasnat.evan.733" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/hasnat-evan-web68" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us more about your needs..."
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
