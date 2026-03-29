/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import TimelineDataProvider from './index';

import historyData from './mock';

const meta: Meta<typeof TimelineDataProvider> = {
  title: 'TimelineDataProvider',
  component: TimelineDataProvider,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof TimelineDataProvider>;

if (!window.PCore) {
  window.PCore = {} as any;
}

export const BasePcpAComp1: Story = (args: any) => {

  window.PCore.getConstants = () => {
    return {
      CASE_INFO: {
        CASE_INFO_ID: 'case.ID'
      }
    } as any;
  };

  window.PCore.getLocaleUtils = () => {
    return {
      getLocaleValue: (value: any) => {
        return value;
      }
    } as any;
  };

  window.PCore.getDataApiUtils = () => {
    return {
      getData: () => {
        return new Promise(resolve => {
          resolve(historyData);
        });
      }
    } as any;
  };

  const props = {
    getPConnect: () => {
      return {
        getValue: (value: any) => {
          return value;
        },
        getContextName: () => {
          return 'app/primary_1';
        },
        getLocalizedValue: (value: any) => {
          return value;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      };
    }
  };

return (
    <>
      <TimelineDataProvider {...props} {...args} />
    </>
  );
};

BasePcpAComp1.args = {
  label: 'Case history',
};
