import React from "react";

import { ReactNode } from "react";

// Define the type for the icons prop, which is an array of ReactNode
interface IconProps {
  icons: ReactNode[];
}

const IconList: React.FC<IconProps> = ({ icons }) => {
  return (
    <div className="icon-list">
      {icons.map((Icon, index) => (
        <div key={index} className="icon-item">
          {Icon}
        </div>
      ))}
    </div>
  );
};

export default IconList;
