
import {  boolean, integer, pgTable,serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aioutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse',),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdOn:varchar('createdOn')
})


export const UserSubcriptions=pgTable('userSupcriptions',{
    id:serial('id').primaryKey(),
    email:varchar('email'),
    userName:varchar('userName'),
    active:boolean('active'),
    PaymentId:varchar('paymentID'),
    joinDate:varchar('joinDate'),
    credits:integer('credits').default(0) 
})