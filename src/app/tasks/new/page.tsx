"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log("dd", data);

    setFocus("title");

    try {
      await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      reset();

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log("err", error);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center max-w-xl mx-auto"
    >
      <h1 className="font-bold text-3xl">Create Taks</h1>
      <input
        {...register("title", {
          required: {
            value: true,
            message: "Title is required",
          },
        })}
        type="text"
        placeholder="Title"
        className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
      />
      <textarea
        {...register("description")}
        placeholder="Description"
        className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
      />

      <button
        className="bg-green-600 hover:bg-green-700 border-2 w-full px-4 py-2 rounded-lg my-4"
        disabled={!!errors.title?.message}
      >
        Save
      </button>
    </form>
  );
};

export default FormPage;
