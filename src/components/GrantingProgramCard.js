import Card from "react-bootstrap/Card";

import { GrantingProgramDesc } from "components/GrantingProgramDesc";

/**
 * Renders a card containing a list of group members.
 */
export const GrantingProgramCard = ({group, actions}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Akreditovany program
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <GrantingProgramDesc/>
            </Card.Body>
        </Card>
    )
}