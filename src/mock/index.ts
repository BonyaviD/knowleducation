import {createServer} from "miragejs"

const initServer = () => {
  createServer({
    routes() {
      this.namespace = "api"

      this.get("/cards", () => {
        return {
          cards: [
            {
              id: 1, image: "IMAGE",
              description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit.
            dolor sit amet this is consectetur adipisic`
            },
            {
              id: 2, image: "IMAGE", description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit.
            dolor sit amet this is consectetur adipisic`
            },
            {
              id: 3, image: "IMAGE", description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit.
            dolor sit amet this is consectetur adipisic`
            },
            {
              id: 4, image: "IMAGE", description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit.
            dolor sit amet this is consectetur adipisic`
            },
            {
              id: 5, image: "IMAGE", description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit.
            dolor sit amet this is consectetur adipisic`
            },
            {
              id: 6, image: "IMAGE", description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit.
            dolor sit amet this is consectetur adipisic`
            },
          ],
        }
      })
    },
  })

}

export default initServer