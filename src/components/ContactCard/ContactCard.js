import { Box, Card, CardContent, CardActionArea, CardMedia, Typography, Grid, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function ContactCard() {
    return(
        <div>
            
            <Box
                sx={{
                    display: 'flex',
                    flexDirection:'row',
                    // border: '1px dashed grey',
                    align: "center",
                    background: 'linear-gradient(45deg, #ffffff 30%, #dfe2e8  90%)',
                    mx: 2,
                    mt: 2,
                    mb: 2,
                    p: 1,
                    pt: 2,
                    pb: 2,
                    
                }}
            >
                
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={2.38}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    width="500"
                                    image="/img/peek.png"
                                    alt="1"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily:'Inconsolata',fontSize: 18}}variant="body1" color="black"  >
                                        Name: Krittamet Rungrueangthip <br />
                                        Phone: 093 6346883 <br />
                                        Email: 6410110012@psu.ac.th <br />
                                        Department of Computer Engineering 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={2.38 } >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    width="500"
                                    image="/img/bat.png"
                                    alt="2"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily:'Inconsolata',fontSize: 18}}variant="body1" color="black">
                                        Name: Thanapat Duongkaew <br />
                                        Phone: 091 8618713 <br />
                                        Email: 6410110204@psu.ac.th <br />
                                        Department of Computer Engineering
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={2.38}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    width="500"
                                    image="/img/toey.jpg"
                                    alt="4"
                                />
                                <CardContent>
                                    <Typography sx={{fontFamily:'Inconsolata',fontSize: 18}}variant="body1" color="black">
                                        Name: Patinya Limhao <br/>
                                        Phone: 061 1855153 <br />
                                        Email: 6410110294@psu.ac.th <br />
                                        Department of Computer Engineering
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            
            <Card sx={{ bgcolor:"#000000" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="700"
                        width="700"
                        image="/img/mor.jpg"
                        alt=""
                    />
                </CardActionArea>
            </Card>

            <Box
            sx={{ 
                display: 'flex',
                flexDirection:'row',
                width: 600,
                mx: "auto",
                p: 2,
                bottom: '50%',
                // border: '1px dashed grey',
            }}
        >
            <Box
                sx={{ 
                    display: 'flex',
                    flexDirection:'column',
                    width: '100%',
                    height: 'auto',
                    // border: '1px dashed grey',
                }}
            >
                <IconButton aria-label='phone' sx={{ mx: 'auto', color: "#FFF"}}>
                    <PhoneIcon/>
                </IconButton>
                <Typography sx={{ fontFamily:'Inconsolata',textAlign: 'center', color: "#FFF" }}>
                    Phone: 098 7654321
                </Typography>
            </Box>
            
            <Box
                sx={{ 
                    display: 'flex',
                    flexDirection:'column',
                    width: '100%',
                    height: 'auto',
                    // border: '1px dashed grey',
                }}
            >
                <IconButton aria-label='phone' sx={{ mx: 'auto', color: "#FFF" }}>
                    <EmailIcon/>
                </IconButton>
                <Typography sx={{ fontFamily:'Inconsolata',textAlign: 'center', color: "#FFF" }}>
                    Email: 6410110xxx@psu.ac.th
                </Typography>
            </Box>
        </Box> 
        </div>
    )
};

export default ContactCard;