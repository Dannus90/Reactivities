import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteChildrenProps } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

interface DetailsParams {
    id: string;
}

const ActivityDetails: React.FC<RouteChildrenProps<DetailsParams>> = ({
    match,
}) => {
    const activityStore = useContext(ActivityStore);
    const { activity, loadActivity, loadingInitial } = activityStore;

    useEffect(() => {
        loadActivity(match!.params.id);
    }, [loadActivity, match]);

    if (loadingInitial || !activity) {
        return <LoadingComponent content="Loading Activity..." />;
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />
                <ActivityDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar />
            </Grid.Column>
        </Grid>
    );
};

export default observer(ActivityDetails);