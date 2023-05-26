import React, { useState } from 'react'
import { Paper, Box, TextField, FormControl, InputLabel, Select,Typography,MenuItem, Grid,  } from '@mui/material'
import HorizontalLinearStepper from '../Stepper'  
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import Badge from '@mui/material/Badge';

const commonStyles = {
    m: 1,
    border: 0.5,
    borderColor: 'rgb(231, 235, 240)',
    borderRadius: '0.2rem'
};

export default function Index() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    return (
        <div>
            <Paper sx={{ mx: 2,p:2 }} elevation={3} >
              <div style={{ borderBottom: '2px solid rgb(231, 235, 240)', margin: "5px",paddingY:"10px",}} >
                <Box sx={{  display: "flex", justifyContent: "space-between"}}>       
                        <Box ><Badge sx={{ color: "#fff", "& .MuiBadge-badge": { backgroundColor: "#C8454C" }}}   badgeContent={0} showZero>
                        <ErrorOutlineRoundedIcon sx={{ color: "#C8454C" }} /></Badge>   </Box>
                    <Box> <SettingsApplicationsOutlinedIcon color= "primary" sx={{border:"none"}}  />   </Box>
                </Box>
                <HorizontalLinearStepper />
                </div>
                <Box sx={{ ...commonStyles, marginTop: '4px', boxShadow: 3, padding: "10px", textAlign: 'center', fontFamily: "Roboto Helvetica Aria sans-serif" }}>
                    <Typography  >
                        After <span style={{
                            backgroundColor: "#C8454C",padding:"4px", borderRadius: "10px",color:"#fff",
                       
                    }}>04:54</span> This page will be replaced
                    </Typography>
                </Box>
                <Box sx={{ marginTop: '4px',paddingY:"4px" ,textAlign: 'center' }}>
                    
                    <Typography variant="inherit" sx={{ color: " #C8454C", fontWeight: 'bold' }}>
                        Enter Clock In Information
                    </Typography>
                </Box>
                <Box
                    component="form"
                    sx={{ 
                       padding:"10px"
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <InputLabel id="demo-simple-select-label" sx={{ fontWeight: "bold" }} >Branch Code</InputLabel>

                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={inputs.branchCode}   
                                defaultValue="sd"
                                name="branch"
                                onChange={handleChange}
                                fullWidth
                                placeholder='branch'
                                size="small"
                                placeHolder="ysdyhsdh"
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    Placeholder
                                </MenuItem>
                                <MenuItem value={10210}>10210</MenuItem>
                                <MenuItem value={10220}>10220</MenuItem>
                                <MenuItem value={30453}>30453</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel id="demo-simple-select-label" sx={{ fontWeight: "bold" }} >Branch</InputLabel>

                            <TextField 
                            
                                size="small" label="store name" disabled sx={{ backgroundColor:"rgb(231, 235, 240)"}} variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id="demo-simple-select-label" sx={{ fontWeight: "bold" }} >Brand<span style={{ color: '#C8454C' }}>*</span></InputLabel>

                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select-label"
                            
                                onChange={handleChange}
                                fullWidth
                                size="small"
                            >
                                <MenuItem value={"brand1"}>brand1</MenuItem>
                                <MenuItem value={"brand2"}>brand2</MenuItem>
                                <MenuItem value={"brand3"}>brand3</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id="demo-simple-select-label" sx={{ fontWeight: "bold" }} >Sales Type<span style={{ color: '#C8454C' }}>*</span></InputLabel>

                            
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={inputs.salesType}
                                size="small"
                                onChange={handleChange}
                                fullWidth
                                
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id="demo-simple-select-label" sx={{ fontWeight: "bold" }} >Product Type <span style={{ color: '#C8454C' }}>*</span></InputLabel>

                           
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={inputs.productType}
                                size="small"
                                onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem value={"product1"}>product1</MenuItem>
                                <MenuItem value={"product2"}>product2</MenuItem>
                                <MenuItem value={"product3"}>product3</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </div>
    )
}

