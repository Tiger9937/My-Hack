const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwrideprojectid : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    APPWRITE_DATABASE_ID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    VITE_APPWRITE_COLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    VITE_APPWRITE_COLLECTION_ID_2: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_2),
}
export default conf