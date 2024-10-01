import Head from "next/head";
import { pricingCards } from "@/constants"; // Removed the faq import
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import Link from "next/link";
import IconSection from "@/components/IconSection"; // Import the client component for icons

export default function Workspace() {
  // Static data or server-side data fetching
  const iconData = [
    { src: "/icons/sparkles-dark.svg", alt: "Icon 1", label: "Sparkles", description: "Description for Sparkles Icon" },
    { src: "/calendaricon.png", alt: "Icon 2", label: "Calendar", description: "Description for Calendar Icon" },
    { src: "/emailicon.png", alt: "Icon 3", label: "Email", description: "Description for Email Icon" },
    { src: "/messagingicon.png", alt: "Icon 4", label: "Messaging", description: "Description for Messaging Icon" },
    { src: "/formicon.png", alt: "Icon 5", label: "Form", description: "Description for Form Icon" },
    { src: "/meetingicon.png", alt: "Icon 6", label: "Meeting", description: "Description for Meeting Icon" },
  ];

  return (
    <>
      <Head>
        <title>Workspace - GoodGains</title>
        <meta name="description" content="Manage your workspace on GoodGains" />
      </Head>

      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[200vh]" />

      {/* Main Container */}
      <div className="h-screen overflow-y-scroll scroll-smooth w-full overflow-x-hidden">
        
        {/* Section 1: Introductory Content */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16 w-full">
          {/* Logo and Company Name Section */}
          <div className="flex items-center justify-center gap-4 mb-16 w-full overflow-visible">
            <img
              src="/LogoName.png"
              alt="Company Logo"
              className="w-[630px] h-[200px]"
              style={{ transform: 'translate(-500px, -60px)' }}
            />
          </div>

          {/* Centering the text with color, sizing, and wrap controls */}
          <div className="flex items-center justify-center gap-4 mb-4 w-full ">
            <img
              src="/MeetingInnovation.png"
              alt="Meeting Innovation"
              className="w-672 h-230"
              style={{ transform: 'translate(0px, -10px)' }}
            />
          </div>

          {/* Button Section with Additional Spacing */}
          <div className="flex justify-center items-center gap-8 mt-8 mb-16">
            <button
              className="px-6 py-2 rounded-full text-white font-semibold"
              style={{ background: 'linear-gradient(to bottom, #ff6ec4, #7873f5)' }}
            >
              Get Started
            </button>
            <a href="#contact" className="text-white underline hover:text-gray-300">
              Contact Us
            </a>
          </div>

          {/* Spacer to push the icon section lower */}
          <div className="h-30"></div>

          {/* Icon Section */}
          {/* Pass data to the client component for interactivity */}
          <IconSection iconData={iconData} />
        </section>
      </div>
    </>
  );
}
