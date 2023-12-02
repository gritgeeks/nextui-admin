import './globals.css'
// app/layout.tsx
import {Providers} from "./providers";

export default function RootLayout({children}) {
  return (
    <html className='dark'  >
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
