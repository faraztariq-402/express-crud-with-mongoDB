import { MongoClient} from 'mongodb';


const uri = "mongodb+srv://faraztariq12123:mongodb@cluster0.wlslxbw.mongodb.net/?retryWrites=true&w=majority";

export const client = new MongoClient(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err.stack);
        await client.close();
        process.exit(1)
    }
   
}
run().catch(console.dir);

process.on("SIGINT",async function(){
    console.log("app is terminating")
    await client.close();
    process.exit(0)

})