import {constanta} from "../constanta";

export const servicePolits={
    addAllPolits:()=>fetch(constanta.url).then(value => value.json())
}