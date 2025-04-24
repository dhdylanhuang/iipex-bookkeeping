import React from 'react';

const Hero = () => {
return (
    <div className="text-white pl-12">
        <div className="pl-0 sm:pl-12 md:pl-12 p-4 max-w-[1240px] w-4/5 md:w-2/3 h-auto ml-0 flex flex-col justify-center items-start text-left">
            <p className="text-[#00df9a] font-bold text-4xl">
                Managing your books is not easy.
            </p>
            <h1 className="text-3xl md:text-6xl sm:text-5xl font-bold md:py-6">
                But at IIPEX Accounting Services, our goal is to make it easier for you.
            </h1>
            <div className="flex justify-start items-center">
                <p className="text-lg md:text-4xl sm:text-3xl  py-4">
                    Whether it’s getting paid by your customers on time, completing your VAT returns, processing payroll or submitting your annual accounts and tax returns, the demands on businesses can seem endless. And it’s almost certainly not why you got into business in the first place. It is, however, exactly why we got into business. We do the things you avoid because where your business is concerned, you do the real work, we do the paperwork.
                </p>
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">
                Give us the ledgers and we'll handle the rest. Check our services below:
            </p>
            
        </div>
    </div>
);
};

export default Hero;