const conf = {
    APPWRITE_URL : String(import.meta.env.VITE_APPWRITE_URL),
    APPWRITE_PROJECT_ID : String(import.meta.env.APPWRITE_PROJECT_ID),
    APPWRITE_DATABASE_ID : String(import.meta.env.APPWRITE_DATABASE_ID),
    VITE_APPWRITE_COLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    VITE_APPWRITE_COLLECTION_ID_2: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_2),
}
export default conf