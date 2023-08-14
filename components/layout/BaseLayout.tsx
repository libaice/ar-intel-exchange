import { FunctionComponent, ReactNode } from "react";

const BaseLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="py-16 bg-gray-50 overflow-hidden min-h-screen ">{children}</div>;
};

export default BaseLayout;
