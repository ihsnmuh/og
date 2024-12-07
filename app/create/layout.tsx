import React from "react";

const CreateLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default CreateLayout;
