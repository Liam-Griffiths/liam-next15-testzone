'use client'; // This file can be a client component if it uses useState, useContext, etc.

import React from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
    // You could add a ThemeProvider, Redux Provider, etc. here
    // For demonstration, it’s just passing through children
    return <>{children}</>;
}
