
// import { useForm, FormProvider } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import InputField from "./InputField";

// export default function AppForm() {
//   const schema = yup.object().shape({
//     name: yup.string().required("Required"),
//     email: yup.string().email("Invalid email format").required("Required"),
//     address: yup.string().required("Required"),
//     hobbies: yup
//       .array()
//       .of(
//         yup.object().shape({
//           hobby: yup.string().required("Required")
//         })
//       )
//       .min(2, "At least 2 hobbies required")
//   });

//   const methods = useForm({
//     mode: "all",
//     resolver: yupResolver(schema),
//     defaultValues: {
//       name: "",
//       email: "",
//       address: "",
//       hobbies: [{ hobby: "Coding" }]
//     }
//   });

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//     console.log(data);
//   };

//   return (
//     <div className="mainBody">
//       <FormProvider {...methods}>
//         <form onSubmit={methods.handleSubmit(onSubmit)}>
//           <InputField name="name" type="text" />
//           <InputField name="email" type="email" />
//           <InputField name="address" type="textarea" />
//           <button color="primary" type="submit">
//             Submit
//           </button>
//         </form>
//       </FormProvider>
//     </div>
//   );
// }
