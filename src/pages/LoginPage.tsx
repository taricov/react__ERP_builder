import { PasswordInput, TextInput } from "@mantine/core";
import React from "react";

const LoginPage = () => {
  return (
    <div className="py-6">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <TextInput label="User Name" />
        <PasswordInput label="Password" />
      </div>
    </div>
  );
};
export default LoginPage;
