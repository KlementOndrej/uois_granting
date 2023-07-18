import Card from "react-bootstrap/Card";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { GrantingProgramDesc } from "components/GrantingProgramDesc"
import { GrantingProgramEdit } from "components/GrantingProgramEdit";
import { GrantingProgramInsert } from "components/GrantingProgramInsert";
import { GrantingSemesterList } from "components/GrantingSemesterList";
import { GrantingSemesterEdit } from "components/GrantingSemesterEdit";
import { GrantingSubjectNameInputButton } from 'components/GrantingSubjectNameInputButton';
import { GrantingSubjectTable}  from "components/GrantingSubjectTable";
import { GrantingSubjectInsert } from 'components/GrantingSubjectInsert';
import { GrantingSemesterInsert } from 'components/GrantingSemesterInsert';

export const GrantingPage = ({program, actions}) => {
    return (
        <Card>
                <Tabs
                    defaultActiveKey="profile"
                    id="tabs"
                    className="mb-3"
                >
                    <Tab eventKey="Card0" title="Zobrazeni programu">
                        <GrantingProgramDesc program={program} actions={actions}/>
                    </Tab>
                    <Tab eventKey="Card1" title="Editace programu">
                        <GrantingProgramEdit program={program} actions={actions}/>
                    </Tab>
                    <Tab eventKey="Card2" title="Insert programu">
                        <GrantingProgramInsert actions={actions}/>
                    </Tab>
                    <Tab eventKey="Card3" title="Zobrazeni predmetu">
                    <GrantingSubjectTable  subjects={program.subjects} actions={actions}/>
                    </Tab>
                    <Tab eventKey="Card4" title="Editace predmetu">
                    <GrantingSubjectNameInputButton subject={program.subjects[0]} actions={actions} />
                    </Tab>
                    <Tab eventKey="Card5" title="Insert predmetu">
                    <GrantingSubjectInsert programId={program.id} actions={actions} />
                    </Tab>
                    <Tab eventKey="Card6" title="Zobrazeni semestru">
                        <GrantingSemesterList subject={program.subjects[0]}/>
                    </Tab>
                    <Tab eventKey="Card7" title="Editace semestru">
                        <GrantingSemesterEdit semester={program.subjects[0].semesters[0]} actions={actions}/>
                    </Tab>
                    <Tab eventKey="Card8" title="Insert semestru">
                       <GrantingSemesterInsert subjectId={program.subjects[0].id} actions={actions} /> 
                    </Tab>
                </Tabs>
        </Card>
    )
}
