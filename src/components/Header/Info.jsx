import { MapPin , Mail } from 'lucide-react';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Info = () => {
    return (
        <div className="w-full h-full px-10 py-2">
            <div className="w-full h-full flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {/* 1st */}
                    <div className="flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-blue-500" />
                        <p className='font-semibold cursor-pointer'>Faridabad, Haryana 121005, INDIA</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-6 h-6 text-blue-500" />
                        <p className='font-semibold cursor-pointer'>Info@victoratool.com</p>
                    </div>
                </div>

                {/* <div className="flex items-center gap-4">
                    <span className='font-semibold'>Switch to Hindi</span>
                    <div>
                        <FormControlLabel control={<Switch defaultChecked />} />
                    </div>
                </div> */}
            </div>
           
        </div>
    )
}

export default Info