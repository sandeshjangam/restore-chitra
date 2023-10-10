export default function downloadImageFromUrl(url, fileName) {
    fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            const blobUrl = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = blobUrl;
            a.download = fileName || "downloaded-photo.jpg";
            a.style.display = "none";

            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
            URL.revokeObjectURL(blobUrl);
        })
        .catch((error) => {
            console.error("Error downloading the photo:", error);
        });
}

export function generateNewName(imageName) {
    const suffix = '_' + Date.now(); // Generate a timestamp
    const extPos = imageName.indexOf(".");

    return imageName
      .substring(0, extPos)
      .concat(suffix, imageName.substring(extPos));
}
