import React, { useMemo } from 'react';

// import { renderToStaticMarkup } from '@usewaypoint/email-builder';
import { renderToStaticMarkup } from '../../../../email-builder/src/index';
import { useDocument } from '../../documents/editor/EditorContext';

import HighlightedCodePanel from './helper/HighlightedCodePanel';

export default function HtmlPanel() {
  const document = useDocument();
  // console.log(document); // working
  const code = renderToStaticMarkup(document, { rootBlockId: 'root' });
  // console.log(code);
  return <HighlightedCodePanel type="html" value={code} />;
}
