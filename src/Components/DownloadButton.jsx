import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';

const DownloadButton = () => {
    return (
        <PDFDownloadLink document={<PdfDocument />} filename="FORM">
            {({ loading }) =>
                loading ? (
                    <button>Loading Document...</button>
                ) : (
                    <button>Download</button>
                )
            }        </PDFDownloadLink>

    );
};

export default DownloadButton;
