"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormPage = () => {
  const router = useRouter();
  const params = useParams();

  const {
    register,
    handleSubmit,
    setFocus,
    reset,
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

  const handleDelete = async () => {
    console.log("deleteing");
    try {
      if (confirm("Are you sure you want to delete this task?")) {
        await fetch(`/api/tasks/${params.id}`, {
          method: "DELETE",
        });
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    if (params.id) {
      // TODO: reset form values with data
    }
  }, [params.id, reset]);

  return (
    <form
      onSubmit={onSubmit}
      className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center max-w-xl mx-auto"
    >
      <div className="flex gap-3 justify-between w-full ">
        <h1 className="font-bold text-3xl">
          {params.id ? "Update Tak" : "Create Tak"}
        </h1>
        <button
          type="button"
          className="bg-red-500 px-3 py-1 rounded-md"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
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

      <div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 border-2 w-fit px-4 py-2 rounded-lg my-4 "
          disabled={!!errors.title?.message}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormPage;
