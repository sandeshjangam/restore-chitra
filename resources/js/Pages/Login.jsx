import HeaderFooterLayout from "@/Layouts/Authenticated/HeaderFooterLayout";
import { Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import Icons from "@/Components/Icons";

export default function RestoreChitra({ auth }) {
    return (
        <HeaderFooterLayout user={auth.user}>
            <Head title="Login" />
            <div className="sm:py-20">
                <div className="mx-auto max-w-5xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight leading-tight text-gray-900 sm:text-7xl sm:leading-tight">
                        Restore any of your old photos
                    </h1>
                    <p className="mx-auto max-w-lg mt-6 text-lg leading-8 text-gray-600">
                        Restore your old, blurry face photos effortlessly with
                        the power of AI. <b>Log in with Google</b> to create a
                        free account and start restoring your photos today!
                    </p>
                </div>

                <div className="flex space-x-4 justify-center mt-16">
                    <Button
                        className="px-8 py-6 text-base"
                        onClick={() => {
                            window.location.href = "/auth/google/redirect";
                        }}
                    >
                        <Icons.google className="mr-2 h-4 w-4" />
                        Log in with Google
                    </Button>
                </div>
            </div>
        </HeaderFooterLayout>
    );
}
