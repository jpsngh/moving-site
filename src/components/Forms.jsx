
import { useState } from 'react';


import { Drawer, FloatButton } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
// eslint-disable-next-line react/prop-types
const Forms = () => {

  const [open, setOpen] = useState(false);
  return (
    <div>

  
    <>
   
      
      <FloatButton
        icon={<LikeOutlined />}
        description="Get Quote"
        onClick={() => setOpen(true)}
        style={{ width: 100, height: 100, bottom: 44, right: 44  }}
        className=' bg-yellow-300 font-bold shadow-2xl border border-gray-700'
      />
      <Drawer
        title="Get Quote"
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        size="large"
      >
        <iframe
          title="Survey"
          src="https://forms.gle/Yzdj5QprGsB2RHLh8"
          
          style={{ width: '100%', height: 'calc(100% - 3px)' }}
        >
          Loading…
        </iframe>
      </Drawer>
    </>
    </div>
      
    
  )
}

export default Forms
