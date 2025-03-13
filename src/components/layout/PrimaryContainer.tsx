import * as React from "react";

interface IAppProps {
  children: React.ReactNode;
  className?: string;
}

const PrimaryContainer: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className={`mx-auto p-6 bg-primary ${props.className}`}>
      {props.children}
    </div>
  );
};

export default PrimaryContainer;
