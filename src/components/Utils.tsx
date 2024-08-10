import React, { PropsWithChildren } from "react";

const SectionComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="py-4 px-6 odd:bg-gray-100 even:bg-white">
      <div className="max-w-[900px] mx-auto">{children}</div>
    </section>
  );
};

export default SectionComponent;
