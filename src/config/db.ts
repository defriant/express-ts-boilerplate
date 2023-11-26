import mongoose, { Error as mongooseError } from 'mongoose'

export const schemaOptions = { timestamps: true, versionKey: false }

const db: { connect: () => void } = {
    connect: () => {
        if (process.env.MONGO_URI) {
            mongoose.Promise = Promise
            mongoose.connect(process.env.MONGO_URI).catch((err: mongooseError) => console.log(err))
        }
    },
}

export default db
