import {v2} from "cloudinary"
import fs from "fs"
cloudinary.config ({
    Cloud_name :process.env.CLOUDNARY_CLOD_NAME,
    api_key : process.env.CLOUDNARY_API_KEY,
    api_secret : process.env.CLOUDNARY_API_SECRET
})


const  UploadImgOnClodnary =  async (filepath) => {

    try {
        if (!filepath) {
            return null
        }
      
        let result = cloudinary.uploader.upload(filepath)
        console.log(result)
        fs.unlinkSync(filepath)
        return result.secure_url
    } catch (error) {
        fs.unlinkSync(filepath)
        console.log(error)
    }
    
}

export default UUploadImgOnClodnary 