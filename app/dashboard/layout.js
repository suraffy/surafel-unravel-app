import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const DashboardLayout = ({ children }) => {
  const cookieStore = cookies();
  const encodedToken = cookieStore.get("authToken");

  if (!encodedToken || !encodedToken.value) {
    redirect("/login");
  }

  return <div>{children}</div>;
};

export default DashboardLayout;
