import React, {FC} from 'react';
import base64ArrayBuffer from "../../features/bufferConvertor";

interface Base64ImgProps{
    picture: { data: { data:Buffer } , imageType: string };
}

const Base64Img:FC<Base64ImgProps> = ({picture}) => {
    return (
        <img src={`data:${picture.imageType};base64, ${base64ArrayBuffer(picture.data.data)}`} alt="picture"/>
    );
};

export default Base64Img;