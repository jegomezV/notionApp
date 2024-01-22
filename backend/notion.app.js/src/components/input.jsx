import React from "react";
import {Input} from "@nextui-org/react";

const InputComponent = () => {
  return (
    <Input
      type="email"
      label="Email"
      defaultValue="junior@nextui.org"
      description="We'll never share your email with anyone else."
      className="max-w-xs"
    />
  );
}

export default InputComponent;