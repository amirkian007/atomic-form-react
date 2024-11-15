import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { RegisterFields } from "../../validation/schema";
import { FieldError } from "react-hook-form";

interface ExperienceFieldProps {
  index: number;
  register: RegisterFields;
  onDelete: () => void;
  errors?: {experience?:FieldError,duration?:FieldError};
}

const ExperienceField: React.FC<ExperienceFieldProps> = ({
  index,
  register,
  onDelete,
  errors,
}) => (
  <div>
    <Input
      label="Experience"
      {...register(`experiences.${index}.experience`)}
      error={errors?.experience}
    />
    <Input
      label="Duration (months)"
      type="number"
      {...register(`experiences.${index}.duration`)}
      error={errors?.duration}
    />
    <Button onClick={onDelete}>Delete</Button>
  </div>
);

export default ExperienceField;
