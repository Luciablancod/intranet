import express from 'express';
import { sequelize } from './config/sequelize';
import cors from 'cors';
import roomsRouter from './routes/room.routes'
import usersRouter from './routes/user.routes'
import buildingsRouter from './routes/building.routes'
import eventRouter from './routes/event.routes'
import eventDateRouter from './routes/event_date.routes'
import eventLogRouter from './routes/event_logs.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.json({message:"API Espacios Centro Cultural Universitario - UNICEN"})
});

app.use(cors());
app.use(express.json())
app.use('/api/v1/rooms' , roomsRouter)
app.use('/api/v1/users' , usersRouter)
app.use('/api/v1/buildings', buildingsRouter)
app.use('/api/v1/events', eventRouter)
app.use('/api/v1/date', eventDateRouter)
app.use('/api/v1/logs', eventLogRouter)

const main = async () =>{
    try{
        await sequelize.sync({alter:true});
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)});
    }catch(error){
        console.log(error);
    }
};

main();
