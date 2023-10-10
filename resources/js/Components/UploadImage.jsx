import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { Loader2 } from "lucide-react";

export default function UploadImage({ onChangeCb, $isUploading }) {
    return (
        <div className="flex justify-center">
            <div className="flex w-full max-w-2xl items-center">
                {!$isUploading && (
                    <Label
                        htmlFor="your-image"
                        className="flex justify-center w-full h-48 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                    >
                        <div className="flex items-center flex-col justify-center">
                            <span className="inline-flex items-center justify-center rounded-md text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4">
                                Upload an Image
                            </span>
                        </div>
                        <Input
                            id="your-image"
                            name="your_image"
                            type="file"
                            className="hidden file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:border file:border-solid file:border-blue-700 file:rounded-md border-blue-600"
                            accept="image/png,image/jpeg,image/jpg"
                            onChange={onChangeCb}
                        />
                    </Label>
                )}
                {$isUploading && (
                    <div className="flex justify-center w-full h-48 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <div className="flex items-center justify-center">
                            <Button disabled className="h-12 px-6 py-4">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Uploading your photo...
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
