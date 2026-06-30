/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  techTags: string[];
  description: string;
  features: string[];
  mockDesktopCode?: string; // Content for interactive demo
  mockMobileView?: string;   // Preview details
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ClientType {
  id: string;
  label: string;
  iconName: string;
  description: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CounterItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
