import { useState } from "react";
import {
    FaBook,
    FaMoneyBillWave,
    FaChartLine,
    FaUsersCog,
    FaPercentage
} from "react-icons/fa";
import { 
    MdAccountBalanceWallet,
    MdBusinessCenter
} from "react-icons/md";
import { TbReceiptTax } from "react-icons/tb";
import { CgSoftwareDownload } from "react-icons/cg";



const services = [
    {
        key: "Financial Accounts",
        icon: <MdAccountBalanceWallet size={24} />,
        description:
            "We’ll prepare your statutory accounts, tax returns and file them with Companies House and HMRC.",
    },
    {
        key: "Bookkeeping",
        icon: <FaBook size={24} />,
        description:
            "We’ll keep your ledgers up to date, reconcile your accounts and generate financial statements.",
    },
    {
        key: "Payroll",
        icon: <FaMoneyBillWave size={24} />,
        description:
            "End‑to‑end payroll processing, tax filings and payslips for your employees.",
    },
    {
        key: "VAT Returns",
        icon: <FaPercentage size={24} />,
        description:
            "VAT returns, EC sales lists and Intrastat reports to keep you compliant.",
    },
    {
        key: "Taxation",
        icon: <TbReceiptTax size={24} />,
        description:
            "Corporation tax, income tax, capital gains tax and inheritance tax advice.",
    },
    {
        key: "Business Advisory + Support",
        icon: <MdBusinessCenter size={24} />,
        description:
            "We’ll help you with business planning, forecasting and cash flow management.",
    },
    {
        key: "Management Accounts",
        icon: <FaChartLine size={24} />,
        description:
            "Monthly/quarterly management reports to help you steer your business.",
    },
    {
        key: "Business Plans",
        icon: <FaUsersCog size={24} />,
        description:
            "We’ll help you create a business plan that’s tailored to your needs.",
    },
    {
        key: "Accountancy Software",
        icon: <CgSoftwareDownload size={24} />,
        description:
            "Cloud Based and In-House Accountancy software such as Xero, Quickbooks, Sage and more.",
    },
];

export default function Services() {
    const [active, setActive] = useState(services[0].key);
    const current = services.find((s) => s.key === active);

    return (

        <div className="max-w-4xl mx-auto pb-16 ">
            <p className="pl-2 sm:pl-2 pb-4 md:text-2xl text-xl font-bold text-gray-50">
                Our Services:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {services.map((s) => (
                    <button
                        key={s.key}
                        onClick={() => setActive(s.key)}
                        className={`flex items-center gap-2 px-5 py-2 rounded-md font-medium
                            ${
                                s.key === active
                                    ? "bg-blue-400 text-white shadow-lg"
                                    : "bg-gray-800 text-white hover:bg-blue-800"
                            }`}
                    >
                        {s.icon}
                        <span>{s.key}</span>
                    </button>
                ))}
            </div>

            <div className="bg-white p-6 rounded-md shadow size-full">
                <h2 className="text-6xl font-semibold mb-2">{current.key}</h2>
                <p className="text-gray-700">{current.description}</p>
            </div>
        </div>
    );
}
