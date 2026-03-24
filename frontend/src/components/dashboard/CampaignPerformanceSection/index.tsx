import { Table } from "reactstrap";


//interface data {
  //  leads: number;
    //converted: number;
    //convertionRate: number;
//}


//function MathConversion(convertionRate: number) {
  //  const leads = 130;
    //const converted = 10.5;
     //convertionRate = converted / leads * 100;
     //return `${    parseFloat(Number(convertionRate).toFixed(2))}%`;
//}
export default function CampaignPerfomanceSection() {
    return(
        <Table>
            <thead>
                <tr>
                    <th>Campaign Name</th>
                    <th>Leads</th>
                    <th>Converted</th>
                    <th>Conversion Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Americanas Ads</td>
                    <td>130</td>
                    <td>10.5</td>
                    <td>8.08%</td>
                </tr>
                <tr>
                    <td>Facebook Ads</td>
                    <td>130</td>
                    <td>10.5</td>
                    <td>8.08%</td>
                </tr>
                <tr>
                    <td>Instagram Ads</td>
                    <td>130</td>
                    <td>10.5</td>
                    <td>8.08%</td>
                </tr>
                <tr>
                    <td>Twitter Ads</td>
                    <td>130</td>
                    <td>10.5</td>
                    <td>8.08%</td>
                </tr>
            </tbody>
        </Table>
    )
}