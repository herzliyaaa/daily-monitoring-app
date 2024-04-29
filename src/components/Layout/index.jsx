import Sidebar from "../Sidebar";

// eslint-disable-next-line react/prop-types
const PageLayout = ({ children }) => {
  return (
    <div className="">
      <Sidebar />
      <div className="">{children}</div>
    </div>
  );
};
export default PageLayout;
