import Footer from "@/components/Shared/Footer";

const dashboardLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default dashboardLayout;
