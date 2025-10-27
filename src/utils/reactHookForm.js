import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import formSchema from "./Schema";

function useReactHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  return { register, handleSubmit, errors, isSubmitting, reset };
}

export default useReactHookForm;
