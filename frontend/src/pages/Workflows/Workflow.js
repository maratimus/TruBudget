import React from 'react';
import { Card } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import HistoryIcon from 'material-ui/svg-icons/action/reorder';

import WorkflowTable from './WorkflowTable';
import WorkflowCreation from './WorkflowCreation';
import ChangeLog from '../Notifications/ChangeLog'
import SortIcon from 'material-ui/svg-icons/content/low-priority'
import { ACMECorpGrey, ACMECorpDarkBlue, ACMECorpLightgreen } from '../../colors.js'
import DoneIcon from 'material-ui/svg-icons/navigation/check';
import strings from '../../localizeStrings'

const enableWorkflowSort = (props, allowedToSort) => (
  <FlatButton
    disabled={!allowedToSort}
    onTouchTap={() => props.enableWorkflowSort()}
    label={strings.workflow.workflow_enable_sort}
    style={{
      position: 'relative',
      marginTop: '8px',
      zIndex: 2
    }}
    labelStyle={{
      fontWeight: '200',
    }}
    icon={<SortIcon color={!allowedToSort ? ACMECorpGrey : ACMECorpDarkBlue} />}>
  </FlatButton>
)

const submitSort = (props, allowedToSort) => (
  <FlatButton
    disabled={!allowedToSort}
    onTouchTap={() => props.postWorkflowSort(props.location.pathname.split('/')[3], props.workflowItems)}
    label={strings.workflow.worfkfow_disable_sort}
    style={{
      position: 'relative',
      marginTop: '8px',
      zIndex: 2
    }}

    icon={<DoneIcon color={ACMECorpDarkBlue} />}>
  </FlatButton>
)

const Workflow = (props) => {
  const allowedToWrite = props.loggedInUser.role.write;
  const allowedToCreateWorkflows = allowedToWrite && props.permissions.isAssignee;
  return (
    <Card style={{
      width: '100%',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        alignItems: 'center',
        top: '16px',
        right: '-26px',
        zIndex: 10
      }}>
        {/* Button is disabled either if the user is not allowed to edit or the user is in "sort" mode */}
        <FloatingActionButton disabled={props.workflowSortEnabled ? props.workflowSortEnabled : !allowedToCreateWorkflows} backgroundColor={ACMECorpDarkBlue} onTouchTap={() => props.openWorkflowDialog(false)} style={{
          position: 'relative'
        }}>
          <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton mini={true} disabled={props.workflowSortEnabled} onTouchTap={() => props.openHistory()} backgroundColor={ACMECorpLightgreen} style={{
          position: 'relative',
          marginTop: '8px',
          zIndex: 2
        }}>
          <HistoryIcon />
        </FloatingActionButton>

      </div>
      <div style={{
        display: 'flex',
        position: 'absolute',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        top: '51px',
        left: '3px',
        opacity: '0.7',
        zIndex: 10
      }}>
        {!props.workflowSortEnabled ? enableWorkflowSort(props, allowedToCreateWorkflows) : submitSort(props, allowedToCreateWorkflows)}
      </div>
      <WorkflowTable {...props} />
      <ChangeLog {...props} />
      <WorkflowCreation {...props} />
    </Card >
  )
};

export default Workflow;