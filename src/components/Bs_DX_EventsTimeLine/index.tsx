import { useEffect, useState, useMemo, useCallback } from 'react';
import { withConfiguration } from '@pega/cosmos-react-core';
import './create-nonce';
import TimeLinePage from './TimelinePage.jsx';
import StyledBsExtensionsCustomTimelineWrapper from './styles';
import DataContext from './DataContext.js';
import Filter from './Filter.jsx';

interface TimelineDataProviderProps {
  getPConnect: () => any;
}

interface TimelineEvent {
  [key: string]: any;
}

function TimelineDataProvider(props: TimelineDataProviderProps) {
  const { getPConnect } = props;
  const pConn = getPConnect();

  const [timelineData, setTimelineData] = useState<TimelineEvent[]>([]);
  const [caseID, setCaseID] = useState<string>('');
  const [sortBy, setSortBy] = useState('Oldest First');
  const contextValue = useMemo(() => ({
    timelineData,
    sortBy,
    setSortBy,
  }), [timelineData, sortBy]);
  useEffect(() => {
    const caseProp = (window as any).PCore.getConstants().CASE_INFO.CASE_INFO_ID;
    const rawCaseID = pConn.getValue(caseProp, '');
    if (typeof rawCaseID === 'string') {
        setCaseID(rawCaseID.split(' ').pop() || '');
    }
  }, [pConn]);

  const loadTimelineData = useCallback(() => {
    const dataViewName = 'D_TimeLineByCaseIDList';
    const context = pConn.getContextName();

    if (caseID) {
      const payload = {
        // checks D_TimelineEvents for the CaseId and gets the events
        dataViewParameters: { CaseID: caseID }
      };
      (window as any).PCore.getDataApiUtils()
        .getData(dataViewName, payload, context)
        .then((response: any) => {

          if (response?.data?.data && Array.isArray(response.data.data)) {
            setTimelineData(response.data.data);
          } else {
            setTimelineData([]);
            console.warn('Timeline data not found or not in the expected array format:', response);
          }
        })
        .catch((error: any) => {
          console.error(`Error fetching data from ${dataViewName}:`, error);
        });
    }
  }, [caseID, pConn]); // Dependencies


  useEffect(() => {
    if (caseID) {
      loadTimelineData();
    }
  }, [caseID, loadTimelineData]);

  return (
        <DataContext.Provider value={contextValue}>
        <StyledBsExtensionsCustomTimelineWrapper>
            <TimeLinePage />
          </StyledBsExtensionsCustomTimelineWrapper>
        </DataContext.Provider>
        );
}

export default withConfiguration(TimelineDataProvider);
