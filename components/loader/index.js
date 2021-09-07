import React from 'react';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';

const Loader = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={500}
    viewBox="0 0 400 500"
    backgroundColor="#f1e4e4"
    foregroundColor="#c6c6ec"
    {...props}>
    <Rect x="20" y="10" rx="5" ry="5" width="300" height="100" />
    <Rect x="20" y="130" rx="5" ry="5" width="300" height="100" />
    <Rect x="20" y="250" rx="5" ry="5" width="300" height="100" />
    <Rect x="20" y="370" rx="5" ry="5" width="300" height="100" />
  </ContentLoader>
);

export default Loader;
