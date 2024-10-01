'use client'; // Mark as a client component

import { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2'; // Import the Scrollbars component

export default function IconSection() {
  // Define the icon data structure directly within the component
  const iconData = [
    {
      src: "/icons/sparkles-dark.svg",
      alt: "Icon 1",
      label: "Sparkles",
      header: "Sparkles Feature",
      description: "Explore the magic of our Sparkles feature, enhancing user experience with dynamic effects and more.",
      videoId: "your-video-id", // Replace with actual YouTube video ID
      highlights: [
        "Dynamic effects that engage users.",
        "Intuitive design for better user interaction.",
        "Customizable themes and styles.",
      ],
    },
    {
      src: "/calendaricon.png",
      alt: "Icon 2",
      label: "Calendar",
      header: "Calendar Integration",
      description: "Efficiently manage your events and schedules with our integrated calendar feature.",
      videoId: "your-video-id", // Replace with actual YouTube video ID
      highlights: [
        "Sync with external calendars.",
        "Automatic event reminders.",
        "Color-coded events for clarity.",
      ],
    },
    {
      src: "/emailicon.png",
      alt: "Icon 3",
      label: "Email",
      header: "Email Services",
      description: "Seamless email integration to keep your communication streamlined and effective.",
      videoId: "your-video-id", // No video for this icon
      highlights: [
        "Integrated inbox management.",
        "Automated email templates.",
        "Enhanced spam filtering.",
      ],
    },
    {
      src: "/messagingicon.png",
      alt: "Icon 4",
      label: "Messaging",
      header: "Messaging Platform",
      description: "Instant messaging for quick and effective team communication.",
      videoId: "your-video-id", // Replace with actual YouTube video ID
      highlights: [
        "Real-time team communication.",
        "File sharing and storage.",
        "Video and voice call capabilities.",
      ],
    },
    {
      src: "/formicon.png",
      alt: "Icon 5",
      label: "Form",
      header: "Form Builder",
      description: "Create and manage forms with our intuitive form builder.",
      videoId: "your-video-id", // No video for this icon
      highlights: [
        "Drag-and-drop form builder.",
        "Conditional logic for dynamic forms.",
        "Real-time data collection and analysis.",
      ],
    },
    {
      src: "/meetingicon.png",
      alt: "Icon 6",
      label: "Meeting",
      header: "Meeting Tools",
      description: "Advanced tools for scheduling and managing meetings with ease.",
      videoId: "your-video-id", // Replace with actual YouTube video ID
      highlights: [
        "Automated scheduling and reminders.",
        "Integration with video conferencing tools.",
        "Meeting agenda and minutes management.",
      ],
    },
  ];

  // State to manage the currently selected icon's details
  const [selectedIcon, setSelectedIcon] = useState(null);

  // Effect to handle disabling/enabling scroll on body
  useEffect(() => {
    if (selectedIcon) {
      // Disable scroll on body when pop-out is active
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scroll on body when pop-out is closed
      document.body.style.overflow = '';
    }

    // Cleanup function to reset the overflow when component unmounts or selectedIcon changes
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIcon]);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  // Close the pop-out card when clicking outside of it
  const handleOverlayClick = () => {
    setSelectedIcon(null);
  };

  return (
    <>
      {/* Icon Section */}
      <div className="flex justify-center items-center gap-16 mb-8">
        {iconData.map((icon, index) => (
          <div
            key={index}
            className="text-center cursor-pointer"
            onClick={() => handleIconClick(icon)}
            style={{ overflow: 'visible' }} // Ensure the container allows visibility
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-12 h-12 mb-2 mx-auto"
              style={{ marginTop: '-8px' }} // Adjust the margin to shift the logo upwards
            />
            <p className="text-white">{icon.label}</p>
          </div>
        ))}
      </div>

      {/* Pop-Out Card */}
      {selectedIcon && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={handleOverlayClick} // Close on overlay click
        >
          {/* Background Overlay with Blur */}
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

          {/* Pop-Out Card */}
          <div
            className="relative bg-[#03070F] p-0 rounded-lg shadow-lg max-w-6xl w-full max-h-[80vh] overflow-hidden text-center border-2 border-transparent z-50 glow-border"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
          >
            <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[200vh]" />
            {/* Fixed Header Section */}
            <div className="sticky top-0 bg-transparent p-8 border-b-0 border-gray-200 z-10">
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-gray-300 text-black rounded-full flex items-center justify-center font-bold text-lg hover:bg-purple-300 transition-colors duration-200"
                onClick={() => setSelectedIcon(null)}
              >
                X
              </button>
              {/* Header without Gradient and Left-Aligned */}
              <h2 className="text-2xl font-bold mb-2 text-white relative text-left px-0 py-0">
                {selectedIcon.header}
              </h2>
            </div>

            {/* Custom Scrollable Content Section using Scrollbars */}
            <Scrollbars
              style={{ width: "100%", height: "60vh" }} // Set custom width and height
              autoHide
              renderThumbVertical={({ style, ...props }) => (
                <div
                  {...props}
                  style={{
                    ...style,
                    background: "linear-gradient(to bottom, #7b2cbf, #0073ff)", // Apply gradient background
                    borderRadius: "10px", // Rounded corners
                    backgroundClip: "padding-box", // Apply gradient only to padding box
                  }}
                />
              )}
            >
              {/* Video Section */}
              {selectedIcon.videoId && (
                <div className="flex justify-center items-center mb-8">
                  <div className="w-full max-w-[1200px] bg-transparent p-4 rounded-lg ">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      
                    </h3>
                    <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${selectedIcon.videoId}`}
                        title="Feature Overview Video"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}

              {/* Highlight Section Below Video */}
              <div className="w-full max-w-[1200px] bg-[#8c8d91] bg-opacity-20 p-6 rounded-lg shadow-inner mx-auto relative">
                <h3 className="embossed-text text-4xl font-bold mb-4 text-white relative z-10">Key Features</h3>
                {/* Gradient Line with Diamonds */}
                <div className="relative mx-auto w-1/4 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mb-4 -mt-6">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rotate-45 bg-white"></div> {/* Left Diamond */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rotate-45 bg-white"></div> {/* Right Diamond */}
                </div>
                <ul className="text-left list-disc list-inside text-white space-y-4 relative z-20">
                  {selectedIcon.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </Scrollbars>
          </div>
        </div>
      )}
      
      {/* Embossed Text CSS */}
      <style jsx>{`
        .embossed-text {
          font-size: 34px;
          color: #ebebeb; /* Light color for the text */
          text-shadow: 
            1px 1px 1px #bbb,  /* Bottom right shadow for highlight */
            5px -1px 2px #0006, /* Top left shadow for shadow effect */
            5px 1px 1px #0006, /* Bottom left shadow for depth */
            5px -1px 1px #0006; /* Top right shadow for depth */
        }
      `}</style>
    </>
  );
}
