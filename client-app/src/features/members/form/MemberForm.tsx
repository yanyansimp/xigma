import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { v4 as uuid } from 'uuid';
import { PersonFormValues } from '../../../app/models/person';
import { RootStoreContext } from '../../../app/stores/rootStore';


interface DetailParams {
    id: string;
}

const MemberForm: React.FC<RouteComponentProps<DetailParams>> = 
({
    match,
    history
}) => {
    const rootStore = useContext(RootStoreContext);
    const {
        createPerson,
        editPerson,
        submitting,
        loadPerson
    } = rootStore.personStore;

    const [person, setPerson] = useState(new PersonFormValues())
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (match.params.id) {
            setLoading(true);
            loadPerson(match.params.id)
                .then(person => setPerson(new PersonFormValues(person)))
                .finally(() => setLoading(false));
        }
    }, [loadPerson, match.params.id]);

    const hanldeFinalFormSubmit = (values: any) => {
        
        //Magdugang pako diri

        //

        if (!person.id) {
            let newPerson = {
                ...person,
                id: uuid()
            };
            createPerson(newPerson);
        } else {
            editPerson(person);
        }
    };

    return (
        <div>
            {/* Ugma na pod  */}
        </div>
    )
}
