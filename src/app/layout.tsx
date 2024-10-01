// app/layout.tsx

import { Footer, Navbar } from "@/components";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const metadata = SITE_CONFIG;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden"
                    // font.className (Commented out)
                )}
            >
                <Navbar /> {/* Add Navbar here */}
                <main>{children}</main> {/* Main content slot */}
                <Footer /> {/* Add Footer here */}
            </body>
        </html>
    );
}
