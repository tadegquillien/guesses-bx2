//these elements are randomly generated at the start of the experiment
//after being generated, they keep the same value throughout the experiment

import { shuffle } from './convenienceFunctions';
import {
    circle_ids, color_palette, mode, urn_ids, urn_letters, PROBS, colors, actualWorld,
    threshold
} from './gameParameters'
import sy3w5054 from './sy3w5054.PNG';
import sy3w5458 from './sy3w5458.PNG';
import sy3w5862 from './sy3w5862.PNG';
import sy3w6266 from './sy3w6266.PNG';
import sy3w6670 from './sy3w6670.PNG';
import sy3w5058 from './sy3w5058.PNG';
import sy3w6270 from './sy3w6270.PNG';

import sy3n5054 from './sy3n5054.PNG';
import sy3n5458 from './sy3n5458.PNG';
import sy3n5862 from './sy3n5862.PNG';
import sy3n6266 from './sy3n6266.PNG';
import sy3n6670 from './sy3n6670.PNG';
import sy3n5058 from './sy3n5058.PNG';
import sy3n6270 from './sy3n6270.PNG';

import bx2w3034 from './bx2w3034.PNG';
import bx2w3438 from './bx2w3438.PNG';
import bx2w3842 from './bx2w3842.PNG';
import bx2w4246 from './bx2w4246.PNG';
import bx2w4650 from './bx2w4650.PNG';
import bx2w3038 from './bx2w3038.PNG';
import bx2w4250 from './bx2w4250.PNG';

import bx2n3034 from './bx2n3034.PNG';
import bx2n3438 from './bx2n3438.PNG';
import bx2n3842 from './bx2n3842.PNG';
import bx2n4246 from './bx2n4246.PNG';
import bx2n4650 from './bx2n4650.PNG';
import bx2n3038 from './bx2n3038.PNG';
import bx2n4250 from './bx2n4250.PNG';






// a list of judgments (defined by their lower and upper bounds)
export const judgments_sy3_wshaped = {
    "r5054": [50, 54, sy3w5054],
    "r5058": [50, 58, sy3w5058],
    "r5458": [54, 58, sy3w5458],
    "r5862": [58, 62, sy3w5862],
    "r6266": [62, 66, sy3w6266],
    "r6670": [66, 70, sy3w6670],
    "r6270": [62, 70, sy3w6270]
}

export const judgments_sy3_nshaped = {
    "r5054": [50, 54, sy3n5054],
    "r5058": [50, 58, sy3n5058],
    "r5458": [54, 58, sy3n5458],
    "r5862": [58, 62, sy3n5862],
    "r6266": [62, 66, sy3n6266],
    "r6670": [66, 70, sy3n6670],
    "r6270": [62, 70, sy3n6270]
}

export const judgments_bx2_wshaped = {
    "r3034": [30, 34, bx2w3034],
    "r3038": [30, 38, bx2w3038],
    "r3438": [34, 38, bx2w3438],
    "r3842": [38, 42, bx2w3842],
    "r4246": [42, 46, bx2w4246],
    "r4650": [46, 50, bx2w4650],
    "r4250": [42, 50, bx2w4250]
}

export const judgments_bx2_nshaped = {
    "r3034": [30, 34, bx2n3034],
    "r3038": [30, 38, bx2n3038],
    "r3438": [34, 38, bx2n3438],
    "r3842": [38, 42, bx2n3842],
    "r4246": [42, 46, bx2n4246],
    "r4650": [46, 50, bx2n4650],
    "r4250": [42, 50, bx2n4250]
}


export const questions_sy3 = shuffle(["r5054", "r5058", "r5458", "r5862",
    "r6266", "r6670", "r6270"]);

export const questions_bx2 = shuffle(["r3034", "r3038", "r3438", "r3842",
    "r4246", "r4650", "r4250"]);

export const trial_ids = [...Array(questions_bx2.length).keys()];


export const conditions = shuffle([shuffle(["sy3n", "bx2w"]), shuffle(["sy3w", "bx2n"])])[0];
console.log(conditions);


//a variable randomly assigning the participant to answer the probability
//comprehension questions either before or after the main task
export const probCheckOrder = "last";




