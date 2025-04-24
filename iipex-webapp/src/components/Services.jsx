import { useState } from "react";
import {
    FaBook,
    FaMoneyBillWave,
    FaChartLine,
    FaCreditCard,
    FaMoneyCheckAlt,
    FaUsersCog,
} from "react-icons/fa";

const services = [
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
        key: "Management Accounts",
        icon: <FaChartLine size={24} />,
        description:
            "Monthly/quarterly management reports to help you steer your business.",
    },
    {
        key: "Credit Control",
        icon: <FaCreditCard size={24} />,
        description:
            "We'll chase invoices, manage aged debtors and improve your cashflow.",
    },
    {
        key: "Payment Services",
        icon: <FaMoneyCheckAlt size={24} />,
        description:
            "Seamless payment collections and disbursements via your choice of channels.",
    },
    {
        key: "Accounts Department",
        icon: <FaUsersCog size={24} />,
        description:
            "Outsource your entire accounts team—bookkeepers, accountants & controllers.",
    },
];

export default function Services() {
    const [active, setActive] = useState(services[0].key);
    const current = services.find((s) => s.key === active);

    return (

        <div className="max-w-4xl mx-auto py-10">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {services.map((s) => (
                    <button
                        key={s.key}
                        onClick={() => setActive(s.key)}
                        className={`flex items-center gap-2 px-5 py-2 rounded-md font-medium
                            ${
                                s.key === active
                                    ? "bg-[#00df9a] text-black shadow-lg"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
