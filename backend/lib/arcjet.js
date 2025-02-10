import arcjet , {tokenBucket,shield,detectBot} from "@arcjet/node";
import "dotenv/config.js";

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules:[
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            allow:[
                "CATEGORY:SEARCH_ENGINE"
            ]
        }),
       tokenBucket({
           mode:"LIVE",
           refillRate:5,
           interval:10,
           capacity:10,
       })   
    ]
})
