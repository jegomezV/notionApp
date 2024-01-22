import Image from 'next/image'
import { Input } from "@nextui-org/react";
import { InputComponent } from "../components/input"



const Form = () => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/logo_deff.png"
                alt="autoMate>> Logo"
                width={300}
                height={7}
                priority
            />
            <div className='flex min-h-screen flex-col align-center justify-between'>
                <form className="opacity-100 shadow-md shadow-white text-white skew-x-1 
                    md:transform-none hover:-translate-y-0.4
                    duration-700 hover:shadow-sky-700
                    bg-gray-900 rounded-3xl p-6"
                >
                    <div className="my-5">
                        {/* Campo de entrada de email */}
                        <Input
                            type="email"
                            label="Email"
                            description="We'll never share your email with anyone else."
                            className="max-w-xs rounded-md	"
                        />

                    </div>
                    <div className="my-5">
                        {/* Campo de entrada de email */}
                        <Input
                            type="password"
                            label="Password"
                            description="Introduce the password."
                            className="max-w-xs"
                        />

                    </div>
                    {/* Botón de inicio de sesión */}
                    <div className="flex justify-center mx-auto max-w-full">
                        <button
                            type="submit"
                            className=" 
                            transition-shadow text-sm  opacity-70 hover:opacity-100 rounded-full
                            hover:-translate-y-0.5 hover:duration-1000 bg-gradient-to-r from-[#ffffff] via-[#3d3d3d] to-[#000000] hover:to-sky-900
                            italic w-52 py-1.5
                            text-white mb-1 uppercase delay-75 font-medium rounded-3xl shadow-inner
                            active:animate-ping pointer-events-auto hover:shadow-white transition-colors font-thin duration-1000"
                        >
                            Login
                        </button>

                    </div>
                </form>
            </div>
        </main>
    );
};

export default Form;