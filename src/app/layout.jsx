import Script from "next/script";
import { Navigation } from "@/components/Navigation";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/flatly/bootstrap.min.css"
        />
      </head>
      <body>
        <Navigation />
        <div className="container p-4">{children}</div>
        
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
