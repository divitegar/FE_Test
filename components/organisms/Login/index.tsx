import Image from "next/image";
import React from "react";
import FormLogin from "../../molecules/FormLogin";

export default function Login() {
  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 flex justify-center items-center">
        <FormLogin />
      </div>
      <div className="flex-1">
        <div className="relative w-full h-screen">
          <Image
            src="https://api-webkorporat.jasamarga.com/uploads/page/1673356939324/SS%20Tanjung%20Mulia.jpg"
            layout="fill"
            objectFit="cover"
            alt="banner-login"
          />
        </div>
      </div>
    </div>
  );
}
