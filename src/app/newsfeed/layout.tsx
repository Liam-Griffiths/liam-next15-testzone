import './globals.css';
import Providers from "@/lib/providers";
import React from "react"; // optional global CSS


export const metadata = {
    title: 'Dummy Newsfeed',
    description: 'An example of a performant newsfeed using Next.js and Suspense',
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
<section>
        <Providers>
            {/* Any HTML <head> tags can go into <head> if needed */}
            {children}
        </Providers>
</section>
    );
}
