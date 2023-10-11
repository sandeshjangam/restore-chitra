import { useState } from "react";
import { Head } from "@inertiajs/react";

import HeaderFooterLayout from "@/Layouts/Authenticated/HeaderFooterLayout";

import { Button } from "@/Components/ui/button";
import { Skeleton } from "@/Components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import UploadImage from "@/Components/UploadImage";

import { AlertCircle, Camera, Download, Loader2 } from "lucide-react";

import downloadImageFromUrl, {
    generateNewName,
} from "@/Helpers/imageOperations";

export default function RestoreChitra(props) {
    const { auth, images_limit, images_remaining, images_used, time_to_reset } =
        props;

    const [userImage, setUserImage] = useState(null);
    const [restoredImage, setRestoredImage] = useState(null);
    const [userImageName, setUserImageName] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleUploadImage(event) {
        event.preventDefault();

        setLoading(true);

        // get the selected file from the input
        const file = event.target.files[0];
        setUserImageName(file.name);

        // create a new FormData object and append the file to it
        const formData = new FormData();
        formData.append("image", file);

        try {
            const res = await axios.post(`/image/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.status === 200 && res.data.image_url) {
                await setUserImage(res.data.image_url);
                await generateImage(res.data.image_url);
            } else {
                setError(res.data.message);
            }
        } catch (error) {
            setError(error.response.data.message);
        }

        setLoading(false);
    }

    async function generateImage(imageUrl) {
        try {
            const res = await axios.post(`/image/restore`, {
                imageUrl: imageUrl,
            });

            if (res.status === 200 && res.data.imageUrl) {
                setRestoredImage(res.data.imageUrl);
            } else {
                setError(res.data.message);
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <HeaderFooterLayout user={auth.user}>
            <Head title="Restore Photos" />

            <div className="mx-auto max-w-5xl text-center">
                <h1 className="text-4xl font-bold tracking-tight leading-tight text-gray-900 sm:text-7xl sm:leading-tight">
                    Restore any of your photo
                </h1>
                <p className="mx-auto max-w-lg mt-6 text-lg leading-8 text-gray-600">
                    Upload your old, blurry face photo to restore it with the
                    power of AI. Supported formats: jpeg, jpg, png.
                </p>

                {images_remaining > 0 && (
                    <p className="mx-auto max-w-lg mt-6 text-lg leading-8 text-gray-600">
                        You have <b>{images_remaining} free generations</b>{" "}
                        remaining for today.
                    </p>
                )}
                {images_used >= images_limit && (
                    <div className="flex w-full max-w-2xl items-center mt-12 mx-auto">
                        <div className="flex items-center justify-center w-full h-48 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                            <div className="max-w-sm text-base">
                                    You have exhausted your available generations for
                                    today. Your <b>{images_limit} free generations</b>{" "}
                                    will be renewed in <b>{time_to_reset}</b>.
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Error */}
            {error && (
                <div className="flex justify-center mt-12">
                    <div className="flex w-full max-w-2xl justify-center">
                        <div className="flex">
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        </div>
                        {/* <div className="flex justify-center w-full h-48 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        </div> */}
                    </div>
                </div>
            )}

            {/* Upload Image */}
            {!userImage && images_remaining > 0 && (
                <>
                    <div className="mt-16 upload-image-wrapper">
                        <UploadImage
                            onChangeCb={handleUploadImage}
                            $isUploading={isLoading}
                        />
                    </div>
                </>
            )}

            <div className="mt-16 relative flex flex-col place-items-center justify-center items-center sm:items-start sm:flex-row">
                {/* Original image */}
                {userImage && (
                    <div className="p-2 m-2 border-1 border-black">
                        <h2 className="mb-3 font-medium text-lg text-center">
                            Original Photo
                        </h2>
                        <img
                            className="w-[480px] h-auto relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-2xl"
                            src={userImage}
                            alt="Sandesh blurred photo"
                        />
                    </div>
                )}

                {/* Restored image skeleton */}
                {userImage && !restoredImage && (
                    <div className="p-2 m-2 border-1 border-black">
                        <h2 className="mb-3 font-medium text-lg text-center">
                            Restored Photo
                        </h2>
                        <a
                            href={restoredImage}
                            target="_blank"
                            rel="noreferrer"
                            className="relative"
                        >
                            <img
                                className="w-[480px] h-auto relative invisible rounded-2xl"
                                src={userImage}
                                alt="Sandesh restored photo"
                            />
                            <Skeleton className="absolute left-0 top-0 w-full h-full rounded-2xl" />
                        </a>
                    </div>
                )}

                {/* Restored image */}
                {userImage && restoredImage && (
                    <div className="p-2 m-2 border-1 border-black">
                        <h2 className="mb-3 font-medium text-lg text-center">
                            Restored Photo
                        </h2>
                        <a
                            href={restoredImage}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="w-[480px] h-auto relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-2xl"
                                src={restoredImage}
                                alt="Sandesh restored photo"
                            />
                        </a>
                    </div>
                )}
            </div>

            {/* Loading action button */}
            {userImage && !restoredImage && (
                <div className="flex space-x-4 justify-center mt-16">
                    <Button disabled className="h-12 px-6 py-4">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating your photo...
                    </Button>
                </div>
            )}
            {/* Action Buttons */}
            {userImage && restoredImage && (
                <div className="flex space-x-4 justify-center mt-16">
                    <Button
                        onClick={() => {
                            setUserImage(null);
                            setRestoredImage(null);
                        }}
                    >
                        <Camera className="mr-2 h-4 w-4" />
                        Generate New Photo
                    </Button>
                    <Button
                        onClick={() => {
                            downloadImageFromUrl(
                                restoredImage,
                                generateNewName(userImageName)
                            );
                        }}
                        variant="outline"
                    >
                        <Download className="mr-2 h-4 w-4" />
                        Download Restored Photo
                    </Button>
                </div>
            )}
        </HeaderFooterLayout>
    );
}
