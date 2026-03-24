import { Table } from "reactstrap";

export default function RecentLeadsSection() {
    return (
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Created At</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Tech Solutions</td>
                        <td>Contacted</td>
                        <td>2026-03-24</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>Web Development</td>
                        <td>Not Contacted</td>
                        <td>2026-03-25</td>
                   </tr>
                    <tr>
                        <td>Michael Johnson</td>
                        <td>Marketing</td>
                        <td>New</td>
                        <td>2026-03-26</td>
                    </tr>
                    <tr>
                        <td>Sarah Williams</td>
                        <td>IT Support</td>
                        <td>Contacted</td>
                        <td>2026-03-27</td>
                    </tr>
                    <tr>
                        <td>David Brown</td>
                        <td>Software Development</td>
                        <td>Opportunity</td>
                        <td>2026-03-28</td>
                    </tr>
                </tbody>
            </Table>
    )

}