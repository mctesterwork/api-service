import { users } from "../db/schema";
import { db, client } from "../db/config";

type users = typeof users.$inferInsert;

const usersTestData : users[] = [
    {
        name: "John",
        email: "johndoe@me.com",
        password: "password"
    },
    {
        name: "Jane",
        email: "janedoe@me.com",
        password: "password"
    }
];

export const seed = async () => {
    console.log("Seeding users into database...");
    await db
        .insert(users)
        .values(usersTestData)
        .execute()
        .then(() => {
            console.log("Users seeded!");
        })
        .catch((err) => console.log("Error: ", err));
    client.end();
    return
}
seed();