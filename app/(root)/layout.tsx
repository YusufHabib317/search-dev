import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import '../../cron-job';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>

  );
}
