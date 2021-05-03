import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Form, Grid, Segment } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
import { PersonFormValues } from '../../../app/models/person';
import { RootStoreContext } from '../../../app/stores/rootStore';
import { Form as FinalForm, Field } from 'react-final-form';

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
        <Grid>
            <Grid.Column width={10} style={{ padding: '2em 0 0 5em'}}>
                <Segment clearing>
                    <FinalForm 
                        // validate={}
                        initialValues={person}
                        onSubmit={hanldeFinalFormSubmit}
                        render={({ handleSubmit, invalid, pristine}) => (
                            <Form onSubmit={handleSubmit} loading={loading}>
                                {/* <Field 

                                /> */}
                            </Form>
                        )
                    
                        }
                    
                    />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
