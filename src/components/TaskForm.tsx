import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { addTask } from "../store/reducers/TaskSlice";
import { useAppDispatch } from "../hooks/redux";
import { Field, Submit } from "../styled/Forms";
import { WrapperForm } from "../styled/Wrappers";

interface ITaskForm {
  text: string;
}

const TaskForm: React.FC = () => {
  const [submittedData] = useState<ITaskForm>({ text: "" });
  const {
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
    reset,
    control,
  } = useForm<ITaskForm>();

  const dispatch = useAppDispatch();

  const onSubmit = ({ text }: ITaskForm): void => {
    dispatch(addTask(text));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...submittedData });
    }
  }, [formState, submittedData, reset, isSubmitSuccessful]);

  return (
    <WrapperForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ field }) => (
          <Field
            error={Boolean(errors.text)}
            id="your-task"
            label={errors.text ? "At least 2 characters" : "Your task"}
            variant="outlined"
            placeholder="Write your checklist text here"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <KeyboardIcon />
                </InputAdornment>
              ),
            }}
            {...field}
          />
        )}
        name="text"
        control={control}
        rules={{ required: true, minLength: 2, pattern: /[^\s]/ }}
        defaultValue=""
      />
      <Submit type="submit">Send</Submit>
    </WrapperForm>
  );
};

export default TaskForm;
