import conf from './conf'
import { Client, Account, ID } from "appwrite";


export  class Authserves {
    Client = new Client()
    account;

    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwrideprojectid)
        this.account = new Account(this.Client)
    }
    async creactAcount({name,email,password}){
        try {
            const newAcount = await this.account.create(ID.unique(),name,email,password)
            if(newAcount){
                return Login(email,password)
            }else{
                return newAcount
            }
        } catch (error) {
             console.log(error)
        }
    }
    async Login({email,password}){
        try {
            return await this.account.createEmailSession(email, password);

        } catch (error) {
            console.log(error)
        }
    }
    async userloginAcount(){
        try {
            const userAcount = await this.account.get()
            return userAcount
        } catch (error) {
            console.log(error)
        }
        return null
    }

    async Logout(){
        const lOGOUT = this.account.deleteSessions()
        return lOGOUT
    }
}
const authServices = new Authserves();

export default authServices