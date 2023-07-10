import Image from "next/image";
import React, { useState } from "react";
import Textfield from "../../atoms/Textfield";
import Button from "../../atoms/Button";
import { setLogin } from "../../../services/auth";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
    const data = { username, password };
    if (!username || !password) {
      toast.error("Email dan Password wajib diisi !!");
    } else {
      const response = await setLogin(data);

      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("login berhasil");
        const { access_token } = response.data;
        const tokenBase64 = Buffer.from(access_token).toString("base64");

        Cookies.set("token", tokenBase64, { expires: 1 });

        router.push("/");
      }
    }
  };
  return (
    <div>
      <Image
        src="https://www.jasamarga.com/static/media/Logo.282998ca.png"
        width="300"
        height="300"
        alt="logo"
      />
      <div className="border-2 border-black rounded-lg w-auto h-72 p-2 mt-5">
        <Textfield
          label="Username"
          type="text"
          placeholder="Input Your Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Textfield
          label="Password"
          type="password"
          placeholder="Input Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-5">
          <Button text="Login" color="black" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
}
