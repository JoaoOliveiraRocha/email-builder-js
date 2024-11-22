import { z } from 'zod';

import { COLOR_SCHEMA } from '../../../../../document-core/src/utils';

const FONT_FAMILY_SCHEMA = z
  .enum([
    'MODERN_SANS',
    'BOOK_SANS',
    'ORGANIC_SANS',
    'GEOMETRIC_SANS',
    'HEAVY_SANS',
    'ROUNDED_SANS',
    'MODERN_SERIF',
    'BOOK_SERIF',
    'MONOSPACE',
  ])
  .nullable()
  .optional();

const EmailLayoutPropsSchema = z.object({
  backdropColor: COLOR_SCHEMA,
  borderColor: COLOR_SCHEMA,
  borderRadius: z.number().optional().nullable(),
  canvasColor: COLOR_SCHEMA,
  childrenIds: z.array(z.string()).optional().nullable(),
  fontFamily: FONT_FAMILY_SCHEMA,
  maxWidth: z.union([z.string(), z.number()]).optional().nullable(),
  textColor: COLOR_SCHEMA
});

export default EmailLayoutPropsSchema;

export type EmailLayoutProps = z.infer<typeof EmailLayoutPropsSchema>;
