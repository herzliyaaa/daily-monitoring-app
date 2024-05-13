import Sidebar from "../Sidebar";

// eslint-disable-next-line react/prop-types
const PageLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div className="container flex row h-screen w-screen ">
        <div className="w-1/12">
          <Sidebar />
        </div>
        <div className="container flex h-screen w-screen ">
          <Component {...props} />
        </div>
      </div>
    );
  };
export default PageLayout;
