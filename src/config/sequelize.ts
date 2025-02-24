import { Sequelize } from "sequelize-typescript";
import { Room } from "../db/models/rooms.model";
import { User } from "../db/models/user.model";
import { Building } from "../db/models/building.model";
import { Event } from "../db/models/event.model";
import { EventDate } from "../db/models/event_date.model";
import {EventLogs} from "../db/models/event_log.model";

export const sequelize = new Sequelize({
  dialect: 'mysql', 
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: '', 
  database: 'extension_interna',
  models: [Room, User, Building, Event, EventDate, EventLogs], 
});
  
export const models = sequelize.models;