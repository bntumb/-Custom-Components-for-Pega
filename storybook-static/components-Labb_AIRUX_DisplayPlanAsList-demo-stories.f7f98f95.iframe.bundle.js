/*! For license information please see components-Labb_AIRUX_DisplayPlanAsList-demo-stories.f7f98f95.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgetdatacomponent=self.webpackChunkgetdatacomponent||[]).push([[90937],{"./src/components/Labb_AIRUX_DisplayPlanAsList/demo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmptyTopics:()=>EmptyTopics,MultiplePlans:()=>MultiplePlans,MultipleTopics:()=>MultipleTopics,NoPlan:()=>NoPlan,SingleTopic:()=>SingleTopic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>demo_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledTaskList=styled_components_browser_esm.ZP.div(()=>styled_components_browser_esm.iv`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    .plan-accordion {
      border: 1px solid #ddd;
      border-radius: 6px;
      overflow: hidden;
    }

    .plan-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      cursor: pointer;
      font-weight: 600;
      background: #f5f5f5;
    }

    .plan-header.active {
      background: #eaeaea;
    }

    .accordion-icon {
      transition: transform 0.2s ease;
    }

    .plan-header.active .accordion-icon {
      transform: rotate(90deg);
    }

    .plan-content {
      display: flex;
      padding: 16px;
      flex-direction: row; // horizontal: topic list + content
    }

    .tab-list {
      display: flex;
      flex-direction: column; // vertical topic list
      flex: 0 0 180px;
      min-width: 140px;
      background: #fff;
    }

    .tab-item {
      padding: 10px 14px;
      cursor: pointer;
      font-weight: 500;
      color: #333;
      transition: background 0.15s, font-weight 0.15s;
      user-select: none;
    }

    .tab-item:hover {
      background: #f0f0f0;
    }

    .tab-item.active {
      background: #fafafa;
      font-weight: 600;
      border-left: 3px solid #d14000;
    }

    .tab-content {
      flex: 1;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .details-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
    }

    .research-section-title {
      font-weight: 600;
      margin-top: 12px;
    }

    .research-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .accordion-item {
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: hidden;
    }

    .accordion-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      padding: 10px 12px;
      font-weight: 500;
      background: #f7f7f7;
    }

    .accordion-header.active .accordion-icon {
      transform: rotate(90deg);
    }

    .accordion-body {
      padding: 10px 12px;
      white-space: pre-wrap;
    }

    @media screen and (max-width: 600px) {
      .plan-content {
        flex-direction: column;
      }

      .tab-list {
        flex-direction: row;
        overflow-x: auto;
        min-width: 100%;
        border-right: none;
        border-bottom: 1px solid #ddd;
      }

      .tab-item {
        flex: none;
        border-left: none;
        border-bottom: 3px solid transparent;
        padding: 8px 12px;
      }

      .tab-item.active {
        border-bottom-color: #d14000;
      }

      .tab-content {
        padding: 12px 0;
      }
    }
  `);const ChevronRight=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DETAIL_FIELDS=["ConfidenceScore","RelevantIssueTextSegmentConfidence","RelevantIssueTextSegmentCorrect","RelevantIssueTextSegment","RelevantIssueTextSegmentRelevancy","CategoryName"],SKIP_KEYS=new Set(["classID","pxObjClass","CategoryName"]),FIELD_LABELS={ConfidenceScore:"Confidence Score",RelevantIssueTextSegmentConfidence:"Relevant Issue Text Segment Confidence",RelevantIssueTextSegmentCorrect:"Relevant Issue Text Segment Correct",RelevantIssueTextSegment:"Relevant Issue Text Segment",RelevantIssueTextSegmentRelevancy:"Relevant Issue Text Segment Relevancy",CategoryName:"Category Name",Conclusion:"Conclusion",Summary:"Summary",Findings:"Findings",AnalysisAndReasoning:"Analysis and Reasoning",AnalysisAndReasoningManual:"Analysis and Reasoning (Manual)",AnalysisAndReasoningReviewStatus:"Review Status",Recommendations:"Recommendations"},toLabel=key=>FIELD_LABELS[key]??key.replace(/([A-Z])/g," $1").trim(),CollapsibleField=({label,value,defaultOpen=!1})=>{const[isOpen,setIsOpen]=(0,react.useState)(defaultOpen),displayValue=value&&""!==String(value).trim()?value:(0,jsx_runtime.jsx)("span",{className:"no-data",children:"Pending research..."});return(0,jsx_runtime.jsxs)("div",{className:"accordion-item",children:[(0,jsx_runtime.jsxs)("div",{className:"accordion-header "+(isOpen?"active":""),onClick:()=>setIsOpen(!isOpen),children:[(0,jsx_runtime.jsx)("span",{children:label}),(0,jsx_runtime.jsx)("span",{className:"accordion-icon",children:(0,jsx_runtime.jsx)(ChevronRight,{})})]}),isOpen&&(0,jsx_runtime.jsx)("div",{className:"accordion-body",children:displayValue})]})};CollapsibleField.displayName="CollapsibleField";const ObjectFields=({obj})=>obj?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object.entries(obj).filter(([key,val])=>!SKIP_KEYS.has(key)&&"object"!=typeof val).map(([key,val])=>(0,jsx_runtime.jsx)(CollapsibleField,{label:toLabel(key),value:String(val??"––")},key))}):null;function LabbAiruxTemplate2222(props){const{getPConnect}=props,caseContent=getPConnect().getDataObject().caseInfo.content,[openPlanIndex,setOpenPlanIndex]=(0,react.useState)(null),[activeTopicTabs,setActiveTopicTabs]=(0,react.useState)({}),plans=(0,react.useMemo)(()=>{const arr=[];return caseContent?.CurrentPlan&&arr.push({id:"current-plan",name:"Current Plan",plan:caseContent.CurrentPlan}),Array.isArray(caseContent?.Plans)&&caseContent.Plans.forEach((p,i)=>arr.push({id:`plan-${i}`,name:`Plan ${i+1}`,plan:p})),arr},[caseContent]);return(0,jsx_runtime.jsxs)(StyledTaskList,{children:[0===plans.length&&(0,jsx_runtime.jsx)("div",{className:"no-data",children:"No plans available."}),plans.map(({id,name,plan},planIndex)=>{const isOpen=openPlanIndex===planIndex,topics=(plan=>{const topics=[];return plan?(plan.IssueTopics&&plan.IssueTopics.forEach((t,i)=>{topics.push({id:`${plan.id}-${i}`,name:t.CategoryName||`Topic ${i+1}`,topic:t})}),topics):topics})(plan),activeTabIndex=activeTopicTabs[planIndex]??0,activeTopic=topics[activeTabIndex]?.topic,detailRows=activeTopic?DETAIL_FIELDS.filter(k=>void 0!==activeTopic[k]||!0):[],nestedSections=activeTopic?Object.entries(activeTopic).filter(([key,val])=>!SKIP_KEYS.has(key)&&null!==val&&"object"==typeof val&&!Array.isArray(val)):[];return(0,jsx_runtime.jsxs)("div",{className:"plan-accordion",children:[(0,jsx_runtime.jsxs)("div",{className:"plan-header "+(isOpen?"active":""),onClick:()=>{var index;setOpenPlanIndex(openPlanIndex===(index=planIndex)?null:index)},children:[(0,jsx_runtime.jsx)("span",{children:name}),(0,jsx_runtime.jsx)("span",{className:"accordion-icon",children:(0,jsx_runtime.jsx)(ChevronRight,{})})]}),isOpen&&(0,jsx_runtime.jsxs)("div",{className:"plan-content",children:[(0,jsx_runtime.jsx)("div",{className:"tab-list",children:topics.map((topic,index)=>(0,jsx_runtime.jsx)("div",{className:"tab-item "+(activeTabIndex===index?"active":""),onClick:()=>setActiveTopicTabs({...activeTopicTabs,[planIndex]:index}),children:topic.name},topic.id))}),(0,jsx_runtime.jsx)("div",{className:"tab-content",children:activeTopic?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[detailRows.length>0&&(0,jsx_runtime.jsx)("div",{className:"details-container",children:detailRows.map(key=>(0,jsx_runtime.jsxs)("div",{className:"detail-row",children:[(0,jsx_runtime.jsxs)("span",{className:"detail-label",children:[toLabel(key),":"]}),(0,jsx_runtime.jsx)("span",{className:"detail-value",children:activeTopic[key]??"––"})]},key))}),nestedSections.map(([sectionKey,sectionVal])=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"research-section-title",children:toLabel(sectionKey)}),(0,jsx_runtime.jsx)("div",{className:"research-section",children:(0,jsx_runtime.jsx)(ObjectFields,{obj:sectionVal})})]},sectionKey))]}):(0,jsx_runtime.jsx)("div",{className:"no-data",children:"No topic data found."})})]})]},id)})]})}LabbAiruxTemplate2222.displayName="LabbAiruxTemplate2222";try{LabbAIRUXDisplayPlanAsList.displayName="LabbAIRUXDisplayPlanAsList",LabbAIRUXDisplayPlanAsList.__docgenInfo={description:"",displayName:"LabbAIRUXDisplayPlanAsList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Labb_AIRUX_DisplayPlanAsList/index.tsx#LabbAIRUXDisplayPlanAsList"]={docgenInfo:LabbAIRUXDisplayPlanAsList.__docgenInfo,name:"LabbAIRUXDisplayPlanAsList",path:"src/components/Labb_AIRUX_DisplayPlanAsList/index.tsx#LabbAIRUXDisplayPlanAsList"})}catch(__react_docgen_typescript_loader_error){}const demo_stories={title:"LabbAiruxTemplate2222",component:LabbAiruxTemplate2222,excludeStories:/.*Data$/,parameters:{type:"Template"}},buildPConnect=mockData=>({getPConnect:()=>({getDataObject:()=>mockData,getCaseInfo:()=>mockData})}),SingleTopic={args:buildPConnect({caseInfo:{content:{CurrentPlan:{classID:"AIR-Data-Plan",IssueTopics:[{classID:"AIR-Data-Topic",CategoryName:"Employee Behavior",Research:{classID:"AIR-Data-Research",Conclusion:"Substantiated",Summary:"Customer complaint verified via CCTV review.",Findings:"Staff member confirmed to have raised voice.",AnalysisAndReasoning:"Breach of conduct policy section 4.2.",AnalysisAndReasoningManual:"",AnalysisAndReasoningReviewStatus:"",Recommendations:"Formal written warning issued."}}]}}}}),name:"Single Topic"},MultipleTopics={args:buildPConnect({caseInfo:{content:{CurrentPlan:{classID:"AIR-Data-Plan",IssueTopics:[{classID:"AIR-Data-Topic",CategoryName:"Employee Behavior",Research:{classID:"AIR-Data-Research",Conclusion:"Substantiated",Summary:"Confirmed by team leader.",Findings:"Pattern of behavior noted.",AnalysisAndReasoning:"Policy breach confirmed.",AnalysisAndReasoningManual:"",AnalysisAndReasoningReviewStatus:"",Recommendations:"Mandatory retraining."}},{classID:"AIR-Data-Topic",CategoryName:"Wait Times",Research:{classID:"AIR-Data-Research",Conclusion:"Partially Substantiated",Summary:"Queue records show 28 minutes, not 40.",Findings:"System logs reviewed.",AnalysisAndReasoning:"Wait exceeded target but below complaint threshold.",AnalysisAndReasoningManual:"",AnalysisAndReasoningReviewStatus:"",Recommendations:"Process review recommended."}}]}}}}),name:"Multiple Topics (tab switching)"},MultiplePlans={args:buildPConnect({caseInfo:{content:{CurrentPlan:{classID:"AIR-Data-Plan",IssueTopics:[{classID:"AIR-Data-Topic",CategoryName:"Employee Behavior",ConfidenceScore:.91,Research:{classID:"AIR-Data-Research",Conclusion:"Substantiated",Summary:"Initial complaint confirmed.",Findings:"Witness statements align.",AnalysisAndReasoning:"Clear breach of policy.",AnalysisAndReasoningManual:"",AnalysisAndReasoningReviewStatus:"",Recommendations:"Written warning."}}]},Plans:[{classID:"AIR-Data-Plan",IssueTopics:[{classID:"AIR-Data-Topic",CategoryName:"Wait Times",ConfidenceScore:.76,Research:{classID:"AIR-Data-Research",Conclusion:"Partially Substantiated",Summary:"Delays confirmed but overstated.",Findings:"Logs show moderate delay.",AnalysisAndReasoning:"Below escalation threshold.",AnalysisAndReasoningManual:"",AnalysisAndReasoningReviewStatus:"",Recommendations:"Monitor queue times."}}]},{classID:"AIR-Data-Plan",IssueTopics:[{classID:"AIR-Data-Topic",CategoryName:"Billing Error",ConfidenceScore:.98,Research:{classID:"AIR-Data-Research",Conclusion:"Substantiated",Summary:"Duplicate charge confirmed.",Findings:"Refund processed.",AnalysisAndReasoning:"System defect identified.",AnalysisAndReasoningManual:"",AnalysisAndReasoningReviewStatus:"",Recommendations:"Fix payment gateway bug."}},{classID:"AIR-Data-Topic",CategoryName:"Customer Service",ConfidenceScore:.84,Research:{classID:"AIR-Data-Research",Conclusion:"Not Substantiated",Summary:"No evidence of misconduct.",Findings:"Call recordings reviewed.",AnalysisAndReasoning:"Agent followed protocol.",AnalysisAndReasoningManual:"",AnalysisAndReasoningReviewStatus:"",Recommendations:"No action required."}}]}]}}}),name:"Multiple Plans (plan → topic tabs)"},EmptyTopics={args:buildPConnect({caseInfo:{content:{CurrentPlan:{classID:"AIR-Data-Plan",IssueTopics:[]}}}}),name:"Empty Topics (no tabs)"},NoPlan={args:buildPConnect({caseInfo:{content:{}}}),name:"No CurrentPlan (graceful empty state)"};SingleTopic.parameters={...SingleTopic.parameters,docs:{...SingleTopic.parameters?.docs,source:{originalSource:"{\n  args: buildPConnect(mockSingleTopic),\n  name: 'Single Topic'\n}",...SingleTopic.parameters?.docs?.source}}},MultipleTopics.parameters={...MultipleTopics.parameters,docs:{...MultipleTopics.parameters?.docs,source:{originalSource:"{\n  args: buildPConnect(mockMultipleTopics),\n  name: 'Multiple Topics (tab switching)'\n}",...MultipleTopics.parameters?.docs?.source}}},MultiplePlans.parameters={...MultiplePlans.parameters,docs:{...MultiplePlans.parameters?.docs,source:{originalSource:"{\n  args: buildPConnect(mockWithMultiplePlans),\n  name: 'Multiple Plans (plan → topic tabs)'\n}",...MultiplePlans.parameters?.docs?.source}}},EmptyTopics.parameters={...EmptyTopics.parameters,docs:{...EmptyTopics.parameters?.docs,source:{originalSource:"{\n  args: buildPConnect(mockEmptyTopics),\n  name: 'Empty Topics (no tabs)'\n}",...EmptyTopics.parameters?.docs?.source}}},NoPlan.parameters={...NoPlan.parameters,docs:{...NoPlan.parameters?.docs,source:{originalSource:"{\n  args: buildPConnect(mockNoPlan),\n  name: 'No CurrentPlan (graceful empty state)'\n}",...NoPlan.parameters?.docs?.source}}};const __namedExportsOrder=["SingleTopic","MultipleTopics","MultiplePlans","EmptyTopics","NoPlan"]},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createLucideIcon});var react=__webpack_require__("./node_modules/react/index.js");const toPascalCase=string=>{const camelCase=(string=>string.replace(/^([A-Z])|[\s-_]+(\w)/g,(match,p1,p2)=>p2?p2.toUpperCase():p1.toLowerCase()))(string);return camelCase.charAt(0).toUpperCase()+camelCase.slice(1)},mergeClasses=(...classes)=>classes.filter((className,index,array)=>Boolean(className)&&""!==className.trim()&&array.indexOf(className)===index).join(" ").trim(),hasA11yProp=props=>{for(const prop in props)if(prop.startsWith("aria-")||"role"===prop||"title"===prop)return!0};var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)(({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...!children&&!hasA11yProp(rest)&&{"aria-hidden":"true"},...rest},[...iconNode.map(([tag,attrs])=>(0,react.createElement)(tag,attrs)),...Array.isArray(children)?children:[children]])),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)(({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=toPascalCase(iconName),string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${iconName}`,className),...props});var string});return Component.displayName=toPascalCase(iconName),Component}}}]);
//# sourceMappingURL=components-Labb_AIRUX_DisplayPlanAsList-demo-stories.f7f98f95.iframe.bundle.js.map