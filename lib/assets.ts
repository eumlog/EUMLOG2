import { DEFAULT_IMAGES, DEFAULT_TEXTS } from '../constants';
import { ImageAssets, TextAssets } from '../types';

let cachedCustomImages: Partial<ImageAssets> = {};
let cachedCustomTexts: Partial<TextAssets> = {};

export const triggerAssetUpdate = () => {
    window.dispatchEvent(new Event('assets-updated'));
};

export const refreshAssets = () => {
    try {
        const storedImages = localStorage.getItem('EUM_CUSTOM_IMAGES');
        if (storedImages) {
            const parsed = JSON.parse(storedImages);
            if (parsed && typeof parsed === 'object') {
                cachedCustomImages = { ...parsed };
            }
        }
        const storedTexts = localStorage.getItem('EUM_CUSTOM_TEXTS');
        if (storedTexts) {
            const parsed = JSON.parse(storedTexts);
            if (parsed && typeof parsed === 'object') {
                cachedCustomTexts = { ...parsed };
            }
        }
        triggerAssetUpdate();
    } catch (e) {
        cachedCustomImages = {};
        cachedCustomTexts = {};
    }
};

// Initialize
refreshAssets();

export const IMAGES = new Proxy(DEFAULT_IMAGES, {
    get: (target, prop) => {
        if (typeof prop === 'string') {
            const key = prop as keyof ImageAssets;
            const customValue = cachedCustomImages[key];
            if (customValue && typeof customValue === 'string' && customValue.trim() !== '') {
                return customValue;
            }
            return target[key];
        }
        return undefined;
    }
});

export const TEXTS = new Proxy(DEFAULT_TEXTS, {
    get: (target, prop) => {
        if (typeof prop === 'string') {
            const key = prop as keyof TextAssets;
            const customValue = cachedCustomTexts[key];
            if (customValue && typeof customValue === 'string' && customValue.trim() !== '') {
                return customValue;
            }
            return target[key];
        }
        return undefined;
    }
});

export const getImageKeys = () => Object.keys(DEFAULT_IMAGES) as Array<keyof ImageAssets>;
export const getTextKeys = () => Object.keys(DEFAULT_TEXTS) as Array<keyof TextAssets>;
