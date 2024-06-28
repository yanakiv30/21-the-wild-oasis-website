import Navigation from "./components/Navigation";

function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by the Wild Oasis</footer>
      </body>
    </html>
  );
}
export default RootLayout;
