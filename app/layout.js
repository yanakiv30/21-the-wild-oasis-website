import Logo from "@/app/_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css"


export const metadata = { title: "The Wild Oasis" };
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by the Wild Oasis</footer>
      </body>
    </html>
  );
}
export default RootLayout;
