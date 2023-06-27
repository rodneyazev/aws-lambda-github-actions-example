import { log } from './log.mjs'

export const handler = async(event) => {
    log('Run log. event:  ' + JSON.stringify(event));
    return {
        statusCode: 200,
        body: JSON.stringify(event),
    }
};
