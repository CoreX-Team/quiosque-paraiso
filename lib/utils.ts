import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config()

const environmentVarsSchema = z.object({
    _App_Name_: z.string().default('Cardápio Online'),
    _App_Tile_: z.string().default('Cardápio Online'),
    _App_Description_: z.string().default('Sistema de cardápio online'),
    _App_Header_Title_: z.string().default('Cardápio Online'),
    _App_Header_Subtitle_: z.string().default('Explore nossos pratos deliciosos')
})



export function LoadRelativeEnvVars(): EnvironmentVarsSchema {
    console.log({
        _App_Name_: process.env.APP_NAME,
        _App_Description_: process.env.APP_DESCRIPTION,
        _App_Title_: process.env.APP_TITLE,
        _App_Header_Title_: process.env.APP_HEADER_TITLE,
        _App_Header_Subtitle_: process.env.APP_HEADER_SUBTITLE,
    })
    return environmentVarsSchema.parse({
        _App_Name_: process.env.APP_NAME,
        _App_Description_: process.env.APP_DESCRIPTION,
        _App_Title_: process.env.APP_TITLE,
        _App_Header_Title_: process.env.APP_HEADER_TITLE,
        _App_Header_Subtitle_: process.env.APP_HEADER_SUBTITLE,
    })
}

export type EnvironmentVarsSchema = z.infer<typeof environmentVarsSchema>