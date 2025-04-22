import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import BeritaRoute from "./routes/BeritaRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
dotenv.config();

const app = express();
const sessionStore = SequelizeStore(session.Store);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Konfigurasi store session di DB
const store = new sessionStore({
  db: db,
  tableName: 'sessions'
});

// Untuk membuat tabel baru di db sesuai model yg sudah didefinisikan (karena di db bemilkom_ilkomnews sudah ada, maka jangan diaktifkan)
// (async()=>{
//     await db.sync();

// })();


// Setup express-session
app.use(session({
  secret: process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: {
      secure: 'auto'
  }
}));

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/public/uploads', express.static(path.join(__dirname + '/public/uploads')));

// Routing
app.use(UserRoute);
app.use('/api/v1', BeritaRoute);
app.use(AuthRoute);

// store.sync();

// Start server
app.listen(process.env.APP_PORT, ()=> {
  console.log('Server up and running')
});
