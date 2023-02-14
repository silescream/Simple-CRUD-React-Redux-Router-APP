import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export const PostForm = ({ addFunc }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    PostHandler(data);
    reset();
  };

  const PostHandler = (data) => {
    const postItem = {
      userId: 1,
      title: data.value,
      body: "",
    };
    dispatch(addFunc(postItem));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("value", { required: true })} />
      {errors.exampleRequired && <span> This field is required</span>}

      <button type="submit"> Post your data </button>
    </form>
  );
};
