// @ts-nocheck
// index.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import LabbAiruxTemplate2222 from './index';
import {
  mockSingleTopic,
  mockMultipleTopics,
  mockEmptyTopics,
  mockNoPlan,
  mockWithMultiplePlans, // ✅ NEW
} from './mock';

const meta: Meta<typeof LabbAiruxTemplate2222> = {
  title: 'LabbAiruxTemplate2222',
  component: LabbAiruxTemplate2222,
  excludeStories: /.*Data$/,
  parameters: {
    type: 'Template',
  },
};

export default meta;
type Story = StoryObj<typeof LabbAiruxTemplate2222>;

const buildPConnect = (mockData: object) => ({
  getPConnect: () => ({
    getDataObject: () => mockData,
    getCaseInfo: () => mockData,
  }),
});

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

export const SingleTopic: Story = {
  args: buildPConnect(mockSingleTopic),
  name: 'Single Topic',
};

export const MultipleTopics: Story = {
  args: buildPConnect(mockMultipleTopics),
  name: 'Multiple Topics (tab switching)',
};

// ✅ NEW — this is the important one for your new UI
export const MultiplePlans: Story = {
  args: buildPConnect(mockWithMultiplePlans),
  name: 'Multiple Plans (plan → topic tabs)',
};

export const EmptyTopics: Story = {
  args: buildPConnect(mockEmptyTopics),
  name: 'Empty Topics (no tabs)',
};

export const NoPlan: Story = {
  args: buildPConnect(mockNoPlan),
  name: 'No CurrentPlan (graceful empty state)',
};
