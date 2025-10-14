import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
  title: {
    template: '%s | Netlify',
    default: 'Rachel Rathinaraj',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
         <link
            href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap"
            rel="stylesheet"
         />
      </head>
      <body className="page-body">
        <div className="page-container">
          <div className="content-wrapper">
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

