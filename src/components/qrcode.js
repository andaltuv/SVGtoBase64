import React from 'react';
import QRCode from 'react-qr-code';

export const WyloQRCode = () => {

    const fetchSVG = (e) => {
        e.preventDefault();
        let svgData = document.getElementById("svg");
        let svgString = new XMLSerializer().serializeToString(svgData);
        let svgEncoded = window.btoa(svgString);
        let imgUrl ='data:image/svg+xml;base64,'+svgEncoded;
        let imgTag ='<img src="' + imgUrl + '"/>';
        let div = document.getElementById('image-png');
        div.innerHTML += imgTag;
    }

    return(
        <>
        <h2>Qr COde</h2>
            <div className="qrCode">
                <QRCode id="svg" value="W-0001"/>
            </div>
            <div className="button">

            <div id="image-png">

            </div>

            <button onClick={fetchSVG}>Get SVG</button>

            </div>

        </>
    )

} 
