import styled, { css } from 'styled-components';

export const StyledTaskList = styled.div(() => {
  return css`
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
  `;
});
