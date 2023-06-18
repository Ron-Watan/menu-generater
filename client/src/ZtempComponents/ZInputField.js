// import React from "react";
// import { FormGroup, Label, Input } from "reactstrap";
// import { Controller, useFormContext } from "react-hook-form";

// function InputField(props) {
//   const {
//     control,
//     formState: { errors }
//   } = useFormContext();

//   return (
//     <div>
//       <FormGroup>
//         <Label className="label" htmlFor={props.name}>
//           {props.name}
//         </Label>

//         <Controller
//           control={control}
//           name={props.name}
//           render={({ field }) => (
//             <Input
//               invalid={!!errors?.[props.name]}
//               type={props.type}
//               id={props.name}
//               {...field}
//             />
//           )}
//         />
//         {errors?.[props.name]?.message && (
//           <p className="errMsg">{errors?.[props.name].message}</p>
//         )}
//       </FormGroup>
//     </div>
//   );
// }

// export default InputField;
