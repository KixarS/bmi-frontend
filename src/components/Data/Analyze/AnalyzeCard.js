import styled from '@emotion/styled';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import React from 'react'
import './AnalyzeCard.css'

function Analyze() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box
        sx={{
          display: 'block',
          flexDirection: 'row',
          // border: '1px dashed grey',
          align: "center",
          background: 'linear-gradient(#dfe2e8  90%)',
          mx: 2,
          mt: 2,
          mb: 2,
          p: 40,
          pt: 2,
          pb: 2,
        }}
      >

        {/* Card1 BMI เฉลี่ย */}
        <Box>
          <Card sx={{ p: 2.38, paddingRight: 20, mt: 2 }}>
            <div className='row'>
              <table width="100%">
                <tr>
                  <td>
                    <Container maxWidth="auto">
                      <div className='headerC1'>
                        <div>BMI เฉลี่ย</div>
                      </div>
                    </Container>
                  </td>

                  <td>
                    <Container maxWidth="auto">
                      <div className='number'>
                        <div>26 kg/m</div>
                      </div>
                    </Container>
                  </td>
                </tr>
              </table>
            </div>
          </Card>

          {/* Card2 ส่วนสูง */}
          <Card sx={{ p: 2.38, paddingRight: 20, mt: 2 }}>
            <table width="100%">
              <tr>
                <td>
                  <Container maxWidth="auto">
                    <div className='headerC1'>
                      <div>ส่วนสูงเฉลี่ย
                      </div>

                    </div>
                  </Container>
                </td>

                <td>
                  <Container maxWidth="auto">
                    <div className='number'>
                      <div>160 cm</div>
                    </div>
                  </Container>
                </td>
              </tr>
            </table>
          </Card>

          <Card sx={{ p: 2.38, paddingRight: 20, mt: 2 }}>
            <table width="100%">
              <tr>
                <td>
                  <Container maxWidth="auto">
                    <div className='headerC1'>
                      <div>น้ำหนักเฉลี่ย</div>
                    </div>
                  </Container>
                </td>

                <td>
                  <Container maxWidth="auto">
                    <div className='number'>
                      <div>70 kg</div>
                    </div>
                  </Container>
                </td>
              </tr>
            </table>
          </Card>
        </Box>
      </Box>

      <Grid container spacing={3} justifyContent="center" paddingBottom={3}>
        <Card sx={{ p: 2.38, paddingRight:'auto' ,paddingLeft:'auto', mt: 2, }}>
          <table width="100%">
            <tr>
              <td>
                <Container maxWidth="auto">
                  <div className='headerC2'>
                    เพศชาย
                  </div>
                  <div className='detail'>
                    BMI<br/>
                    ส่วนสูงเฉลี่ย<br/>
                    น้ำหนักเฉลี่ย
                  </div>
                </Container>
              </td>

              <td>
                <Container maxWidth="auto">
                  <div className='number'>
                    <div><br/>22 kg/m
                      <br/>150 cm.
                      <br/>70 kg.
                    </div>
                  </div>
                </Container>
              </td>
            </tr>
          </table>
        </Card>

        <Card sx={{ p: 3, paddingRight:'auto' ,paddingLeft:'auto', mt: 2 }}>
          <table width="100%">
            <tr>
              <td>
                <Container maxWidth="auto">
                  <div className='headerC2'>
                    เพศหญิง
                  </div>
                  <div className='detail'>
                    BMI<br/>
                    ส่วนสูงเฉลี่ย<br/>
                    น้ำหนักเฉลี่ย
                  </div>
                </Container>
              </td>

              <td>
                <Container maxWidth="auto">
                  <div className='number'>
                    <div><br/>22 kg/m
                      <br/>150 cm.
                      <br/>70 kg.
                    </div>
                  </div>
                </Container>
              </td>
            </tr>
          </table>
        </Card>
      </Grid>


    </div>

  )
}

export default Analyze