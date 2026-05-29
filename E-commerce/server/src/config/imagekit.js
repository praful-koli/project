//config imagekit
import imagekit from 'imagekit'
import config from './config.js'
const imagekitInstance = new imagekit({
    privateKey : config.IMK_PRIVATE_KEY,
    publicKey : config.IMK_PUBLIC_KEY,
    urlEndpoint : config.IMK_URL
})

const uploadImage = async (files , fileName)=> {
   try {
     let option = {
        files,
        fileName,
        folder : "kodex"
     }

     return  await imagekitInstance.upload(option)
   } catch (error) {
      console.log('File upload failed' , error.message)
   }
}

export  default uploadImage