'use client';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const HomePage = () => {
  const sections = [
    { id: 0, title: "", video: "/goodgains1.mp4" }, // Using .mp4 for video
    { id: 1, title: "Creation Simplified", video: "/codevid.mp4", learnMoreHref: "https://66f264ec74c2f6a84f8517a8--funny-vacherin-767340.netlify.app/", workflowHref: "/index.html" },
    { id: 2, title: "Organization Simplified", video: "/Organizationvid.mp4", learnMoreHref: "https://66f264ec74c2f6a84f8517a8--funny-vacherin-767340.netlify.app/", workflowHref: "/index2.html" },
    { id: 3, title: "Design Simplified", video: "/Digital Presentation_1.mp4", learnMoreHref: "https://66f264ec74c2f6a84f8517a8--funny-vacherin-767340.netlify.app/", workflowHref: "/index3.html" },
    { id: 4, title: "Analysis Simplified", video: "/analysissimplified.mp4", learnMoreHref: "https://66f264ec74c2f6a84f8517a8--funny-vacherin-767340.netlify.app/", workflowHref: "/index4.html" },
    { id: 5, title: "Marketing Simplified", video: "/Marketingvid.mp4", learnMoreHref: "https://66f264ec74c2f6a84f8517a8--funny-vacherin-767340.netlify.app/", workflowHref: "/index5.html" },
  ];

  const styles = {
    section0: { fontFamily: "sans-serif" },
    section1: { fontFamily: "'JetBrains Mono', monospace" },
    section2: { fontFamily: "'Roboto', sans-serif" },
    section3: { fontFamily: "'Playfair Display', serif" },
    section4: { fontFamily: "'Monospace', monospace" },
    section5: { fontFamily: "'Helvetica', sans-serif" },
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <main className="w-full">
        {/* Section 0 */}
        <section className="relative h-screen p-5 md:p-10 flex items-center justify-center overflow-hidden" style={styles.section0}>
          <video className="absolute inset-0 w-full h-full object-cover" src={sections[0].video} autoPlay loop muted />
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            {/* Section 0 Content */}
          </div>
        </section>
        {/* Render the rest of the sections */}
        {sections.slice(1).map((section, index) => (
          <section
            key={section.id}
            className="relative h-screen p-5 md:p-10 flex flex-col items-center justify-center overflow-hidden"
            style={styles[`section${index + 1}` as keyof typeof styles]} // Explicitly cast the key
          >
            <video className="absolute inset-0 w-full h-full object-cover" src={section.video} autoPlay loop muted />
            <div className="absolute inset-0 bg-gray-900/40" />
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-start pt-10 w-full">
                <motion.h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-center" style={{ fontWeight: 800 }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ amount: 0.3 }}>
                  {section.title}
                </motion.h2>
              </div>
              <motion.div className="flex gap-4 items-center justify-center flex-grow" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ amount: 0.3 }}>
                <Button variant="white" size="lg" asChild className="flex items-center text-black gap-2">
                  <Link href={section.learnMoreHref || "/"}>
                    Learn More
                    <ChevronRight className="w-5 h-5 text-black" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="flex items-center text-white gap-2">
                  <Link href={section.workflowHref || "/"}>
                    Workflow
                    <ChevronRight className="w-5 h-5 text-white" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default HomePage;
