import { Table } from "reactstrap";

export default function RecentLeadsSection() {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Lead Name</th>
                        <th>Lead Email</th>
                        <th>Lead Status</th>
                        <th>Lead target</th> // coluna de onde o usuário vai escolher o target? Linkedin
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@example.com</td>
                        <td>Lead</td>
                        <td>LinkedIn</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>jane.smith@example.com</td>
                        <td>Lead</td>
                        <td>LinkedIn</td>
                    </tr>
                    <tr>
                        <td>Bob Johnson</td>
                        <td>bob.johnson@example.com</td>
                        <td>Lead</td>
                        <td>Website</td>
                    </tr>
                    <tr>
                        <td>Emily Davis</td>
                        <td>emily.davis@example.com</td>
                        <td>Lead</td>
                        <td>LinkedIn</td>
                    </tr>
                    <tr>
                        <td>Sarah Wilson</td>
                        <td>sarah.wilson@example.com</td>
                        <td>Lead</td>
                        <td>Google Ads</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )

}