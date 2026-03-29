// @ts-nocheck
import { useState, useMemo } from 'react';
import { StyledTaskList } from './styles';
import { ChevronRight } from 'lucide-react';

// ---------------------------------------------------------------------------
// Constants and helpers
// ---------------------------------------------------------------------------
const DETAIL_FIELDS: string[] = [
  'ConfidenceScore',
  'RelevantIssueTextSegmentConfidence',
  'RelevantIssueTextSegmentCorrect',
  'RelevantIssueTextSegment',
  'RelevantIssueTextSegmentRelevancy',
  'CategoryName',
];

const SKIP_KEYS = new Set([
  'classID',
  'pxObjClass',
  'CategoryName',
]);

const FIELD_LABELS: Record<string, string> = {
  ConfidenceScore: 'Confidence Score',
  RelevantIssueTextSegmentConfidence: 'Relevant Issue Text Segment Confidence',
  RelevantIssueTextSegmentCorrect: 'Relevant Issue Text Segment Correct',
  RelevantIssueTextSegment: 'Relevant Issue Text Segment',
  RelevantIssueTextSegmentRelevancy: 'Relevant Issue Text Segment Relevancy',
  CategoryName: 'Category Name',
  Conclusion: 'Conclusion',
  Summary: 'Summary',
  Findings: 'Findings',
  AnalysisAndReasoning: 'Analysis and Reasoning',
  AnalysisAndReasoningManual: 'Analysis and Reasoning (Manual)',
  AnalysisAndReasoningReviewStatus: 'Review Status',
  Recommendations: 'Recommendations',
};

const toLabel = (key: string) =>
  FIELD_LABELS[key] ?? key.replace(/([A-Z])/g, ' $1').trim();

// ---------------------------------------------------------------------------
// CollapsibleField
// ---------------------------------------------------------------------------
const CollapsibleField = ({ label, value, defaultOpen = false }: any) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const displayValue =
    value && String(value).trim() !== '' ? (
      value
    ) : (
      <span className="no-data">Pending research...</span>
    );

  return (
    <div className="accordion-item">
      <div
        className={`accordion-header ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <span className="accordion-icon">
          <ChevronRight />
        </span>
      </div>
      {isOpen && <div className="accordion-body">{displayValue}</div>}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Render plain object fields
// ---------------------------------------------------------------------------
const ObjectFields = ({ obj }: { obj: Record<string, any> }) => {
  if (!obj) return null;
  return (
    <>
      {Object.entries(obj)
        .filter(([key, val]) => !SKIP_KEYS.has(key) && typeof val !== 'object')
        .map(([key, val]) => (
          <CollapsibleField key={key} label={toLabel(key)} value={String(val ?? '––')} />
        ))}
    </>
  );
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function LabbAiruxTemplate2222(props: any) {
  const { getPConnect } = props;
  const dataObject = getPConnect().getDataObject();
  const caseContent = dataObject.caseInfo.content;

  // State: track which plan accordion is open
  const [openPlanIndex, setOpenPlanIndex] = useState<number | null>(null);

  // State: track active topic tab per plan
  const [activeTopicTabs, setActiveTopicTabs] = useState<Record<number, number>>({});

  // Gather plans: always include CurrentPlan first
  const plans = useMemo(() => {
    const arr: any[] = [];
    if (caseContent?.CurrentPlan)
      arr.push({ id: 'current-plan', name: 'Current Plan', plan: caseContent.CurrentPlan });
    if (Array.isArray(caseContent?.Plans)) {
      caseContent.Plans.forEach((p: any, i: number) => arr.push({ id: `plan-${i}`, name: `Plan ${i + 1}`, plan: p }));
    }
    return arr;
  }, [caseContent]);

  const togglePlan = (index: number) => {
    setOpenPlanIndex(openPlanIndex === index ? null : index);
  };

  const getTopicsForPlan = (plan: any) => {
    const topics: any[] = [];
    if (!plan) return topics;
    if (plan.IssueTopics) {
      plan.IssueTopics.forEach((t: any, i: number) => {
        topics.push({ id: `${plan.id}-${i}`, name: t.CategoryName || `Topic ${i + 1}`, topic: t });
      });
    }
    return topics;
  };

  return (
    <StyledTaskList>
      {plans.length === 0 && <div className="no-data">No plans available.</div>}

      {plans.map(({ id, name, plan }, planIndex) => {
        const isOpen = openPlanIndex === planIndex;
        const topics = getTopicsForPlan(plan);
        const activeTabIndex = activeTopicTabs[planIndex] ?? 0;
        const activeTopic = topics[activeTabIndex]?.topic;

        // Top-level scalar fields
        const detailRows = activeTopic
          ? DETAIL_FIELDS.filter((k) => activeTopic[k] !== undefined || true)
          : [];

        // Nested objects
        const nestedSections = activeTopic
          ? Object.entries(activeTopic).filter(
              ([key, val]) =>
                !SKIP_KEYS.has(key) &&
                val !== null &&
                typeof val === 'object' &&
                !Array.isArray(val)
            )
          : [];

        return (
          <div key={id} className="plan-accordion">
            {/* Plan header */}
            <div
              className={`plan-header ${isOpen ? 'active' : ''}`}
              onClick={() => togglePlan(planIndex)}
            >
              <span>{name}</span>
              <span className="accordion-icon">
                <ChevronRight />
              </span>
            </div>

            {/* Plan content */}
            {isOpen && (
              <div className="plan-content">
                {/* Vertical topic tabs */}
                <div className="tab-list">
                  {topics.map((topic, index) => (
                    <div
                      key={topic.id}
                      className={`tab-item ${activeTabIndex === index ? 'active' : ''}`}
                      onClick={() =>
                        setActiveTopicTabs({ ...activeTopicTabs, [planIndex]: index })
                      }
                    >
                      {topic.name}
                    </div>
                  ))}
                </div>

                {/* Topic content */}
                <div className="tab-content">
                  {activeTopic ? (
                    <>
                      {/* Flat detail rows */}
                      {detailRows.length > 0 && (
                        <div className="details-container">
                          {detailRows.map((key) => (
                            <div key={key} className="detail-row">
                              <span className="detail-label">{toLabel(key)}:</span>
                              <span className="detail-value">
                                {activeTopic[key] ?? '––'}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Nested object sections */}
                      {nestedSections.map(([sectionKey, sectionVal]) => (
                        <div key={sectionKey}>
                          <div className="research-section-title">{toLabel(sectionKey)}</div>
                          <div className="research-section">
                            <ObjectFields obj={sectionVal as Record<string, any>} />
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="no-data">No topic data found.</div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </StyledTaskList>
  );
}
