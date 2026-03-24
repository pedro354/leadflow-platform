import { Table } from "reactstrap";

//function dataCampaigns(){
//    const leads = 100;
//    const converted = 30;
//   const convertionRate = (converted / leads) * 100;
// return convertionRate;
//}

export default function CampaignPerfomanceSection(){
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
                    <td>100</td>
                    <td>30</td>
                    <td>33%</td>
                </tr>
                <tr>
                    <td>Facebook Ads</td>
                    <td>493</td>
                    <td>32</td>
                    <td>1.5%</td>
                </tr>
                <tr>
                    <td>Instagram Ads</td>
                    <td>440</td>
                    <td>50</td>
                    <td>440%</td>
                </tr>
                <tr>
                    <td>Twitter Ads</td>
                    <td>203</td>
                    <td>22</td>
                    <td>922%</td>
                </tr>
            </tbody>
        </Table>
    )
}