import Header from "./components/Header";
import SideBar from "./components/SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="fixed h-screen md:w-64 ">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <Header />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
