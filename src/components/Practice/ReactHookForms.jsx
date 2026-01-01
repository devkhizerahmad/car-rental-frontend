import React from 'react'
import { useForm } from 'react-hook-form'

export default function ReactHookForms() {
  const { register, getValues  ,handleSubmit } = useForm(
    {
    defaultValues: {
      firstName: 'muhammad',
      lastName: 'hassan',
      age: null
    }
  }
)
  const onSubmit = (data) => console.log(data)
  return (
    <div className='w-full flex justify-center items-center ' >
      <form onSubmit={handleSubmit(onSubmit)}>
      <input className='w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500' {...register("firstName", { required: true, maxLength: 20 })} required />
      <input className='w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} required />
      <input className='w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500' type="number" {...register("age", { min: 18, max: 99 })} required />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit" >Submit</button>
    </form>
    {/* <form>
      <input {...register("test")} />
      <input {...register("test1")} />

      <button
        type="button"
        onClick={() => {
          const values = getValues(); // { test: "test-input", test1: "test1-input" }
          const singleValue = getValues("test"); // "test-input"
          const multipleValues = getValues(["test", "test1"]);
          console.log({ values, singleValue, multipleValues });
          // ["test-input", "test1-input"]
        }}
      >
        Get Values
      </button>
    </form> */}
    </div>
  )
}

