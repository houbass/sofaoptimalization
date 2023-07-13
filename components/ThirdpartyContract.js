import { useRef, useState } from "react";

//next
import Image from 'next/image'

//PDF LIB
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
//import { names } from "canvas-sketch-util/color";

//pic
import podpis from "./pic/podpis.png";
import logo from "./pic/logo.png";


export default function ThirdpartyContract({ name, artist, paypalEmail, track, shareSplit, setCursorType }) {

    //pdf ref
    const pdfRef = useRef();

    //states
    const [showToggler, setShowToggler] = useState(false);
    const [showOpacity, setShowOpacity] = useState("0");
    const [showPosition, setShowPosition] = useState("fixed");
    const [showBtnText, setShowBtnText] = useState("SHOW");

    //get actual date
    const actualDate = new Date();

    //generate and download PDF
    async function downloadPdf() {
        const input = pdfRef.current;
        setCursorType("wait");
        try{
            await html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4', true);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                const imgX = (pdfWidth - imgWidth * ratio) / 2;
                const imgY = 0;
                pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
                pdf.save('[' + artist + '] third party agreement.pdf');
            });

            setCursorType("auto");
        }
        catch(err) {

        }
    };

    //generate and download PNG
    async function downloadPng() {
        const input = pdfRef.current;
        setCursorType("wait");
        try{
            await html2canvas(input).then((canvas) => {
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                a.download = '[' + artist + '] third party agreement.png';
                a.click();
            });

            setCursorType("auto");
        }
        catch(err) {

        }
    };

    //show contrac
    function showContract() {

        if(showToggler === false){
            setShowOpacity("1");
            setShowPosition("initial");
            setShowBtnText("HIDE");
            setShowToggler(true);
        }else{
            setShowOpacity("0");
            setShowPosition("fixed");
            setShowBtnText("SHOW");
            setShowToggler(false);           
        }

    }

    return(
        <>
        <div className="center">
        <br/>
            <div className="generatetable">
            <p>GENERATE THIRD PARTY AGREEMENT</p>
            <div className="row3">
                <button onClick={downloadPdf}>DOWNLOAD PDF</button>  
                <button onClick={downloadPng}>DOWNLOAD PNG</button>
                <button onClick={showContract}>{showBtnText}</button> 
            </div>
            </div>

            <div 
            style={{
                position: showPosition,
                //top: "50px",
                opacity: showOpacity,
                //left: "0"
                zIndex: "-1",

            }}>
            <div ref={pdfRef} className="pdf">
                <div className="title" >
                    <Image className="logoo" width="125px" src={logo}/>
                    <h2>USE FOR THIRD-PARTY AD CATALOG AGREEMENT</h2>
                </div>
                

                <p>
                    This Use for third-party catalog Agreement (“Agreement”) is effective as of 
                    <strong> {actualDate.getDate()}.{actualDate.getMonth() + 1}.{actualDate.getFullYear()}</strong> by and between:
                    <strong> Ondrej Laube</strong>, which operates its music label <strong> (“SOFA LOFI”)</strong>, whose address is 
                    <strong> Hanusova 367/25, Prague, Czech republic</strong> (“the Company”);
                </p>

                <br/>
                <div className="center">
                    <h3>AND</h3>
                </div>

                <br/>
                <h4 className="underline">ARTIST AND WRITER:</h4>
                <p>Legal name: <strong>{name}</strong></p>
                <p>Artist name: <strong>{artist}</strong></p>
                <p>PayPal email: <strong>{paypalEmail}</strong></p>
                <p>hereinafter referred to as “the Writer”, “the Artist”, “you”, “your”</p>

                <br/>
                <h4 className="underline">1) SUBJECT:</h4>
                <p>
                    The ARTIST is the owner of the master recordings (“Master”) and the WRITER of the composition (“Work”). 
                    The ARTIST hereby grants to COMPANY an exclusive right to manufacture, sell, distribute, license, promote, 
                    advertise, and otherwise exploit the MASTER AND THE COMPOSITION of the work entitled 
                    <strong> “{track}”</strong> by in any and 
                    all formats for the term and territory hereby established.
                </p>

                <br/>
                <h4 className="underline">2) DEFINITIONS:</h4>
                <p>(i) Territory: The World and the Universe.</p>
                <p>(ii) Term: The authorisation lasts for perpetuity from the date of signature of this contract.</p>

                <br/>
                <h4 className="underline">3) DELIVERY:</h4>
                <p>
                    “Delivered”, “Delivery” – hereunder shall mean the ARTIST’s actual delivery to the COMPANY of fully mixed Master and all necessary 
                    performers licenses, performers consents, sample clearances, other third parties who participated in the recording of the Master, 
                    side artists permission, and any and other information or items within your control which may be necessary for the exploitation of the Master.
                </p>

                <br/>
                <h4 className="underline">4) GRANT OF RIGHTS:</h4>
                <p>
                    The ARTIST hereby irrevocably and absolutely assigns, transfers, and grants to the COMPANY an undivided One Hundred Percent (100%) 
                    of all their rights and interests of every kind and nature in regards to the Recordings and Compositions. Such assignment, 
                    transfer, and grant shall include, without limitation, the applicable Recordings and Compositions subject to this Agreement. 
                    The ARTIST agrees to the restriction limiting the ARTIST’s ability to re-record, license or exploit the Recording directly or 
                    through any third party after the signing of this Agreement.
                </p>

                <br/>
                <h4 className="underline">5) ROYALTIES:</h4>
                <p>
                    As further consideration of the rights granted hereunder the COMPANY shall grant to the ARTIST:
                    <strong> {shareSplit}</strong> of the “Net Receipts” received by the COMPANY as a result of exploitation of the Master. 
                    “Net Receipts” shall mean all sums paid to and received by the COMPANY directly and identifiably from the 
                    exploitation of the Master hereunder (“Gross Receipts”) [excluding value added tax or other similar tax] 
                    less any cost of conversion and transmission of currency.
                </p>

                <br/>
                <h4 className="underline">6) ACCOUNTING:</h4>
                <p>
                    Accounting periods should be paid quarterly within ninety (90) days after each release. COMPANY
                    will issue splits directly to the ARTIST’s PayPal account. The COMPANY shall not be obliged to
                    prepare a statement or make a payment where the total sum due to the ARTIST is under ten dollars
                    ($10.00 US). Such amount, if applicable, will be carried forward to the next following statement.
                </p>

                <br/>
                <h4 className="underline">7) WARRANTY:</h4>
                <p>
                    a. The ARTIST is free to enter into and perform this Agreement and has taken independent legal advice as to the nature and meaning of the terms of this Agreement.
                </p>
                <p>
                    b. Any and each Master and any other material delivered by the ARTIST to the COMPANY hereunder shall not give rise to liability to 
                    third parties AND in this regard but without limitation the ARTIST makes specific acknowledgment of the importance of respecting the copyright of others.
                </p>
                <p>    
                    c. There are no restriction in respect of the compositions embodied or to be embodied on the Master, in particular:
                </p>
                <p>    
                    i. The performances embodied in the Master do not contain any samples for which a license has not been acquired thus their inclusion infringes the rights of a third party;
                </p>
                <p>    
                    ii. Any consent required pursuant to any legislation protecting the rights of performers have been obtained for all persons whose performances are embodied on the Masters.
                </p>
                <p>    
                    d. The ARTIST will comply with all relevant data protection / privacy legislation (including the General Data Protection Regulation - GDPR EU 2016/679).
                </p>

                <br/>
                <h4 className="underline">8) INDEMNITY:</h4>
                <p>
                    a. Each party indemnifies the other and holds it harmless from and against any and all losses damages and costs including legal fees arising 
                    out of or by reason of any agreed or adjudicated claim that is inconsistent with or arising out of or by reason of any breach of the representations, 
                    warranties, grants, undertakings or agreements given under this Agreement.
                </p>
                <p>
                    b. The COMPANY shall be entitled, in the event of any written claim being made against the
                    COMPANY as a result of an ARTIST’s breach of this Agreement, to withhold all sums becoming due to the ARTIST up to an amount 
                    reasonably commensurate with out potential liability pursuant to such claim.
                </p>

                <br/>
                <div className="row2">
                    <h4>SOFA LOFI</h4>
                    <p>and</p>
                    <h4>{name}</h4>
                </div>
                <p>hereby execute this Agreement by counterparts with the signatures and date below:</p>
                <div className="row2">
                    <p>DATE:</p>
                    <h4>{actualDate.getDate()}.{actualDate.getMonth() + 1}.{actualDate.getFullYear()}</h4>
                </div>
                <p style={{fontSize: "12px"}}>(DAY.MONTH.YEAR)</p>

                <div className="signbox">
                    <div className="sign">
                        <p>COMPANY:</p>


                        <Image className="podpis" src={podpis} width="100" height="50"/>
                        <p>________________________</p>   

                    </div>

                    <div className="sign">
                        <p>ARTIST:</p>
                        <p>________________________</p> 
                    </div>
                    

                </div>


            </div>
            </div>             
        </div>
        </>
    )
};