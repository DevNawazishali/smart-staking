import React from 'react'
import "./Tab_page.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import busd from "../Assets/busd.png"
import bnb from "../Assets/binance.png"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Tab_page() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div className='ab_main'>
     <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<span>
            <img src={busd} className=' tab_imgss' alt="" /> BUSD
          </span>} {...a11yProps(0)} />
       
          <Tab label={<span>
            <img src={bnb} className=' tab_imgss' alt="" /> BNB
          </span>} {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='box_busd'>
        <p>Amount in BUSD</p>
        <input type="text" placeholder='00' />

        </div>
        <div className='box_busd mt-2'>
        <p>Tokens</p>
        <input type="text" placeholder='00' />

        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className='box_busd'>
        <p>Amount in BNB  </p>
        <input type="text" placeholder='00' />

        </div>
        <div className='box_busd mt-2'>
        <p>Tokens</p>
        <input type="text" placeholder='00' />

        </div>
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
    </div>
  )
}
