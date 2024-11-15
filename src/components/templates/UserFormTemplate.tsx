import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../validation/schema";
import UserInfoSection from "../organisms/UserInfoSection";
import ExperienceSection from "../organisms/ExperienceSection";
import Button from "../atoms/Button";

const UserFormTemplate: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      preferredContact:undefined,
      phone: "",
      email: "",
      experiences: [],
    },
  });

  const onSubmit = (data: any) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UserInfoSection register={register} errors={errors} watch={watch} />
      <ExperienceSection
        control={control}
        register={register}
        errors={errors}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserFormTemplate;
