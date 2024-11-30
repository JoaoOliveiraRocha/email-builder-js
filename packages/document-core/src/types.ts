import { z } from 'zod';

export const PADDING_SCHEMA = z
  .object({
    top: z.number(),
    bottom: z.number(),
    right: z.number(),
    left: z.number(),
  })
  .optional()
  .nullable();

export const COLOR_SCHEMA = z
  .string()
  .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)
  .nullable()
  .optional();

  interface PropertyDefinition {
    type:
      | 'string'
      | 'number'
      | 'boolean'
      | 'enum'
      | 'color'
      | 'fontFamily'
      | 'fontSize'
      | 'fontWeight'
      | 'textAlign'
      | 'padding'
      | 'slider';
    label: string;
    defaultValue?: any;
    options?: any[]; // For 'enum' types
    min?: number;    // For 'number' or 'slider' types
    max?: number;
    step?: number;
    units?: string;  // For size-related properties
    iconLabel?: React.ReactNode; // For inputs with icons
  }

export const Properties: { [key: string]: PropertyDefinition } = {
    aspectRatio: {
      type: 'number',
      label: 'Aspect Ratio',
      defaultValue: 1.5,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    hasBorderRadius: {
      type: 'boolean',
      label: 'Border Radius',
      defaultValue: false,
    },
    src: {
      type: 'string',
      label: 'Source URL',
      defaultValue: '',
    },
    backgroundColor: {
      type: 'color',
      label: 'Background Color',
      defaultValue: '#ffffff',
    },
    borderColor: {
      type: 'color',
      label: 'Border Color',
      defaultValue: '#000000',
    },
    borderRadius: {
      type: 'slider',
      label: 'Border Radius',
      defaultValue: 0,
      min: 0,
      max: 48,
      step: 4,
      units: 'px',
      iconLabel: 'RoundedCornerOutlined',
    },
    fontFamily: {
      type: 'fontFamily',
      label: 'Font Family',
      defaultValue: 'Arial',
    },
    fontSize: {
      type: 'fontSize',
      label: 'Font Size',
      defaultValue: 14,
      units: 'px',
    },
    fontWeight: {
      type: 'fontWeight',
      label: 'Font Weight',
      defaultValue: 'normal',
      options: ['normal', 'bold', 'bolder', 'lighter'],
    },
    textAlign: {
      type: 'textAlign',
      label: 'Text Align',
      defaultValue: 'left',
      options: ['left', 'center', 'right', 'justify'],
    },
    padding: {
      type: 'padding',
      label: 'Padding',
      defaultValue: '0px',
    }, 
    // Add other properties as needed
  };
