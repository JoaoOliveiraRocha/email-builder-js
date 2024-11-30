import { z } from 'zod';

export type BaseZodDictionary = { [name: string]: z.AnyZodObject };
export type DocumentBlocksDictionary<T extends BaseZodDictionary> = {
  [K in keyof T]: {
    schema: T[K];
    Component: (props: z.infer<T[K]>) => JSX.Element;
  };
};

export type BlockConfiguration<T extends BaseZodDictionary> = {
  [TType in keyof T]: {
    type: TType;
    data: z.infer<T[TType]>;
  };
}[keyof T];

export class BlockNotFoundError extends Error {
  blockId: string;
  constructor(blockId: string) {
    super('Could not find a block with the given blockId');
    this.blockId = blockId;
  }
}

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
