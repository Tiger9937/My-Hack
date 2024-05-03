import conf from './conf'
import { Client, Account, ID } from "appwrite";


export  class Authserves {
    Client = new Client()
    account;

    constructor(){
        this.Client
        .setEndpoint(conf.APPWRITE_URL)
        .setProject(conf.APPWRITE_URL)
        this.account = new Account(this.Client)
    }
    


    async creactAcount({email, password, name}) {
        try {
            const newAcount = await this.account.create(ID.unique(),email, password, name)
            if(newAcount){
                return this.Login({email,password})
            }else{
                return newAcount
            }
        } catch (error) {
            console.log("fock you",error)
        }
    }

    async Login({ email, password }) {
    try {
        return await this.account.createEmailSession(email, password)
    } catch (error) {
        throw new Error(`Login failed: ${error.message}`);
    }
    }

    async userloginAcount(){
        try {
            return await this.account.get()

        } catch (error) {
            console.log("fock you",error)
        }
        return null
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }


    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}
const authServices = new Authserves();

export default authServices