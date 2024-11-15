import React from "react";
import Input from "../atoms/Input";
import ContactMethod from "../molecules/ContactMethod";
import { FormErrorsFields, FormWatch, RegisterFields } from "../../validation/schema";

interface UserInfoSectionProps {
  register: RegisterFields;
  errors: FormErrorsFields;
  watch: FormWatch;
}

const UserInfoSection: React.FC<UserInfoSectionProps> = ({
  register,
  errors,
  watch,
}) => {
  const preferredContact = watch("preferredContact");

  return (
    <div>
      <Input
        label="First Name"
        {...register("firstName")}
        error={errors.firstName}
      />
      <Input
        label="Last Name"
        {...register("lastName")}
        error={errors.lastName}
      />
      <Input label="Address" {...register("address")} />
      <ContactMethod
        register={register}
        error={errors.preferredContact?.message}
      />
      {preferredContact === "Phone" && (
        <Input label="Phone" {...register("phone")} error={errors.phone} />
      )}
      {preferredContact === "Email" && (
        <Input label="Email" {...register("email")} error={errors.email} />
      )}
    </div>
  );
};

export default UserInfoSection;
