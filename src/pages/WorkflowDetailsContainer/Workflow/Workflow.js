import React from 'react';
import { Card } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import WorkflowTable from './WorkflowTable';
import WorkflowCreationDialog from './WorkflowCreationDialog';


const Workflow = ({  location, history, workflowItems, showWorkflow, openWorkflowDialog, hideWorkflowDialog}) => (
  <Card style={{
    width: '74%',
    left: '13%',
    right: '13%',
    top: '300px',
    position: 'absolute',
    zIndex: 1100,
  }}>
    <WorkflowTable
      location={location}
      history={history}
      workflowItems={workflowItems}
      />
    <FloatingActionButton  onTouchTap={openWorkflowDialog} secondary style={{
      position: 'absolute',
      right: '-28px',
      top: '16px'
    }}>
      <ContentAdd />
    </FloatingActionButton>
    <WorkflowCreationDialog showWorkflow={showWorkflow} openWorkflowDialog={openWorkflowDialog} hideWorkflowDialog={hideWorkflowDialog} />
  </Card>
);

export default Workflow;
