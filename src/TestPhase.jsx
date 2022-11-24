import { useState } from 'react';
import { textStyle, questionStyle, buttonStyle } from './dimensions';
import {
    judgments_sy3_wshaped, judgments_sy3_nshaped,
    judgments_bx2_wshaped, judgments_bx2_nshaped,
    questions_sy3, questions_bx2, conditions,
    trial_ids
} from './randomizedParameters';
import Transition from './Transition';
import Likert from 'react-likert-scale';
import { likertChoicesTest } from './likertScale';
import Data from './Data';



const TestPhase = (props) => {
    const condition = conditions[props.testNumber]
    const questions = (condition === "sy3n" |
        condition === "sy3w") ?
        questions_sy3 :
        (condition === "bx2n" |
            condition === "bx2w") ?
            questions_bx2 : NaN;

    const judgments = condition === "sy3n" ?
        judgments_sy3_nshaped : condition === "sy3w" ?
            judgments_sy3_wshaped : condition === "bx2n" ?
                judgments_bx2_nshaped : condition === "bx2w" ?
                    judgments_bx2_wshaped : NaN;

    const label = (condition === "sy3n" |
        condition === "sy3w") ?
        "SY3" :
        (condition === "bx2n" |
            condition === "bx2w") ?
            "BX2" : NaN;


    const [trialNumber, setTrialNumber] = useState(0);
    const incrementTrial = (integer) => {
        setTrialNumber(integer + 1)
    };

    const Histogram = (props) => {
        const [response, setResponse] = useState("unclicked");
        const question = props.questions[props.trialNumber - 1];
        const range = props.judgments[question];
        const img = range[2];
        const pic = <img src={img} style={{ width: "60vw" }} />

        const text = <p>"If we picked a person at random, they would probably have between {range[0]} and {range[1]} units
            of {props.label} in their bloodstream."</p>;


        // the likert scale
        const likertOptions = {
            question: "",
            responses: likertChoicesTest,
            //keeps track of the last response by the participant
            onChange: val => {
                setResponse(val.value);
            },
            id: 'question',
        };

        const handleClick = () => {

            Data.responses.push({
                "response": response,
                "range_low": range[0],
                "range_high": range[1],
                "condition": props.condition,
                "trial_number": props.trialNumber,
                "order": props.testNumber
            });
            if (props.trialNumber == trial_ids.length) {
                console.log(Data);
                props.incrementTest((props.testNumber));
            }
            props.incrementTrial(props.trialNumber);
        }
        const button = response == "unclicked" ? "" : <button style={buttonStyle}
            onClick={() => handleClick()}>Next</button>

        return (
            <div style={questionStyle}>
                {pic}
                {text}
                <Likert {...likertOptions} />
                {button}<br></br>
            </div>
        )
    }
    const listoftrials = trial_ids.map((i) => {
        return (<Histogram trialNumber={trialNumber} incrementTrial={incrementTrial}
            testNumber={props.testNumber} incrementTest={props.incrementTest}
            mode={"test"} condition={condition} label={label} questions={questions}
            judgments={judgments} />)
    })

    listoftrials.unshift(<Transition trialNumber={trialNumber} incrementTrial={incrementTrial}
        testNumber={props.testNumber} incrementTest={props.incrementTest}
        mode={"instructions"} condition={condition} />)


    return (listoftrials[trialNumber])

}

export default TestPhase;