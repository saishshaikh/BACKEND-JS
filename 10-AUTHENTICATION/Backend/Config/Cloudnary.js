import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const UploadImgOnCloudinary = async (filepath) => {
    try {
        if (!filepath) return null;

        const result = await cloudinary.uploader.upload(filepath);

        fs.unlinkSync(filepath); // delete local file

        return result.secure_url;
    } catch (error) {
        if (filepath && fs.existsSync(filepath)) {
            fs.unlinkSync(filepath);
        }
        console.log("Cloudinary error:", error);
        return null;
    }
};

export default UploadImgOnCloudinary;
