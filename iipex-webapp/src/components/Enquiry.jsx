import React from 'react'

function Enquiry() {
    const [email, setEmail] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [status, setStatus] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, subject, message }),
            })
            if (res.ok) {
                setStatus('Message sent successfully!')
                setEmail('')
                setSubject('')
                setMessage('')
            } else {
                setStatus('Failed to send message.')
            }
        } catch (err) {
            console.error(err)
            setStatus('Error sending message.')
        }
    }

    return (
        <div className="w-full bg-black py-16 px-4">
            <div className="max-w-[1240px] mx-auto flex flex-col items-start">
                <p className="text-xl text-[#00df9a] font-bold">Enquiry</p>
                <h2 className="text-3xl text-white font-bold py-2">We’d Love to Hear From You</h2>
                <form onSubmit={handleSubmit} className="w-full mt-6 flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
                    />
                    <button
                        type="submit"
                        className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium py-3 hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </form>
                {status && (
                    <p className="mt-4 text-[#00df9a] font-medium">{status}</p>
                )}
            </div>
        </div>
    )
}

export default Enquiry