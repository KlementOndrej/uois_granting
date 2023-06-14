import Card from "react-bootstrap/Card";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { GrantingProgramCard } from 'components/GrantingProgramCard'


export const GrantingPage = ({program, actions}) => {
    return (
        <Card>

                <Tabs
                    defaultActiveKey="profile"
                    id="tabs"
                    className="mb-3"
                >
                    <Tab eventKey="Card0" title="Program">
                    <GrantingProgramCard program={program} actions={actions}/>
                    </Tab>
                    <Tab eventKey="Card1" title="Predmet">
                    afsd
                    </Tab>
                </Tabs>
        </Card>
    )
}