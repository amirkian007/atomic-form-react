import React from "react";
import RadioButton from "../atoms/RadioButton";
import { RegisterFields } from "../../validation/schema";

interface ContactMethodProps {
  register: RegisterFields;
  error?: string | undefined;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ register, error }) => (
  <div>
    <label>Preferred Contact Method</label>
    <RadioButton
      label="Email"
      name="preferredContact"
      value="Email"
      register={register}
    />
    <RadioButton
      label="Phone"
      name="preferredContact"
      value="Phone"
      register={register}
    />
    {error && <p style={{ color: "red" }}>{error}</p>}
  </div>
);

export default ContactMethod;
