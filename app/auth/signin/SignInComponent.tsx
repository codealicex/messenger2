"use client"

import { getProviders, signIn } from "next-auth/react";

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>
}

export default function SignInComponent({ providers }: Props) {

    return (
        <div className="flex justify-center">
            {
                Object.values(providers!).map(provider =>
                    <div key={provider.name}>
                        <button
                            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => signIn(provider.id, { callbackUrl: process.env.NEXTAUTH_URL })}
                        >
                            Sign In with {provider.name}
                        </button>
                    </div>
                )
            }
        </div>
    );
}