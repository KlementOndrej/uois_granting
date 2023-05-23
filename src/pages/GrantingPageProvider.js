import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from './AppProvider';
import { GrantingProgramCard } from 'components/GrantingProgramCard';

/**
 * Komponenta, ktera je zaclenena ve strukture s Providerem, tedy se store, importuje si akce a poskytuje je podrizenym komponentam
 * @param {*} param0 
 * @returns 
 */
export const GrantingPageProvider = ({id}) => {

    //vyber vsech skupin ze store
    const programs = useSelector(state => state.programs)
    //vyber idcka u skupiny, ktere bylo vybrano
    const selectedId = useSelector(state => state.programs.selectedId)
    //vyber skupiny ze store, ktera ma byt zobrazena
    const program = programs[id] //|| {id: id}

    useEffect(
        () => {
            actions.programFetch(id)           
        }, [id, selectedId]
    )

    if (program) {
        //skupina je ve store
        return (
            <GrantingProgramCard program={program} actions={actions}/>
        )
    } else {
        //skupina ve store neni
        return (
            <div>Loading... {id}, {program}</div>
        )
    }
}