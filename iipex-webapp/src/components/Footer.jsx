import React, {useState} from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const openModal = (content) => {
    setModalContent(content)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-50">
        <div>
          <h1 className="w-full text-3xl font-bold text-blue-300">
            <a href="/" className="hover:underline">
              IIPEX Accountancy Services
            </a>
          </h1>
          <p className="py-0 text-gray-50 hover:underline">
            <a href="https://maps.app.goo.gl/dYhtXzadR22XZqZN9">
              Office 1025, 3 Fitzroy Place,<br/>
              1/1 SAUCHIEHALL ST,<br/>
              FINNIESTON,<br/>
              GLASGOW,<br/>
              G3 7RH
            </a>
          </p>

          <p className="py-2 hover:underline">
            <a href="tel:07867293111">
              Mobile: 0786 7293111
            </a>
          </p>

          <p className="py-0">
            <a href="mailto:info@iipex.co.uk" className="hover:underline">
              Email: info@iipex.co.uk
            </a>
          </p>
          <p className="py-0">
            <a href="mailto:shabana@iipex.co.uk" className="hover:underline">
              Email: shabana@iipex.co.uk
            </a>
          </p>
          <div className="flex justify-between w-[40%] mt-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-100">Support</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer">
                <a href="#enquiry">Contact Us</a>
              </li>
              <li className="py-2 text-sm cursor-pointer"
                  onClick={() => openModal(
                    'For enquiries related to the website email dhdylanhuang@icloud.com')}>
                  Website
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-100">Company</h6>
            <ul>
              <li
                className="py-2 text-sm cursor-pointer"
                onClick={() =>
                  openModal(
                    'IIPEX Accountancy Services is based in Central Glasgow, Scotland. Our staff have over 20 years of experience across an array of industries.'
                  )
                }
              >
                About Us
              </li>
              <li
                className="py-2 text-sm cursor-pointer"
                onClick={() => openModal('FAQs content here')}
              >
                FAQs
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-100">Legal</h6>
            <ul>
              <li
                className="py-2 text-sm cursor-pointer"
                onClick={() => openModal('Privacy Policy')}
              >
                Privacy Policy
              </li>
              <li
                className="py-2 text-sm cursor-pointer"
                onClick={() => openModal('Terms & Conditions')}
              >
                Terms &amp; Conditions
              </li>
            </ul>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <button
              className="float-right text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="clear-both mt-4 text-gray-800">{modalContent}</div>
          </div>
        </div>
      )}
    </>
  )
};

export default Footer;