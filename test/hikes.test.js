const request = require("supertest"); // enables use of supertest
const app = require("../app"); // creating an instance of the app
const db = require("../db"); // allows for use of knex


describe("The hikes endpoint", () => {
    test("GET request",  async () => {
        

        const response = await request(app)
        .get(`/hikes`)
       
    })

})
