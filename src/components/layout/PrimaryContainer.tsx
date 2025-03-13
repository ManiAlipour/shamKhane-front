import * as React from "react";

interface IAppProps {
  children: React.ReactNode;
}

const PrimaryContainer: React.FunctionComponent<IAppProps> = (props) => {
  return <div className="mx-auto p-6 bg-primary">{props.children}</div>;
};

export default PrimaryContainer;
