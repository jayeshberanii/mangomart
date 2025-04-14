import Metrics from "../../components/dashboard/Metrics";
import PageBreadcrumb from "../../components/global/PageBreadcrumb";

const AdminDashboard = () => {
  return (
    <>
      <PageBreadcrumb pageTitle="Dashboard" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6">
          <Metrics />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
