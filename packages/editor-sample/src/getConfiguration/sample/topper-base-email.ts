import { TEditorConfiguration } from '../../documents/editor/core';
import { WHITE } from '../../new-theme';
import { backgroundLevel2, textDefault, white } from '../../topper-theme';

const TOPPER_BASE_EMAIL: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: backgroundLevel2,
      canvasColor: WHITE,
      textColor:  textDefault,
      // fontFamily: fontF
      childrenIds: [],
    },
  },
};

export default TOPPER_BASE_EMAIL;
