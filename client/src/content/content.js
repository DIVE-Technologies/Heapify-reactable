import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import "./content.css";

const content = () => {
    return (
        <div className="pdfviewer">
            <PDFViewer className="pdfdoc"
                document={{
                    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                }}
                hideRotation={{
                    Required: false
                }}
            />
        </div>
    )
}

export default content;


// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// function Content() {
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//     }

//     return (
//         <div>
//             <Document
//                 file="./sample.pdf"
//                 onLoadSuccess={onDocumentLoadSuccess}
//             >
//                 <Page pageNumber={pageNumber} />
//             </Document>
//             <p>Page {pageNumber} of {numPages}</p>
//         </div>
//     );
// }

// export default Content;



// // import React, { useState } from 'react';
// // import { Viewer } from '@react-pdf-viewer/core'; // install this library
// // // Plugins
// // import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// // // Import the styles
// // import '@react-pdf-viewer/core/lib/styles/index.css';
// // import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// // // Worker
// // import { Worker } from '@react-pdf-viewer/core'; // install this library
// // import pdfFile from "./../documents/sample.pdf";

// // const Content = () => {
// //     const [defaultPdfFile] = useState(pdfFile);

// //     const defaultLayoutPluginInstance = defaultLayoutPlugin();

// //     return (
// //         <div className='pdf-container'>
// //             <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
// //                 <Viewer fileUrl={pdfFile}
// //                     plugins={[defaultLayoutPluginInstance]} />
// //             </Worker>

// //         </div>
// //     )
// // }

// // export default Content;
