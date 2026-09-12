import React from "react";
import {MoveUpRight} from 'lucide-react';

const LeftContent = () =>{
    return(
        <div className="h-full flex flex-col justify-between w-1/3">
          <div className="p-6"><h3 className="text-6xl font-bold mb-7">Perspective <br/> <span className="text-gray-700">Customer</span> <br/> segmentation</h3>
          <p className="text-med font-medium text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repudiandae mollitia sequi voluptatem iusto eius qui laborum reiciendis molestiae dolorem.</p>
          
          </div>
                <div className="text-xl"><MoveUpRight />
            </div>
                 </div>
        
    )
}
export default LeftContent