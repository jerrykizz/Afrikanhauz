import "../styles/globals.css";

export const metadata = {
  title: "Afrikanhauz",
  description: "Marketplace & job posting platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
