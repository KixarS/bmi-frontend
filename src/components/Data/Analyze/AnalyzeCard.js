import { Box, Card, Container } from '@mui/material'
import React from 'react'
import './AnalyzeCard.css'

function Analyze() {
  return (
    <div>
      <Box
      sx={{
        display: 'block',
        flexDirection:'row',
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
          <Card sx={{ p: 2.38,paddingRight:20, mt: 2 }}>
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
          <Card sx={{ p: 2.38,paddingRight:20, mt: 2 }}>
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

          <Card sx={{ p: 2.38,paddingRight:20, mt: 2 }}>
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

            {/* ค่าเฉลี่ยผู้ชาย */}
          <Card sx={{ p: 2.38, mt: 3 }}>
      <div className='detail'>
        <table width="100%">
          <tr>
          <td>
            <Container maxWidth="auto">
              <div className='headerC2'>
                <div>ผู้ชาย</div>
              </div>

                <br/>
                <div className='detail'>BMI เฉลี่ย
                <br/>ส่วนสูงเฉลี่ย
                <br/>น้ำหนักเฉลี่ย
              </div>
            </Container>
          </td>

          <td>
            <Container maxWidth="auto">
            <br/>
            <br/>
                <div className='detail'>22 kg/m
                <br/>180 cm
                <br/>70 kg
              </div>
            </Container>
          </td>

           {/* ค่าเฉลี่ยผู้หญิง */}
           <td>
            <Container maxWidth="auto">
              <div className='headerC2'>
                <div>ผู้หญิง</div>
              </div>

                <br/>
                <div className='detail'>BMI เฉลี่ย
                <br/>ส่วนสูงเฉลี่ย
                <br/>น้ำหนักเฉลี่ย
              </div>
            </Container>
          </td>

          <td>
            <Container maxWidth="auto">
            <br/>
            <br/>
                <div className='detail'>20 kg/m</div>
                <div>120 cm
                <br/>50 kg
              </div>
            </Container>
          </td>
          </tr>
        </table>
      </div>
        
          </Card>
        </Box>
      </Box>
    </div>
    
  )
}

export default Analyze