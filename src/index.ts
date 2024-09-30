import express from "express"
import { CreateProfile } from "./application/use-cases/CreateProfile"
import { PrismaProfileRepository } from "./infra/database/PrismaProfileRepository"
import { ProfileController } from "./adapters/http/ProfileController"
// import { ProfileSubscription } from "./adapters/subscription/ProfileSubscription";
// import { CEO } from "ceo"

// const ceo = new Ceo(process.env.SUB_URL)

const app = express()
const port = process.env.PORT || 4568

app.use(express.json())

const profileRepository = new PrismaProfileRepository()
const createProfileUseCase = new CreateProfile(profileRepository)
const profileController = new ProfileController(createProfileUseCase)
// const profileSubscription = new ProfileSubscription(createProfileUseCase);

// const ceo.sub("profile", profileSubscription.createProfile);
app.post("/profiles", (req, res) => {
  return profileController.createProfile(req, res)
})

app.get("/ping", (req, res) => {
  return res.send("pong")
})

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`)
})
