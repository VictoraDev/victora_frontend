import {
    Building2,
    Mail,
    Phone,
    User,
    MessageSquare,
    Send,
} from "lucide-react";

const BusinessEnquriesPage = () => {
    return (
        <div className="w-full bg-white">
            {/* ================= INTRODUCTION ================= */}

            <section className="w-full px-10 py-20">

                <div className="mb-14">

                    <p className="
                        text-blue-600
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                    ">
                        Connect With Us
                    </p>

                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Let's Build Something Together
                    </h2>

                    <div className="
                        w-16
                        h-1
                        bg-blue-600
                        rounded-full
                        mt-5
                    ">
                    </div>

                    <p className="
                        text-gray-600
                        text-lg
                        leading-8
                        mt-6
                        lg:w-3/4
                    ">
                        We welcome opportunities to collaborate with
                        customers, business partners and organizations.
                        Share your requirements with us and our team will
                        get in touch with you.
                    </p>

                </div>


                {/* ================= FORM + INFORMATION ================= */}

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-3
                    gap-10
                ">


                    {/* ================= FORM ================= */}

                    <div className="
                        lg:col-span-2
                        border
                        border-gray-200
                        rounded-xl
                        p-8
                        lg:p-10
                        shadow-sm
                    ">

                        <div className="mb-8">

                            <h3 className="
                                text-2xl
                                font-bold
                                text-[#2f3542]
                            ">
                                Send Us Your Enquiry
                            </h3>

                            <p className="
                                text-gray-500
                                mt-2
                            ">
                                Please provide your details and enquiry
                                information below.
                            </p>

                        </div>


                        <form className="space-y-6">


                            {/* Name + Company */}

                            <div className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-6
                            ">

                                {/* Name */}

                                <div>

                                    <label className="
                                        block
                                        text-sm
                                        font-semibold
                                        text-[#2f3542]
                                        mb-2
                                    ">
                                        Your Name
                                    </label>

                                    <div className="relative">

                                        <User className="
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            w-5
                                            h-5
                                            text-gray-400
                                        " />

                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="
                                                w-full
                                                border
                                                border-gray-300
                                                rounded-lg
                                                pl-12
                                                pr-4
                                                py-3
                                                outline-none
                                                focus:border-blue-600
                                                focus:ring-2
                                                focus:ring-blue-100
                                                transition
                                            "
                                        />

                                    </div>

                                </div>


                                {/* Company */}

                                <div>

                                    <label className="
                                        block
                                        text-sm
                                        font-semibold
                                        text-[#2f3542]
                                        mb-2
                                    ">
                                        Company Name
                                    </label>

                                    <div className="relative">

                                        <Building2 className="
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            w-5
                                            h-5
                                            text-gray-400
                                        " />

                                        <input
                                            type="text"
                                            placeholder="Enter company name"
                                            className="
                                                w-full
                                                border
                                                border-gray-300
                                                rounded-lg
                                                pl-12
                                                pr-4
                                                py-3
                                                outline-none
                                                focus:border-blue-600
                                                focus:ring-2
                                                focus:ring-blue-100
                                                transition
                                            "
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* Email + Phone */}

                            <div className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-6
                            ">

                                {/* Email */}

                                <div>

                                    <label className="
                                        block
                                        text-sm
                                        font-semibold
                                        text-[#2f3542]
                                        mb-2
                                    ">
                                        Email Address
                                    </label>

                                    <div className="relative">

                                        <Mail className="
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            w-5
                                            h-5
                                            text-gray-400
                                        " />

                                        <input
                                            type="email"
                                            placeholder="Enter email address"
                                            className="
                                                w-full
                                                border
                                                border-gray-300
                                                rounded-lg
                                                pl-12
                                                pr-4
                                                py-3
                                                outline-none
                                                focus:border-blue-600
                                                focus:ring-2
                                                focus:ring-blue-100
                                                transition
                                            "
                                        />

                                    </div>

                                </div>


                                {/* Phone */}

                                <div>

                                    <label className="
                                        block
                                        text-sm
                                        font-semibold
                                        text-[#2f3542]
                                        mb-2
                                    ">
                                        Phone Number
                                    </label>

                                    <div className="relative">

                                        <Phone className="
                                            absolute
                                            left-4
                                            top-1/2
                                            -translate-y-1/2
                                            w-5
                                            h-5
                                            text-gray-400
                                        " />

                                        <input
                                            type="tel"
                                            placeholder="Enter phone number"
                                            className="
                                                w-full
                                                border
                                                border-gray-300
                                                rounded-lg
                                                pl-12
                                                pr-4
                                                py-3
                                                outline-none
                                                focus:border-blue-600
                                                focus:ring-2
                                                focus:ring-blue-100
                                                transition
                                            "
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* Enquiry Type */}

                            <div>

                                <label className="
                                    block
                                    text-sm
                                    font-semibold
                                    text-[#2f3542]
                                    mb-2
                                ">
                                    Enquiry Type
                                </label>

                                <select
                                    className="
                                        w-full
                                        border
                                        border-gray-300
                                        rounded-lg
                                        px-4
                                        py-3
                                        outline-none
                                        focus:border-blue-600
                                        focus:ring-2
                                        focus:ring-blue-100
                                        transition
                                        bg-white
                                    "
                                >

                                    <option value="">
                                        Select enquiry type
                                    </option>

                                    <option value="business">
                                        Business Partnership
                                    </option>

                                    <option value="manufacturing">
                                        Manufacturing Enquiry
                                    </option>

                                    <option value="supplier">
                                        Supplier Enquiry
                                    </option>

                                    <option value="product">
                                        Product Enquiry
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>

                                </select>

                            </div>


                            {/* Message */}

                            <div>

                                <label className="
                                    block
                                    text-sm
                                    font-semibold
                                    text-[#2f3542]
                                    mb-2
                                ">
                                    Your Enquiry
                                </label>

                                <div className="relative">

                                    <MessageSquare className="
                                        absolute
                                        left-4
                                        top-4
                                        w-5
                                        h-5
                                        text-gray-400
                                    " />

                                    <textarea
                                        rows="6"
                                        placeholder="Tell us about your requirement..."
                                        className="
                                            w-full
                                            border
                                            border-gray-300
                                            rounded-lg
                                            pl-12
                                            pr-4
                                            py-3
                                            outline-none
                                            resize-none
                                            focus:border-blue-600
                                            focus:ring-2
                                            focus:ring-blue-100
                                            transition
                                        "
                                    >
                                    </textarea>

                                </div>

                            </div>


                            {/* Submit */}

                            <button
                                type="submit"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    bg-blue-600
                                    hover:bg-blue-700
                                    text-white
                                    px-7
                                    py-3
                                    rounded-lg
                                    font-semibold
                                    transition-all
                                    duration-300
                                "
                            >

                                <Send className="w-5 h-5" />

                                Submit Enquiry

                            </button>

                        </form>

                    </div>


                    {/* ================= CONTACT INFORMATION ================= */}

                    <div className="
                        bg-[#2f3542]
                        rounded-xl
                        p-8
                        lg:p-10
                        h-fit
                    ">

                        <p className="
                            text-blue-400
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[4px]
                        ">
                            Business Connect
                        </p>

                        <h3 className="
                            text-2xl
                            font-bold
                            text-white
                            mt-3
                        ">
                            Get In Touch
                        </h3>

                        <div className="
                            w-16
                            h-1
                            bg-blue-500
                            rounded-full
                            mt-5
                        ">
                        </div>


                        <p className="
                            text-gray-300
                            leading-7
                            mt-8
                        ">
                            For business opportunities, manufacturing
                            requirements and partnership enquiries, please
                            reach out to our team.
                        </p>


                        {/* Email */}

                        <div className="
                            flex
                            gap-4
                            mt-10
                            pb-6
                            border-b
                            border-gray-600
                        ">

                            <div className="
                                w-11
                                h-11
                                bg-blue-600
                                rounded-lg
                                flex
                                items-center
                                justify-center
                                shrink-0
                            ">

                                <Mail className="w-5 h-5 text-white" />

                            </div>

                            <div>

                                <p className="
                                    text-gray-400
                                    text-sm
                                ">
                                    Email
                                </p>

                                <a
                                    href="mailto:Info@victoratool.com"
                                    className="
                                        text-white
                                        font-semibold
                                        mt-1
                                        inline-block
                                        hover:text-blue-400
                                        transition
                                    "
                                >
                                    Info@victoratool.com
                                </a>

                            </div>

                        </div>


                        {/* Phone */}

                        <div className="
                            flex
                            gap-4
                            mt-6
                            pb-6
                            border-b
                            border-gray-600
                        ">

                            <div className="
                                w-11
                                h-11
                                bg-blue-600
                                rounded-lg
                                flex
                                items-center
                                justify-center
                                shrink-0
                            ">

                                <Phone className="w-5 h-5 text-white" />

                            </div>

                            <div>

                                <p className="
                                    text-gray-400
                                    text-sm
                                ">
                                    Phone
                                </p>

                                <p className="
                                    text-white
                                    font-semibold
                                    mt-1
                                ">
                                    Contact our office
                                </p>

                            </div>

                        </div>


                        {/* Address */}

                        <div className="
                            flex
                            gap-4
                            mt-6
                        ">

                            <div className="
                                w-11
                                h-11
                                bg-blue-600
                                rounded-lg
                                flex
                                items-center
                                justify-center
                                shrink-0
                            ">

                                <Building2 className="w-5 h-5 text-white" />

                            </div>

                            <div>

                                <p className="
                                    text-gray-400
                                    text-sm
                                ">
                                    Head Office
                                </p>

                                <p className="
                                    text-white
                                    leading-7
                                    mt-1
                                ">
                                    Plot No. 1049,
                                    <br />
                                    Sector 58,
                                    <br />
                                    Faridabad, Haryana 121004
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= BUSINESS PARTNERSHIP ================= */}

            <section className="
                w-full
                px-10
                py-20
                bg-[#f7faff]
            ">

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-14
                    items-center
                ">


                    {/* Image */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600?text=Business+Partnership"
                            alt="Business Partnership"
                            className="
                                w-full
                                h-[420px]
                                object-cover
                                hover:scale-105
                                transition-transform
                                duration-700
                            "
                        />

                    </div>


                    {/* Content */}

                    <div>

                        <p className="
                            text-blue-600
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[4px]
                        ">
                            Partnerships
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Exploring New Business Opportunities
                        </h2>

                        <div className="
                            w-16
                            h-1
                            bg-blue-600
                            rounded-full
                            mt-5
                        ">
                        </div>


                        <p className="
                            text-gray-700
                            text-lg
                            leading-8
                            mt-8
                        ">
                            We work with customers and business partners
                            across diverse manufacturing requirements and
                            industries.
                        </p>


                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            If you have a business proposal, manufacturing
                            requirement or partnership opportunity, share
                            your details with us through the enquiry form.
                        </p>


                        <div className="
                            border-l-4
                            border-blue-600
                            pl-5
                            mt-8
                        ">

                            <p className="
                                text-[#2f3542]
                                font-semibold
                            ">
                                We value long-term partnerships built on
                                quality, capability and trust.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CLOSING ================= */}

            <section className="w-full px-10 py-16">

                <div className="
                    border-l-4
                    border-blue-600
                    pl-8
                ">

                    <p className="
                        text-blue-600
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                    ">
                        Victora Industries
                    </p>

                    <h2 className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Your Requirement. Our Expertise.
                    </h2>

                </div>

            </section>

        </div>
    );
};


export default BusinessEnquriesPage;