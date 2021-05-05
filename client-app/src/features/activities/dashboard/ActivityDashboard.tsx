import React, { useContext, useEffect } from 'react';
import { Grid, Label } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { RootStoreContext } from '../../../app/stores/rootStore';

export const ActivityDashboard: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { loadActivities, loadingInitial } = rootStore.activityStore;

  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  if (loadingInitial)
    return <LoadingComponent content="Loading activities..." />;

  return (
    <Grid>
      <Grid.Column width={1}>
        {/*remove this*/}
        {/* this is a test -- add component here (sidebar navigation) */}
      </Grid.Column>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={4}>
        <h2>Activity Filters </h2>
        <div className="ActivitySideBar2">
          <div className="ActivitySideBar3">
          <h3>
         <ol className="ui list" style={{marginLeft:'30px'}}>
            <li value="*">Past Activity 1</li>
            <li value="*">Past Activity 2</li>
            <li value="*">Past Activity 3</li>
            <li value="*">Past Activity 4</li>
            <li value="*">Past Activity 5</li>
            <li value="*">Meeting for the Election</li>
         </ol>
         </h3>
         </div>
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
