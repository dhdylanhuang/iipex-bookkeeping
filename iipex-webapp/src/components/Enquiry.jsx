import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

function Enquiry() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    emailjs
        .sendForm(
            serviceId,
            templateId,
            e.target,
            publicKey
        )
        .then(
            result => {
                setStatus('Message sent successfully!')
                setEmail('')
                setSubject('')
                setMessage('')
            },
            error => {
                console.error('EmailJS error:', error)
                setStatus('Failed to send message.')
            }
        )
  }

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col items-start">
        <p className="text-2xl text-blue-300 font-bold">Enquiry</p>
        <h2 className="text-3xl text-white font-bold py-">
          Contact Us and we'll get back to you as soon as possible.
        </h2>

        <form onSubmit={sendEmail} className="w-full mt-6 flex flex-col gap-4">
          <input
            type="email"
            name="client_email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white w-[200px] rounded-md font-medium py-3 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-4 text-white font-medium">{status}</p>
        )}
      </div>
    </div>
  )
}

export default Enquiry