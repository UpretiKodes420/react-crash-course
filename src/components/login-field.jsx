import { forwardRef } from "react";
const LoginField = forwardRef(function LoginField({ inputtype, fieldname, ...tracer }, ref) {
  return (
    <div className="mt-7">
      <div>
        <label className="text-2xl text-white text-shadow-sm">
          {fieldname + ":"}
        </label>
      </div>

      <input
        type={inputtype}
        className="bg-white mt-1 w-70 border p-2 rounded-xl shadow-xl/30 "
        ref={ref}
        {...tracer}
      />
    </div>
  );
})
export default LoginField 