import { assets } from "../assets/assets";

const Footer = () => {
    const linkSections = [
        {
            title: "Explore",
            links: ["Home", "AI Writer", "Image Generator", "Blog Title Creator", "Pricing"]
        },
        {
            title: "Support",
            links: ["Help Center", "FAQs", "Terms of Service", "Privacy Policy", "Contact Us"]
        },
        {
            title: "Connect",
            links: ["Instagram", "Twitter", "LinkedIn", "YouTube"]
        }
    ];

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-white border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 text-gray-600">
                <div>
                    <img
                        className="w-32 sm:w-44 cursor-pointer
                        "
                        src={assets.logo}
                        alt="App Logo"
                    />
                    <p className="max-w-[410px] mt-6 text-sm">
                        Create amazing content using AI. From article generation to image creation, streamline your workflow and boost productivity with our smart tools.
                    </p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                © {new Date().getFullYear()} AI Content Studio. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
