import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

export default async function SignInPage() {
    const providers = await getProviders();

    return (
        <div className="grid justify-center pt-16 space-y-16">
            <div>
                <Image 
                    className="rounded-full mx-2 object-cover"
                    width={180}
                    height={180}
                    src={"/logo-Meta.png"}
                    alt="logo"
                />
            </div>
            <SignInComponent providers={providers} />
        </div>
    );
}