import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { RootStoreContext } from '../../../app/stores/rootStore';
import MembersList from './MembersList';

export const MemberDashboard: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const { loadPersons, loadingInitial } = rootStore.personStore;

    useEffect(() => {
        loadPersons();
    }, [loadPersons]);

    if (loadingInitial)
        return <LoadingComponent content="Loading ..." />

  return (
      <Grid>
          <Grid.Column>
              <MembersList />
          </Grid.Column>
      </Grid>
  );
};

export default observer(MemberDashboard);
