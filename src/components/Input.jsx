import React from "react";
import P from "prop-types";

export const Input = ({
  type,
  name,
  placeholder,
  id,
  value,
  click,
  onkeypress,
  disabled = "",
  onchange,
}) => {
  let visible = disabled === "disabled" ? "disabled" : "";

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      value={value}
      onClick={click}
      disabled={visible}
      onkeypress={onkeypress}
      onChange={onchange}
    ></input>
  );
};

Input.propTypes = {
  type: P.string,
  name: P.string,
  placeholder: P.string,
  id: P.string,
  value: P.string,
  click: P.func,
  disabled: P.func,
  onkeypress: P.func,
  onChange: P.func,
};
