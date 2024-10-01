'use client';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const HomePage = () => {
  // Define your sections with titles, descriptions, and image paths/videos
  const sections = [
    { 
      id: 0, 
      title: "",
      description: "",
      video: "/section0.mp4" // Path to your .mp4 video for Section 0
    },
    { 
      id: 1, 
      title: "Creation Simplified", 
      description: "", 
      video: "/codevid.mp4" // Use .mp4 video for this section instead of an image
    },
    { 
      id: 2, 
      title: "Organization Simplified", 
      description: "", 
      video: "/Organizationvid.mp4" // Use .mp4 video for this section
    },
    { 
      id: 3, 
      title: "Design Simplified", 
      description: "", 
      video: "/Digital Presentation_1.mp4" // Use .mp4 video for this section
    },
    { 
      id: 4, 
      title: "Analysis Simplified", 
      description: "", 
      video: "/analysissimplified.mp4" // Use .mp4 video for this section
    },
    { 
      id: 5, 
      title: "Marketing Simplified", 
      description: "", 
      video: "/Marketingvid.mp4" // Use .mp4 video for this section
    },
  ];

  // Font styles for each section
  const styles = {
    section0: { fontFamily: "sans-serif" },
    section1: { fontFamily: "'JetBrains Mono', monospace" },  // Using JetBrains Mono
    section2: { fontFamily: "'Roboto', sans-serif" },
    section3: { fontFamily: "'Playfair Display', serif" },
    section4: { fontFamily: "'Monospace', monospace" },
    section5: { fontFamily: "'Helvetica', sans-serif" },
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
        {/* Importing Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <main className="w-full">
        {/* Section 0 */} 
        <section
          className="relative h-screen bg-center p-10 flex items-center justify-center overflow-hidden"
          style={styles.section0}
        >
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            src={sections[0].video}
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            {/* Section 0 Content */}
          </div>
        </section>

        {/* Render the rest of the sections */}
        {sections.slice(1).map((section, index) => (
          <section
            key={section.id}
            className="relative h-screen bg-cover bg-center p-10 flex flex-col items-center overflow-hidden"
            style={styles[`section${index + 1}` as keyof typeof styles]}  // Apply corresponding styles
          >
            <video className="absolute inset-0 w-full h-full object-cover" src={section.video} autoPlay loop muted />
            <div className="absolute inset-0 bg-gray-900/40" />

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center">
              {/* Text at the top */}
              <div className="flex flex-col items-center justify-start pt-10 w-full">
                <motion.h2
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-center"
                  style={{ fontWeight: 800, fontSize: "125px" }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ amount: 0.3 }}
                >
                  {section.title}
                </motion.h2>
              </div>
              
              {/* Buttons in the middle */}
              <motion.div
                className="flex gap-4 items-center justify-center flex-grow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.3 }}
              >
                <Button variant="white" size="lg" asChild className="flex items-center text-black gap-2">
                  <Link href="#">
                    Learn More
                    <ChevronRight className="w-5 h-5 text-black" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="flex items-center text-white gap-2">
                  <Link href="#">
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
