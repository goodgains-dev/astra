"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Popup with Video Player

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm cursor-pointer",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Main Component
const PopupMenuWithVideo = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openPopup = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedVideo(null);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Card to trigger Popup */}
      <Card onClick={() => openPopup('/path-to-video1.mp4')}>
        <CardHeader>
          <CardTitle>Card with Video 1</CardTitle>
          <CardDescription>Click to watch the video</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is some content inside the card. Clicking will open a video player.</p>
        </CardContent>
        <CardFooter>
          <p>Footer Content</p>
        </CardFooter>
      </Card>

      <Card onClick={() => openPopup('/path-to-video2.mp4')}>
        <CardHeader>
          <CardTitle>Card with Video 2</CardTitle>
          <CardDescription>Click to watch the video</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is another card. Clicking will open a different video player.</p>
        </CardContent>
        <CardFooter>
          <p>Footer Content</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export { PopupMenuWithVideo, Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
