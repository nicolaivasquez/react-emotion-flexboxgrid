import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import config, { DIMENSION_NAMES } from '../config';

const Grid = styled('div')`
  margin-right: auto;
  margin-left: auto;
  ${(gridProps) => {
    const { outerMargin, container, media } = config(gridProps);
    if (gridProps.fluid) {
      return css`
        padding-right: ${outerMargin}rem;
        padding-left: ${outerMargin}rem;
      `;
    }
    const dimensions = DIMENSION_NAMES.map(
      (t) =>
        container[t] &&
        media[t]`
          width: ${container[t]}rem;
        `
    );
    return css`
      ${dimensions};
    `;
  }};
`;

Grid.displayName = 'Grid';

Grid.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node
};

export default Grid;
