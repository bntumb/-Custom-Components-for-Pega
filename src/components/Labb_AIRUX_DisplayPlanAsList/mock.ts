// @ts-nocheck
// mock.ts — data for LabbAiruxTemplate2222 Storybook stories

export const mockSingleTopic = {
  caseInfo: {
    content: {
      CurrentPlan: {
        classID: 'AIR-Data-Plan',
        IssueTopics: [
          {
            classID: 'AIR-Data-Topic',
            CategoryName: 'Employee Behavior',
            Research: {
              classID: 'AIR-Data-Research',
              Conclusion: 'Substantiated',
              Summary: 'Customer complaint verified via CCTV review.',
              Findings: 'Staff member confirmed to have raised voice.',
              AnalysisAndReasoning: 'Breach of conduct policy section 4.2.',
              AnalysisAndReasoningManual: '',
              AnalysisAndReasoningReviewStatus: '',
              Recommendations: 'Formal written warning issued.',
            },
          },
        ],
      },
    },
  },
};

export const mockMultipleTopics = {
  caseInfo: {
    content: {
      CurrentPlan: {
        classID: 'AIR-Data-Plan',
        IssueTopics: [
          {
            classID: 'AIR-Data-Topic',
            CategoryName: 'Employee Behavior',
            Research: {
              classID: 'AIR-Data-Research',
              Conclusion: 'Substantiated',
              Summary: 'Confirmed by team leader.',
              Findings: 'Pattern of behavior noted.',
              AnalysisAndReasoning: 'Policy breach confirmed.',
              AnalysisAndReasoningManual: '',
              AnalysisAndReasoningReviewStatus: '',
              Recommendations: 'Mandatory retraining.',
            },
          },
          {
            classID: 'AIR-Data-Topic',
            CategoryName: 'Wait Times',
            Research: {
              classID: 'AIR-Data-Research',
              Conclusion: 'Partially Substantiated',
              Summary: 'Queue records show 28 minutes, not 40.',
              Findings: 'System logs reviewed.',
              AnalysisAndReasoning: 'Wait exceeded target but below complaint threshold.',
              AnalysisAndReasoningManual: '',
              AnalysisAndReasoningReviewStatus: '',
              Recommendations: 'Process review recommended.',
            },
          },
        ],
      },
    },
  },
};

// ✅ NEW: Multiple Plans (for Option B UI)
export const mockWithMultiplePlans = {
  caseInfo: {
    content: {
      CurrentPlan: {
        classID: 'AIR-Data-Plan',
        IssueTopics: [
          {
            classID: 'AIR-Data-Topic',
            CategoryName: 'Employee Behavior',
            ConfidenceScore: 0.91,
            Research: {
              classID: 'AIR-Data-Research',
              Conclusion: 'Substantiated',
              Summary: 'Initial complaint confirmed.',
              Findings: 'Witness statements align.',
              AnalysisAndReasoning: 'Clear breach of policy.',
              AnalysisAndReasoningManual: '',
              AnalysisAndReasoningReviewStatus: '',
              Recommendations: 'Written warning.',
            },
          },
        ],
      },

      Plans: [
        {
          classID: 'AIR-Data-Plan',
          IssueTopics: [
            {
              classID: 'AIR-Data-Topic',
              CategoryName: 'Wait Times',
              ConfidenceScore: 0.76,
              Research: {
                classID: 'AIR-Data-Research',
                Conclusion: 'Partially Substantiated',
                Summary: 'Delays confirmed but overstated.',
                Findings: 'Logs show moderate delay.',
                AnalysisAndReasoning: 'Below escalation threshold.',
                AnalysisAndReasoningManual: '',
                AnalysisAndReasoningReviewStatus: '',
                Recommendations: 'Monitor queue times.',
              },
            },
          ],
        },
        {
          classID: 'AIR-Data-Plan',
          IssueTopics: [
            {
              classID: 'AIR-Data-Topic',
              CategoryName: 'Billing Error',
              ConfidenceScore: 0.98,
              Research: {
                classID: 'AIR-Data-Research',
                Conclusion: 'Substantiated',
                Summary: 'Duplicate charge confirmed.',
                Findings: 'Refund processed.',
                AnalysisAndReasoning: 'System defect identified.',
                AnalysisAndReasoningManual: '',
                AnalysisAndReasoningReviewStatus: '',
                Recommendations: 'Fix payment gateway bug.',
              },
            },
            {
              classID: 'AIR-Data-Topic',
              CategoryName: 'Customer Service',
              ConfidenceScore: 0.84,
              Research: {
                classID: 'AIR-Data-Research',
                Conclusion: 'Not Substantiated',
                Summary: 'No evidence of misconduct.',
                Findings: 'Call recordings reviewed.',
                AnalysisAndReasoning: 'Agent followed protocol.',
                AnalysisAndReasoningManual: '',
                AnalysisAndReasoningReviewStatus: '',
                Recommendations: 'No action required.',
              },
            },
          ],
        },
      ],
    },
  },
};

// Empty array
export const mockEmptyTopics = {
  caseInfo: {
    content: {
      CurrentPlan: {
        classID: 'AIR-Data-Plan',
        IssueTopics: [],
      },
    },
  },
};

// No CurrentPlan
export const mockNoPlan = {
  caseInfo: {
    content: {},
  },
};
