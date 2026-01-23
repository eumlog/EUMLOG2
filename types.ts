import React from 'react';

export interface AssetMap {
  [key: string]: string;
}

export interface ImageAssets extends AssetMap {
  favicon: string;
  logo: string;
  ogImage: string;
  heroBackground: string;
  philosophy: string;
  systemFeatures: string;
  card1: string;
  card2: string;
  card3: string;
  processStep1: string;
  processStep2: string;
  processStep3: string;
  processStep4: string;
  processStep5: string;
  processStep6: string;
  processStep7: string;
  footerTexture: string;
}

export interface TextAssets extends AssetMap {
  siteTitle: string;
  siteDescription: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  imgKey: keyof ImageAssets;
}