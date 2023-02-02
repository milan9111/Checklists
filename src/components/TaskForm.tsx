import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { Field, Submit } from "../styled/Forms";
import { WrapperForm } from "../styled/Wrappers";
import { useAppDispatch } from "../hooks/redux";
import { addTask } from "../store/reducers/TaskSlice";

interface ITaskForm {
  text: string;
}

const TaskForm = () => {
  const [submittedData] = useState<ITaskForm>({ text: "" });
  const {
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
    reset,
    control,
  } = useForm<ITaskForm>();

  const dispatch = useAppDispatch();

  const onSubmit = ({ text }: ITaskForm) => {
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
            label={errors.text ? "Min length 2 letters" : "Your task"}
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
        rules={{ required: true, minLength: 2 }}
        defaultValue=""
      />
      <Submit type="submit">Send</Submit>
    </WrapperForm>
  );
};

export default TaskForm;
