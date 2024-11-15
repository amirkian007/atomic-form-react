import React from "react";
import { useFieldArray } from "react-hook-form";
import ExperienceField from "../molecules/ExperienceField";
import Button from "../atoms/Button";
import { FormErrorsFields, FromControl, RegisterFields } from "../../validation/schema";

interface ExperienceSectionProps {
  control: FromControl;
  register: RegisterFields;
  errors: FormErrorsFields;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  control,
  register,
  errors,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  return (
    <div>
      <h3>Experience</h3>
      <Button onClick={() => append({ experience: "", duration: 0 })}>
        Add Experience
      </Button>
      {fields.map((field, index) => (
        <ExperienceField
          key={field.id}
          index={index}
          register={register}
          errors={errors?.experiences?.[index]}
          onDelete={() => remove(index)}
        />
      ))}
    </div>
  );
};

export default ExperienceSection;
