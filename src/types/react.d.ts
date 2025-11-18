import * as React from 'react';
import * as CSS from 'csstype';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
