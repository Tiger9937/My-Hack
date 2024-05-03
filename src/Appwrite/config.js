const { Client, Account} = require("appwrite");
import conf from './conf'


export class Authserves {
    Client = new Client()
    account;

    constructor(){
        this.Client
        .setEndpoint(conf.APPWRITE_URL)
        .setProject(conf.APPWRITE_URL)
        this.account = new Account(this.Client)
    }
    async AddHackathon ({Image_Link,Title,About,Organization_name,Location,Time_duration,Date_Start_end,rewards,Status,Online_Offline}){
       return await this.account.createDocument(
            conf.APPWRITE_DATABASE_ID,
            conf.VITE_APPWRITE_COLLECTION_ID,
            ID.unique(),
            {
                Image_Link,
                Title,
                About,
                Organization_name,
                Location,
                Time_duration,
                Date_Start_end,
                rewards,
                Status,
                Online_Offline
            }
        );
    }
    async LovedHackathon ({Image_Link,Title,About,Organization_name,Location,Time_duration,Date_Start_end,rewards,Status,Online_Offline}){
        return await this.account.createDocument(
            conf.APPWRITE_DATABASE_ID,
            conf.VITE_APPWRITE_COLLECTION_ID_2,
            ID.unique(),
            {
                Image_Link,
                Title,
                About,
                Organization_name,
                Location,
                Time_duration,
                Date_Start_end,
                rewards,
                Status,
                Online_Offline
            }
        )
    }
}
const service = new Authserves()
export default service