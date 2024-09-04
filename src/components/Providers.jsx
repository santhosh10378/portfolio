'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem attribute='class' defaultTheme='system' disableTransitionOnChange>
      {children}
      <ToasterProvider />
    </ThemeProvider>
  );
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme();

  return <Toaster position='top-right' theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />;
}
