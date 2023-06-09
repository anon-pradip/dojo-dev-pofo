import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Providers from "@/components/providers/ThemeProvider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DOJO Dev",
  description: "Blog like dev porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Providers>
          <AuthProvider>
            <div className=" flex flex-col items-center dark:text-slate-black max-w-md md:max-w-xl lg:max-w-5xl px-2 mx-auto min-h-screen">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}

// dhoko vayo yo jyan ko ye bisaune vari, kholi bagyo kalala timi raheu paari
// sururururu bahera hururururu udera, lageu ni kamalo mutu chudera,
// k ho ko ho thapattai nahuni, aatti vayo launa naveti nahuni
