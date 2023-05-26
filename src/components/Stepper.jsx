import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepLabel } from "@mui/material";

const steps = [
    "Share Location",
    "Clock In",
    "Working On",
    "Clock Out"
];

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActivestep] = React.useState(1)
    const handleStep = (index) => {
        setActivestep(index)
    };
    return (
        <Box sx={{ width: "100%" }}>
            <Stepper
                sx={{
                    "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root": { color: "#C8454C !important" },
                    "& .css-117w1su-MuiStepIcon-text": { fill: "#C8454C" }
                }}
                activeStep={activeStep}
                alternativeLabel
            >
                {steps.map((label, index) => (
                    <Step
                        sx={{
                            "& .MuiStepConnector-line": { borderColor: "#C8454C" },
                            "& .Mui-disabled": {
                                "& .MuiStepConnector-line": { borderColor: "#BDBDBD" }
                            }
                        }}
                        key={label}
                    >
                        <StepLabel onClick={() => handleStep(index)}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}







