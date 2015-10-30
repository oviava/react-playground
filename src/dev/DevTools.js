import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="H"
               changePositionKey="Q" defaultIsVisible={false}>
    <LogMonitor />
  </DockMonitor>
);

export default DevTools;
